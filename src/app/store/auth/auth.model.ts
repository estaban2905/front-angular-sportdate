// store/auth/auth.model.ts

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthStateModel {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}
