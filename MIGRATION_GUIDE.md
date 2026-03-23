# Migración Firebase → HTTP (Guía Completa)

## ✅ Lo que se ha hecho

Tu app ha sido completamente migrada desde Firebase Auth y Firestore a servicios HTTP personalizados. Aquí está el resumen de cambios:

### 1. **Servicios de Autenticación HTTP**
- **Nuevo archivo:** `src/app/core/services/http-auth.service.ts`
  - Login/Register con email y contraseña
  - Manejo de tokens en localStorage
  - Mapping de errores HTTP a mensajes en español
  - Compatible con la estructura existente de `AuthUser`

- **Actualizado:** `src/app/core/services/auth.service.ts`
  - Ahora es un wrapper que delega a `HttpAuthService`
  - La interfaz pública se mantiene igual para compatibilidad

### 2. **Repositorios HTTP** 
Reemplazaron los repositorios Firestore con versiones HTTP:

| Anterior (Firestore) | Nuevo (HTTP) | Archivo |
|---|---|---|
| `FirestoreUserRepository` | `HttpUserRepository` | `src/app/core/repositories/http/http-user.repository.ts` |
| `FirestoreEventRepository` | `HttpEventRepository` | `src/app/core/repositories/http/http-event.repository.ts` |
| `FirestoreLeaderboardRepository` | `HttpLeaderboardRepository` | `src/app/core/repositories/http/http-leaderboard.repository.ts` |
| `FirestoreCommunityRepository` | `HttpCommunityRepository` | `src/app/core/repositories/http/http-community.repository.ts` |
| `FirestoreChatRepository` | `HttpChatRepository` | `src/app/core/repositories/http/http-chat.repository.ts` |
| `FirestoreDescubrirRepository` | `HttpDescubrirRepository` | `src/app/core/repositories/http/http-descubrir.repository.ts` |

### 3. **Servicios de Admin (Panel de Configuración)**
- **Nuevo archivo:** `src/app/core/services/http-admin.service.ts`
  - Reemplaza `FirestoreAdminService`
  - Provee CRUD genérico para colecciones

- **Nuevo archivo:** `src/app/core/services/http-seed.service.ts`
  - Reemplaza `FirestoreSeedService`
  - Seeding y restore de datos mock

### 4. **Configuración de la App**
- **Actualizado:** `src/app/app.config.ts`
  - Removido `provideFirebase()`
  - Todos los repositorios ahora usan implementaciones HTTP
  - Se mantiene la misma inyección de dependencias

### 5. **Variables de Entorno**
- **Actualizado:** `src/environments/environment.ts`
  ```typescript
  apiUrl: 'http://localhost:3000/api'
  ```
  
- **Actualizado:** `src/environments/environment.prod.ts`
  ```typescript
  apiUrl: 'https://api.youromain.com/api'
  ```
  
  ⚠️ **Actualiza estas URLs con tu backend real**

### 6. **Dependencies**
- **Removido:** `firebase` del `package.json`
- Ejecuta: `npm install` para actualizar node_modules

### 7. **Componentes Actualizados**
- `app.component.ts` - usa `HttpSeedService`
- `configuracion.component.ts` - usa `HttpSeedService`
- `configuracion/inicio/inicio.component.ts` - usa `HttpSeedService`
- `configuracion/coleccion/coleccion.component.ts` - usa `HttpAdminService` y `HttpSeedService`

---

## 🔧 Qué necesitas hacer en el Backend

Tu backend DEBE implementar estos endpoints:

### **Autenticación** (`/api/auth`)
```
POST   /auth/login              - Login con email/password
POST   /auth/register           - Registro con email/password/displayName
POST   /auth/logout             - Logout
PUT    /auth/profile            - Actualizar displayName
POST   /auth/password-reset     - Enviar email de reset
```

**Request/Response examples:**

```typescript
// POST /auth/login
Request:  { email: string, password: string }
Response: { user: AuthUser, token?: string }

// POST /auth/register
Request:  { email: string, password: string, displayName: string }
Response: { user: AuthUser, token?: string }

// PUT /auth/profile
Request:  { displayName: string }
Response: { user: AuthUser }
```

### **Usuarios** (`/api/users`)
```
GET    /users/stats            - UserStats del usuario actual
GET    /users/profiles         - Todas las Profile (para descubrir)
GET    /users/achievements     - Achievements del usuario actual
```

### **Eventos** (`/api/events`)
```
GET    /events                 - Todos los eventos
POST   /events                 - Crear evento
GET    /events/:id             - Evento por ID
PUT    /events/:id             - Actualizar evento
DELETE /events/:id             - Eliminar evento
POST   /events/:id/join        - Unirse a evento
POST   /events/:id/leave       - Abandonar evento
GET    /events/:id/attendances - Asistentes del evento
GET    /events/challenges      - Todos los challenges
```

### **Leaderboard** (`/api/leaderboard`)
```
GET    /leaderboard            - Leaderboard principal
GET    /leaderboard/teams      - Team entries
GET    /leaderboard/championships  - Championships
```

### **Chat** (`/api/chat`)
```
GET    /chat/conversations     - Todas las conversaciones
GET    /chat/conversations/:id/messages    - Mensajes de una conversación
POST   /chat/conversations/:id/messages    - Enviar mensaje
```

### **Comunidades** (`/api/communities`)
```
GET    /communities            - Todas las comunidades
GET    /communities/groups     - Todos los grupos
```

### **Descubrir** (`/api/descubrir`)
```
GET    /descubrir/retos        - Todos los retos
POST   /descubrir/retos        - Crear reto
PUT    /descubrir/retos/:id    - Actualizar reto
GET    /descubrir/resultados   - Todos los resultados
GET    /descubrir/calificaciones - Todas las calificaciones
POST   /descubrir/calificaciones - Crear calificación
GET    /descubrir/oponentes    - Todos los oponentes (profiles)
```

### **Admin** (`/api/admin`)
```
GET    /admin/collections/:name              - Documentos de una colección
POST   /admin/collections/:name              - Agregar documento
PUT    /admin/collections/:name/:id          - Actualizar documento
DELETE /admin/collections/:name/:id          - Eliminar documento
DELETE /admin/collections/:name              - Limpiar colección
```

### **Seed** (`/api/seed`)
```
POST   /seed/seed-if-empty     - Seed si está vacío (idempotent)
POST   /seed/reset-and-seed    - Limpiar y seed
POST   /seed/clear-all         - Limpiar sin seed
POST   /seed/restore-collection - Restaurar una colección específica
```

---

## 🔐 Autenticación mediante JWT

La app espera que tu backend:

1. **Devuelva un token JWT** en las respuestas de login/register
2. **Guarda el token** en `localStorage` bajo la key `auth_token`
3. **Incluye un interceptor HTTP** que añade el token en headers:
   ```typescript
   Authorization: Bearer {token}
   ```

**Nota:** El interceptor ya está configurado en `app.config.ts` (ver `authInterceptor`)

---

## 📝 Tipos de Datos Esperados

### AuthUser
```typescript
interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
```

### SportEvent
```typescript
interface SportEvent {
  id: string;
  title: string;
  description: string;
  // ... otros campos según tu estructura
}
```

Ver `src/app/core/models/` para todas las interfaces.

---

## 🚀 Pasos Siguientes

1. **Implementa los endpoints en tu backend** siguiendo la lista arriba
2. **Actualiza las URLs** en `environment.ts` y `environment.prod.ts`
3. **Configura CORS** en tu backend para permitir requests desde tu frontend
4. **Ejecuta** `npm install` y `npm start`
5. **Prueba** login, registro, y operaciones CRUD en el admin panel

---

## ⚠️ Archivos Obsoletos (Opcional limpiar)

Si quieres limpiar completamente las referencias a Firebase, puedes eliminar:
- `src/app/core/firebase/` (carpeta completa)
- `src/app/core/repositories/firestore/` (carpeta completa)
- `src/app/core/repositories/in-memory/` (si ya no lo usas)
- `src/app/core/services/firestore-admin.service.ts`
- `src/app/core/services/firestore-seed.service.ts`

**⚠️ NO elimines todavía** si planeas mantener un backup o migrar datos gradualmente.

---

## 🆘 Troubleshooting

### Error: "apiUrl is undefined"
→ Verifica que `environment.ts` tenga `apiUrl` configurado

### Error CORS
→ Configura CORS en tu backend:
```typescript
app.use(cors({
  origin: 'http://localhost:4200', // o tu frontend URL
  credentials: true
}));
```

### Token no se guarda
→ Verifica que localStorage esté habilitado en el navegador

### 401 Unauthorized
→ El token puede haber expirado. Implementa refresh token logic en tu backend.

---

## 📚 Referencias

- [Angular HttpClient](https://angular.io/api/common/http/HttpClient)
- [Angular Interceptors](https://angular.io/guide/http-intercept-requests-and-responses)
- [NGXS Store](https://www.ngxs.io/)

¡Done! Tu app está lista para usar tu propio backend. 🚀
