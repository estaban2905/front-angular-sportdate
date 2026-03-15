import {
  Action,
  Selector,
  State
} from "./chunk-I5U65RYG.js";
import {
  Injectable,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-GTOIWY6U.js";

// src/app/store/user/user.actions.ts
var UserActions;
(function(UserActions2) {
  class LoadUserStats {
    static type = "[User] Load User Stats";
  }
  UserActions2.LoadUserStats = LoadUserStats;
  class LoadUserStatsSuccess {
    stats;
    static type = "[User] Load User Stats Success";
    constructor(stats) {
      this.stats = stats;
    }
  }
  UserActions2.LoadUserStatsSuccess = LoadUserStatsSuccess;
  class LoadProfiles {
    static type = "[User] Load Profiles";
  }
  UserActions2.LoadProfiles = LoadProfiles;
  class LoadProfilesSuccess {
    profiles;
    static type = "[User] Load Profiles Success";
    constructor(profiles) {
      this.profiles = profiles;
    }
  }
  UserActions2.LoadProfilesSuccess = LoadProfilesSuccess;
  class LoadAchievements {
    static type = "[User] Load Achievements";
  }
  UserActions2.LoadAchievements = LoadAchievements;
  class LoadAchievementsSuccess {
    achievements;
    static type = "[User] Load Achievements Success";
    constructor(achievements) {
      this.achievements = achievements;
    }
  }
  UserActions2.LoadAchievementsSuccess = LoadAchievementsSuccess;
})(UserActions || (UserActions = {}));

// src/app/core/repositories/abstractions/user.repository.ts
var UserRepository = class {
};

// src/app/store/user/user.constants.ts
var USER_STATE_DEFAULTS = {
  userStats: null,
  profiles: [],
  achievements: [],
  loading: false
};

// src/app/store/user/user.state.ts
var UserState = class UserState2 {
  repo = inject(UserRepository);
  loadUserStats(ctx) {
    ctx.patchState({ loading: true });
    return this.repo.getUserStats().pipe(tap({
      next: (stats) => ctx.patchState({ userStats: stats, loading: false }),
      error: () => ctx.patchState({ loading: false })
    }));
  }
  loadProfiles(ctx) {
    return this.repo.getProfiles().pipe(tap({ next: (profiles) => ctx.patchState({ profiles }) }));
  }
  loadAchievements(ctx) {
    return this.repo.getAchievements().pipe(tap({ next: (achievements) => ctx.patchState({ achievements }) }));
  }
  static \u0275fac = function UserState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserState2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: UserState2, factory: UserState2.\u0275fac });
};
__decorate([
  Action(UserActions.LoadUserStats)
], UserState.prototype, "loadUserStats", null);
__decorate([
  Action(UserActions.LoadProfiles)
], UserState.prototype, "loadProfiles", null);
__decorate([
  Action(UserActions.LoadAchievements)
], UserState.prototype, "loadAchievements", null);
UserState = __decorate([
  State({
    name: "user",
    defaults: USER_STATE_DEFAULTS
  })
], UserState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserState, [{
    type: Injectable
  }], null, { loadUserStats: [], loadProfiles: [], loadAchievements: [] });
})();

// src/app/store/user/user.selectors.ts
var UserSelectors = class {
  static userStats(state) {
    return state.userStats;
  }
  static profiles(state) {
    return state.profiles;
  }
  static achievements(state) {
    return state.achievements;
  }
  static loading(state) {
    return state.loading;
  }
  static unlockedCount(state) {
    return state.achievements.filter((a) => !!a.unlockedAt).length;
  }
};
__decorate([
  Selector([UserState])
], UserSelectors, "userStats", null);
__decorate([
  Selector([UserState])
], UserSelectors, "profiles", null);
__decorate([
  Selector([UserState])
], UserSelectors, "achievements", null);
__decorate([
  Selector([UserState])
], UserSelectors, "loading", null);
__decorate([
  Selector([UserState])
], UserSelectors, "unlockedCount", null);

export {
  UserActions,
  UserRepository,
  UserState,
  UserSelectors
};
//# sourceMappingURL=chunk-AUMLN46Z.js.map
