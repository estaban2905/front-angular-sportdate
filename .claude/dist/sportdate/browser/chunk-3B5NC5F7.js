import {
  UserActions,
  UserSelectors
} from "./chunk-AUMLN46Z.js";
import {
  Store
} from "./chunk-I5U65RYG.js";
import {
  Award,
  Lock,
  LucideAngularComponent,
  LucideAngularModule,
  MapPin,
  Pen,
  Settings,
  Share2
} from "./chunk-BCPD456Q.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GTOIWY6U.js";

// src/app/shared/ui/achievement-badge/achievement-badge.component.ts
function AchievementBadgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i-lucide", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("img", ctx_r0.lockIcon);
  }
}
function AchievementBadgeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.achievement().icon);
  }
}
function AchievementBadgeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("mt-2 text-xs font-bold text-center leading-tight max-w-[80px] transition-colors " + (ctx_r0.isLocked() ? "text-gray-400 dark:text-gray-600" : "text-gray-700 dark:text-gray-300"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.achievement().name, " ");
  }
}
function AchievementBadgeComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Desbloqueado: ", ctx_r0.achievement().unlockedAt, " ");
  }
}
var AchievementBadgeComponent = class _AchievementBadgeComponent {
  /** The achievement data to render. */
  achievement = input.required(...ngDevMode ? [{ debugName: "achievement" }] : []);
  /** Badge size variant. */
  size = input("md", ...ngDevMode ? [{ debugName: "size" }] : []);
  lockIcon = Lock;
  /** True when the achievement has not been unlocked yet. */
  isLocked = computed(() => !this.achievement().unlockedAt, ...ngDevMode ? [{ debugName: "isLocked" }] : []);
  /** Tailwind size + text-size classes based on the size input. */
  sizeClasses = computed(() => {
    const map = {
      sm: "w-10 h-10 text-lg",
      md: "w-16 h-16 text-3xl",
      lg: "w-24 h-24 text-5xl"
    };
    return map[this.size()];
  }, ...ngDevMode ? [{ debugName: "sizeClasses" }] : []);
  /** Tailwind border + background classes based on rarity. */
  rarityColors = computed(() => {
    const map = {
      common: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
      rare: "border-blue-200 bg-blue-50 shadow-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:shadow-none",
      epic: "border-purple-200 bg-purple-50 shadow-purple-100 dark:border-purple-800 dark:bg-purple-900/30 dark:shadow-none",
      legendary: "border-yellow-300 bg-yellow-50 shadow-yellow-100 dark:border-yellow-700 dark:bg-yellow-900/30 dark:shadow-none"
    };
    return map[this.achievement().rarity];
  }, ...ngDevMode ? [{ debugName: "rarityColors" }] : []);
  /** Combined ring classes for the badge circle. */
  ringClasses = computed(() => {
    const base = this.sizeClasses() + " rounded-full flex items-center justify-center border-2 transition-all duration-300 relative z-10";
    if (this.isLocked()) {
      return base + " bg-gray-100 border-gray-200 grayscale opacity-70 dark:bg-[#22223A] dark:border-[#2D2D4A]";
    }
    return base + " " + this.rarityColors() + " shadow-lg";
  }, ...ngDevMode ? [{ debugName: "ringClasses" }] : []);
  static \u0275fac = function AchievementBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementBadgeComponent, selectors: [["app-achievement-badge"]], inputs: { achievement: [1, "achievement"], size: [1, "size"] }, decls: 13, vars: 7, consts: [[1, "group", "relative", "flex", "flex-col", "items-center"], [1, "w-1/3", "h-1/3", "text-gray-400", "dark:text-gray-600", 3, "img"], [3, "class"], [1, "absolute", "bottom-full", "mb-2", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-200", "pointer-events-none", "z-20", "w-40"], [1, "bg-gray-900", "dark:bg-black", "text-white", "text-xs", "rounded-lg", "p-2", "shadow-xl", "text-center", "border", "border-transparent", "dark:border-[#2D2D4A]"], [1, "font-bold", "mb-1"], [1, "text-gray-300"], [1, "text-gray-500", "mt-1", "text-[10px]"], [1, "w-2", "h-2", "bg-gray-900", "dark:bg-black", "rotate-45", "mx-auto", "-mt-1", "border-r", "border-b", "border-transparent", "dark:border-[#2D2D4A]"]], template: function AchievementBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275conditionalCreate(2, AchievementBadgeComponent_Conditional_2_Template, 1, 1, "i-lucide", 1)(3, AchievementBadgeComponent_Conditional_3_Template, 2, 1, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, AchievementBadgeComponent_Conditional_4_Template, 2, 3, "span", 2);
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, AchievementBadgeComponent_Conditional_11_Template, 2, 1, "p", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.ringClasses());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLocked() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.size() !== "sm" ? 4 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.achievement().name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.achievement().description);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.achievement().unlockedAt ? 11 : -1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ['@charset "UTF-8";\n\n\n\n/*# sourceMappingURL=achievement-badge.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AchievementBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-achievement-badge", imports: [LucideAngularModule], template: `<!-- achievement-badge.component.html
     Badge circle with icon/lock, optional name label, and hover tooltip.
-->

<div class="group relative flex flex-col items-center">
  <!-- Badge circle -->
  <div [class]="ringClasses()">
    @if (isLocked()) {
      <i-lucide [img]="lockIcon" class="w-1/3 h-1/3 text-gray-400 dark:text-gray-600"></i-lucide>
    } @else {
      <span>{{ achievement().icon }}</span>
    }
  </div>

  <!-- Name label (hidden in sm size) -->
  @if (size() !== 'sm') {
    <span [class]="'mt-2 text-xs font-bold text-center leading-tight max-w-[80px] transition-colors ' + (isLocked() ? 'text-gray-400 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300')">
      {{ achievement().name }}
    </span>
  }

  <!-- Hover Tooltip -->
  <div class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 w-40">
    <div class="bg-gray-900 dark:bg-black text-white text-xs rounded-lg p-2 shadow-xl text-center border border-transparent dark:border-[#2D2D4A]">
      <p class="font-bold mb-1">{{ achievement().name }}</p>
      <p class="text-gray-300">{{ achievement().description }}</p>
      @if (achievement().unlockedAt) {
        <p class="text-gray-500 mt-1 text-[10px]">
          Desbloqueado: {{ achievement().unlockedAt }}
        </p>
      }
    </div>
    <div class="w-2 h-2 bg-gray-900 dark:bg-black rotate-45 mx-auto -mt-1 border-r border-b border-transparent dark:border-[#2D2D4A]"></div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/ui/achievement-badge/achievement-badge.component.scss */\n/*# sourceMappingURL=achievement-badge.component.css.map */\n'] }]
  }], null, { achievement: [{ type: Input, args: [{ isSignal: true, alias: "achievement", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementBadgeComponent, { className: "AchievementBadgeComponent", filePath: "src/app/shared/ui/achievement-badge/achievement-badge.component.ts", lineNumber: 20 });
})();

// src/app/pages/perfil/perfil.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.title;
function PerfilComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.getValue());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function PerfilComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 46);
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sport_r2 = ctx.$implicit;
    \u0275\u0275classMap("px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-sm " + sport_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sport_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sport_r2.level);
  }
}
function PerfilComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-achievement-badge", 37);
  }
  if (rf & 2) {
    const achievement_r3 = ctx.$implicit;
    \u0275\u0275property("achievement", achievement_r3);
  }
}
function PerfilComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "h4", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r4.date);
  }
}
var PerfilComponent = class _PerfilComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  mapPinIcon = MapPin;
  settingsIcon = Settings;
  edit2Icon = Pen;
  share2Icon = Share2;
  awardIcon = Award;
  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  store = inject(Store);
  userStats = this.store.selectSignal(UserSelectors.userStats);
  achievements = this.store.selectSignal(UserSelectors.achievements);
  unlockedCount = this.store.selectSignal(UserSelectors.unlockedCount);
  // ---------------------------------------------------------------------------
  // Static display data
  // ---------------------------------------------------------------------------
  stats = [
    { label: "Partidos", emoji: "\u26BD", getValue: () => this.userStats()?.matchesPlayed },
    { label: "Eventos", emoji: "\u{1F4C5}", getValue: () => this.userStats()?.eventsAttended },
    { label: "Rating", emoji: "\u2B50", getValue: () => this.userStats()?.rating },
    { label: "Racha", emoji: "\u{1F525}", getValue: () => this.userStats() ? `${this.userStats().streak} d\xEDas` : "" }
  ];
  sports = [
    { name: "F\xFAtbol", level: "Avanzado", color: "bg-teal-100 text-teal-700" },
    { name: "Running", level: "Intermedio", color: "bg-orange-100 text-orange-700" },
    { name: "Padel", level: "Principiante", color: "bg-blue-100 text-blue-700" },
    { name: "Trekking", level: "Amateur", color: "bg-green-100 text-green-700" }
  ];
  recentActivity = [
    { title: "Partido de F\xFAtbol", date: "Ayer" },
    { title: "Running 5k", date: "Hace 3 d\xEDas" },
    { title: "Nuevo Nivel 12", date: "Hace 5 d\xEDas" },
    { title: "Clase de Yoga", date: "Hace 1 semana" }
  ];
  ngOnInit() {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadAchievements()
    ]);
  }
  static \u0275fac = function PerfilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfilComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilComponent, selectors: [["app-perfil"]], decls: 63, vars: 9, consts: [[1, "pb-28", "md:pb-10", "max-w-4xl", "mx-auto"], [1, "relative", "h-48", "md:h-56", "bg-gradient-to-br", "from-[#FF6B6B]", "via-[#FF8E8E]", "to-[#FFB3B3]"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "absolute", "-top-10", "-right-10", "w-60", "h-60", "bg-white/10", "rounded-full", "blur-3xl"], [1, "absolute", "bottom-0", "left-1/4", "w-40", "h-40", "bg-yellow-300/20", "rounded-full", "blur-2xl"], [1, "absolute", "top-4", "right-4", "flex", "gap-2"], [1, "p-2", "bg-white/20", "backdrop-blur-sm", "rounded-full", "text-white", "hover:bg-white/30", "transition-colors"], [1, "w-4", "h-4", 3, "img"], [1, "px-5", "md:px-8", "-mt-14", "md:-mt-16", "relative", "z-10"], [1, "flex", "flex-col", "md:flex-row", "items-start", "md:items-end", "gap-5", "mb-8"], [1, "relative"], [1, "w-28", "h-28", "md:w-36", "md:h-36", "rounded-2xl", "border-4", "border-white", "dark:border-[#1A1A2E]", "shadow-xl", "overflow-hidden", "bg-gray-100", "dark:bg-[#2D2D4A]"], ["src", "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "alt", "Profile", 1, "w-full", "h-full", "object-cover"], [1, "absolute", "-bottom-2", "-right-2", "bg-yellow-400", "text-yellow-900", "text-[10px]", "font-black", "px-2", "py-1", "rounded-lg", "shadow-md", "border-2", "border-white", "rotate-3"], [1, "flex-1", "pb-2"], [1, "flex", "justify-between", "items-start"], [1, "text-3xl", "font-black", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "text-gray-500", "dark:text-gray-400", "font-semibold", "mt-1", "text-sm"], [1, "w-4", "h-4", "mr-1.5", 3, "img"], [1, "hidden", "md:flex", "items-center", "gap-2", "px-4", "py-2", "bg-gray-900", "dark:bg-[#22223A]", "text-white", "rounded-xl", "text-sm", "font-bold", "hover:bg-gray-700", "transition-colors"], [1, "text-gray-600", "dark:text-gray-400", "mt-3", "max-w-xl", "text-sm", "leading-relaxed"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-3", "mb-8", "card-in"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-4", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-7"], [1, "md:col-span-2", "space-y-7"], [1, "card-in", 2, "animation-delay", "80ms"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white", "mb-4"], [1, "flex", "flex-wrap", "gap-3"], [3, "class"], [1, "px-4", "py-2", "rounded-xl", "border-2", "border-dashed", "border-gray-200", "dark:border-[#2D2D4A]", "text-gray-400", "dark:text-gray-500", "font-bold", "text-sm", "hover:border-[#FF6B6B]", "hover:text-[#FF6B6B]", "transition-colors"], [1, "card-in", 2, "animation-delay", "140ms"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "text-yellow-500", 3, "img"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "font-semibold"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-5", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]"], [1, "grid", "grid-cols-3", "sm:grid-cols-4", "gap-5", "justify-items-center"], [3, "achievement"], [1, "space-y-5", "card-in", 2, "animation-delay", "200ms"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white"], [1, "space-y-4", "relative", "before:absolute", "before:left-4", "before:top-2", "before:bottom-2", "before:w-0.5", "before:bg-gray-100", "dark:before:bg-[#2D2D4A]"], [1, "relative", "pl-10"], [1, "md:hidden", "w-full", "flex", "items-center", "justify-center", "gap-2", "px-4", "py-3", "bg-gray-900", "dark:bg-[#22223A]", "text-white", "rounded-xl", "font-bold", "hover:bg-gray-700", "transition-colors"], [1, "text-2xl", "mb-1"], [1, "font-black", "text-gray-900", "dark:text-white", "text-xl"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-bold", "uppercase", "tracking-wide", "mt-0.5"], [1, "w-1", "h-1", "bg-current", "rounded-full", "opacity-50"], [1, "text-xs", "opacity-75", "font-semibold"], [1, "absolute", "left-2.5", "top-1.5", "w-3.5", "h-3.5", "rounded-full", "bg-white", "dark:bg-[#1A1A2E]", "border-2", "border-[#FF6B6B]"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "leading-snug"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"]], template: function PerfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
      \u0275\u0275element(7, "i-lucide", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275element(9, "i-lucide", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
      \u0275\u0275element(14, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div")(20, "h1", 16);
      \u0275\u0275text(21, "Felix, 28");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275element(23, "i-lucide", 18);
      \u0275\u0275text(24, " Santiago, Chile ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 19);
      \u0275\u0275element(26, "i-lucide", 7);
      \u0275\u0275text(27, " Editar Perfil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "p", 20);
      \u0275\u0275text(29, " Entusiasta del deporte y la vida sana. Siempre buscando nuevos retos y gente con quien entrenar. Fan\xE1tico del f\xFAtbol y empezando en el mundo del running. \u{1F3C3}\u200D\u2642\uFE0F\u26BD\uFE0F ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 21);
      \u0275\u0275repeaterCreate(31, PerfilComponent_For_32_Template, 7, 3, "div", 22, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23)(34, "div", 24)(35, "section", 25)(36, "h2", 26);
      \u0275\u0275text(37, "Mis Deportes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275repeaterCreate(39, PerfilComponent_For_40_Template, 6, 4, "div", 28, _forTrack1);
      \u0275\u0275elementStart(41, "button", 29);
      \u0275\u0275text(42, " + Agregar ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "section", 30)(44, "div", 31)(45, "h2", 32);
      \u0275\u0275element(46, "i-lucide", 33);
      \u0275\u0275text(47, " Medallas y Logros ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 34);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 35)(51, "div", 36);
      \u0275\u0275repeaterCreate(52, PerfilComponent_For_53_Template, 1, 1, "app-achievement-badge", 37, _forTrack2);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 38)(55, "h2", 39);
      \u0275\u0275text(56, "Actividad Reciente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 40);
      \u0275\u0275repeaterCreate(58, PerfilComponent_For_59_Template, 6, 2, "div", 41, _forTrack3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 42);
      \u0275\u0275element(61, "i-lucide", 7);
      \u0275\u0275text(62, " Editar Perfil ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.share2Icon);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.settingsIcon);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" LVL ", (tmp_2_0 = ctx.userStats()) == null ? null : tmp_2_0.level, " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.mapPinIcon);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.edit2Icon);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.sports);
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.awardIcon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" ", ctx.unlockedCount(), "/", ctx.achievements().length, " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.achievements());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.recentActivity);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.edit2Icon);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, AchievementBadgeComponent], styles: ["\n\n.card-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardIn 0.35s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=perfil.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilComponent, [{
    type: Component,
    args: [{ selector: "app-perfil", imports: [LucideAngularModule, AchievementBadgeComponent], template: `<!-- perfil.component.html
     Perfil (User Profile) page template.
     Sections: cover gradient, avatar + name, stats grid,
     sports tags, achievement badges, recent activity timeline.
-->

<div class="pb-28 md:pb-10 max-w-4xl mx-auto">

  <!-- =====================================================================
       Cover Photo
       ===================================================================== -->
  <div class="relative h-48 md:h-56 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E8E] to-[#FFB3B3]">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/4 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl"></div>
    </div>
    <!-- Action buttons -->
    <div class="absolute top-4 right-4 flex gap-2">
      <button class="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
        <i-lucide [img]="share2Icon" class="w-4 h-4"></i-lucide>
      </button>
      <button class="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
        <i-lucide [img]="settingsIcon" class="w-4 h-4"></i-lucide>
      </button>
    </div>
  </div>

  <!-- =====================================================================
       Profile body
       ===================================================================== -->
  <div class="px-5 md:px-8 -mt-14 md:-mt-16 relative z-10">

    <!-- Avatar + Name Row -->
    <div class="flex flex-col md:flex-row items-start md:items-end gap-5 mb-8">
      <div class="relative">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-2xl border-4 border-white dark:border-[#1A1A2E] shadow-xl overflow-hidden bg-gray-100 dark:bg-[#2D2D4A]">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded-lg shadow-md border-2 border-white rotate-3">
          LVL {{ userStats()?.level }}
        </div>
      </div>

      <div class="flex-1 pb-2">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-3xl font-black text-gray-900 dark:text-white">Felix, 28</h1>
            <div class="flex items-center text-gray-500 dark:text-gray-400 font-semibold mt-1 text-sm">
              <i-lucide [img]="mapPinIcon" class="w-4 h-4 mr-1.5"></i-lucide>
              Santiago, Chile
            </div>
          </div>
          <button class="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors">
            <i-lucide [img]="edit2Icon" class="w-4 h-4"></i-lucide>
            Editar Perfil
          </button>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-xl text-sm leading-relaxed">
          Entusiasta del deporte y la vida sana. Siempre buscando nuevos retos y gente con quien entrenar. Fan\xE1tico del f\xFAtbol y empezando en el mundo del running. \u{1F3C3}\u200D\u2642\uFE0F\u26BD\uFE0F
        </p>
      </div>
    </div>

    <!-- =====================================================================
         Stats Grid
         ===================================================================== -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 card-in">
      @for (stat of stats; track stat.label) {
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] text-center">
          <div class="text-2xl mb-1">{{ stat.emoji }}</div>
          <div class="font-black text-gray-900 dark:text-white text-xl">{{ stat.getValue() }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide mt-0.5">{{ stat.label }}</div>
        </div>
      }
    </div>

    <!-- =====================================================================
         Content Grid
         ===================================================================== -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">

      <!-- Left: Sports + Achievements -->
      <div class="md:col-span-2 space-y-7">

        <!-- Sports Tags -->
        <section class="card-in" style="animation-delay:80ms">
          <h2 class="text-lg font-black text-gray-900 dark:text-white mb-4">Mis Deportes</h2>
          <div class="flex flex-wrap gap-3">
            @for (sport of sports; track sport.name) {
              <div [class]="'px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-sm ' + sport.color">
                <span>{{ sport.name }}</span>
                <span class="w-1 h-1 bg-current rounded-full opacity-50"></span>
                <span class="text-xs opacity-75 font-semibold">{{ sport.level }}</span>
              </div>
            }
            <button class="px-4 py-2 rounded-xl border-2 border-dashed border-gray-200 dark:border-[#2D2D4A] text-gray-400 dark:text-gray-500 font-bold text-sm hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-colors">
              + Agregar
            </button>
          </div>
        </section>

        <!-- Achievement Badges -->
        <section class="card-in" style="animation-delay:140ms">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
              <i-lucide [img]="awardIcon" class="w-5 h-5 text-yellow-500"></i-lucide>
              Medallas y Logros
            </h2>
            <span class="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              {{ unlockedCount() }}/{{ achievements().length }}
            </span>
          </div>
          <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-[#2D2D4A]">
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-5 justify-items-center">
              @for (achievement of achievements(); track achievement.id) {
                <app-achievement-badge [achievement]="achievement" />
              }
            </div>
          </div>
        </section>
      </div>

      <!-- Right: Recent Activity timeline -->
      <div class="space-y-5 card-in" style="animation-delay:200ms">
        <h2 class="text-lg font-black text-gray-900 dark:text-white">Actividad Reciente</h2>
        <div class="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-[#2D2D4A]">
          @for (activity of recentActivity; track activity.title) {
            <div class="relative pl-10">
              <div class="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#1A1A2E] border-2 border-[#FF6B6B]"></div>
              <h4 class="font-bold text-gray-900 dark:text-white text-sm leading-snug">{{ activity.title }}</h4>
              <span class="text-xs text-gray-500 dark:text-gray-400">{{ activity.date }}</span>
            </div>
          }
        </div>
        <button class="md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-[#22223A] text-white rounded-xl font-bold hover:bg-gray-700 transition-colors">
          <i-lucide [img]="edit2Icon" class="w-4 h-4"></i-lucide>
          Editar Perfil
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/perfil/perfil.component.scss */\n.card-in {\n  animation: cardIn 0.35s ease-out both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=perfil.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilComponent, { className: "PerfilComponent", filePath: "src/app/pages/perfil/perfil.component.ts", lineNumber: 23 });
})();
export {
  PerfilComponent
};
//# sourceMappingURL=chunk-3B5NC5F7.js.map
