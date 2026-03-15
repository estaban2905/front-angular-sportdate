import {
  UserActions,
  UserSelectors
} from "./chunk-AUMLN46Z.js";
import {
  EventsActions,
  EventsSelectors
} from "./chunk-YV7A4QU5.js";
import {
  LeaderboardActions,
  LeaderboardSelectors
} from "./chunk-O2DHEXUC.js";
import {
  Store
} from "./chunk-I5U65RYG.js";
import {
  Activity,
  Calendar,
  ChevronRight,
  Flame,
  Heart,
  LucideAngularComponent,
  LucideAngularModule,
  MapPin,
  Plus,
  Search,
  Target,
  TrendingUp,
  Trophy
} from "./chunk-BCPD456Q.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GTOIWY6U.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function DashboardComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "div", 81)(5, "h3", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 67)(10, "div", 84);
    \u0275\u0275element(11, "div", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 86);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r2.sportEmoji, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", c_r2.xpReward, " XP");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", c_r2.progress / c_r2.total * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r2.progress, "/", c_r2.total);
  }
}
function DashboardComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 87);
    \u0275\u0275elementStart(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const count_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap($index_r4 === ctx_r4.todayIndex ? "bg-[#FF6B6B]" : "bg-gray-100 dark:bg-[#2D2D4A] group-hover:bg-gray-200 dark:group-hover:bg-[#3F3F5F]");
    \u0275\u0275styleProp("height", count_r3 / ctx_r4.maxActivity * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap($index_r4 === ctx_r4.todayIndex ? "text-[#FF6B6B]" : "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.days[$index_r4], " ");
  }
}
function DashboardComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div")(2, "div", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const profile_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("w-16 h-16 rounded-2xl bg-gradient-to-br " + profile_r6.imageGradient + " p-0.5 transition-transform group-hover:scale-105");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", profile_r6.emoji, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", profile_r6.compatibility, "%");
  }
}
function DashboardComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 92)(2, "span", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 95)(7, "h4", 96);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 97);
    \u0275\u0275element(10, "lucide-icon", 98);
    \u0275\u0275elementStart(11, "span", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r7.date.split(" ")[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.date.split(" ")[1]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r4.MapPinIcon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.location);
  }
}
function DashboardComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 67)(2, "div", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 101);
    \u0275\u0275elementStart(5, "span", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 103);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    const \u0275$index_249_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275$index_249_r9 === 0 ? "bg-yellow-400" : \u0275$index_249_r9 === 1 ? "bg-gray-300" : "bg-orange-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r8.rank, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", u_r8.avatar, \u0275\u0275sanitizeUrl)("alt", u_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r8.xp, " XP");
  }
}
function DashboardComponent_For_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105)(4, "h4", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 107);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(act_r10.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", act_r10.icon, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r10.time);
  }
}
var DashboardComponent = class _DashboardComponent {
  // ---------------------------------------------------------------------------
  // Lucide icon references
  // ---------------------------------------------------------------------------
  FlameIcon = Flame;
  TrophyIcon = Trophy;
  CalendarIcon = Calendar;
  MapPinIcon = MapPin;
  TrendingUpIcon = TrendingUp;
  TargetIcon = Target;
  ActivityIcon = Activity;
  HeartIcon = Heart;
  SearchIcon = Search;
  PlusIcon = Plus;
  ChevronRightIcon = ChevronRight;
  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  store = inject(Store);
  userStats = this.store.selectSignal(UserSelectors.userStats);
  challenges = this.store.selectSignal(EventsSelectors.challenges);
  profiles = this.store.selectSignal(UserSelectors.profiles);
  leaderboard = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  events = this.store.selectSignal(EventsSelectors.events);
  eventsSlice = computed(() => this.events().slice(0, 3), ...ngDevMode ? [{ debugName: "eventsSlice" }] : []);
  leaderboardSlice = computed(() => this.leaderboard().slice(0, 3), ...ngDevMode ? [{ debugName: "leaderboardSlice" }] : []);
  // ---------------------------------------------------------------------------
  // Static/derived display data
  // ---------------------------------------------------------------------------
  weeklyActivity = [3, 5, 2, 7, 4, 8, 1];
  days = ["L", "M", "X", "J", "V", "S", "D"];
  todayIndex = 5;
  circleC = 2 * Math.PI * 33;
  get weeklyTotal() {
    return this.weeklyActivity.reduce((a, b) => a + b, 0);
  }
  get maxActivity() {
    return Math.max(...this.weeklyActivity);
  }
  get xpPct() {
    const stats = this.userStats();
    return stats ? Math.round(stats.xp / 3e3 * 100) : 0;
  }
  /** Quick-stat cards derived from the store signal. */
  stats = computed(() => {
    const s = this.userStats();
    if (!s)
      return [];
    return [
      { label: "Partidos", value: s.matchesPlayed, emoji: "\u26BD" },
      { label: "Eventos", value: s.eventsAttended, emoji: "\u{1F4C5}" },
      { label: "Rating", value: s.rating, emoji: "\u2B50" },
      { label: "Racha", value: `${s.streak}d`, emoji: "\u{1F525}" }
    ];
  }, ...ngDevMode ? [{ debugName: "stats" }] : []);
  recentActivity = [
    { id: 1, title: "Completaste Running 5k", time: "Hace 2h", icon: "\u{1F3C3}", bg: "bg-green-100 dark:bg-green-900/20" },
    { id: 2, title: "Nuevo match con Camila", time: "Hace 5h", icon: "\u2764\uFE0F", bg: "bg-rose-100 dark:bg-rose-900/20" },
    { id: 3, title: "Yoga al Atardecer", time: "Ayer", icon: "\u{1F9D8}", bg: "bg-purple-100 dark:bg-purple-900/20" },
    { id: 4, title: "Subiste al Nivel 12", time: "Hace 2 d\xEDas", icon: "\u{1F3C6}", bg: "bg-yellow-100 dark:bg-yellow-900/20" }
  ];
  ngOnInit() {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadProfiles(),
      new EventsActions.LoadEvents(),
      new EventsActions.LoadChallenges(),
      new LeaderboardActions.LoadLeaderboard()
    ]);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 122, vars: 21, consts: [[1, "p-4", "pb-28", "md:p-8", "md:pb-10", "max-w-7xl", "mx-auto", "space-y-6"], [1, "relative", "overflow-hidden", "rounded-3xl", "bg-gradient-to-br", "from-[#FF6B6B]", "to-[#FF8E8E]", "text-white", "p-6", "md:p-8", "shadow-xl", "shadow-rose-200", "dark:shadow-rose-900/20", "card-in"], [1, "absolute", "-top-20", "-right-20", "w-72", "h-72", "bg-white/10", "rounded-full", "blur-3xl", "pointer-events-none"], [1, "absolute", "-bottom-12", "-left-12", "w-52", "h-52", "bg-yellow-300/20", "rounded-full", "blur-2xl", "pointer-events-none"], [1, "relative", "flex", "flex-col", "md:flex-row", "items-start", "md:items-center", "justify-between", "gap-6"], [1, "flex", "items-center", "gap-5"], [1, "relative", "flex-shrink-0"], [1, "w-20", "h-20", "rounded-full", "border-4", "border-white/30", "overflow-hidden", "bg-white/20"], ["src", "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "alt", "Felix", 1, "w-full", "h-full", "object-cover"], [1, "absolute", "-bottom-1", "-right-1", "bg-yellow-400", "text-yellow-900", "text-[10px]", "font-black", "px-2", "py-0.5", "rounded-lg", "border-2", "border-white/60", "rotate-6", "shadow-sm"], [1, "text-rose-200", "text-sm", "font-semibold"], [1, "text-3xl", "md:text-4xl", "font-black", "leading-none"], [1, "inline-flex", "items-center", "gap-1", "mt-2", "text-xs", "font-bold", "bg-white/20", "backdrop-blur-sm", "px-3", "py-1", "rounded-full"], [1, "w-3.5", "h-3.5", "text-yellow-300", 3, "img"], [1, "flex", "items-center", "gap-5", "bg-white/15", "border", "border-white/20", "backdrop-blur-sm", "rounded-2xl", "px-5", "py-4", "w-full", "md:w-auto", "justify-between", "md:justify-start"], [1, "text-center"], [1, "text-[10px]", "text-rose-200", "font-bold", "uppercase", "tracking-wider", "mb-1"], [1, "text-3xl", "font-black"], [1, "relative", "w-20", "h-20", "flex-shrink-0"], ["viewBox", "0 0 80 80", 1, "w-full", "h-full", "-rotate-90"], ["cx", "40", "cy", "40", "r", "33", "stroke", "white", "stroke-opacity", "0.2", "stroke-width", "6", "fill", "none"], ["cx", "40", "cy", "40", "r", "33", "stroke", "white", "stroke-width", "6", "fill", "none", "stroke-linecap", "round"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-sm", "font-bold"], [1, "text-right"], [1, "text-xl", "font-black"], [1, "text-xs", "text-rose-200", "font-medium"], [1, "grid", "grid-cols-3", "gap-3", "card-in", 2, "animation-delay", "60ms"], [1, "flex", "flex-col", "items-center", "gap-2", "p-4", "bg-[#FF6B6B]", "text-white", "rounded-2xl", "font-bold", "text-xs", "md:text-sm", "hover:bg-[#e85555]", "active:scale-95", "transition-all", "shadow-lg", "shadow-rose-200", "dark:shadow-rose-900/20"], [1, "w-6", "h-6", 3, "img"], [1, "flex", "flex-col", "items-center", "gap-2", "p-4", "bg-white", "dark:bg-[#1A1A2E]", "text-gray-800", "dark:text-white", "rounded-2xl", "font-bold", "text-xs", "md:text-sm", "border", "border-gray-200", "dark:border-[#2D2D4A]", "hover:border-[#FF6B6B]", "active:scale-95", "transition-all"], [1, "flex", "flex-col", "items-center", "gap-2", "p-4", "bg-white", "dark:bg-[#1A1A2E]", "text-gray-800", "dark:text-white", "rounded-2xl", "font-bold", "text-xs", "md:text-sm", "border", "border-gray-200", "dark:border-[#2D2D4A]", "hover:border-yellow-400", "active:scale-95", "transition-all"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "card-in", 2, "animation-delay", "100ms"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-4", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "flex", "items-center", "gap-3"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "card-in", 2, "animation-delay", "140ms"], [1, "flex", "items-center", "justify-between", "px-5", "pt-5", "pb-4", "border-b", "border-gray-50", "dark:border-[#2D2D4A]"], [1, "font-black", "text-gray-900", "dark:text-white", "text-lg", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "text-yellow-500", 3, "img"], [1, "divide-y", "divide-gray-50", "dark:divide-[#2D2D4A]"], [1, "flex", "items-center", "gap-4", "p-4", "hover:bg-gray-50", "dark:hover:bg-[#22223A]", "transition-colors"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "p-5", "card-in", 2, "animation-delay", "180ms"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "w-5", "h-5", "text-teal-500", 3, "img"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "mt-0.5"], [1, "text-2xl", "font-black", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-400", "font-medium"], [1, "flex", "items-end", "gap-2", "h-28"], [1, "flex-1", "flex", "flex-col", "items-center", "gap-1.5", "group", "cursor-pointer"], [1, "card-in", 2, "animation-delay", "220ms"], [1, "font-black", "text-gray-900", "dark:text-white", "text-lg", "mb-3", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "text-rose-500", 3, "img"], [1, "flex", "gap-3", "overflow-x-auto", "no-scrollbar", "pb-2"], [1, "flex-shrink-0", "flex", "flex-col", "items-center", "gap-2", "cursor-pointer", "group"], [1, "flex-shrink-0", "w-16", "h-16", "rounded-2xl", "border-2", "border-dashed", "border-gray-200", "dark:border-[#2D2D4A]", "flex", "items-center", "justify-center", "text-gray-400", "hover:border-[#FF6B6B]", "hover:text-[#FF6B6B]", "transition-colors", "cursor-pointer"], [1, "space-y-6"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "card-in", 2, "animation-delay", "260ms"], [1, "font-black", "text-gray-900", "dark:text-white", "flex", "items-center", "gap-2"], [1, "w-4", "h-4", "text-gray-400", 3, "img"], [1, "text-xs", "font-bold", "text-[#FF6B6B]", "hover:underline"], [1, "p-4", "space-y-4"], [1, "flex", "gap-3", "items-start", "group", "cursor-pointer"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "card-in", 2, "animation-delay", "300ms"], [1, "w-4", "h-4", "text-yellow-500", 3, "img"], [1, "p-4", "space-y-3"], [1, "flex", "items-center", "justify-between"], [1, "pt-3", "border-t", "border-gray-50", "dark:border-[#2D2D4A]", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-6", "h-6", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-gray-500", "dark:text-gray-400"], ["src", "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "alt", "T\xFA", 1, "w-8", "h-8", "rounded-full"], [1, "font-bold", "text-sm", "text-[#FF6B6B]"], [1, "text-xs", "font-mono", "font-bold", "text-gray-900", "dark:text-white"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "card-in", 2, "animation-delay", "340ms"], [1, "px-5", "pt-5", "pb-4", "border-b", "border-gray-50", "dark:border-[#2D2D4A]"], [1, "w-4", "h-4", "text-blue-500", 3, "img"], [1, "flex", "items-start", "gap-3"], [1, "text-2xl"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white", "leading-none"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-semibold"], [1, "w-11", "h-11", "rounded-xl", "bg-orange-50", "dark:bg-orange-900/20", "flex", "items-center", "justify-center", "text-xl", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "flex", "justify-between", "items-start", "mb-1.5"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "truncate", "pr-2"], [1, "text-xs", "font-bold", "text-yellow-600", "dark:text-yellow-400", "bg-yellow-50", "dark:bg-yellow-900/20", "px-2", "py-0.5", "rounded-md", "whitespace-nowrap", "flex-shrink-0"], [1, "flex-1", "h-1.5", "bg-gray-100", "dark:bg-[#2D2D4A]", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-gradient-to-r", "from-[#FF6B6B]", "to-[#FF8E8E]", "rounded-full", "transition-all", "duration-700"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-semibold", "whitespace-nowrap"], [1, "w-full", "rounded-t-lg", "transition-all", "duration-500"], [1, "text-xs", "font-bold"], [1, "w-full", "h-full", "bg-white/20", "backdrop-blur-sm", "rounded-[14px]", "flex", "items-center", "justify-center", "text-3xl"], [1, "text-xs", "font-bold", "text-gray-700", "dark:text-gray-300"], [1, "text-[10px]", "font-bold", "text-green-600", "bg-green-50", "dark:bg-green-900/20", "px-1.5", "py-0.5", "rounded-md"], [1, "flex", "flex-col", "items-center", "justify-center", "w-12", "h-12", "rounded-xl", "bg-gray-50", "dark:bg-[#22223A]", "border", "border-gray-100", "dark:border-[#2D2D4A]", "group-hover:border-[#FF6B6B]", "transition-colors", "flex-shrink-0"], [1, "text-[10px]", "text-gray-400", "font-bold", "uppercase", "leading-none"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white", "leading-tight"], [1, "min-w-0", "pt-0.5"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "leading-snug", "group-hover:text-[#FF6B6B]", "transition-colors"], [1, "flex", "items-center", "text-xs", "text-gray-500", "dark:text-gray-400", "mt-0.5"], [1, "w-3", "h-3", "mr-1", 3, "img"], [1, "truncate"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-black", "text-white", "flex-shrink-0"], [1, "w-8", "h-8", "rounded-full", "bg-gray-100", "dark:bg-[#2D2D4A]", 3, "src", "alt"], [1, "font-bold", "text-sm", "text-gray-900", "dark:text-white"], [1, "text-xs", "font-mono", "font-bold", "text-gray-500", "dark:text-gray-400"], [1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", "text-base"], [1, "min-w-0", "flex-1"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "leading-snug"], [1, "text-xs", "text-gray-400", "dark:text-gray-500"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div")(12, "p", 10);
      \u0275\u0275text(13, "Buenas tardes,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1", 11);
      \u0275\u0275text(15, "Felix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275element(17, "lucide-icon", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "div", 16);
      \u0275\u0275text(22, "Nivel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 19);
      \u0275\u0275element(27, "circle", 20)(28, "circle", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 22);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 23)(32, "div", 16);
      \u0275\u0275text(33, "Siguiente nivel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 24);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 25);
      \u0275\u0275text(37, "XP restante");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "button", 27);
      \u0275\u0275element(40, "lucide-icon", 28);
      \u0275\u0275text(41, " Buscar Match ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 29);
      \u0275\u0275element(43, "lucide-icon", 28);
      \u0275\u0275text(44, " Crear Evento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 30);
      \u0275\u0275element(46, "lucide-icon", 28);
      \u0275\u0275text(47, " Ver Retos ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 31);
      \u0275\u0275repeaterCreate(49, DashboardComponent_For_50_Template, 8, 3, "div", 32, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 33)(52, "div", 34)(53, "div", 35)(54, "div", 36)(55, "h2", 37);
      \u0275\u0275element(56, "lucide-icon", 38);
      \u0275\u0275text(57, " Retos en Progreso ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 39);
      \u0275\u0275repeaterCreate(59, DashboardComponent_For_60_Template, 14, 7, "div", 40, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 41)(62, "div", 42)(63, "div")(64, "h2", 37);
      \u0275\u0275element(65, "lucide-icon", 43);
      \u0275\u0275text(66, " Tu Semana ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 44);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 23)(70, "div", 45);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 46);
      \u0275\u0275text(73, "total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 47);
      \u0275\u0275repeaterCreate(75, DashboardComponent_For_76_Template, 4, 7, "div", 48, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 49)(78, "h2", 50);
      \u0275\u0275element(79, "lucide-icon", 51);
      \u0275\u0275text(80, " Matches Recientes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 52);
      \u0275\u0275repeaterCreate(82, DashboardComponent_For_83_Template, 8, 5, "div", 53, _forTrack1);
      \u0275\u0275elementStart(84, "div", 54);
      \u0275\u0275element(85, "lucide-icon", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 55)(87, "div", 56)(88, "div", 36)(89, "h2", 57);
      \u0275\u0275element(90, "lucide-icon", 58);
      \u0275\u0275text(91, " Pr\xF3ximos Eventos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "button", 59);
      \u0275\u0275text(93, "Ver todos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 60);
      \u0275\u0275repeaterCreate(95, DashboardComponent_For_96_Template, 13, 5, "div", 61, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 62)(98, "div", 36)(99, "h2", 57);
      \u0275\u0275element(100, "lucide-icon", 63);
      \u0275\u0275text(101, " Top Ranking ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 64);
      \u0275\u0275repeaterCreate(103, DashboardComponent_For_104_Template, 9, 7, "div", 65, _forTrack1);
      \u0275\u0275elementStart(105, "div", 66)(106, "div", 67)(107, "span", 68);
      \u0275\u0275text(108, "#5");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "img", 69);
      \u0275\u0275elementStart(110, "span", 70);
      \u0275\u0275text(111, "T\xFA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "span", 71);
      \u0275\u0275text(113);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 72)(115, "div", 73)(116, "h2", 57);
      \u0275\u0275element(117, "lucide-icon", 74);
      \u0275\u0275text(118, " Actividad Reciente ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 60);
      \u0275\u0275repeaterCreate(120, DashboardComponent_For_121_Template, 8, 5, "div", 75, _forTrack1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_7_0;
      let tmp_25_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" LVL ", (tmp_0_0 = ctx.userStats()) == null ? null : tmp_0_0.level, " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.FlameIcon);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.userStats()) == null ? null : tmp_2_0.streak, " d\xEDas en racha ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.userStats()) == null ? null : tmp_3_0.level);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("stroke-dasharray", ctx.circleC)("stroke-dashoffset", ctx.circleC * (1 - ctx.xpPct / 100));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.xpPct, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(3e3 - (((tmp_7_0 = ctx.userStats()) == null ? null : tmp_7_0.xp) ?? 0));
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.HeartIcon);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.CalendarIcon);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.TargetIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stats());
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.TargetIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.challenges());
      \u0275\u0275advance(6);
      \u0275\u0275property("img", ctx.TrendingUpIcon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.weeklyTotal, " actividades esta semana");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.weeklyTotal);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.weeklyActivity);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.HeartIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.profiles());
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.SearchIcon);
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.CalendarIcon);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.eventsSlice());
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.TrophyIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.leaderboardSlice());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", (tmp_25_0 = ctx.userStats()) == null ? null : tmp_25_0.xp, " XP");
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.ActivityIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.recentActivity);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.card-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardIn 0.35s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [LucideAngularModule], template: `<!-- dashboard.component.html
     Dashboard page: hero card, XP ring, quick actions, challenges,
     weekly chart, recent matches, upcoming events, leaderboard preview, activity feed.
-->

<div class="p-4 pb-28 md:p-8 md:pb-10 max-w-7xl mx-auto space-y-6">

  <!-- =====================================================================
       Hero Card
       ===================================================================== -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white p-6 md:p-8 shadow-xl shadow-rose-200 dark:shadow-rose-900/20 card-in">
    <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-12 -left-12 w-52 h-52 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none"></div>
    <div class="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

      <!-- User info -->
      <div class="flex items-center gap-5">
        <div class="relative flex-shrink-0">
          <div class="w-20 h-20 rounded-full border-4 border-white/30 overflow-hidden bg-white/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Felix" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-lg border-2 border-white/60 rotate-6 shadow-sm">
            LVL {{ userStats()?.level }}
          </div>
        </div>
        <div>
          <p class="text-rose-200 text-sm font-semibold">Buenas tardes,</p>
          <h1 class="text-3xl md:text-4xl font-black leading-none">Felix</h1>
          <span class="inline-flex items-center gap-1 mt-2 text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <lucide-icon [img]="FlameIcon" class="w-3.5 h-3.5 text-yellow-300"></lucide-icon>
            {{ userStats()?.streak }} d\xEDas en racha
          </span>
        </div>
      </div>

      <!-- XP Ring -->
      <div class="flex items-center gap-5 bg-white/15 border border-white/20 backdrop-blur-sm rounded-2xl px-5 py-4 w-full md:w-auto justify-between md:justify-start">
        <div class="text-center">
          <div class="text-[10px] text-rose-200 font-bold uppercase tracking-wider mb-1">Nivel</div>
          <div class="text-3xl font-black">{{ userStats()?.level }}</div>
        </div>
        <div class="relative w-20 h-20 flex-shrink-0">
          <svg class="w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="33" stroke="white" stroke-opacity="0.2" stroke-width="6" fill="none" />
            <circle cx="40" cy="40" r="33" stroke="white" stroke-width="6" fill="none"
              [attr.stroke-dasharray]="circleC"
              [attr.stroke-dashoffset]="circleC * (1 - xpPct / 100)"
              stroke-linecap="round" />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center text-sm font-bold">{{ xpPct }}%</div>
        </div>
        <div class="text-right">
          <div class="text-[10px] text-rose-200 font-bold uppercase tracking-wider mb-1">Siguiente nivel</div>
          <div class="text-xl font-black">{{ 3000 - (userStats()?.xp ?? 0) }}</div>
          <div class="text-xs text-rose-200 font-medium">XP restante</div>
        </div>
      </div>
    </div>
  </div>

  <!-- =====================================================================
       Quick Actions
       ===================================================================== -->
  <div class="grid grid-cols-3 gap-3 card-in" style="animation-delay:60ms">
    <button class="flex flex-col items-center gap-2 p-4 bg-[#FF6B6B] text-white rounded-2xl font-bold text-xs md:text-sm hover:bg-[#e85555] active:scale-95 transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/20">
      <lucide-icon [img]="HeartIcon" class="w-6 h-6"></lucide-icon>
      Buscar Match
    </button>
    <button class="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#1A1A2E] text-gray-800 dark:text-white rounded-2xl font-bold text-xs md:text-sm border border-gray-200 dark:border-[#2D2D4A] hover:border-[#FF6B6B] active:scale-95 transition-all">
      <lucide-icon [img]="CalendarIcon" class="w-6 h-6"></lucide-icon>
      Crear Evento
    </button>
    <button class="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#1A1A2E] text-gray-800 dark:text-white rounded-2xl font-bold text-xs md:text-sm border border-gray-200 dark:border-[#2D2D4A] hover:border-yellow-400 active:scale-95 transition-all">
      <lucide-icon [img]="TargetIcon" class="w-6 h-6"></lucide-icon>
      Ver Retos
    </button>
  </div>

  <!-- =====================================================================
       Stats Row
       ===================================================================== -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 card-in" style="animation-delay:100ms">
    @for (s of stats(); track s.label) {
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex items-center gap-3">
        <span class="text-2xl">{{ s.emoji }}</span>
        <div>
          <div class="text-lg font-black text-gray-900 dark:text-white leading-none">{{ s.value }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 font-semibold">{{ s.label }}</div>
        </div>
      </div>
    }
  </div>

  <!-- =====================================================================
       Main Grid
       ===================================================================== -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

    <!-- Left column: Challenges + Chart + Recent Matches -->
    <div class="lg:col-span-2 space-y-6">

      <!-- Challenges -->
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] card-in" style="animation-delay:140ms">
        <div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-50 dark:border-[#2D2D4A]">
          <h2 class="font-black text-gray-900 dark:text-white text-lg flex items-center gap-2">
            <lucide-icon [img]="TargetIcon" class="w-5 h-5 text-yellow-500"></lucide-icon>
            Retos en Progreso
          </h2>
        </div>
        <div class="divide-y divide-gray-50 dark:divide-[#2D2D4A]">
          @for (c of challenges(); track c.id) {
            <div class="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors">
              <div class="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-xl flex-shrink-0">
                {{ c.sportEmoji }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start mb-1.5">
                  <h3 class="font-bold text-gray-900 dark:text-white text-sm truncate pr-2">{{ c.title }}</h3>
                  <span class="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded-md whitespace-nowrap flex-shrink-0">+{{ c.xpReward }} XP</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex-1 h-1.5 bg-gray-100 dark:bg-[#2D2D4A] rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] rounded-full transition-all duration-700"
                      [style.width.%]="(c.progress / c.total) * 100">
                    </div>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">{{ c.progress }}/{{ c.total }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Weekly Chart -->
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] p-5 card-in" style="animation-delay:180ms">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h2 class="font-black text-gray-900 dark:text-white text-lg flex items-center gap-2">
              <lucide-icon [img]="TrendingUpIcon" class="w-5 h-5 text-teal-500"></lucide-icon>
              Tu Semana
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ weeklyTotal }} actividades esta semana</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-black text-gray-900 dark:text-white">{{ weeklyTotal }}</div>
            <div class="text-xs text-gray-400 font-medium">total</div>
          </div>
        </div>
        <div class="flex items-end gap-2 h-28">
          @for (count of weeklyActivity; track $index) {
            <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div class="w-full rounded-t-lg transition-all duration-500"
                [class]="$index === todayIndex ? 'bg-[#FF6B6B]' : 'bg-gray-100 dark:bg-[#2D2D4A] group-hover:bg-gray-200 dark:group-hover:bg-[#3F3F5F]'"
                [style.height.%]="(count / maxActivity) * 100">
              </div>
              <span class="text-xs font-bold"
                [class]="$index === todayIndex ? 'text-[#FF6B6B]' : 'text-gray-400'">
                {{ days[$index] }}
              </span>
            </div>
          }
        </div>
      </div>

      <!-- Recent Matches -->
      <div class="card-in" style="animation-delay:220ms">
        <h2 class="font-black text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
          <lucide-icon [img]="HeartIcon" class="w-5 h-5 text-rose-500"></lucide-icon>
          Matches Recientes
        </h2>
        <div class="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          @for (profile of profiles(); track profile.id) {
            <div class="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group">
              <div [class]="'w-16 h-16 rounded-2xl bg-gradient-to-br ' + profile.imageGradient + ' p-0.5 transition-transform group-hover:scale-105'">
                <div class="w-full h-full bg-white/20 backdrop-blur-sm rounded-[14px] flex items-center justify-center text-3xl">
                  {{ profile.emoji }}
                </div>
              </div>
              <span class="text-xs font-bold text-gray-700 dark:text-gray-300">{{ profile.name }}</span>
              <span class="text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-md">{{ profile.compatibility }}%</span>
            </div>
          }
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl border-2 border-dashed border-gray-200 dark:border-[#2D2D4A] flex items-center justify-center text-gray-400 hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-colors cursor-pointer">
            <lucide-icon [img]="SearchIcon" class="w-6 h-6"></lucide-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="space-y-6">

      <!-- Upcoming Events -->
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] card-in" style="animation-delay:260ms">
        <div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-50 dark:border-[#2D2D4A]">
          <h2 class="font-black text-gray-900 dark:text-white flex items-center gap-2">
            <lucide-icon [img]="CalendarIcon" class="w-4 h-4 text-gray-400"></lucide-icon>
            Pr\xF3ximos Eventos
          </h2>
          <button class="text-xs font-bold text-[#FF6B6B] hover:underline">Ver todos</button>
        </div>
        <div class="p-4 space-y-4">
          @for (event of eventsSlice(); track event.id) {
            <div class="flex gap-3 items-start group cursor-pointer">
              <div class="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#22223A] border border-gray-100 dark:border-[#2D2D4A] group-hover:border-[#FF6B6B] transition-colors flex-shrink-0">
                <span class="text-[10px] text-gray-400 font-bold uppercase leading-none">{{ event.date.split(' ')[0] }}</span>
                <span class="text-lg font-black text-gray-900 dark:text-white leading-tight">{{ event.date.split(' ')[1] }}</span>
              </div>
              <div class="min-w-0 pt-0.5">
                <h4 class="font-bold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-[#FF6B6B] transition-colors">{{ event.title }}</h4>
                <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  <lucide-icon [img]="MapPinIcon" class="w-3 h-3 mr-1"></lucide-icon>
                  <span class="truncate">{{ event.location }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Leaderboard Preview -->
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] card-in" style="animation-delay:300ms">
        <div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-50 dark:border-[#2D2D4A]">
          <h2 class="font-black text-gray-900 dark:text-white flex items-center gap-2">
            <lucide-icon [img]="TrophyIcon" class="w-4 h-4 text-yellow-500"></lucide-icon>
            Top Ranking
          </h2>
        </div>
        <div class="p-4 space-y-3">
          @for (u of leaderboardSlice(); track u.id; let i = $index) {
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  [class]="i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-gray-300' : 'bg-orange-300'">
                  {{ u.rank }}
                </div>
                <img [src]="u.avatar" [alt]="u.name" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#2D2D4A]" />
                <span class="font-bold text-sm text-gray-900 dark:text-white">{{ u.name }}</span>
              </div>
              <span class="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">{{ u.xp }} XP</span>
            </div>
          }
          <div class="pt-3 border-t border-gray-50 dark:border-[#2D2D4A] flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">#5</span>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="T\xFA" class="w-8 h-8 rounded-full" />
              <span class="font-bold text-sm text-[#FF6B6B]">T\xFA</span>
            </div>
            <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">{{ userStats()?.xp }} XP</span>
          </div>
        </div>
      </div>

      <!-- Activity Feed -->
      <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] card-in" style="animation-delay:340ms">
        <div class="px-5 pt-5 pb-4 border-b border-gray-50 dark:border-[#2D2D4A]">
          <h2 class="font-black text-gray-900 dark:text-white flex items-center gap-2">
            <lucide-icon [img]="ActivityIcon" class="w-4 h-4 text-blue-500"></lucide-icon>
            Actividad Reciente
          </h2>
        </div>
        <div class="p-4 space-y-4">
          @for (act of recentActivity; track act.id) {
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-base"
                [class]="act.bg">
                {{ act.icon }}
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-bold text-gray-900 dark:text-white text-sm leading-snug">{{ act.title }}</h4>
                <span class="text-xs text-gray-400 dark:text-gray-500">{{ act.time }}</span>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/dashboard/dashboard.component.scss */\n.card-in {\n  animation: cardIn 0.35s ease-out both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 30 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QPDXKWOF.js.map
