// store/auth/auth.actions.ts

import { AuthUser } from './auth.model';

export namespace AuthActions {
  export class Login {
    static readonly type = '[Auth] Login';
    constructor(public email: string, public password: string) {}
  }

  export class LoginSuccess {
    static readonly type = '[Auth] Login Success';
    constructor(public user: AuthUser) {}
  }

  export class LoginFailure {
    static readonly type = '[Auth] Login Failure';
    constructor(public error: string) {}
  }

  export class Register {
    static readonly type = '[Auth] Register';
    constructor(
      public email: string,
      public password: string,
      public displayName: string,
    ) {}
  }

  export class RegisterSuccess {
    static readonly type = '[Auth] Register Success';
    constructor(public user: AuthUser) {}
  }

  export class RegisterFailure {
    static readonly type = '[Auth] Register Failure';
    constructor(public error: string) {}
  }

  export class Logout {
    static readonly type = '[Auth] Logout';
  }

  export class LogoutSuccess {
    static readonly type = '[Auth] Logout Success';
  }

  /** Set user from onAuthStateChanged listener (called on boot). */
  export class SetUser {
    static readonly type = '[Auth] Set User';
    constructor(public user: AuthUser | null) {}
  }
}
