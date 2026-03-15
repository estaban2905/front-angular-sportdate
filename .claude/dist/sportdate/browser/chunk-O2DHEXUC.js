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

// src/app/store/leaderboard/leaderboard.actions.ts
var LeaderboardActions;
(function(LeaderboardActions2) {
  class LoadLeaderboard {
    static type = "[Leaderboard] Load Leaderboard";
  }
  LeaderboardActions2.LoadLeaderboard = LoadLeaderboard;
  class LoadLeaderboardSuccess {
    entries;
    static type = "[Leaderboard] Load Leaderboard Success";
    constructor(entries) {
      this.entries = entries;
    }
  }
  LeaderboardActions2.LoadLeaderboardSuccess = LoadLeaderboardSuccess;
  class LoadTeams {
    static type = "[Leaderboard] Load Teams";
  }
  LeaderboardActions2.LoadTeams = LoadTeams;
  class LoadTeamsSuccess {
    teams;
    static type = "[Leaderboard] Load Teams Success";
    constructor(teams) {
      this.teams = teams;
    }
  }
  LeaderboardActions2.LoadTeamsSuccess = LoadTeamsSuccess;
  class LoadChampionships {
    static type = "[Leaderboard] Load Championships";
  }
  LeaderboardActions2.LoadChampionships = LoadChampionships;
  class LoadChampionshipsSuccess {
    championships;
    static type = "[Leaderboard] Load Championships Success";
    constructor(championships) {
      this.championships = championships;
    }
  }
  LeaderboardActions2.LoadChampionshipsSuccess = LoadChampionshipsSuccess;
})(LeaderboardActions || (LeaderboardActions = {}));

// src/app/core/repositories/abstractions/leaderboard.repository.ts
var LeaderboardRepository = class {
};

// src/app/store/leaderboard/leaderboard.constants.ts
var LEADERBOARD_STATE_DEFAULTS = {
  leaderboard: [],
  teams: [],
  championships: [],
  loading: false
};

// src/app/store/leaderboard/leaderboard.state.ts
var LeaderboardState = class LeaderboardState2 {
  repo = inject(LeaderboardRepository);
  loadLeaderboard(ctx) {
    ctx.patchState({ loading: true });
    return this.repo.getLeaderboard().pipe(tap({
      next: (leaderboard) => ctx.patchState({ leaderboard, loading: false }),
      error: () => ctx.patchState({ loading: false })
    }));
  }
  loadTeams(ctx) {
    return this.repo.getTeams().pipe(tap({ next: (teams) => ctx.patchState({ teams }) }));
  }
  loadChampionships(ctx) {
    return this.repo.getChampionships().pipe(tap({ next: (championships) => ctx.patchState({ championships }) }));
  }
  static \u0275fac = function LeaderboardState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LeaderboardState2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: LeaderboardState2, factory: LeaderboardState2.\u0275fac });
};
__decorate([
  Action(LeaderboardActions.LoadLeaderboard)
], LeaderboardState.prototype, "loadLeaderboard", null);
__decorate([
  Action(LeaderboardActions.LoadTeams)
], LeaderboardState.prototype, "loadTeams", null);
__decorate([
  Action(LeaderboardActions.LoadChampionships)
], LeaderboardState.prototype, "loadChampionships", null);
LeaderboardState = __decorate([
  State({
    name: "leaderboard",
    defaults: LEADERBOARD_STATE_DEFAULTS
  })
], LeaderboardState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderboardState, [{
    type: Injectable
  }], null, { loadLeaderboard: [], loadTeams: [], loadChampionships: [] });
})();

// src/app/store/leaderboard/leaderboard.selectors.ts
var LeaderboardSelectors = class {
  static leaderboard(state) {
    return state.leaderboard;
  }
  static teams(state) {
    return state.teams;
  }
  static championships(state) {
    return state.championships;
  }
  static loading(state) {
    return state.loading;
  }
};
__decorate([
  Selector([LeaderboardState])
], LeaderboardSelectors, "leaderboard", null);
__decorate([
  Selector([LeaderboardState])
], LeaderboardSelectors, "teams", null);
__decorate([
  Selector([LeaderboardState])
], LeaderboardSelectors, "championships", null);
__decorate([
  Selector([LeaderboardState])
], LeaderboardSelectors, "loading", null);

export {
  LeaderboardActions,
  LeaderboardRepository,
  LeaderboardState,
  LeaderboardSelectors
};
//# sourceMappingURL=chunk-O2DHEXUC.js.map
