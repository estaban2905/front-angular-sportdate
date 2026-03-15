import {
  LeaderboardActions,
  LeaderboardSelectors
} from "./chunk-O2DHEXUC.js";
import {
  Store
} from "./chunk-I5U65RYG.js";
import {
  Award,
  LucideAngularComponent,
  LucideAngularModule,
  Minus,
  Shield,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users
} from "./chunk-BCPD456Q.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GTOIWY6U.js";

// src/app/pages/ranking/ranking.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RankingComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RankingComponent_For_9_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("px-6 py-2 rounded-lg text-sm font-bold transition-all " + (ctx_r2.activeTab === tab_r2 ? "bg-white dark:bg-[#1A1A2E] text-[#FF6B6B] shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2, " ");
  }
}
function RankingComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RankingComponent_Conditional_10_For_2_Template_button_click_0_listener() {
      const filter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeFilter = filter_r5);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all " + (ctx_r2.activeFilter === filter_r5 ? "bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-gray-900 shadow-lg shadow-gray-200 dark:shadow-none scale-105" : "bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r5, " ");
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm " + (entry_r6.rank === 1 ? "bg-yellow-400" : entry_r6.rank === 2 ? "bg-gray-300" : "bg-orange-300"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r6.rank, " ");
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r6.rank);
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275element(1, "i-lucide", 33);
    \u0275\u0275text(2, " Subiendo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r2.trendingUpIcon);
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275element(1, "i-lucide", 33);
    \u0275\u0275text(2, " Bajando ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r2.trendingDownIcon);
  }
}
function RankingComponent_Conditional_10_For_15_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "i-lucide", 33);
    \u0275\u0275text(2, " Igual ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r2.minusIcon);
  }
}
function RankingComponent_Conditional_10_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 19);
    \u0275\u0275conditionalCreate(2, RankingComponent_Conditional_10_For_15_Conditional_2_Template, 2, 3, "div", 6)(3, RankingComponent_Conditional_10_For_15_Conditional_3_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275element(6, "img", 23);
    \u0275\u0275conditionalCreate(7, RankingComponent_Conditional_10_For_15_Conditional_7_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 26)(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28);
    \u0275\u0275conditionalCreate(17, RankingComponent_Conditional_10_For_15_Conditional_17_Template, 3, 1, "span", 29);
    \u0275\u0275conditionalCreate(18, RankingComponent_Conditional_10_For_15_Conditional_18_Template, 3, 1, "span", 30);
    \u0275\u0275conditionalCreate(19, RankingComponent_Conditional_10_For_15_Conditional_19_Template, 3, 1, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 32);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const \u0275$index_44_r7 = ctx.$index;
    \u0275\u0275classMap("grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors animate-slide-in " + (entry_r6.id === "me" ? "bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-50 dark:hover:bg-orange-900/20" : ""));
    \u0275\u0275styleProp("animation-delay", \u0275$index_44_r7 * 50 + "ms");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entry_r6.rank <= 3 ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", entry_r6.avatar, \u0275\u0275sanitizeUrl)("alt", entry_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r6.id === "me" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("font-bold transition-colors " + (entry_r6.id === "me" ? "text-[#FF6B6B]" : "text-gray-900 dark:text-white"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", entry_r6.name, " ", entry_r6.id === "me" ? "(T\xFA)" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.sport);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Lvl ", entry_r6.level);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entry_r6.trend === "up" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r6.trend === "down" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r6.trend === "same" ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r6.xp.toLocaleString(), " ");
  }
}
function RankingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, RankingComponent_Conditional_10_For_2_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8, "Deportista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10, "Nivel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275text(12, "XP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275repeaterCreate(14, RankingComponent_Conditional_10_For_15_Template, 22, 18, "div", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filters);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.leaderboard());
  }
}
function RankingComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275element(2, "i-lucide", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37)(5, "div")(6, "h3", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 41);
    \u0275\u0275text(13, "pts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 42)(15, "span", 43);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 44);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 45);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 46);
    \u0275\u0275element(22, "i-lucide", 33);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("w-16 h-16 rounded-2xl bg-gradient-to-br " + team_r8.avatar + " flex items-center justify-center text-2xl shadow-inner");
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r2.shieldIcon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(team_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r8.sport);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", team_r8.points, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", team_r8.wins, "W");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", team_r8.losses, "L");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", team_r8.draws, "D");
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r2.usersIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", team_r8.members, " ");
  }
}
function RankingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, RankingComponent_Conditional_11_For_2_Template, 24, 11, "div", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.teams());
  }
}
function RankingComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div");
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 51)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h3", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 54);
    \u0275\u0275element(15, "i-lucide", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 56)(18, "div", 57)(19, "div", 58);
    \u0275\u0275text(20, "Ronda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 59);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 57)(24, "div", 58);
    \u0275\u0275text(25, "Equipos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 59);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 60);
    \u0275\u0275text(29, "Ver Detalles");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const champ_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("absolute left-0 top-0 bottom-0 w-2 " + champ_r9.color);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(champ_r9.sport);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white " + (champ_r9.status === "En curso" ? "bg-green-500" : champ_r9.status === "Inscripciones" ? "bg-blue-500" : "bg-gray-500"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", champ_r9.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(champ_r9.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(champ_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r2.awardIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Premio: ", champ_r9.prize, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(champ_r9.round);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(champ_r9.teams);
  }
}
function RankingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, RankingComponent_Conditional_12_For_2_Template, 30, 12, "div", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.championships());
  }
}
var RankingComponent = class _RankingComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  trophyIcon = Trophy;
  trendingUpIcon = TrendingUp;
  trendingDownIcon = TrendingDown;
  minusIcon = Minus;
  usersIcon = Users;
  awardIcon = Award;
  shieldIcon = Shield;
  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  store = inject(Store);
  leaderboard = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  teams = this.store.selectSignal(LeaderboardSelectors.teams);
  championships = this.store.selectSignal(LeaderboardSelectors.championships);
  // ---------------------------------------------------------------------------
  // Tab / filter state
  // ---------------------------------------------------------------------------
  tabs = ["Individual", "Equipos", "Campeonatos"];
  filters = ["General", "Running", "F\xFAtbol", "Padel", "Yoga"];
  activeTab = "Individual";
  activeFilter = "General";
  ngOnInit() {
    this.store.dispatch([
      new LeaderboardActions.LoadLeaderboard(),
      new LeaderboardActions.LoadTeams(),
      new LeaderboardActions.LoadChampionships()
    ]);
  }
  static \u0275fac = function RankingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RankingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RankingComponent, selectors: [["app-ranking"]], decls: 13, vars: 3, consts: [[1, "p-6", "pb-24", "md:p-8", "max-w-5xl", "mx-auto"], [1, "mb-8", "text-center", "md:text-left"], [1, "text-3xl", "font-black", "text-gray-900", "dark:text-white", "mb-2", "transition-colors"], [1, "text-gray-500", "dark:text-gray-400", "transition-colors"], [1, "flex", "justify-center", "md:justify-start", "mb-6"], [1, "bg-gray-100", "dark:bg-[#22223A]", "p-1", "rounded-xl", "inline-flex"], [3, "class"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "space-y-4"], [3, "click"], [1, "flex", "gap-2", "overflow-x-auto", "no-scrollbar", "pb-4", "mb-6", "justify-center", "md:justify-start"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "overflow-hidden", "transition-all", "duration-300"], [1, "grid", "grid-cols-12", "gap-4", "p-4", "bg-gray-50/50", "dark:bg-[#22223A]", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider", "border-b", "border-gray-100", "dark:border-[#2D2D4A]", "transition-colors"], [1, "col-span-2", "md:col-span-1", "text-center"], [1, "col-span-6", "md:col-span-5"], [1, "col-span-2", "md:col-span-3", "text-center"], [1, "col-span-2", "md:col-span-3", "text-right", "pr-4"], [1, "divide-y", "divide-gray-50", "dark:divide-[#2D2D4A]"], [3, "class", "animationDelay"], [1, "col-span-2", "md:col-span-1", "flex", "justify-center"], [1, "font-bold", "text-gray-500", "dark:text-gray-400", "text-lg", "transition-colors"], [1, "col-span-6", "md:col-span-5", "flex", "items-center", "space-x-3"], [1, "relative"], [1, "w-10", "h-10", "rounded-full", "bg-gray-100", "dark:bg-[#2D2D4A]", 3, "src", "alt"], [1, "absolute", "-top-1", "-right-1", "w-3", "h-3", "bg-green-500", "rounded-full", "border-2", "border-white", "dark:border-[#1A1A2E]"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-medium", "transition-colors"], [1, "col-span-2", "md:col-span-3", "flex", "flex-col", "md:flex-row", "items-center", "justify-center", "md:space-x-2"], [1, "font-bold", "text-gray-700", "dark:text-gray-300", "bg-gray-100", "dark:bg-[#22223A]", "px-2", "py-0.5", "rounded", "text-xs", "transition-colors"], [1, "hidden", "md:flex", "items-center", "text-xs", "font-semibold", "mt-1", "md:mt-0"], [1, "text-green-500", "flex", "items-center"], [1, "text-red-500", "flex", "items-center"], [1, "text-gray-400", "dark:text-gray-500", "flex", "items-center"], [1, "col-span-2", "md:col-span-3", "text-right", "pr-4", "font-mono", "font-bold", "text-gray-900", "dark:text-white", "transition-colors"], [1, "w-3", "h-3", "mr-1", 3, "img"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-5", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "flex", "items-center", "gap-4", "hover:shadow-md", "transition-all"], [1, "w-8", "h-8", "text-white", 3, "img"], [1, "flex-1"], [1, "flex", "justify-between", "items-start"], [1, "font-bold", "text-lg", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-medium"], [1, "text-2xl", "font-black", "text-gray-900", "dark:text-white"], [1, "text-xs", "font-bold", "text-gray-400"], [1, "flex", "items-center", "gap-4", "mt-3", "text-xs", "font-bold", "text-gray-500", "dark:text-gray-400"], [1, "text-green-500"], [1, "text-red-500"], [1, "text-gray-400"], [1, "ml-auto", "flex", "items-center"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-6", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "relative", "overflow-hidden", "group"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "gap-6"], [1, "flex", "items-center", "gap-4"], [1, "w-16", "h-16", "bg-gray-50", "dark:bg-[#22223A]", "rounded-2xl", "flex", "items-center", "justify-center", "text-3xl"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-xs", "text-gray-400", "font-bold"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "group-hover:text-[#FF6B6B]", "transition-colors"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "flex", "items-center", "mt-1"], [1, "w-4", "h-4", "mr-1", "text-yellow-500", 3, "img"], [1, "flex-1", "flex", "justify-between", "items-center", "md:justify-end", "md:gap-8", "border-t", "md:border-t-0", "border-gray-100", "dark:border-[#2D2D4A]", "pt-4", "md:pt-0"], [1, "text-center"], [1, "text-xs", "text-gray-400", "font-bold", "uppercase"], [1, "font-bold", "text-gray-900", "dark:text-white"], [1, "px-4", "py-2", "bg-gray-900", "dark:bg-[#22223A]", "text-white", "rounded-lg", "font-bold", "text-sm", "hover:bg-[#FF6B6B]", "dark:hover:bg-[#FF6B6B]", "transition-colors"]], template: function RankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u{1F3C6} Ranking Semanal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Compite con otros deportistas y sube de nivel.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275repeaterCreate(8, RankingComponent_For_9_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, RankingComponent_Conditional_10_Template, 16, 0);
      \u0275\u0275conditionalCreate(11, RankingComponent_Conditional_11_Template, 3, 0, "div", 7);
      \u0275\u0275conditionalCreate(12, RankingComponent_Conditional_12_Template, 3, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab === "Individual" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "Equipos" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "Campeonatos" ? 12 : -1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.animate-slide-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=ranking.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RankingComponent, [{
    type: Component,
    args: [{ selector: "app-ranking", imports: [LucideAngularModule], template: `<!-- ranking.component.html
     Ranking / Leaderboard page template.
     Tabs: Individual (table), Equipos (team cards), Campeonatos (tournament cards).
-->

<div class="p-6 pb-24 md:p-8 max-w-5xl mx-auto">

  <!-- =====================================================================
       Header
       ===================================================================== -->
  <header class="mb-8 text-center md:text-left">
    <h1 class="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors">\u{1F3C6} Ranking Semanal</h1>
    <p class="text-gray-500 dark:text-gray-400 transition-colors">Compite con otros deportistas y sube de nivel.</p>
  </header>

  <!-- =====================================================================
       Main Tabs
       ===================================================================== -->
  <div class="flex justify-center md:justify-start mb-6">
    <div class="bg-gray-100 dark:bg-[#22223A] p-1 rounded-xl inline-flex">
      @for (tab of tabs; track tab) {
        <button (click)="activeTab = tab"
          [class]="'px-6 py-2 rounded-lg text-sm font-bold transition-all ' +
            (activeTab === tab ? 'bg-white dark:bg-[#1A1A2E] text-[#FF6B6B] shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200')">
          {{ tab }}
        </button>
      }
    </div>
  </div>

  <!-- =====================================================================
       Individual Tab
       ===================================================================== -->
  @if (activeTab === 'Individual') {

    <!-- Filters -->
    <div class="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 justify-center md:justify-start">
      @for (filter of filters; track filter) {
        <button (click)="activeFilter = filter"
          [class]="'px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ' +
            (activeFilter === filter ? 'bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-gray-900 shadow-lg shadow-gray-200 dark:shadow-none scale-105' : 'bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]')">
          {{ filter }}
        </button>
      }
    </div>

    <!-- Leaderboard Table -->
    <div class="bg-white dark:bg-[#1A1A2E] rounded-3xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] overflow-hidden transition-all duration-300">
      <!-- Table Header -->
      <div class="grid grid-cols-12 gap-4 p-4 bg-gray-50/50 dark:bg-[#22223A] text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-[#2D2D4A] transition-colors">
        <div class="col-span-2 md:col-span-1 text-center">#</div>
        <div class="col-span-6 md:col-span-5">Deportista</div>
        <div class="col-span-2 md:col-span-3 text-center">Nivel</div>
        <div class="col-span-2 md:col-span-3 text-right pr-4">XP</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y divide-gray-50 dark:divide-[#2D2D4A]">
        @for (entry of leaderboard(); track entry.id; let i = $index) {
          <div [class]="'grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors animate-slide-in ' +
            (entry.id === 'me' ? 'bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-50 dark:hover:bg-orange-900/20' : '')"
            [style.animationDelay]="i * 50 + 'ms'">

            <!-- Rank -->
            <div class="col-span-2 md:col-span-1 flex justify-center">
              @if (entry.rank <= 3) {
                <div [class]="'w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm ' +
                  (entry.rank === 1 ? 'bg-yellow-400' : entry.rank === 2 ? 'bg-gray-300' : 'bg-orange-300')">
                  {{ entry.rank }}
                </div>
              } @else {
                <span class="font-bold text-gray-500 dark:text-gray-400 text-lg transition-colors">{{ entry.rank }}</span>
              }
            </div>

            <!-- User Info -->
            <div class="col-span-6 md:col-span-5 flex items-center space-x-3">
              <div class="relative">
                <img [src]="entry.avatar" [alt]="entry.name" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2D2D4A]" />
                @if (entry.id === 'me') {
                  <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]"></div>
                }
              </div>
              <div>
                <h3 [class]="'font-bold transition-colors ' + (entry.id === 'me' ? 'text-[#FF6B6B]' : 'text-gray-900 dark:text-white')">
                  {{ entry.name }} {{ entry.id === 'me' ? '(T\xFA)' : '' }}
                </h3>
                <span class="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors">{{ entry.sport }}</span>
              </div>
            </div>

            <!-- Level & Trend -->
            <div class="col-span-2 md:col-span-3 flex flex-col md:flex-row items-center justify-center md:space-x-2">
              <span class="font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#22223A] px-2 py-0.5 rounded text-xs transition-colors">Lvl {{ entry.level }}</span>
              <div class="hidden md:flex items-center text-xs font-semibold mt-1 md:mt-0">
                @if (entry.trend === 'up') {
                  <span class="text-green-500 flex items-center">
                    <i-lucide [img]="trendingUpIcon" class="w-3 h-3 mr-1"></i-lucide> Subiendo
                  </span>
                }
                @if (entry.trend === 'down') {
                  <span class="text-red-500 flex items-center">
                    <i-lucide [img]="trendingDownIcon" class="w-3 h-3 mr-1"></i-lucide> Bajando
                  </span>
                }
                @if (entry.trend === 'same') {
                  <span class="text-gray-400 dark:text-gray-500 flex items-center">
                    <i-lucide [img]="minusIcon" class="w-3 h-3 mr-1"></i-lucide> Igual
                  </span>
                }
              </div>
            </div>

            <!-- XP -->
            <div class="col-span-2 md:col-span-3 text-right pr-4 font-mono font-bold text-gray-900 dark:text-white transition-colors">
              {{ entry.xp.toLocaleString() }}
            </div>
          </div>
        }
      </div>
    </div>
  }

  <!-- =====================================================================
       Equipos Tab
       ===================================================================== -->
  @if (activeTab === 'Equipos') {
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      @for (team of teams(); track team.id) {
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex items-center gap-4 hover:shadow-md transition-all">
          <div [class]="'w-16 h-16 rounded-2xl bg-gradient-to-br ' + team.avatar + ' flex items-center justify-center text-2xl shadow-inner'">
            <i-lucide [img]="shieldIcon" class="w-8 h-8 text-white"></i-lucide>
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-bold text-lg text-gray-900 dark:text-white">{{ team.name }}</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ team.sport }}</p>
              </div>
              <span class="text-2xl font-black text-gray-900 dark:text-white">{{ team.points }} <span class="text-xs font-bold text-gray-400">pts</span></span>
            </div>
            <div class="flex items-center gap-4 mt-3 text-xs font-bold text-gray-500 dark:text-gray-400">
              <span class="text-green-500">{{ team.wins }}W</span>
              <span class="text-red-500">{{ team.losses }}L</span>
              <span class="text-gray-400">{{ team.draws }}D</span>
              <span class="ml-auto flex items-center">
                <i-lucide [img]="usersIcon" class="w-3 h-3 mr-1"></i-lucide> {{ team.members }}
              </span>
            </div>
          </div>
        </div>
      }
    </div>
  }

  <!-- =====================================================================
       Campeonatos Tab
       ===================================================================== -->
  @if (activeTab === 'Campeonatos') {
    <div class="space-y-4">
      @for (champ of championships(); track champ.id) {
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] relative overflow-hidden group">
          <div [class]="'absolute left-0 top-0 bottom-0 w-2 ' + champ.color"></div>
          <div class="flex flex-col md:flex-row md:items-center gap-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-gray-50 dark:bg-[#22223A] rounded-2xl flex items-center justify-center text-3xl">{{ champ.sport }}</div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span [class]="'px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white ' +
                    (champ.status === 'En curso' ? 'bg-green-500' : champ.status === 'Inscripciones' ? 'bg-blue-500' : 'bg-gray-500')">
                    {{ champ.status }}
                  </span>
                  <span class="text-xs text-gray-400 font-bold">{{ champ.startDate }}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">{{ champ.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  <i-lucide [img]="awardIcon" class="w-4 h-4 mr-1 text-yellow-500"></i-lucide> Premio: {{ champ.prize }}
                </p>
              </div>
            </div>
            <div class="flex-1 flex justify-between items-center md:justify-end md:gap-8 border-t md:border-t-0 border-gray-100 dark:border-[#2D2D4A] pt-4 md:pt-0">
              <div class="text-center">
                <div class="text-xs text-gray-400 font-bold uppercase">Ronda</div>
                <div class="font-bold text-gray-900 dark:text-white">{{ champ.round }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-400 font-bold uppercase">Equipos</div>
                <div class="font-bold text-gray-900 dark:text-white">{{ champ.teams }}</div>
              </div>
              <button class="px-4 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-lg font-bold text-sm hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] transition-colors">Ver Detalles</button>
            </div>
          </div>
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/pages/ranking/ranking.component.scss */\n.animate-slide-in {\n  animation: slideIn 0.3s ease-out both;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=ranking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RankingComponent, { className: "RankingComponent", filePath: "src/app/pages/ranking/ranking.component.ts", lineNumber: 20 });
})();
export {
  RankingComponent
};
//# sourceMappingURL=chunk-ZISVZCNH.js.map
