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

// src/app/store/communities/communities.actions.ts
var CommunitiesActions;
(function(CommunitiesActions2) {
  class LoadGroups {
    static type = "[Communities] Load Groups";
  }
  CommunitiesActions2.LoadGroups = LoadGroups;
  class LoadGroupsSuccess {
    groups;
    static type = "[Communities] Load Groups Success";
    constructor(groups) {
      this.groups = groups;
    }
  }
  CommunitiesActions2.LoadGroupsSuccess = LoadGroupsSuccess;
  class LoadCommunities {
    static type = "[Communities] Load Communities";
  }
  CommunitiesActions2.LoadCommunities = LoadCommunities;
  class LoadCommunitiesSuccess {
    communities;
    static type = "[Communities] Load Communities Success";
    constructor(communities) {
      this.communities = communities;
    }
  }
  CommunitiesActions2.LoadCommunitiesSuccess = LoadCommunitiesSuccess;
})(CommunitiesActions || (CommunitiesActions = {}));

// src/app/core/repositories/abstractions/community.repository.ts
var CommunityRepository = class {
};

// src/app/store/communities/communities.constants.ts
var COMMUNITIES_STATE_DEFAULTS = {
  groups: [],
  communities: [],
  loading: false
};

// src/app/store/communities/communities.state.ts
var CommunitiesState = class CommunitiesState2 {
  repo = inject(CommunityRepository);
  loadGroups(ctx) {
    ctx.patchState({ loading: true });
    return this.repo.getGroups().pipe(tap({
      next: (groups) => ctx.patchState({ groups, loading: false }),
      error: () => ctx.patchState({ loading: false })
    }));
  }
  loadCommunities(ctx) {
    return this.repo.getCommunities().pipe(tap({ next: (communities) => ctx.patchState({ communities }) }));
  }
  static \u0275fac = function CommunitiesState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CommunitiesState2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CommunitiesState2, factory: CommunitiesState2.\u0275fac });
};
__decorate([
  Action(CommunitiesActions.LoadGroups)
], CommunitiesState.prototype, "loadGroups", null);
__decorate([
  Action(CommunitiesActions.LoadCommunities)
], CommunitiesState.prototype, "loadCommunities", null);
CommunitiesState = __decorate([
  State({
    name: "communities",
    defaults: COMMUNITIES_STATE_DEFAULTS
  })
], CommunitiesState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunitiesState, [{
    type: Injectable
  }], null, { loadGroups: [], loadCommunities: [] });
})();

// src/app/store/communities/communities.selectors.ts
var CommunitiesSelectors = class {
  static groups(state) {
    return state.groups;
  }
  static communities(state) {
    return state.communities;
  }
  static loading(state) {
    return state.loading;
  }
};
__decorate([
  Selector([CommunitiesState])
], CommunitiesSelectors, "groups", null);
__decorate([
  Selector([CommunitiesState])
], CommunitiesSelectors, "communities", null);
__decorate([
  Selector([CommunitiesState])
], CommunitiesSelectors, "loading", null);

export {
  CommunitiesActions,
  CommunityRepository,
  CommunitiesState,
  CommunitiesSelectors
};
//# sourceMappingURL=chunk-O2IZMYJL.js.map
