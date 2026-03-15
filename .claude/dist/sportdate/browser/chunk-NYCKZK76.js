import {
  CommunitiesActions,
  CommunitiesSelectors
} from "./chunk-O2IZMYJL.js";
import {
  Store
} from "./chunk-I5U65RYG.js";
import {
  ArrowRight,
  Calendar,
  Flame,
  LucideAngularComponent,
  LucideAngularModule,
  MessageCircle,
  Plus,
  Search,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GTOIWY6U.js";

// src/app/pages/grupos/grupos.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function GruposComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("src", "https://api.dicebear.com/7.x/avataaars/svg?seed=" + i_r1 * 123, \u0275\u0275sanitizeUrl);
  }
}
function GruposComponent_For_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 44);
  }
}
function GruposComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function GruposComponent_For_38_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.activeTab = tab_r3.toLowerCase());
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, GruposComponent_For_38_Conditional_2_Template, 1, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pb-2 text-sm font-bold whitespace-nowrap transition-colors relative " + (ctx_r3.activeTab === tab_r3.toLowerCase() ? "text-[#FF6B6B]" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.activeTab === tab_r3.toLowerCase() ? 2 : -1);
  }
}
function GruposComponent_For_44_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5);
  }
}
function GruposComponent_For_44_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const community_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "https://api.dicebear.com/7.x/avataaars/svg?seed=" + community_r7.id + i_r6, \u0275\u0275sanitizeUrl);
  }
}
function GruposComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div")(2, "div", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "div", 49)(8, "div")(9, "h3", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275element(12, "i-lucide", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275text(15, "Unirse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 54);
    \u0275\u0275repeaterCreate(17, GruposComponent_For_44_For_18_Template, 2, 1, "span", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 56)(20, "div", 57);
    \u0275\u0275repeaterCreate(21, GruposComponent_For_44_For_22_Template, 1, 1, "img", 58, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 59)(24, "span", 60);
    \u0275\u0275element(25, "i-lucide", 52);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 60);
    \u0275\u0275element(28, "i-lucide", 52);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const community_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", $index_r8 * 100 + "ms");
    \u0275\u0275advance();
    \u0275\u0275classMap("h-24 bg-gradient-to-r " + community_r7.gradient + " p-4 flex justify-between items-start");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(community_r7.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(community_r7.level);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(community_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r3.usersIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", community_r7.members, " miembros ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(community_r7.tags);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(13, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("img", ctx_r3.calendarIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", community_r7.events);
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r3.messageCircleIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", community_r7.messages);
  }
}
function GruposComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 61)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const \u0275$index_143_r10 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("font-bold " + (\u0275$index_143_r10 === 0 ? "text-yellow-400" : \u0275$index_143_r10 === 1 ? "text-gray-300" : "text-orange-300"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", \u0275$index_143_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r9.members, " pts");
  }
}
function GruposComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 64)(2, "span");
    \u0275\u0275text(3, "MAR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "h4", 67);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "i-lucide", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const i_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(i_r11 + 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Torneo Rel\xE1mpago ", i_r11 === 1 ? "F\xFAtbol" : "Padel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Organizado por ", (tmp_12_0 = ctx_r3.communities()[i_r11]) == null ? null : tmp_12_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r3.arrowRightIcon);
  }
}
var GruposComponent = class _GruposComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  usersIcon = Users;
  messageCircleIcon = MessageCircle;
  calendarIcon = Calendar;
  plusIcon = Plus;
  trophyIcon = Trophy;
  flameIcon = Flame;
  searchIcon = Search;
  arrowRightIcon = ArrowRight;
  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  store = inject(Store);
  communities = this.store.selectSignal(CommunitiesSelectors.communities);
  // ---------------------------------------------------------------------------
  // Tab state
  // ---------------------------------------------------------------------------
  activeTab = "explorar";
  navTabs = ["Explorar", "Mis Comunidades", "Populares"];
  ngOnInit() {
    this.store.dispatch(new CommunitiesActions.LoadCommunities());
  }
  static \u0275fac = function GruposComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GruposComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GruposComponent, selectors: [["app-grupos"]], decls: 63, vars: 7, consts: [[1, "p-4", "pt-6", "pb-24", "md:p-8", "max-w-7xl", "mx-auto", "space-y-8"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4"], [1, "text-3xl", "font-black", "text-gray-900", "dark:text-white", "mb-2", "transition-colors"], [1, "text-gray-500", "dark:text-gray-400", "transition-colors"], [1, "flex", "items-center", "px-5", "py-2", "bg-gray-900", "dark:bg-[#22223A]", "text-white", "rounded-full", "font-bold", "hover:bg-gray-800", "dark:hover:bg-[#2D2D4A]", "transition-colors", "shadow-lg", "shadow-gray-900/20", "dark:shadow-black/30", "border", "border-transparent", "dark:border-[#2D2D4A]"], [1, "w-5", "h-5", "mr-2", 3, "img"], [1, "relative", "overflow-hidden", "rounded-3xl", "bg-gradient-to-r", "from-orange-500", "to-rose-500", "text-white", "p-6", "md:p-8", "shadow-xl", "shadow-orange-500/20", "animate-fade-up"], [1, "absolute", "top-0", "right-0", "w-64", "h-64", "bg-white", "opacity-10", "rounded-full", "-mr-16", "-mt-16", "blur-3xl"], [1, "relative", "z-10", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-6"], [1, "flex", "items-center", "gap-4"], [1, "w-20", "h-20", "bg-white/20", "backdrop-blur-sm", "rounded-2xl", "flex", "items-center", "justify-center", "text-4xl", "shadow-inner"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "bg-white/20", "backdrop-blur-md", "px-2", "py-0.5", "rounded", "text-xs", "font-bold", "uppercase", "tracking-wider"], [1, "flex", "items-center", "text-xs", "font-bold"], [1, "w-3", "h-3", "mr-1", "fill-current", 3, "img"], [1, "text-2xl", "md:text-3xl", "font-black", "mb-1"], [1, "text-orange-100", "text-sm", "font-medium"], [1, "flex", "items-center", "gap-6", "w-full", "md:w-auto", "justify-between", "md:justify-end"], [1, "flex", "-space-x-3"], ["alt", "Member", 1, "w-10", "h-10", "rounded-full", "border-2", "border-orange-500", "bg-white", 3, "src"], [1, "w-10", "h-10", "rounded-full", "border-2", "border-orange-500", "bg-white/20", "backdrop-blur-sm", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "px-6", "py-3", "bg-white", "text-orange-600", "rounded-xl", "font-bold", "hover:bg-orange-50", "transition-colors", "shadow-lg"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "gap-4", "border-b", "border-gray-100", "dark:border-[#2D2D4A]", "pb-4"], [1, "flex", "gap-4", "overflow-x-auto", "no-scrollbar"], [3, "class"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "text-gray-400", "w-4", "h-4", 3, "img"], ["type", "text", "placeholder", "Buscar comunidades...", 1, "w-full", "md:w-64", "bg-gray-50", "dark:bg-[#22223A]", "border", "border-gray-200", "dark:border-[#2D2D4A]", "rounded-full", "pl-10", "pr-4", "py-2", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-[#FF6B6B]/20", "focus:border-[#FF6B6B]", "text-gray-900", "dark:text-white", "transition-colors"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-3xl", "overflow-hidden", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "hover:shadow-md", "dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]", "transition-all", "duration-300", "group", "animate-fade-up", 3, "animationDelay"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "md:col-span-1", "bg-gradient-to-br", "from-gray-900", "to-gray-800", "dark:from-[#22223A]", "dark:to-[#1A1A2E]", "rounded-3xl", "p-6", "text-white", "shadow-lg"], [1, "font-bold", "text-lg", "mb-4", "flex", "items-center"], [1, "w-5", "h-5", "mr-2", "text-yellow-400", 3, "img"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "md:col-span-2", "bg-white", "dark:bg-[#1A1A2E]", "rounded-3xl", "p-6", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "font-bold", "text-gray-900", "dark:text-white", "flex", "items-center"], [1, "w-5", "h-5", "mr-2", "text-[#FF6B6B]", 3, "img"], [1, "text-xs", "font-bold", "text-[#FF6B6B]", "hover:underline"], [1, "space-y-3"], [1, "flex", "items-center", "gap-4", "p-3", "hover:bg-gray-50", "dark:hover:bg-[#22223A]", "rounded-xl", "transition-colors", "cursor-pointer", "group"], [3, "click"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-[#FF6B6B]", "rounded-full"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-3xl", "overflow-hidden", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "hover:shadow-md", "dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]", "transition-all", "duration-300", "group", "animate-fade-up"], [1, "w-12", "h-12", "bg-white/20", "backdrop-blur-sm", "rounded-xl", "flex", "items-center", "justify-center", "text-2xl", "shadow-inner"], [1, "bg-white/20", "backdrop-blur-md", "px-2", "py-1", "rounded-lg", "text-xs", "font-bold", "text-white", "flex", "items-center"], [1, "p-5"], [1, "flex", "justify-between", "items-start", "mb-3"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "group-hover:text-[#FF6B6B]", "transition-colors"], [1, "flex", "items-center", "text-xs", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "w-3", "h-3", "mr-1", 3, "img"], [1, "px-4", "py-1.5", "border", "border-gray-200", "dark:border-[#2D2D4A]", "rounded-lg", "text-sm", "font-bold", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-50", "dark:hover:bg-[#22223A]", "transition-colors"], [1, "flex", "gap-2", "mb-4"], [1, "px-2", "py-1", "bg-gray-100", "dark:bg-[#22223A]", "text-gray-600", "dark:text-gray-400", "rounded-md", "text-xs", "font-semibold"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-gray-50", "dark:border-[#2D2D4A]"], [1, "flex", "-space-x-2"], ["alt", "Member", 1, "w-6", "h-6", "rounded-full", "border-2", "border-white", "dark:border-[#1A1A2E]", "bg-gray-100", 3, "src"], [1, "flex", "gap-3", "text-xs", "font-medium", "text-gray-400"], [1, "flex", "items-center"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "font-medium"], [1, "text-xs", "opacity-70"], [1, "w-12", "h-12", "bg-gray-100", "dark:bg-[#22223A]", "rounded-lg", "flex", "flex-col", "items-center", "justify-center", "text-xs", "font-bold", "text-gray-500", "dark:text-gray-400"], [1, "text-lg", "text-gray-900", "dark:text-white"], [1, "flex-1"], [1, "font-bold", "text-gray-900", "dark:text-white", "group-hover:text-[#FF6B6B]", "transition-colors"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "w-4", "h-4", "text-gray-300", "group-hover:text-[#FF6B6B]", "transition-colors", 3, "img"]], template: function GruposComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u{1F3DF}\uFE0F Comunidades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Conecta con grupos que comparten tu pasi\xF3n.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275element(8, "i-lucide", 5);
      \u0275\u0275text(9, " Crear Comunidad ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "div", 7);
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10);
      \u0275\u0275text(15, "\u{1F3C3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div")(17, "div", 11)(18, "span", 12);
      \u0275\u0275text(19, "Destacado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275element(21, "i-lucide", 14);
      \u0275\u0275text(22, " Muy activo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "h2", 15);
      \u0275\u0275text(24, "Runners Santiago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 16);
      \u0275\u0275text(26, "La comunidad de running m\xE1s grande de la ciudad.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18);
      \u0275\u0275repeaterCreate(29, GruposComponent_For_30_Template, 1, 1, "img", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275text(32, "+138");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 21);
      \u0275\u0275text(34, "Unirse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 22)(36, "div", 23);
      \u0275\u0275repeaterCreate(37, GruposComponent_For_38_Template, 3, 4, "button", 24, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 25);
      \u0275\u0275element(40, "i-lucide", 26)(41, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 28);
      \u0275\u0275repeaterCreate(43, GruposComponent_For_44_Template, 30, 14, "div", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 30)(46, "div", 31)(47, "h3", 32);
      \u0275\u0275element(48, "i-lucide", 33);
      \u0275\u0275text(49, " Top Comunidades ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 34);
      \u0275\u0275repeaterCreate(51, GruposComponent_For_52_Template, 8, 5, "div", 35, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 36)(54, "div", 37)(55, "h3", 38);
      \u0275\u0275element(56, "i-lucide", 39);
      \u0275\u0275text(57, " Pr\xF3ximos Eventos Comunitarios ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 40);
      \u0275\u0275text(59, "Ver todos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 41);
      \u0275\u0275repeaterCreate(61, GruposComponent_For_62_Template, 12, 4, "div", 42, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("img", ctx.plusIcon);
      \u0275\u0275advance(13);
      \u0275\u0275property("img", ctx.flameIcon);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navTabs);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.searchIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.communities());
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.trophyIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.communities().slice(0, 3));
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.calendarIcon);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c1));
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.animate-fade-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease-out backwards;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=grupos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GruposComponent, [{
    type: Component,
    args: [{ selector: "app-grupos", imports: [LucideAngularModule], template: `<!-- grupos.component.html
     Grupos / Comunidades page template.
     Sections: header, featured banner, tab nav + search, community grid,
     bottom widgets (top communities, upcoming events).
-->

<div class="p-4 pt-6 pb-24 md:p-8 max-w-7xl mx-auto space-y-8">

  <!-- =====================================================================
       Header
       ===================================================================== -->
  <header class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors">\u{1F3DF}\uFE0F Comunidades</h1>
      <p class="text-gray-500 dark:text-gray-400 transition-colors">Conecta con grupos que comparten tu pasi\xF3n.</p>
    </div>
    <button class="flex items-center px-5 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-full font-bold hover:bg-gray-800 dark:hover:bg-[#2D2D4A] transition-colors shadow-lg shadow-gray-900/20 dark:shadow-black/30 border border-transparent dark:border-[#2D2D4A]">
      <i-lucide [img]="plusIcon" class="w-5 h-5 mr-2"></i-lucide>
      Crear Comunidad
    </button>
  </header>

  <!-- =====================================================================
       Featured Banner
       ===================================================================== -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-rose-500 text-white p-6 md:p-8 shadow-xl shadow-orange-500/20 animate-fade-up">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-inner">\u{1F3C3}</div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Destacado</span>
            <span class="flex items-center text-xs font-bold">
              <i-lucide [img]="flameIcon" class="w-3 h-3 mr-1 fill-current"></i-lucide> Muy activo
            </span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black mb-1">Runners Santiago</h2>
          <p class="text-orange-100 text-sm font-medium">La comunidad de running m\xE1s grande de la ciudad.</p>
        </div>
      </div>
      <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
        <div class="flex -space-x-3">
          @for (i of [1,2,3,4]; track i) {
            <img [src]="'https://api.dicebear.com/7.x/avataaars/svg?seed=' + (i * 123)" alt="Member" class="w-10 h-10 rounded-full border-2 border-orange-500 bg-white" />
          }
          <div class="w-10 h-10 rounded-full border-2 border-orange-500 bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">+138</div>
        </div>
        <button class="px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg">Unirse</button>
      </div>
    </div>
  </div>

  <!-- =====================================================================
       Navigation Tabs + Search
       ===================================================================== -->
  <div class="flex flex-col md:flex-row justify-between gap-4 border-b border-gray-100 dark:border-[#2D2D4A] pb-4">
    <div class="flex gap-4 overflow-x-auto no-scrollbar">
      @for (tab of navTabs; track tab) {
        <button (click)="activeTab = tab.toLowerCase()"
          [class]="'pb-2 text-sm font-bold whitespace-nowrap transition-colors relative ' +
            (activeTab === tab.toLowerCase() ? 'text-[#FF6B6B]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200')">
          {{ tab }}
          @if (activeTab === tab.toLowerCase()) {
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B6B] rounded-full"></div>
          }
        </button>
      }
    </div>
    <div class="relative">
      <i-lucide [img]="searchIcon" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"></i-lucide>
      <input type="text" placeholder="Buscar comunidades..." class="w-full md:w-64 bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 focus:border-[#FF6B6B] text-gray-900 dark:text-white transition-colors" />
    </div>
  </div>

  <!-- =====================================================================
       Community Grid
       ===================================================================== -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    @for (community of communities(); track community.id) {
      <div class="bg-white dark:bg-[#1A1A2E] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#2D2D4A] hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group animate-fade-up"
        [style.animationDelay]="$index * 100 + 'ms'">
        <!-- Card header gradient -->
        <div [class]="'h-24 bg-gradient-to-r ' + community.gradient + ' p-4 flex justify-between items-start'">
          <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-inner">{{ community.emoji }}</div>
          <span class="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center">{{ community.level }}</span>
        </div>
        <!-- Card body -->
        <div class="p-5">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">{{ community.name }}</h3>
              <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                <i-lucide [img]="usersIcon" class="w-3 h-3 mr-1"></i-lucide> {{ community.members }} miembros
              </div>
            </div>
            <button class="px-4 py-1.5 border border-gray-200 dark:border-[#2D2D4A] rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors">Unirse</button>
          </div>
          <!-- Tags -->
          <div class="flex gap-2 mb-4">
            @for (tag of community.tags; track tag) {
              <span class="px-2 py-1 bg-gray-100 dark:bg-[#22223A] text-gray-600 dark:text-gray-400 rounded-md text-xs font-semibold">{{ tag }}</span>
            }
          </div>
          <!-- Footer -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-[#2D2D4A]">
            <div class="flex -space-x-2">
              @for (i of [1,2,3]; track i) {
                <img [src]="'https://api.dicebear.com/7.x/avataaars/svg?seed=' + community.id + i" alt="Member" class="w-6 h-6 rounded-full border-2 border-white dark:border-[#1A1A2E] bg-gray-100" />
              }
            </div>
            <div class="flex gap-3 text-xs font-medium text-gray-400">
              <span class="flex items-center"><i-lucide [img]="calendarIcon" class="w-3 h-3 mr-1"></i-lucide> {{ community.events }}</span>
              <span class="flex items-center"><i-lucide [img]="messageCircleIcon" class="w-3 h-3 mr-1"></i-lucide> {{ community.messages }}</span>
            </div>
          </div>
        </div>
      </div>
    }
  </div>

  <!-- =====================================================================
       Bottom Widgets
       ===================================================================== -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <!-- Top Communities -->
    <div class="md:col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-[#22223A] dark:to-[#1A1A2E] rounded-3xl p-6 text-white shadow-lg">
      <h3 class="font-bold text-lg mb-4 flex items-center">
        <i-lucide [img]="trophyIcon" class="w-5 h-5 mr-2 text-yellow-400"></i-lucide> Top Comunidades
      </h3>
      <div class="space-y-4">
        @for (c of communities().slice(0, 3); track c.id; let i = $index) {
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span [class]="'font-bold ' + (i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-300' : 'text-orange-300')">#{{ i + 1 }}</span>
              <span class="text-sm font-medium">{{ c.name }}</span>
            </div>
            <span class="text-xs opacity-70">{{ c.members }} pts</span>
          </div>
        }
      </div>
    </div>

    <!-- Upcoming Community Events -->
    <div class="md:col-span-2 bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A]">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-900 dark:text-white flex items-center">
          <i-lucide [img]="calendarIcon" class="w-5 h-5 mr-2 text-[#FF6B6B]"></i-lucide> Pr\xF3ximos Eventos Comunitarios
        </h3>
        <button class="text-xs font-bold text-[#FF6B6B] hover:underline">Ver todos</button>
      </div>
      <div class="space-y-3">
        @for (i of [1,2,3]; track i) {
          <div class="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-[#22223A] rounded-xl transition-colors cursor-pointer group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-[#22223A] rounded-lg flex flex-col items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
              <span>MAR</span>
              <span class="text-lg text-gray-900 dark:text-white">{{ i + 14 }}</span>
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">
                Torneo Rel\xE1mpago {{ i === 1 ? 'F\xFAtbol' : 'Padel' }}
              </h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">Organizado por {{ communities()[i]?.name }}</p>
            </div>
            <i-lucide [img]="arrowRightIcon" class="w-4 h-4 text-gray-300 group-hover:text-[#FF6B6B] transition-colors"></i-lucide>
          </div>
        }
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/grupos/grupos.component.scss */\n.animate-fade-up {\n  animation: fadeUp 0.4s ease-out backwards;\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=grupos.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GruposComponent, { className: "GruposComponent", filePath: "src/app/pages/grupos/grupos.component.ts", lineNumber: 22 });
})();
export {
  GruposComponent
};
//# sourceMappingURL=chunk-NYCKZK76.js.map
