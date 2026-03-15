import {
  APP_BOOTSTRAP_LISTENER,
  ApplicationRef,
  BehaviorSubject,
  DestroyRef,
  EMPTY,
  ErrorHandler,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  RuntimeError,
  Subject,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  catchError,
  computed,
  config,
  defaultIfEmpty,
  distinctUntilChanged,
  filter,
  finalize,
  forkJoin,
  from,
  inject,
  isObservable,
  isPromise,
  makeEnvironmentProviders,
  map,
  mergeMap,
  of,
  provideEnvironmentInitializer,
  runInInjectionContext,
  setClassMetadata,
  shareReplay,
  signal,
  skip,
  startWith,
  take,
  takeUntil,
  untracked,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-GTOIWY6U.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// node_modules/@ngxs/store/fesm2022/ngxs-store-internals.mjs
var \u0275META_KEY = "NGXS_META";
var \u0275META_OPTIONS_KEY = "NGXS_OPTIONS_META";
var \u0275SELECTOR_META_KEY = "NGXS_SELECTOR_META";
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var \u0275hasOwnProperty = (target, key) => _hasOwnProperty.call(target, key);
var \u0275defineProperty = Object.defineProperty;
function \u0275ensureStoreMetadata(target) {
  if (!\u0275hasOwnProperty(target, \u0275META_KEY)) {
    const defaultMetadata = {
      name: null,
      actions: {},
      defaults: {},
      path: null,
      makeRootSelector(context) {
        return context.getStateGetter(defaultMetadata.name);
      },
      children: []
    };
    \u0275defineProperty(target, \u0275META_KEY, {
      value: defaultMetadata
    });
  }
  return \u0275getStoreMetadata(target);
}
function \u0275getStoreMetadata(target) {
  return target[\u0275META_KEY];
}
function \u0275ensureSelectorMetadata(target) {
  if (!\u0275hasOwnProperty(target, \u0275SELECTOR_META_KEY)) {
    const defaultMetadata = {
      makeRootSelector: null,
      originalFn: null,
      containerClass: null,
      selectorName: null,
      getSelectorOptions: () => ({})
    };
    \u0275defineProperty(target, \u0275SELECTOR_META_KEY, {
      value: defaultMetadata
    });
  }
  return \u0275getSelectorMetadata(target);
}
function \u0275getSelectorMetadata(target) {
  return target[\u0275SELECTOR_META_KEY];
}
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }
  const length = prev.length;
  for (let i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }
  return true;
}
function \u0275memoize(func, equalityCheck = Object.is) {
  let lastArgs = null;
  let lastResult = null;
  function memoized() {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      lastResult = func.apply(null, arguments);
    }
    lastArgs = arguments;
    return lastResult;
  }
  memoized.reset = function() {
    lastArgs = null;
    lastResult = null;
  };
  return memoized;
}
var \u0275InitialState = class {
  static _value = {};
  static set(state) {
    this._value = state;
  }
  static pop() {
    const state = this._value;
    this._value = {};
    return state;
  }
};
var \u0275INITIAL_STATE_TOKEN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "INITIAL_STATE_TOKEN" : "", {
  providedIn: "root",
  factory: () => \u0275InitialState.pop()
});
var \u0275NgxsAppBootstrappedState = class _\u0275NgxsAppBootstrappedState extends BehaviorSubject {
  constructor() {
    super(false);
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.complete());
  }
  bootstrap() {
    this.next(true);
  }
  /** @nocollapse */
  static \u0275fac = function \u0275NgxsAppBootstrappedState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgxsAppBootstrappedState)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _\u0275NgxsAppBootstrappedState,
    factory: _\u0275NgxsAppBootstrappedState.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgxsAppBootstrappedState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function orderedQueueOperation(operation) {
  const callsQueue = [];
  let busyPushingNext = false;
  return function callOperation(...args) {
    if (busyPushingNext) {
      callsQueue.unshift(args);
      return;
    }
    busyPushingNext = true;
    operation(...args);
    while (callsQueue.length > 0) {
      const nextCallArgs = callsQueue.pop();
      nextCallArgs && operation(...nextCallArgs);
    }
    busyPushingNext = false;
  };
}
var \u0275OrderedSubject = class extends Subject {
  _orderedNext = orderedQueueOperation((value) => super.next(value));
  next(value) {
    this._orderedNext(value);
  }
};
var \u0275OrderedBehaviorSubject = class extends BehaviorSubject {
  _orderedNext = orderedQueueOperation((value) => super.next(value));
  _currentValue;
  constructor(value) {
    super(value);
    this._currentValue = value;
  }
  getValue() {
    return this._currentValue;
  }
  next(value) {
    this._currentValue = value;
    this._orderedNext(value);
  }
};
function \u0275wrapObserverCalls(invokeFn) {
  return (source) => {
    return new Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          invokeFn(() => subscriber.next(value));
        },
        error(error) {
          invokeFn(() => subscriber.error(error));
        },
        complete() {
          invokeFn(() => subscriber.complete());
        }
      });
    });
  };
}
var \u0275StateStream = class _\u0275StateStream extends \u0275OrderedBehaviorSubject {
  state = toSignal(this.pipe(\u0275wrapObserverCalls(untracked)), {
    manualCleanup: true,
    requireSync: true
  });
  constructor() {
    super({});
    inject(DestroyRef).onDestroy(() => this.complete());
  }
  /** @nocollapse */
  static \u0275fac = function \u0275StateStream_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275StateStream)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _\u0275StateStream,
    factory: _\u0275StateStream.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275StateStream, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var \u0275NgxsActionRegistry = class _\u0275NgxsActionRegistry {
  // Instead of going over the states list every time an action is dispatched,
  // we are constructing a map of action types to lists of action metadata.
  // If the `@@Init` action is handled in two different states, the action
  // metadata list will contain two objects that have the state `instance` and
  // method names to be used as action handlers (decorated with `@Action(InitState)`).
  _actionTypeToHandlersMap = /* @__PURE__ */ new Map();
  constructor() {
    inject(DestroyRef).onDestroy(() => this._actionTypeToHandlersMap.clear());
  }
  get(type) {
    return this._actionTypeToHandlersMap.get(type);
  }
  register(type, handler) {
    const handlers = this._actionTypeToHandlersMap.get(type) ?? /* @__PURE__ */ new Set();
    handlers.add(handler);
    this._actionTypeToHandlersMap.set(type, handlers);
    return () => {
      const handlers2 = this._actionTypeToHandlersMap.get(type);
      handlers2.delete(handler);
    };
  }
  /** @nocollapse */
  static \u0275fac = function \u0275NgxsActionRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgxsActionRegistry)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _\u0275NgxsActionRegistry,
    factory: _\u0275NgxsActionRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgxsActionRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ngxs/store/fesm2022/ngxs-store-plugins.mjs
var InitState = class {
  static type = "@@INIT";
};
var UpdateState = class {
  addedStates;
  static type = "@@UPDATE_STATE";
  constructor(addedStates) {
    this.addedStates = addedStates;
  }
};
var NGXS_PLUGINS = /* @__PURE__ */ new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_PLUGINS" : "");
function \u0275isPluginClass(plugin) {
  return !!plugin.prototype.handle;
}
function getActionTypeFromInstance(action) {
  return action.constructor?.type || action.type;
}
var setValue = (obj, prop, val) => {
  obj = __spreadValues({}, obj);
  const split = prop.split(".");
  const lastIndex = split.length - 1;
  split.reduce((acc, part, index) => {
    if (index === lastIndex) {
      acc[part] = val;
    } else {
      acc[part] = Array.isArray(acc[part]) ? acc[part].slice() : __spreadValues({}, acc[part]);
    }
    return acc?.[part];
  }, obj);
  return obj;
};
var getValue = (obj, prop) => prop.split(".").reduce((acc, part) => acc?.[part], obj);

// node_modules/@ngxs/store/fesm2022/ngxs-store-operators.mjs
var isFunction = (value) => typeof value == "function";
var isStateOperator = isFunction;

// node_modules/@ngxs/store/fesm2022/ngxs-store.mjs
var PluginManager = class _PluginManager {
  plugins = [];
  _parentManager = inject(_PluginManager, {
    optional: true,
    skipSelf: true
  });
  _pluginHandlers = inject(NGXS_PLUGINS, {
    optional: true
  });
  constructor() {
    this.registerHandlers();
  }
  get _rootPlugins() {
    return this._parentManager?.plugins || this.plugins;
  }
  registerHandlers() {
    const pluginHandlers = this.getPluginHandlers();
    this._rootPlugins.push(...pluginHandlers);
  }
  getPluginHandlers() {
    const handlers = this._pluginHandlers || [];
    return handlers.map((plugin) => plugin.handle ? plugin.handle.bind(plugin) : plugin);
  }
  /** @nocollapse */
  static \u0275fac = function PluginManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PluginManager)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PluginManager,
    factory: _PluginManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PluginManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function leaveNgxs(ngxsExecutionStrategy) {
  return \u0275wrapObserverCalls((fn) => ngxsExecutionStrategy.leave(fn));
}
var \u0275\u0275unhandledRxjsErrorCallbacks = /* @__PURE__ */ new WeakMap();
var installed = false;
function installOnUnhandhedErrorHandler() {
  if (installed) {
    return;
  }
  const existingHandler = config.onUnhandledError;
  config.onUnhandledError = function(error) {
    const unhandledErrorCallback = \u0275\u0275unhandledRxjsErrorCallbacks.get(error);
    if (unhandledErrorCallback) {
      unhandledErrorCallback();
    } else if (existingHandler) {
      existingHandler.call(this, error);
    } else {
      throw error;
    }
  };
  installed = true;
}
function executeUnhandledCallback(error) {
  const unhandledErrorCallback = \u0275\u0275unhandledRxjsErrorCallbacks.get(error);
  if (unhandledErrorCallback) {
    unhandledErrorCallback();
    return true;
  }
  return false;
}
function assignUnhandledCallback(error, callback) {
  if (error && typeof error === "object") {
    let hasBeenCalled = false;
    \u0275\u0275unhandledRxjsErrorCallbacks.set(error, () => {
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        callback();
      }
    });
  }
  return error;
}
function fallbackSubscriber(ngZone) {
  return (source) => {
    let subscription = source.subscribe({
      error: (error) => {
        ngZone.runOutsideAngular(() => {
          queueMicrotask(() => {
            if (subscription) {
              executeUnhandledCallback(error);
            }
          });
        });
      }
    });
    return new Observable((subscriber) => {
      subscription?.unsubscribe();
      subscription = null;
      return source.subscribe(subscriber);
    });
  };
}
var InternalDispatchedActionResults = class _InternalDispatchedActionResults extends Subject {
  constructor() {
    super();
    inject(DestroyRef).onDestroy(() => this.complete());
  }
  /** @nocollapse */
  static \u0275fac = function InternalDispatchedActionResults_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalDispatchedActionResults)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalDispatchedActionResults,
    factory: _InternalDispatchedActionResults.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalDispatchedActionResults, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var InternalNgxsExecutionStrategy = class _InternalNgxsExecutionStrategy {
  _ngZone = inject(NgZone);
  enter(func) {
    if (false) {
      return this._runInsideAngular(func);
    }
    return this._runOutsideAngular(func);
  }
  leave(func) {
    return this._runInsideAngular(func);
  }
  _runInsideAngular(func) {
    if (NgZone.isInAngularZone()) {
      return func();
    }
    return this._ngZone.run(func);
  }
  _runOutsideAngular(func) {
    if (NgZone.isInAngularZone()) {
      return this._ngZone.runOutsideAngular(func);
    }
    return func();
  }
  /** @nocollapse */
  static \u0275fac = function InternalNgxsExecutionStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalNgxsExecutionStrategy)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalNgxsExecutionStrategy,
    factory: _InternalNgxsExecutionStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalNgxsExecutionStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ActionStatus;
(function(ActionStatus2) {
  ActionStatus2["Dispatched"] = "DISPATCHED";
  ActionStatus2["Successful"] = "SUCCESSFUL";
  ActionStatus2["Canceled"] = "CANCELED";
  ActionStatus2["Errored"] = "ERRORED";
})(ActionStatus || (ActionStatus = {}));
var InternalActions = class _InternalActions extends \u0275OrderedSubject {
  // This subject will be the first to know about the dispatched action, its purpose is for
  // any logic that must be executed before action handlers are invoked (i.e., cancelation).
  dispatched$ = new Subject();
  constructor() {
    super();
    this.subscribe((ctx) => {
      if (ctx.status === ActionStatus.Dispatched) {
        this.dispatched$.next(ctx);
      }
    });
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => {
      this.complete();
      this.dispatched$.complete();
    });
  }
  /** @nocollapse */
  static \u0275fac = function InternalActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalActions)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalActions,
    factory: _InternalActions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalActions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var Actions = class _Actions extends Observable {
  constructor() {
    const internalActions$ = inject(InternalActions);
    const internalExecutionStrategy = inject(InternalNgxsExecutionStrategy);
    const sharedInternalActions$ = new Subject();
    internalActions$.pipe(leaveNgxs(internalExecutionStrategy)).subscribe(sharedInternalActions$);
    super((observer) => {
      const childSubscription = sharedInternalActions$.subscribe({
        next: (ctx) => observer.next(ctx),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      });
      observer.add(childSubscription);
    });
  }
  /** @nocollapse */
  static \u0275fac = function Actions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Actions)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Actions,
    factory: _Actions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Actions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var InternalDispatcher = class _InternalDispatcher {
  _ngZone = inject(NgZone);
  _actions = inject(InternalActions);
  _actionResults = inject(InternalDispatchedActionResults);
  _pluginManager = inject(PluginManager);
  _stateStream = inject(\u0275StateStream);
  _ngxsExecutionStrategy = inject(InternalNgxsExecutionStrategy);
  _injector = inject(Injector);
  _destroyRef = inject(DestroyRef);
  /**
   * Dispatches event(s).
   */
  dispatch(actionOrActions) {
    const result = this._ngxsExecutionStrategy.enter(() => this.dispatchByEvents(actionOrActions));
    return result.pipe(fallbackSubscriber(this._ngZone), leaveNgxs(this._ngxsExecutionStrategy));
  }
  dispatchByEvents(actionOrActions) {
    if (Array.isArray(actionOrActions)) {
      if (actionOrActions.length === 0) return of(void 0);
      return forkJoin(actionOrActions.map((action) => this.dispatchSingle(action))).pipe(map(() => void 0));
    } else {
      return this.dispatchSingle(actionOrActions);
    }
  }
  dispatchSingle(action) {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      const type = getActionTypeFromInstance(action);
      if (!type) {
        const error = new Error(`This action doesn't have a type property: ${action.constructor.name}`);
        return new Observable((subscriber) => subscriber.error(error));
      }
    }
    const prevState = this._stateStream.getValue();
    const plugins = this._pluginManager.plugins;
    return compose(this._injector, this._destroyRef, [...plugins, (nextState, nextAction) => {
      if (nextState !== prevState) {
        this._stateStream.next(nextState);
      }
      const actionResult$ = this.getActionResultStream(nextAction);
      actionResult$.subscribe((ctx) => this._actions.next(ctx));
      this._actions.next({
        action: nextAction,
        status: ActionStatus.Dispatched
      });
      return this.createDispatchObservable(actionResult$);
    }])(prevState, action).pipe(shareReplay());
  }
  getActionResultStream(action) {
    return this._actionResults.pipe(filter((ctx) => ctx.action === action && ctx.status !== ActionStatus.Dispatched), take(1), shareReplay());
  }
  createDispatchObservable(actionResult$) {
    return actionResult$.pipe(mergeMap((ctx) => {
      switch (ctx.status) {
        case ActionStatus.Successful:
          return of(this._stateStream.getValue());
        case ActionStatus.Errored:
          throw ctx.error;
        default:
          return EMPTY;
      }
    }), shareReplay());
  }
  /** @nocollapse */
  static \u0275fac = function InternalDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalDispatcher)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalDispatcher,
    factory: _InternalDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var compose = (injector, destroyRef, fns) => (...args) => {
  const fn = fns.shift();
  if (destroyRef.destroyed || !fn) {
    return EMPTY;
  }
  return runInInjectionContext(injector, () => fn(...args, (...nextArgs) => compose(injector, destroyRef, fns)(...nextArgs)));
};
var ROOT_STATE_TOKEN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ROOT_STATE_TOKEN" : "");
var FEATURE_STATE_TOKEN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FEATURE_STATE_TOKEN" : "");
var NGXS_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_OPTIONS" : "");
var NgxsConfig = class _NgxsConfig {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   * (default: false)
   *
   * Note: this property will be accounted only in development mode.
   * It makes sense to use it only during development to ensure there're no state mutations.
   * When building for production, the `Object.freeze` will be tree-shaken away.
   */
  developmentMode;
  compatibility = {
    strictContentSecurityPolicy: false
  };
  /**
   * Defining shared selector options
   */
  selectorOptions = {
    injectContainerState: false,
    suppressErrors: false
  };
  /** @nocollapse */
  static \u0275fac = function NgxsConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsConfig)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxsConfig,
    factory: () => (() => {
      const defaultConfig = new _NgxsConfig();
      const config2 = inject(NGXS_OPTIONS);
      return __spreadProps(__spreadValues(__spreadValues({}, defaultConfig), config2), {
        selectorOptions: __spreadValues(__spreadValues({}, defaultConfig.selectorOptions), config2.selectorOptions)
      });
    })(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => {
        const defaultConfig = new NgxsConfig();
        const config2 = inject(NGXS_OPTIONS);
        return __spreadProps(__spreadValues(__spreadValues({}, defaultConfig), config2), {
          selectorOptions: __spreadValues(__spreadValues({}, defaultConfig.selectorOptions), config2.selectorOptions)
        });
      }
    }]
  }], null, null);
})();
var NgxsSimpleChange = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(previousValue, currentValue, firstChange) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
    this.firstChange = firstChange;
  }
};
var deepFreeze = (o) => {
  Object.freeze(o);
  const oIsFunction = typeof o === "function";
  Object.getOwnPropertyNames(o).forEach(function(prop) {
    if (\u0275hasOwnProperty(o, prop) && (oIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
};
var InternalStateOperations = class _InternalStateOperations {
  _stateStream = inject(\u0275StateStream);
  _dispatcher = inject(InternalDispatcher);
  _config = inject(NgxsConfig);
  /**
   * Returns the root state operators.
   */
  getRootStateOperations() {
    const rootStateOperations = {
      getState: () => this._stateStream.getValue(),
      setState: (newState) => this._stateStream.next(newState),
      dispatch: (actionOrActions) => this._dispatcher.dispatch(actionOrActions)
    };
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      return this._config.developmentMode ? ensureStateAndActionsAreImmutable(rootStateOperations) : rootStateOperations;
    } else {
      return rootStateOperations;
    }
  }
  setStateToTheCurrentWithNew(results) {
    const stateOperations = this.getRootStateOperations();
    const currentState = stateOperations.getState();
    stateOperations.setState(__spreadValues(__spreadValues({}, currentState), results.defaults));
  }
  /** @nocollapse */
  static \u0275fac = function InternalStateOperations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalStateOperations)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalStateOperations,
    factory: _InternalStateOperations.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalStateOperations, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function ensureStateAndActionsAreImmutable(root) {
  return {
    getState: () => root.getState(),
    setState: (value) => {
      const frozenValue = deepFreeze(value);
      return root.setState(frozenValue);
    },
    dispatch: (actions) => {
      return root.dispatch(actions);
    }
  };
}
function createRootSelectorFactory(selectorMetaData, selectors, memoizedSelectorFn) {
  return (context) => {
    const {
      argumentSelectorFunctions,
      selectorOptions
    } = getRuntimeSelectorInfo(context, selectorMetaData, selectors);
    const {
      suppressErrors
    } = selectorOptions;
    return function selectFromRoot(rootState) {
      const results = argumentSelectorFunctions.map((argFn) => argFn(rootState));
      try {
        return memoizedSelectorFn(...results);
      } catch (ex) {
        if (suppressErrors && ex instanceof TypeError) {
          return void 0;
        }
        if (typeof ngDevMode !== "undefined" && ngDevMode) {
          const message = "The selector below has thrown an error upon invocation. Please check for any unsafe property access that may result in null or undefined values.";
          console.error(message, selectorMetaData.originalFn);
        }
        throw ex;
      }
    };
  };
}
function createMemoizedSelectorFn(originalFn, creationMetadata) {
  const containerClass = creationMetadata?.containerClass;
  const wrappedFn = function wrappedSelectorFn() {
    const returnValue = originalFn.apply(containerClass, arguments);
    if (typeof returnValue === "function") {
      const innerMemoizedFn = \u0275memoize.apply(null, [returnValue]);
      return innerMemoizedFn;
    }
    return returnValue;
  };
  const memoizedFn = \u0275memoize(wrappedFn);
  Object.setPrototypeOf(memoizedFn, originalFn);
  return memoizedFn;
}
function getRuntimeSelectorInfo(context, selectorMetaData, selectors = []) {
  const localSelectorOptions = selectorMetaData.getSelectorOptions();
  const selectorOptions = context.getSelectorOptions(localSelectorOptions);
  const selectorsToApply = getSelectorsToApply(selectors, selectorOptions, selectorMetaData.containerClass);
  const argumentSelectorFunctions = selectorsToApply.map((selector) => {
    const factory = getRootSelectorFactory(selector);
    return factory(context);
  });
  return {
    selectorOptions,
    argumentSelectorFunctions
  };
}
function getSelectorsToApply(selectors = [], selectorOptions, containerClass) {
  const selectorsToApply = [];
  const canInjectContainerState = selectorOptions.injectContainerState || selectors.length === 0;
  if (containerClass && canInjectContainerState) {
    const metadata = \u0275getStoreMetadata(containerClass);
    if (metadata) {
      selectorsToApply.push(containerClass);
    }
  }
  selectorsToApply.push(...selectors);
  return selectorsToApply;
}
function getRootSelectorFactory(selector) {
  const metadata = \u0275getSelectorMetadata(selector) || \u0275getStoreMetadata(selector);
  return metadata?.makeRootSelector || (() => selector);
}
function compliantPropGetter(paths) {
  return (obj) => {
    for (let i = 0; i < paths.length; i++) {
      if (!obj) return void 0;
      obj = obj[paths[i]];
    }
    return obj;
  };
}
function fastPropGetter(paths) {
  const segments = paths;
  let seg = "store." + segments[0];
  let i = 0;
  const l = segments.length;
  let expr = seg;
  while (++i < l) {
    expr = expr + " && " + (seg = seg + "." + segments[i]);
  }
  const fn = new Function("store", "return " + expr + ";");
  return fn;
}
var \u0275PROP_GETTER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "PROP_GETTER" : "", {
  providedIn: "root",
  factory: () => inject(NgxsConfig).compatibility?.strictContentSecurityPolicy ? compliantPropGetter : fastPropGetter
});
function buildGraph(stateClasses) {
  const findName = (stateClass) => {
    const meta = stateClasses.find((s) => s === stateClass);
    if (typeof ngDevMode !== "undefined" && ngDevMode && !meta) {
      throw new Error(`Child state not found: ${stateClass}. \r
You may have forgotten to add states to module`);
    }
    return meta[\u0275META_KEY].name;
  };
  return stateClasses.reduce((graph, stateClass) => {
    const meta = stateClass[\u0275META_KEY];
    graph[meta.name] = (meta.children || []).map(findName);
    return graph;
  }, {});
}
function nameToState(states) {
  return states.reduce((result, stateClass) => {
    const meta = stateClass[\u0275META_KEY];
    result[meta.name] = stateClass;
    return result;
  }, {});
}
function findFullParentPath(obj, out = {}) {
  const find = (graph, target) => {
    for (const key in graph) {
      if (graph[key]?.includes(target)) {
        const parent = find(graph, key);
        return parent ? `${parent}.${key}` : key;
      }
    }
    return null;
  };
  for (const key in obj) {
    const parent = find(obj, key);
    out[key] = parent ? `${parent}.${key}` : key;
  }
  return out;
}
function topologicalSort(graph) {
  const sorted = [];
  const visited = {};
  const visit = (name, ancestors = []) => {
    visited[name] = true;
    ancestors.push(name);
    for (const dep of graph[name]) {
      if (typeof ngDevMode !== "undefined" && ngDevMode && ancestors.includes(dep)) {
        throw new Error(`Circular dependency '${dep}' is required by '${name}': ${ancestors.join(" -> ")}`);
      }
      if (!visited[dep]) visit(dep, ancestors.slice());
    }
    if (!sorted.includes(name)) sorted.push(name);
  };
  for (const key in graph) visit(key);
  return sorted.reverse();
}
function throwStateNameError(name) {
  throw new Error(`${name} is not a valid state name. It needs to be a valid object property name.`);
}
function throwStateNamePropertyError() {
  throw new Error(`States must register a 'name' property.`);
}
function throwStateUniqueError(current, newName, oldName) {
  throw new Error(`State name '${current}' from ${newName} already exists in ${oldName}.`);
}
function throwStateDecoratorError(name) {
  throw new Error(`States must be decorated with @State() decorator, but "${name}" isn't.`);
}
function throwActionDecoratorError() {
  throw new Error("@Action() decorator cannot be used with static methods.");
}
function throwSelectorDecoratorError() {
  throw new Error("Selectors only work on methods.");
}
function getUndecoratedStateWithInjectableWarningMessage(name) {
  return `'${name}' class should be decorated with @Injectable() right after the @State() decorator`;
}
function getInvalidInitializationOrderMessage(addedStates) {
  let message = "You have an invalid state initialization order. This typically occurs when `NgxsModule.forFeature`\nor `provideStates` is called before `NgxsModule.forRoot` or `provideStore`.\nOne example is when `NgxsRouterPluginModule.forRoot` is called before `NgxsModule.forRoot`.";
  if (addedStates) {
    const stateNames = Object.keys(addedStates).map((stateName) => `"${stateName}"`);
    message += `
Feature states added before the store initialization is complete: ${stateNames.join(", ")}.`;
  }
  return message;
}
function throwPatchingArrayError() {
  throw new Error("Patching arrays is not supported.");
}
function throwPatchingPrimitiveError() {
  throw new Error("Patching primitives is not supported.");
}
var stateNameRegex = /* @__PURE__ */ new RegExp("^[a-zA-Z0-9_]+$");
function ensureStateNameIsValid(name) {
  if (!name) {
    throwStateNamePropertyError();
  } else if (!stateNameRegex.test(name)) {
    throwStateNameError(name);
  }
}
function ensureStateNameIsUnique(stateName, state, statesByName) {
  const existingState = statesByName[stateName];
  if (existingState && existingState !== state) {
    throwStateUniqueError(stateName, state.name, existingState.name);
  }
}
function ensureStatesAreDecorated(stateClasses) {
  stateClasses.forEach((stateClass) => {
    if (!\u0275getStoreMetadata(stateClass)) {
      throwStateDecoratorError(stateClass.name);
    }
  });
}
function ensureStateClassIsInjectable(stateClass) {
  if (jit_hasInjectableAnnotation(stateClass) || aot_hasNgInjectableDef(stateClass)) {
    return;
  }
  console.warn(getUndecoratedStateWithInjectableWarningMessage(stateClass.name));
}
function aot_hasNgInjectableDef(stateClass) {
  return !!stateClass.\u0275prov;
}
function jit_hasInjectableAnnotation(stateClass) {
  const annotations = stateClass.__annotations__ || [];
  return annotations.some((annotation) => annotation?.ngMetadataName === "Injectable");
}
var NGXS_DEVELOPMENT_OPTIONS = /* @__PURE__ */ new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_DEVELOPMENT_OPTIONS" : "", {
  providedIn: "root",
  factory: () => ({
    warnOnUnhandledActions: true
  })
});
var NgxsUnhandledActionsLogger = class _NgxsUnhandledActionsLogger {
  /**
   * These actions should be ignored by default; the user can increase this
   * list in the future via the `ignoreActions` method.
   */
  _ignoredActions = /* @__PURE__ */ new Set([InitState.type, UpdateState.type]);
  constructor() {
    const options = inject(NGXS_DEVELOPMENT_OPTIONS);
    if (typeof options.warnOnUnhandledActions === "object") {
      this.ignoreActions(...options.warnOnUnhandledActions.ignore);
    }
  }
  /**
   * Adds actions to the internal list of actions that should be ignored.
   */
  ignoreActions(...actions) {
    for (const action of actions) {
      this._ignoredActions.add(action.type);
    }
  }
  /** @internal */
  warn(action) {
    const actionShouldBeIgnored = Array.from(this._ignoredActions).some((type) => type === getActionTypeFromInstance(action));
    if (actionShouldBeIgnored) {
      return;
    }
    action = action.constructor && action.constructor.name !== "Object" ? action.constructor.name : action.type;
    console.warn(`The ${action} action has been dispatched but hasn't been handled. This may happen if the state with an action handler for this action is not registered.`);
  }
  /** @nocollapse */
  static \u0275fac = function NgxsUnhandledActionsLogger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsUnhandledActionsLogger)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxsUnhandledActionsLogger,
    factory: _NgxsUnhandledActionsLogger.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsUnhandledActionsLogger, [{
    type: Injectable
  }], () => [], null);
})();
var NgxsUnhandledErrorHandler = class _NgxsUnhandledErrorHandler {
  _ngZone = inject(NgZone);
  _errorHandler = inject(ErrorHandler);
  /**
   * The `_unhandledErrorContext` is left unused internally since we do not
   * require it for internal operations. However, developers who wish to provide
   * their own custom error handler may utilize this context information.
   */
  handleError(error, _unhandledErrorContext) {
    this._ngZone.runOutsideAngular(() => this._errorHandler.handleError(error));
  }
  /** @nocollapse */
  static \u0275fac = function NgxsUnhandledErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsUnhandledErrorHandler)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxsUnhandledErrorHandler,
    factory: _NgxsUnhandledErrorHandler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsUnhandledErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function ofActionDispatched(...allowedTypes) {
  return ofActionOperator(allowedTypes, [ActionStatus.Dispatched]);
}
function ofActionOperator(allowedTypes, statuses, mapOperator = mapAction) {
  const allowedMap = createAllowedActionTypesMap(allowedTypes);
  const allowedStatusMap = statuses && createAllowedStatusesMap(statuses);
  return function(o) {
    return o.pipe(filterStatus(allowedMap, allowedStatusMap), mapOperator());
  };
}
function filterStatus(allowedTypes, allowedStatuses) {
  return filter((ctx) => {
    const actionType = getActionTypeFromInstance(ctx.action);
    const typeMatch = allowedTypes[actionType];
    const statusMatch = allowedStatuses ? allowedStatuses[ctx.status] : true;
    return typeMatch && statusMatch;
  });
}
function mapAction() {
  return map((ctx) => ctx.action);
}
function createAllowedActionTypesMap(types) {
  return types.reduce((filterMap, klass) => {
    filterMap[getActionTypeFromInstance(klass)] = true;
    return filterMap;
  }, {});
}
function createAllowedStatusesMap(statuses) {
  return statuses.reduce((filterMap, status) => {
    filterMap[status] = true;
    return filterMap;
  }, {});
}
function simplePatch(value) {
  return (existingState) => {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      if (Array.isArray(value)) {
        throwPatchingArrayError();
      } else if (typeof value !== "object") {
        throwPatchingPrimitiveError();
      }
    }
    const newState = __spreadValues({}, existingState);
    for (const key in value) {
      newState[key] = value[key];
    }
    return newState;
  };
}
var StateContextFactory = class _StateContextFactory {
  _internalStateOperations = inject(InternalStateOperations);
  /**
   * Create the state context
   */
  createStateContext(path, abortSignal) {
    const root = this._internalStateOperations.getRootStateOperations();
    return {
      abortSignal,
      getState() {
        const currentAppState = root.getState();
        return getState(currentAppState, path);
      },
      patchState(val) {
        const currentAppState = root.getState();
        const patchOperator = simplePatch(val);
        setStateFromOperator(root, currentAppState, patchOperator, path);
      },
      setState(val) {
        const currentAppState = root.getState();
        if (isStateOperator(val)) {
          setStateFromOperator(root, currentAppState, val, path);
        } else {
          setStateValue(root, currentAppState, val, path);
        }
      },
      dispatch(actions) {
        return root.dispatch(actions);
      }
    };
  }
  /** @nocollapse */
  static \u0275fac = function StateContextFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateContextFactory)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateContextFactory,
    factory: _StateContextFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateContextFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function setStateValue(root, currentAppState, newValue, path) {
  const newAppState = setValue(currentAppState, path, newValue);
  root.setState(newAppState);
  return newAppState;
}
function setStateFromOperator(root, currentAppState, stateOperator, path) {
  const local = getState(currentAppState, path);
  const newValue = stateOperator(local);
  return setStateValue(root, currentAppState, newValue, path);
}
function getState(currentAppState, path) {
  return getValue(currentAppState, path);
}
var InternalActionHandlerFactory = class _InternalActionHandlerFactory {
  _actions = inject(InternalActions);
  _stateContextFactory = inject(StateContextFactory);
  createActionHandler(path, handlerFn, options) {
    const {
      dispatched$
    } = this._actions;
    return (action) => {
      const abortController = new AbortController();
      const stateContext = this._stateContextFactory.createStateContext(path, abortController.signal);
      let result = handlerFn(stateContext, action);
      if (isPromise(result)) {
        result = from(result);
      }
      if (isObservable(result)) {
        result = result.pipe(
          mergeMap((value) => isPromise(value) || isObservable(value) ? value : of(value)),
          // If this observable has completed without emitting any values,
          // we wouldn't want to complete the entire chain of actions.
          // If any observable completes, then the action will be canceled.
          // For instance, if any action handler had a statement like
          // `handler(ctx) { return EMPTY; }`, then the action would be canceled.
          // See https://github.com/ngxs/store/issues/1568
          defaultIfEmpty(void 0)
        );
        if (options.cancelUncompleted) {
          const canceled = dispatched$.pipe(ofActionDispatched(action));
          result = result.pipe(takeUntil(new Observable((subscriber) => {
            return canceled.subscribe(() => {
              abortController.abort();
              subscriber.next();
            });
          })));
        }
        result = result.pipe(
          // Note that we use the `finalize` operator only when the action handler
          // explicitly returns an observable (or a promise) to wait for. This means
          // the action handler is written in a "fire & wait" style. If the handler’s
          // result is unsubscribed (either because the observable has completed or
          // it was unsubscribed by `takeUntil` due to a new action being dispatched),
          // we prevent writing to the state context.
          finalize(() => {
            if (typeof ngDevMode !== "undefined" && ngDevMode) {
              let noopAndWarn2 = function() {
                console.warn(`"${action}" attempted to change the state, but the change was ignored because state updates are not allowed after the action handler has completed.`);
              };
              var noopAndWarn = noopAndWarn2;
              stateContext.setState = noopAndWarn2;
              stateContext.patchState = noopAndWarn2;
            } else {
              stateContext.setState = noop;
              stateContext.patchState = noop;
            }
          })
        );
      } else {
        result = of(void 0);
      }
      return result;
    };
  }
  /** @nocollapse */
  static \u0275fac = function InternalActionHandlerFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternalActionHandlerFactory)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InternalActionHandlerFactory,
    factory: _InternalActionHandlerFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalActionHandlerFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function noop() {
}
function cloneDefaults(defaults) {
  let value = defaults === void 0 ? {} : defaults;
  if (defaults) {
    if (Array.isArray(defaults)) {
      value = defaults.slice();
    } else if (typeof defaults === "object") {
      value = __spreadValues({}, defaults);
    }
  }
  return value;
}
var StateFactory = class _StateFactory {
  _injector = inject(Injector);
  _config = inject(NgxsConfig);
  _actionHandlerFactory = inject(InternalActionHandlerFactory);
  _actions = inject(InternalActions);
  _actionResults = inject(InternalDispatchedActionResults);
  _initialState = inject(\u0275INITIAL_STATE_TOKEN, {
    optional: true
  });
  _actionRegistry = inject(\u0275NgxsActionRegistry);
  _propGetter = inject(\u0275PROP_GETTER);
  _actionsSubscription = null;
  _ngxsUnhandledErrorHandler = null;
  _states = [];
  _statesByName = {};
  _statePaths = {};
  getRuntimeSelectorContext = \u0275memoize(() => {
    const stateFactory = this;
    const propGetter = stateFactory._propGetter;
    function resolveGetter(key) {
      const path = stateFactory._statePaths[key];
      return path ? propGetter(path.split(".")) : null;
    }
    const context = {
      getStateGetter(key) {
        let getter = (
          /*@__INLINE__*/
          resolveGetter(key)
        );
        if (getter) {
          return getter;
        }
        return (...args) => {
          if (!getter) {
            getter = /*@__INLINE__*/
            resolveGetter(key);
          }
          return getter ? getter(...args) : void 0;
        };
      },
      getSelectorOptions(localOptions) {
        const globalSelectorOptions = stateFactory._config.selectorOptions;
        return __spreadValues(__spreadValues({}, globalSelectorOptions), localOptions || {});
      }
    };
    return context;
  });
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this._states = [];
      this._actionsSubscription?.unsubscribe();
    });
  }
  /**
   * Add a new state to the global defs.
   */
  add(stateClasses) {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      ensureStatesAreDecorated(stateClasses);
    }
    const {
      newStates
    } = this.addToStatesMap(stateClasses);
    if (!newStates.length) return [];
    const stateGraph = buildGraph(newStates);
    const sortedStates = topologicalSort(stateGraph);
    const paths = findFullParentPath(stateGraph);
    const nameGraph = nameToState(newStates);
    const bootstrappedStores = [];
    for (const name of sortedStates) {
      const stateClass = nameGraph[name];
      const path = paths[name];
      const meta = stateClass[\u0275META_KEY];
      this.addRuntimeInfoToMeta(meta, path);
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        ensureStateClassIsInjectable(stateClass);
      }
      const stateMap = {
        name,
        path,
        isInitialised: false,
        actions: meta.actions,
        instance: inject(stateClass),
        defaults: cloneDefaults(meta.defaults)
      };
      if (!this.hasBeenMountedAndBootstrapped(name, path)) {
        bootstrappedStores.push(stateMap);
      }
      this._states.push(stateMap);
      this.hydrateActionMetasMap(stateMap);
    }
    return bootstrappedStores;
  }
  /**
   * Add a set of states to the store and return the defaults
   */
  addAndReturnDefaults(stateClasses) {
    const classes = stateClasses || [];
    const mappedStores = this.add(classes);
    const defaults = mappedStores.reduce((result, mappedStore) => setValue(result, mappedStore.path, mappedStore.defaults), {});
    return {
      defaults,
      states: mappedStores
    };
  }
  connectActionHandlers() {
    this._actionsSubscription = this._actions.pipe(filter((ctx) => ctx.status === ActionStatus.Dispatched), mergeMap((ctx) => {
      const action = ctx.action;
      return this.invokeActions(action).pipe(map(() => ({
        action,
        status: ActionStatus.Successful
      })), defaultIfEmpty({
        action,
        status: ActionStatus.Canceled
      }), catchError((error) => {
        const ngxsUnhandledErrorHandler = this._ngxsUnhandledErrorHandler ||= this._injector.get(NgxsUnhandledErrorHandler);
        const handleableError = assignUnhandledCallback(error, () => ngxsUnhandledErrorHandler.handleError(error, {
          action
        }));
        return of({
          action,
          status: ActionStatus.Errored,
          error: handleableError
        });
      }));
    })).subscribe((ctx) => this._actionResults.next(ctx));
  }
  /**
   * Invoke actions on the states.
   */
  invokeActions(action) {
    const type = getActionTypeFromInstance(action);
    const results = [];
    let actionHasBeenHandled = false;
    const actionHandlers = this._actionRegistry.get(type);
    if (actionHandlers) {
      for (const actionHandler of actionHandlers) {
        let result;
        try {
          result = actionHandler(action);
        } catch (e) {
          result = new Observable((subscriber) => subscriber.error(e));
        }
        results.push(result);
        actionHasBeenHandled = true;
      }
    }
    if (typeof ngDevMode !== "undefined" && ngDevMode && !actionHasBeenHandled) {
      const unhandledActionsLogger = this._injector.get(NgxsUnhandledActionsLogger, null);
      unhandledActionsLogger?.warn(action);
    }
    if (!results.length) {
      results.push(of(void 0));
    }
    return forkJoin(results);
  }
  addToStatesMap(stateClasses) {
    const newStates = [];
    const statesMap = this._statesByName;
    for (const stateClass of stateClasses) {
      const stateName = \u0275getStoreMetadata(stateClass).name;
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        ensureStateNameIsUnique(stateName, stateClass, statesMap);
      }
      const unmountedState = !statesMap[stateName];
      if (unmountedState) {
        newStates.push(stateClass);
        statesMap[stateName] = stateClass;
      }
    }
    return {
      newStates
    };
  }
  addRuntimeInfoToMeta(meta, path) {
    this._statePaths[meta.name] = path;
    meta.path = path;
  }
  hasBeenMountedAndBootstrapped(name, path) {
    const valueIsBootstrappedInInitialState = getValue(this._initialState, path) !== void 0;
    return this._statesByName[name] && valueIsBootstrappedInInitialState;
  }
  hydrateActionMetasMap({
    path,
    actions,
    instance
  }) {
    for (const actionType of Object.keys(actions)) {
      const actionHandlers = actions[actionType].map((actionMeta) => {
        const handlerFn = (ctx, action) => instance[actionMeta.fn](ctx, action);
        return this._actionHandlerFactory.createActionHandler(path, handlerFn, actionMeta.options);
      });
      for (const actionHandler of actionHandlers) {
        this._actionRegistry.register(actionType, actionHandler);
      }
    }
  }
  /** @nocollapse */
  static \u0275fac = function StateFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateFactory)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateFactory,
    factory: _StateFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var Store = class _Store {
  _stateStream = inject(\u0275StateStream);
  _internalStateOperations = inject(InternalStateOperations);
  _config = inject(NgxsConfig);
  _internalExecutionStrategy = inject(InternalNgxsExecutionStrategy);
  _stateFactory = inject(StateFactory);
  /**
   * This is a derived state stream that leaves NGXS execution strategy to emit state changes within the Angular zone,
   * because state is being changed actually within the `<root>` zone, see `InternalDispatcher#dispatchSingle`.
   * All selects would use this stream, and it would call leave only once for any state change across all active selectors.
   */
  _selectableStateStream = this._stateStream.pipe(leaveNgxs(this._internalExecutionStrategy), shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    this.initStateStream();
  }
  /**
   * Dispatches action(s).
   */
  dispatch(actionOrActions) {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      if (
        // If a single action is dispatched and it's nullable.
        actionOrActions == null || // If a list of actions is dispatched and any of the actions are nullable.
        Array.isArray(actionOrActions) && actionOrActions.some((action) => action == null)
      ) {
        const error = new Error("`dispatch()` was called without providing an action.");
        return new Observable((subscriber) => subscriber.error(error));
      }
    }
    return this._internalStateOperations.getRootStateOperations().dispatch(actionOrActions);
  }
  /**
   * Selects a slice of data from the store.
   */
  select(selector) {
    const selectorFn = this.getStoreBoundSelectorFn(selector);
    return this._selectableStateStream.pipe(map(selectorFn), catchError((error) => {
      if (this._config.selectorOptions.suppressErrors && error instanceof TypeError) {
        return of(void 0);
      }
      throw error;
    }), distinctUntilChanged(), leaveNgxs(this._internalExecutionStrategy));
  }
  /**
   * Select one slice of data from the store.
   */
  selectOnce(selector) {
    return this.select(selector).pipe(take(1));
  }
  /**
   * Select a snapshot from the state.
   */
  selectSnapshot(selector) {
    const selectorFn = this.getStoreBoundSelectorFn(selector);
    return selectorFn(this._stateStream.getValue());
  }
  /**
   * Select a signal from the state.
   */
  selectSignal(selector) {
    const selectorFn = this.getStoreBoundSelectorFn(selector);
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      return computed(() => selectorFn(this._stateStream.state()), {
        debugName: "NGXS selectSignal"
      });
    } else {
      return computed(() => selectorFn(this._stateStream.state()));
    }
  }
  /**
   * Allow the user to subscribe to the root of the state
   */
  subscribe(fn) {
    return this._selectableStateStream.pipe(leaveNgxs(this._internalExecutionStrategy)).subscribe(fn);
  }
  /**
   * Return the raw value of the state.
   */
  snapshot() {
    return this._internalStateOperations.getRootStateOperations().getState();
  }
  /**
   * Reset the state to a specific point in time. This method is useful
   * for plugin's who need to modify the state directly or unit testing.
   */
  reset(state) {
    this._internalStateOperations.getRootStateOperations().setState(state);
  }
  getStoreBoundSelectorFn(selector) {
    const makeSelectorFn = getRootSelectorFactory(selector);
    const runtimeContext = this._stateFactory.getRuntimeSelectorContext();
    return makeSelectorFn(runtimeContext);
  }
  initStateStream() {
    const initialStateValue = inject(\u0275INITIAL_STATE_TOKEN);
    const value = this._stateStream.value;
    const storeIsEmpty = !value || Object.keys(value).length === 0;
    if (storeIsEmpty) {
      this._stateStream.next(initialStateValue);
    }
  }
  /** @nocollapse */
  static \u0275fac = function Store_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Store)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Store,
    factory: _Store.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Store, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NGXS_PREBOOT_FNS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_PREBOOT_FNS" : "");
var ROOT_STORE_GUARD = /* @__PURE__ */ new InjectionToken("ROOT_STORE_GUARD", {
  providedIn: "root",
  factory: () => ({
    initialized: false
  })
});
function assertRootStoreNotInitialized() {
  const rootStoreGuard = inject(ROOT_STORE_GUARD);
  if (rootStoreGuard.initialized) {
    throw new Error("provideStore() should only be called once.");
  }
  rootStoreGuard.initialized = true;
}
var SelectFactory = class _SelectFactory {
  static store = null;
  static config = null;
  constructor(store, config2) {
    _SelectFactory.store = store;
    _SelectFactory.config = config2;
    inject(DestroyRef).onDestroy(() => {
      _SelectFactory.store = null;
      _SelectFactory.config = null;
    });
  }
  /** @nocollapse */
  static \u0275fac = function SelectFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectFactory)(\u0275\u0275inject(Store), \u0275\u0275inject(NgxsConfig));
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectFactory,
    factory: _SelectFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: NgxsConfig
  }], null);
})();
var LifecycleStateManager = class _LifecycleStateManager {
  _store = inject(Store);
  _internalStateOperations = inject(InternalStateOperations);
  _stateContextFactory = inject(StateContextFactory);
  _appBootstrappedState = inject(\u0275NgxsAppBootstrappedState);
  _abortController = new AbortController();
  _initStateHasBeenDispatched;
  constructor() {
    inject(DestroyRef).onDestroy(() => this._abortController.abort());
  }
  ngxsBootstrap(action, results) {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      if (action instanceof InitState) {
        this._initStateHasBeenDispatched = true;
      } else if (
        // This is a dev mode-only check that ensures the correct order of
        // state initialization. The `NgxsModule.forRoot` or `provideStore` should
        // always come first, followed by `forFeature` and `provideStates`. If the
        // `UpdateState` is dispatched before the `InitState` is dispatched, it indicates
        // that modules or providers are in an invalid order.
        action instanceof UpdateState && !this._initStateHasBeenDispatched
      ) {
        console.error(getInvalidInitializationOrderMessage(action.addedStates));
      }
    }
    this._internalStateOperations.getRootStateOperations().dispatch(action).pipe(mergeMap(() => {
      if (!results) {
        return EMPTY;
      }
      this._invokeInitOnStates(results.states);
      return this._appBootstrappedState;
    })).subscribe((appBootstrapped) => {
      if (appBootstrapped) {
        this._invokeBootstrapOnStates(results.states);
      }
    });
  }
  _invokeInitOnStates(mappedStores) {
    for (const mappedStore of mappedStores) {
      const instance = mappedStore.instance;
      if (instance.ngxsOnChanges) {
        let previousValue;
        this._store.select((state) => getValue(state, mappedStore.path)).pipe(
          // Ensure initial state is captured
          startWith(void 0),
          // `skip` is using `filter` internally.
          skip(1)
        ).subscribe((currentValue) => {
          const change = new NgxsSimpleChange(previousValue, currentValue, !mappedStore.isInitialised);
          previousValue = currentValue;
          instance.ngxsOnChanges(change);
        });
      }
      instance.ngxsOnInit?.(this._getStateContext(mappedStore));
      mappedStore.isInitialised = true;
    }
  }
  _invokeBootstrapOnStates(mappedStores) {
    for (const mappedStore of mappedStores) {
      const instance = mappedStore.instance;
      instance.ngxsAfterBootstrap?.(this._getStateContext(mappedStore));
    }
  }
  _getStateContext(mappedStore) {
    return this._stateContextFactory.createStateContext(mappedStore.path, this._abortController.signal);
  }
  /** @nocollapse */
  static \u0275fac = function LifecycleStateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LifecycleStateManager)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LifecycleStateManager,
    factory: _LifecycleStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LifecycleStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function rootStoreInitializer() {
  if (typeof ngDevMode !== "undefined" && ngDevMode) {
    assertRootStoreNotInitialized();
  }
  installOnUnhandhedErrorHandler();
  const prebootFns = inject(NGXS_PREBOOT_FNS, {
    optional: true
  }) || [];
  prebootFns.forEach((prebootFn) => prebootFn());
  const factory = inject(StateFactory);
  const internalStateOperations = inject(InternalStateOperations);
  inject(Store);
  inject(SelectFactory);
  const states = inject(ROOT_STATE_TOKEN, {
    optional: true
  }) || [];
  const lifecycleStateManager = inject(LifecycleStateManager);
  const results = factory.addAndReturnDefaults(states);
  internalStateOperations.setStateToTheCurrentWithNew(results);
  factory.connectActionHandlers();
  lifecycleStateManager.ngxsBootstrap(new InitState(), results);
}
function featureStatesInitializer() {
  inject(Store);
  const internalStateOperations = inject(InternalStateOperations);
  const factory = inject(StateFactory);
  const states = inject(FEATURE_STATE_TOKEN, {
    optional: true
  }) || [];
  const lifecycleStateManager = inject(LifecycleStateManager);
  const flattenedStates = states.reduce((total, values) => total.concat(values), []);
  const results = factory.addAndReturnDefaults(flattenedStates);
  if (results.states.length) {
    internalStateOperations.setStateToTheCurrentWithNew(results);
    lifecycleStateManager.ngxsBootstrap(new UpdateState(results.defaults), results);
  }
}
var NGXS_ROOT_STORE_INITIALIZER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_ROOT_STORE_INITIALIZER" : "");
var NGXS_FEATURE_STORE_INITIALIZER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_FEATURE_STORE_INITIALIZER" : "");
var NGXS_ROOT_ENVIRONMENT_INITIALIZER = [{
  provide: NGXS_ROOT_STORE_INITIALIZER,
  useFactory: rootStoreInitializer
}, provideEnvironmentInitializer(() => inject(NGXS_ROOT_STORE_INITIALIZER))];
var NGXS_FEATURE_ENVIRONMENT_INITIALIZER = [{
  provide: NGXS_FEATURE_STORE_INITIALIZER,
  useFactory: featureStatesInitializer
}, provideEnvironmentInitializer(() => inject(NGXS_FEATURE_STORE_INITIALIZER))];
var NgxsRootModule = class _NgxsRootModule {
  constructor() {
    rootStoreInitializer();
  }
  /** @nocollapse */
  static \u0275fac = function NgxsRootModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsRootModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxsRootModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsRootModule, [{
    type: NgModule
  }], () => [], null);
})();
var NgxsFeatureModule = class _NgxsFeatureModule {
  constructor() {
    featureStatesInitializer();
  }
  /** @nocollapse */
  static \u0275fac = function NgxsFeatureModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsFeatureModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxsFeatureModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsFeatureModule, [{
    type: NgModule
  }], () => [], null);
})();
function getRootProviders(states, options) {
  return [...states, {
    provide: ROOT_STATE_TOKEN,
    useValue: states
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    useFactory: () => {
      const appBootstrappedState = inject(\u0275NgxsAppBootstrappedState);
      return () => appBootstrappedState.bootstrap();
    },
    multi: true
  }, {
    provide: NGXS_OPTIONS,
    useValue: options
  }];
}
function getFeatureProviders(states) {
  return [PluginManager, ...states, {
    provide: FEATURE_STATE_TOKEN,
    multi: true,
    useValue: states
  }];
}
var NgxsModule = class _NgxsModule {
  static forRoot(states = [], options = {}) {
    return {
      ngModule: NgxsRootModule,
      providers: getRootProviders(states, options)
    };
  }
  static forFeature(states = []) {
    return {
      ngModule: NgxsFeatureModule,
      providers: getFeatureProviders(states)
    };
  }
  /** @nocollapse */
  static \u0275fac = function NgxsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxsModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsModule, [{
    type: NgModule
  }], null, null);
})();
function Action(actions, options) {
  return (target, name, _descriptor) => {
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      const isStaticMethod = \u0275hasOwnProperty(target, "prototype");
      if (isStaticMethod) {
        throwActionDecoratorError();
      }
    }
    const meta = \u0275ensureStoreMetadata(target.constructor);
    const actionArray = Array.isArray(actions) ? actions : [actions];
    for (const action of actionArray) {
      const type = action.type;
      if (!meta.actions[type]) {
        meta.actions[type] = [];
      }
      meta.actions[type].push({
        fn: name,
        options: options || {},
        type
      });
    }
  };
}
function State(options) {
  return (target) => {
    const stateClass = target;
    const inherited = Object.getPrototypeOf(stateClass);
    const meta = \u0275ensureStoreMetadata(stateClass);
    const mergedOptions = __spreadValues(__spreadValues({}, inherited[\u0275META_OPTIONS_KEY] || {}), options);
    mutateMetaData(meta, inherited, mergedOptions);
    stateClass[\u0275META_OPTIONS_KEY] = mergedOptions;
  };
}
function mutateMetaData(meta, inherited, options) {
  const {
    name,
    defaults,
    children
  } = options;
  const stateName = typeof name === "string" ? name : name?.getName?.() || null;
  if (typeof ngDevMode !== "undefined" && ngDevMode) {
    ensureStateNameIsValid(stateName);
  }
  if (\u0275hasOwnProperty(inherited, \u0275META_KEY)) {
    const inheritedMeta = inherited[\u0275META_KEY] || {};
    meta.actions = __spreadValues(__spreadValues({}, meta.actions), inheritedMeta.actions);
  }
  meta.name = stateName;
  meta.defaults = defaults;
  meta.children = children;
}
var SELECTOR_OPTIONS_META_KEY = "NGXS_SELECTOR_OPTIONS_META";
var selectorOptionsMetaAccessor = {
  getOptions: (target) => {
    return target?.[SELECTOR_OPTIONS_META_KEY] || {};
  },
  defineOptions: (target, options) => {
    if (!target) return;
    target[SELECTOR_OPTIONS_META_KEY] = options;
  }
};
function setupSelectorMetadata(originalFn, creationMetadata) {
  const selectorMetaData = \u0275ensureSelectorMetadata(originalFn);
  selectorMetaData.originalFn = originalFn;
  let getExplicitSelectorOptions = () => ({});
  if (creationMetadata) {
    selectorMetaData.containerClass = creationMetadata.containerClass;
    selectorMetaData.selectorName = creationMetadata.selectorName || null;
    getExplicitSelectorOptions = creationMetadata.getSelectorOptions || getExplicitSelectorOptions;
  }
  const selectorMetaDataClone = __spreadValues({}, selectorMetaData);
  selectorMetaData.getSelectorOptions = () => getLocalSelectorOptions(selectorMetaDataClone, getExplicitSelectorOptions());
  return selectorMetaData;
}
function getLocalSelectorOptions(selectorMetaData, explicitOptions) {
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, selectorOptionsMetaAccessor.getOptions(selectorMetaData.containerClass) || {}), selectorOptionsMetaAccessor.getOptions(selectorMetaData.originalFn) || {}), selectorMetaData.getSelectorOptions() || {}), explicitOptions);
}
function createSelector(selectors, projector, creationMetadata) {
  const memoizedFn = createMemoizedSelectorFn(projector, creationMetadata);
  const selectorMetaData = setupSelectorMetadata(projector, creationMetadata);
  selectorMetaData.makeRootSelector = createRootSelectorFactory(selectorMetaData, selectors, memoizedFn);
  return memoizedFn;
}
function Selector(selectors) {
  return (target, key, descriptor) => {
    descriptor ||= Object.getOwnPropertyDescriptor(target, key);
    const originalFn = descriptor?.value;
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      if (typeof originalFn !== "function") {
        throwSelectorDecoratorError();
      }
    }
    const memoizedFn = createSelector(selectors, originalFn, {
      containerClass: target,
      selectorName: key.toString(),
      getSelectorOptions() {
        return {};
      }
    });
    const newDescriptor = {
      configurable: true,
      get() {
        return memoizedFn;
      },
      originalFn
    };
    return newDescriptor;
  };
}
var ActionDirector = class _ActionDirector {
  _registry = inject(\u0275NgxsActionRegistry);
  _actionHandlerFactory = inject(InternalActionHandlerFactory);
  attachAction(stateToken, Action2, handlerFn, options = {}) {
    const actionHandler = this._actionHandlerFactory.createActionHandler(stateToken.getName(), handlerFn, options);
    const detach = this._registry.register(Action2.type, actionHandler);
    return {
      detach
    };
  }
  /** @nocollapse */
  static \u0275fac = function ActionDirector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionDirector)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ActionDirector,
    factory: _ActionDirector.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionDirector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgxsDevelopmentModule = class _NgxsDevelopmentModule {
  static forRoot(options) {
    return {
      ngModule: _NgxsDevelopmentModule,
      providers: [NgxsUnhandledActionsLogger, {
        provide: NGXS_DEVELOPMENT_OPTIONS,
        useValue: options
      }]
    };
  }
  /** @nocollapse */
  static \u0275fac = function NgxsDevelopmentModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsDevelopmentModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxsDevelopmentModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsDevelopmentModule, [{
    type: NgModule
  }], null, null);
})();
var NoopNgxsExecutionStrategy = class _NoopNgxsExecutionStrategy {
  enter(func) {
    return func();
  }
  leave(func) {
    return func();
  }
  /** @nocollapse */
  static \u0275fac = function NoopNgxsExecutionStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopNgxsExecutionStrategy)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopNgxsExecutionStrategy,
    factory: _NoopNgxsExecutionStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopNgxsExecutionStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideStore(states = [], ...optionsAndFeatures) {
  const features = [];
  let options = {};
  if (optionsAndFeatures.length > 0) {
    if (isEnvironmentProvider(optionsAndFeatures[0])) {
      features.push(...optionsAndFeatures);
    } else {
      options = optionsAndFeatures[0];
      features.push(...optionsAndFeatures.slice(1));
    }
  }
  return makeEnvironmentProviders([...getRootProviders(states, options), NGXS_ROOT_ENVIRONMENT_INITIALIZER, features]);
}
function isEnvironmentProvider(target) {
  return !!target.\u0275providers;
}
function withNgxsPlugin(plugin) {
  return makeEnvironmentProviders([
    \u0275isPluginClass(plugin) ? {
      provide: NGXS_PLUGINS,
      useClass: plugin,
      multi: true
    } : {
      provide: NGXS_PLUGINS,
      useValue: plugin,
      multi: true
    },
    // We should inject the `PluginManager` to retrieve `NGXS_PLUGINS` and
    // register those plugins. The plugin can be added from inside the child
    // route, so the plugin manager should be re-injected.
    provideEnvironmentInitializer(() => inject(PluginManager))
  ]);
}
var REGISTERED_PROVIDERS = new InjectionToken("", {
  providedIn: "root",
  factory: () => {
    const registeredProviders = /* @__PURE__ */ new Set();
    inject(ApplicationRef).onDestroy(() => registeredProviders.clear());
    return registeredProviders;
  }
});

export {
  InitState,
  getActionTypeFromInstance,
  Store,
  Action,
  State,
  Selector,
  provideStore,
  withNgxsPlugin
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.2.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-I5U65RYG.js.map
