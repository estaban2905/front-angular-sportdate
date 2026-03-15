/**
 * core/firebase/firebase.provider.ts
 *
 * Angular providers for Firebase App and Firestore.
 * Call provideFirebase() in app.config.ts to register the tokens.
 *
 * Usage:
 *   providers: [provideFirebase(), ...]
 *
 * Injection:
 *   private readonly db = inject(FIRESTORE);
 */

import { InjectionToken, makeEnvironmentProviders, EnvironmentProviders } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { initializeFirestore, Firestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const FIREBASE_APP = new InjectionToken<FirebaseApp>('FirebaseApp');
export const FIRESTORE = new InjectionToken<Firestore>('Firestore');
export const AUTH = new InjectionToken<Auth>('Auth');

/**
 * Root path for all app data in Firestore.
 * Structure: SPORTDATE (collection) → main (document) → <subcollections>
 *
 * Usage in repositories:
 *   collection(db, `${DB_ROOT}/profiles`)
 *   doc(db, `${DB_ROOT}/user_stats/me`)
 */
export const DB_ROOT = '';

export function provideFirebase(): EnvironmentProviders {
  const app = initializeApp(firebaseConfig);

  // initializeFirestore lets us configure:
  //  - experimentalAutoDetectLongPolling: falls back to long-polling when
  //    WebSocket connections are blocked (fixes "client is offline" in some envs)
  //  - persistentLocalCache: IndexedDB-backed offline cache with multi-tab support
  const db = initializeFirestore(
    app,
    {
      experimentalAutoDetectLongPolling: true,
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    },
    'sportdate-db',
  );

  const auth = getAuth(app);

  return makeEnvironmentProviders([
    { provide: FIREBASE_APP, useValue: app },
    { provide: FIRESTORE, useValue: db },
    { provide: AUTH, useValue: auth },
  ]);
}
