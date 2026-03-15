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

// src/app/store/events/events.actions.ts
var EventsActions;
(function(EventsActions2) {
  class LoadEvents {
    static type = "[Events] Load Events";
  }
  EventsActions2.LoadEvents = LoadEvents;
  class LoadEventsSuccess {
    events;
    static type = "[Events] Load Events Success";
    constructor(events) {
      this.events = events;
    }
  }
  EventsActions2.LoadEventsSuccess = LoadEventsSuccess;
  class LoadChallenges {
    static type = "[Events] Load Challenges";
  }
  EventsActions2.LoadChallenges = LoadChallenges;
  class LoadChallengesSuccess {
    challenges;
    static type = "[Events] Load Challenges Success";
    constructor(challenges) {
      this.challenges = challenges;
    }
  }
  EventsActions2.LoadChallengesSuccess = LoadChallengesSuccess;
})(EventsActions || (EventsActions = {}));

// src/app/core/repositories/abstractions/event.repository.ts
var EventRepository = class {
};

// src/app/store/events/events.constants.ts
var EVENTS_STATE_DEFAULTS = {
  events: [],
  challenges: [],
  loading: false
};

// src/app/store/events/events.state.ts
var EventsState = class EventsState2 {
  repo = inject(EventRepository);
  loadEvents(ctx) {
    ctx.patchState({ loading: true });
    return this.repo.getEvents().pipe(tap({
      next: (events) => ctx.patchState({ events, loading: false }),
      error: () => ctx.patchState({ loading: false })
    }));
  }
  loadChallenges(ctx) {
    return this.repo.getChallenges().pipe(tap({ next: (challenges) => ctx.patchState({ challenges }) }));
  }
  static \u0275fac = function EventsState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventsState2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: EventsState2, factory: EventsState2.\u0275fac });
};
__decorate([
  Action(EventsActions.LoadEvents)
], EventsState.prototype, "loadEvents", null);
__decorate([
  Action(EventsActions.LoadChallenges)
], EventsState.prototype, "loadChallenges", null);
EventsState = __decorate([
  State({
    name: "events",
    defaults: EVENTS_STATE_DEFAULTS
  })
], EventsState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsState, [{
    type: Injectable
  }], null, { loadEvents: [], loadChallenges: [] });
})();

// src/app/store/events/events.selectors.ts
var EventsSelectors = class {
  static events(state) {
    return state.events;
  }
  static challenges(state) {
    return state.challenges;
  }
  static loading(state) {
    return state.loading;
  }
};
__decorate([
  Selector([EventsState])
], EventsSelectors, "events", null);
__decorate([
  Selector([EventsState])
], EventsSelectors, "challenges", null);
__decorate([
  Selector([EventsState])
], EventsSelectors, "loading", null);

export {
  EventsActions,
  EventRepository,
  EventsState,
  EventsSelectors
};
//# sourceMappingURL=chunk-YV7A4QU5.js.map
