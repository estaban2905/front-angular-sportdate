import {
  UserActions,
  UserSelectors
} from "./chunk-AUMLN46Z.js";
import {
  CommunitiesActions,
  CommunitiesSelectors
} from "./chunk-O2IZMYJL.js";
import {
  Store
} from "./chunk-I5U65RYG.js";
import {
  Activity,
  Clock,
  Flame,
  Heart,
  Info,
  LucideAngularComponent,
  LucideAngularModule,
  MapPin,
  Search,
  Shield,
  Star,
  Users,
  X
} from "./chunk-BCPD456Q.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GTOIWY6U.js";

// src/app/shared/ui/compatibility-ring/compatibility-ring.component.ts
var CompatibilityRingComponent = class _CompatibilityRingComponent {
  /** Compatibility percentage to display (0–100). */
  percentage = input.required(...ngDevMode ? [{ debugName: "percentage" }] : []);
  /** Outer diameter of the SVG ring in pixels. */
  size = input(80, ...ngDevMode ? [{ debugName: "size" }] : []);
  /** Stroke width of the ring arc in pixels. */
  strokeWidth = input(6, ...ngDevMode ? [{ debugName: "strokeWidth" }] : []);
  /** Inner radius derived from size and strokeWidth. */
  radius = computed(() => (this.size() - this.strokeWidth()) / 2, ...ngDevMode ? [{ debugName: "radius" }] : []);
  /** Full circumference of the ring. */
  circumference = computed(() => this.radius() * 2 * Math.PI, ...ngDevMode ? [{ debugName: "circumference" }] : []);
  /** Dash offset to represent the current percentage. */
  offset = computed(() => this.circumference() - this.percentage() / 100 * this.circumference(), ...ngDevMode ? [{ debugName: "offset" }] : []);
  static \u0275fac = function CompatibilityRingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompatibilityRingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompatibilityRingComponent, selectors: [["app-compatibility-ring"]], inputs: { percentage: [1, "percentage"], size: [1, "size"], strokeWidth: [1, "strokeWidth"] }, decls: 13, vars: 17, consts: [[1, "relative", "flex", "items-center", "justify-center"], [1, "transform", "-rotate-90"], ["stroke", "currentColor", "fill", "transparent", 1, "text-gray-200", "dark:text-[#2D2D4A]", "transition-colors"], ["stroke", "url(#gradient)", "fill", "transparent", "stroke-linecap", "round", 1, "transition-all", "duration-1500", "ease-out"], ["id", "gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#FF6B6B"], ["offset", "100%", "stop-color", "#FF8E8E"], [1, "absolute", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white", "leading-none", "transition-colors"], [1, "text-[8px]", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wide", "mt-0.5", "transition-colors"]], template: function CompatibilityRingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "circle", 2)(3, "circle", 3);
      \u0275\u0275domElementStart(4, "defs")(5, "linearGradient", 4);
      \u0275\u0275domElement(6, "stop", 5)(7, "stop", 6);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(8, "div", 7)(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 9);
      \u0275\u0275text(12, " Match ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.size(), "px")("height", ctx.size(), "px");
      \u0275\u0275advance();
      \u0275\u0275attribute("width", ctx.size())("height", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275attribute("cx", ctx.size() / 2)("cy", ctx.size() / 2)("r", ctx.radius())("stroke-width", ctx.strokeWidth());
      \u0275\u0275advance();
      \u0275\u0275attribute("cx", ctx.size() / 2)("cy", ctx.size() / 2)("r", ctx.radius())("stroke-width", ctx.strokeWidth())("stroke-dasharray", ctx.circumference())("stroke-dashoffset", ctx.offset());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.percentage(), "% ");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompatibilityRingComponent, [{
    type: Component,
    args: [{ selector: "app-compatibility-ring", template: '<!-- compatibility-ring.component.html\n     Circular SVG ring showing a compatibility percentage with a gradient arc.\n-->\n\n<div class="relative flex items-center justify-center" [style.width.px]="size()" [style.height.px]="size()">\n  <svg [attr.width]="size()" [attr.height]="size()" class="transform -rotate-90">\n    <!-- Background track -->\n    <circle\n      [attr.cx]="size() / 2"\n      [attr.cy]="size() / 2"\n      [attr.r]="radius()"\n      stroke="currentColor"\n      class="text-gray-200 dark:text-[#2D2D4A] transition-colors"\n      [attr.stroke-width]="strokeWidth()"\n      fill="transparent"\n    />\n    <!-- Foreground arc -->\n    <circle\n      [attr.cx]="size() / 2"\n      [attr.cy]="size() / 2"\n      [attr.r]="radius()"\n      stroke="url(#gradient)"\n      [attr.stroke-width]="strokeWidth()"\n      fill="transparent"\n      [attr.stroke-dasharray]="circumference()"\n      [attr.stroke-dashoffset]="offset()"\n      stroke-linecap="round"\n      class="transition-all duration-1500 ease-out"\n    />\n    <defs>\n      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">\n        <stop offset="0%" stop-color="#FF6B6B" />\n        <stop offset="100%" stop-color="#FF8E8E" />\n      </linearGradient>\n    </defs>\n  </svg>\n  <!-- Centre label -->\n  <div class="absolute flex flex-col items-center justify-center text-center">\n    <span class="text-xl font-bold text-gray-800 dark:text-white leading-none transition-colors">\n      {{ percentage() }}%\n    </span>\n    <span class="text-[8px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-0.5 transition-colors">\n      Match\n    </span>\n  </div>\n</div>\n' }]
  }], null, { percentage: [{ type: Input, args: [{ isSignal: true, alias: "percentage", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], strokeWidth: [{ type: Input, args: [{ isSignal: true, alias: "strokeWidth", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompatibilityRingComponent, { className: "CompatibilityRingComponent", filePath: "src/app/shared/ui/compatibility-ring/compatibility-ring.component.ts", lineNumber: 16 });
})();

// src/app/shared/ui/profile-card/profile-card.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ProfileCardComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sport_r1 = ctx.$implicit;
    \u0275\u0275classMap("px-3 py-1 rounded-full text-sm font-bold " + sport_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sport_r1.name, " ");
  }
}
var ProfileCardComponent = class _ProfileCardComponent {
  /** The athlete profile to display. */
  profile = input.required(...ngDevMode ? [{ debugName: "profile" }] : []);
  /** Emitted when the user taps the accept / heart button. */
  accept = output();
  /** Emitted when the user taps the skip / X button. */
  skip = output();
  xIcon = X;
  heartIcon = Heart;
  mapPinIcon = MapPin;
  static \u0275fac = function ProfileCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileCardComponent, selectors: [["app-profile-card"]], inputs: { profile: [1, "profile"] }, outputs: { accept: "accept", skip: "skip" }, decls: 26, vars: 13, consts: [[1, "w-full", "bg-white", "dark:bg-[#1A1A2E]", "rounded-3xl", "shadow-xl", "dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]", "overflow-hidden", "border", "border-gray-100", "dark:border-[#2D2D4A]", "card-in"], [1, "text-9xl", "select-none"], [1, "absolute", "bottom-4", "left-4", "bg-white/90", "dark:bg-black/60", "backdrop-blur-sm", "px-3", "py-1.5", "rounded-full", "flex", "items-center", "gap-1.5", "shadow-sm"], [1, "w-3", "h-3", "text-gray-500", "dark:text-gray-300", 3, "img"], [1, "text-xs", "font-bold", "text-gray-700", "dark:text-gray-200"], [1, "p-6"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "text-2xl", "font-black", "text-gray-900", "dark:text-white"], [1, "inline-block", "mt-1", "px-2", "py-0.5", "bg-gray-100", "dark:bg-[#22223A]", "rounded-lg", "text-xs", "font-bold", "text-gray-600", "dark:text-gray-400"], [3, "percentage", "size"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], [3, "class"], [1, "text-gray-600", "dark:text-gray-400", "text-sm", "leading-relaxed", "mb-7"], [1, "flex", "justify-center", "gap-6"], ["aria-label", "Skip", 1, "w-16", "h-16", "rounded-full", "border-2", "border-gray-200", "dark:border-[#2D2D4A]", "flex", "items-center", "justify-center", "text-gray-400", "hover:border-red-300", "hover:text-red-400", "hover:bg-red-50", "dark:hover:bg-red-900/10", "transition-all", "active:scale-90", "shadow-sm", 3, "click"], [1, "w-7", "h-7", 3, "img"], ["aria-label", "Accept", 1, "w-16", "h-16", "rounded-full", "bg-gradient-to-r", "from-[#FF6B6B]", "to-[#FF8E8E]", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "shadow-rose-200", "dark:shadow-rose-900/30", "hover:shadow-xl", "hover:scale-105", "transition-all", "active:scale-90", 3, "click"], [1, "w-7", "h-7", "fill-current", 3, "img"]], template: function ProfileCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275element(5, "i-lucide", 3);
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div")(11, "h2", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "app-compatibility-ring", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275repeaterCreate(17, ProfileCardComponent_For_18_Template, 2, 3, "span", 11, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 12);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
      \u0275\u0275listener("click", function ProfileCardComponent_Template_button_click_22_listener() {
        return ctx.skip.emit();
      });
      \u0275\u0275element(23, "i-lucide", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 16);
      \u0275\u0275listener("click", function ProfileCardComponent_Template_button_click_24_listener() {
        return ctx.accept.emit();
      });
      \u0275\u0275element(25, "i-lucide", 17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap("h-64 w-full bg-gradient-to-br " + ctx.profile().imageGradient + " relative flex items-center justify-center");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profile().emoji);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.mapPinIcon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profile().location);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.profile().name, ", ", ctx.profile().age);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.profile().level, " ");
      \u0275\u0275advance();
      \u0275\u0275property("percentage", ctx.profile().compatibility)("size", 60);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.profile().sports);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.profile().bio);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.xIcon);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.heartIcon);
    }
  }, dependencies: [CompatibilityRingComponent, LucideAngularModule, LucideAngularComponent], styles: ["\n\n/*# sourceMappingURL=profile-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileCardComponent, [{
    type: Component,
    args: [{ selector: "app-profile-card", imports: [CompatibilityRingComponent, LucideAngularModule], template: `<!-- profile-card.component.html
     Athlete profile card with photo gradient, info section, sport tags,
     bio, compatibility ring, and accept/skip buttons.
-->

<div class="w-full bg-white dark:bg-[#1A1A2E] rounded-3xl shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 dark:border-[#2D2D4A] card-in">

  <!-- Photo gradient -->
  <div [class]="'h-64 w-full bg-gradient-to-br ' + profile().imageGradient + ' relative flex items-center justify-center'">
    <div class="text-9xl select-none">{{ profile().emoji }}</div>
    <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
      <i-lucide [img]="mapPinIcon" class="w-3 h-3 text-gray-500 dark:text-gray-300"></i-lucide>
      <span class="text-xs font-bold text-gray-700 dark:text-gray-200">{{ profile().location }}</span>
    </div>
  </div>

  <!-- Card content -->
  <div class="p-6">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h2 class="text-2xl font-black text-gray-900 dark:text-white">{{ profile().name }}, {{ profile().age }}</h2>
        <span class="inline-block mt-1 px-2 py-0.5 bg-gray-100 dark:bg-[#22223A] rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400">
          {{ profile().level }}
        </span>
      </div>
      <app-compatibility-ring [percentage]="profile().compatibility" [size]="60" />
    </div>

    <!-- Sport tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      @for (sport of profile().sports; track sport.name) {
        <span [class]="'px-3 py-1 rounded-full text-sm font-bold ' + sport.color">
          {{ sport.name }}
        </span>
      }
    </div>

    <!-- Bio -->
    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-7">{{ profile().bio }}</p>

    <!-- Action buttons -->
    <div class="flex justify-center gap-6">
      <button
        (click)="skip.emit()"
        class="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-[#2D2D4A] flex items-center justify-center text-gray-400 hover:border-red-300 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all active:scale-90 shadow-sm"
        aria-label="Skip">
        <i-lucide [img]="xIcon" class="w-7 h-7"></i-lucide>
      </button>
      <button
        (click)="accept.emit()"
        class="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center text-white shadow-lg shadow-rose-200 dark:shadow-rose-900/30 hover:shadow-xl hover:scale-105 transition-all active:scale-90"
        aria-label="Accept">
        <i-lucide [img]="heartIcon" class="w-7 h-7 fill-current"></i-lucide>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/shared/ui/profile-card/profile-card.component.scss */\n/*# sourceMappingURL=profile-card.component.css.map */\n"] }]
  }], null, { profile: [{ type: Input, args: [{ isSignal: true, alias: "profile", required: true }] }], accept: [{ type: Output, args: ["accept"] }], skip: [{ type: Output, args: ["skip"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileCardComponent, { className: "ProfileCardComponent", filePath: "src/app/shared/ui/profile-card/profile-card.component.ts", lineNumber: 23 });
})();

// src/app/shared/ui/grupos-scroll/grupos-scroll.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function GruposScrollComponent_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i-lucide", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("img", ctx_r0.flameIcon);
  }
}
function GruposScrollComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275element(6, "i-lucide", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275conditionalCreate(9, GruposScrollComponent_For_10_Conditional_9_Template, 1, 1, "i-lucide", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const \u0275$index_16_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_16_r3 * 100 + "ms");
    \u0275\u0275advance();
    \u0275\u0275classMap("h-24 rounded-xl bg-gradient-to-br " + group_r2.imageGradient + " mb-3 flex items-center justify-center text-4xl");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2.sportEmoji, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("img", ctx_r0.usersIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2.members, " miembros ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(group_r2.activityLevel.includes("Muy") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2.activityLevel, " ");
  }
}
var GruposScrollComponent = class _GruposScrollComponent {
  groups = input.required(...ngDevMode ? [{ debugName: "groups" }] : []);
  usersIcon = Users;
  flameIcon = Flame;
  static \u0275fac = function GruposScrollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GruposScrollComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GruposScrollComponent, selectors: [["app-grupos-scroll"]], inputs: { groups: [1, "groups"] }, decls: 11, vars: 0, consts: [[1, "mt-8", "mb-24"], [1, "flex", "items-center", "justify-between", "px-1", "mb-4"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white", "flex", "items-center", "transition-colors"], [1, "mr-2"], [1, "text-sm", "font-semibold", "text-[#FF6B6B]", "hover:text-[#FF8E8E]", "transition-colors"], [1, "flex", "overflow-x-auto", "snap-x", "snap-mandatory", "gap-4", "pb-4", "-mx-4", "px-4", "no-scrollbar"], [1, "min-w-[240px]", "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-4", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "snap-center", "flex-shrink-0", "cursor-pointer", "hover:shadow-md", "dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]", "transition-all", "duration-300", "slide-in", 3, "animationDelay"], [1, "min-w-[240px]", "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-4", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "snap-center", "flex-shrink-0", "cursor-pointer", "hover:shadow-md", "dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]", "transition-all", "duration-300", "slide-in"], [1, "font-bold", "text-gray-900", "dark:text-white", "mb-1", "transition-colors"], [1, "flex", "items-center", "text-xs", "text-gray-500", "dark:text-gray-400", "mb-2", "transition-colors"], [1, "w-3", "h-3", "mr-1", 3, "img"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded-md", "bg-teal-50", "dark:bg-teal-900/30", "text-teal-700", "dark:text-teal-400", "text-xs", "font-bold", "transition-colors"], [1, "w-3", "h-3", "mr-1", "fill-current", 3, "img"]], template: function GruposScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F3DF}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Grupos Abiertos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275text(7, " Ver todos ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275repeaterCreate(9, GruposScrollComponent_For_10_Template, 11, 10, "div", 6, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.groups());
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.slide-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.4s ease-out backwards;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=grupos-scroll.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GruposScrollComponent, [{
    type: Component,
    args: [{ selector: "app-grupos-scroll", standalone: true, imports: [LucideAngularModule], template: `<!-- shared/ui/grupos-scroll/grupos-scroll.component.html -->
<div class="mt-8 mb-24">
  <div class="flex items-center justify-between px-1 mb-4">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center transition-colors">
      <span class="mr-2">\u{1F3DF}\uFE0F</span> Grupos Abiertos
    </h3>
    <button class="text-sm font-semibold text-[#FF6B6B] hover:text-[#FF8E8E] transition-colors">
      Ver todos
    </button>
  </div>
  <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar">
    @for (group of groups(); track group.id; let i = $index) {
      <div
        class="min-w-[240px] bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] snap-center flex-shrink-0 cursor-pointer hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 slide-in"
        [style.animationDelay]="i * 100 + 'ms'">
        <div [class]="'h-24 rounded-xl bg-gradient-to-br ' + group.imageGradient + ' mb-3 flex items-center justify-center text-4xl'">
          {{ group.sportEmoji }}
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-1 transition-colors">
          {{ group.name }}
        </h4>
        <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 transition-colors">
          <i-lucide [img]="usersIcon" class="w-3 h-3 mr-1"></i-lucide>
          {{ group.members }} miembros
        </div>
        <div class="inline-flex items-center px-2 py-1 rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-bold transition-colors">
          @if (group.activityLevel.includes('Muy')) {
            <i-lucide [img]="flameIcon" class="w-3 h-3 mr-1 fill-current"></i-lucide>
          }
          {{ group.activityLevel }}
        </div>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/shared/ui/grupos-scroll/grupos-scroll.component.scss */\n.slide-in {\n  animation: slideIn 0.4s ease-out backwards;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=grupos-scroll.component.css.map */\n"] }]
  }], null, { groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GruposScrollComponent, { className: "GruposScrollComponent", filePath: "src/app/shared/ui/grupos-scroll/grupos-scroll.component.ts", lineNumber: 15 });
})();

// src/app/shared/ui/confetti-effect/confetti-effect.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function ConfettiEffectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
  if (rf & 2) {
    const piece_r1 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", piece_r1.color)("left", "50%")("top", "50%")("--tx", piece_r1.tx + "px")("--ty", piece_r1.ty + "px")("--rot", piece_r1.rot + "deg")("--scale", piece_r1.scale)("animation-delay", piece_r1.delay + "ms");
  }
}
var ConfettiEffectComponent = class _ConfettiEffectComponent {
  pieces = [];
  colors = ["#FF6B6B", "#FF8E8E", "#0EA5E9", "#FCD34D", "#A78BFA"];
  ngOnInit() {
    this.pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: this.colors[i % this.colors.length],
      tx: (Math.random() - 0.5) * 400,
      ty: (Math.random() - 0.5) * 400,
      rot: Math.random() * 360,
      scale: Math.random() * 1 + 0.5,
      delay: Math.random() * 200
    }));
  }
  static \u0275fac = function ConfettiEffectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfettiEffectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfettiEffectComponent, selectors: [["app-confetti-effect"]], decls: 3, vars: 0, consts: [[1, "absolute", "inset-0", "pointer-events-none", "overflow-hidden", "z-50"], [1, "absolute", "w-3", "h-3", "rounded-sm", "confetti-piece", 3, "backgroundColor", "left", "top", "--tx", "--ty", "--rot", "--scale", "animationDelay"], [1, "absolute", "w-3", "h-3", "rounded-sm", "confetti-piece"]], template: function ConfettiEffectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ConfettiEffectComponent_For_2_Template, 1, 16, "div", 1, _forTrack03);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.pieces);
    }
  }, styles: ["\n\n.confetti-piece[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_confetti 1.5s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_confetti {\n  0% {\n    transform: translate(0, 0) rotate(0deg) scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(var(--scale));\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=confetti-effect.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfettiEffectComponent, [{
    type: Component,
    args: [{ selector: "app-confetti-effect", standalone: true, template: `<!-- shared/ui/confetti-effect/confetti-effect.component.html -->
<div class="absolute inset-0 pointer-events-none overflow-hidden z-50">
  @for (piece of pieces; track piece.id) {
    <div
      class="absolute w-3 h-3 rounded-sm confetti-piece"
      [style.backgroundColor]="piece.color"
      [style.left]="'50%'"
      [style.top]="'50%'"
      [style.--tx]="piece.tx + 'px'"
      [style.--ty]="piece.ty + 'px'"
      [style.--rot]="piece.rot + 'deg'"
      [style.--scale]="piece.scale"
      [style.animationDelay]="piece.delay + 'ms'">
    </div>
  }
</div>
`, styles: ["/* src/app/shared/ui/confetti-effect/confetti-effect.component.scss */\n.confetti-piece {\n  animation: confetti 1.5s ease-out forwards;\n}\n@keyframes confetti {\n  0% {\n    transform: translate(0, 0) rotate(0deg) scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(var(--scale));\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=confetti-effect.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfettiEffectComponent, { className: "ConfettiEffectComponent", filePath: "src/app/shared/ui/confetti-effect/confetti-effect.component.ts", lineNumber: 12 });
})();

// src/app/pages/match/match.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack04 = ($index, $item) => $item.id;
function MatchComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-confetti-effect");
  }
}
function MatchComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3, " \xA1MATCH! \u{1F389} ");
    \u0275\u0275elementEnd()()();
  }
}
function MatchComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function MatchComponent_For_15_Template_button_click_0_listener() {
      const filter_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeFilter = filter_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border " + (ctx_r2.activeFilter === filter_r2 ? "bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-md shadow-rose-200 dark:shadow-none" : "bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r2, " ");
  }
}
function MatchComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-profile-card", 52);
    \u0275\u0275listener("accept", function MatchComponent_Conditional_18_Template_app_profile_card_accept_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAccept());
    })("skip", function MatchComponent_Conditional_18_Template_app_profile_card_skip_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("profile", ctx_r2.currentProfile);
  }
}
function MatchComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 53);
    \u0275\u0275element(2, "img", 54);
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://api.dicebear.com/7.x/avataaars/svg?seed=" + i_r5 * 55, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", i_r5 * 200, "m ");
  }
}
function MatchComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 56)(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h4", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r6.emoji, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r6.compatibility, "%");
  }
}
var MatchComponent = class _MatchComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  infoIcon = Info;
  shieldIcon = Shield;
  mapPinIcon = MapPin;
  clockIcon = Clock;
  activityIcon = Activity;
  starIcon = Star;
  searchIcon = Search;
  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  store = inject(Store);
  profiles = this.store.selectSignal(UserSelectors.profiles);
  groups = this.store.selectSignal(CommunitiesSelectors.groups);
  // ---------------------------------------------------------------------------
  // Local UI state
  // ---------------------------------------------------------------------------
  filters = ["Todos", "\u26BD F\xFAtbol", "\u{1F3C3} Running", "\u{1F3BE} Padel", "\u{1F9D8} Yoga", "\u{1F3D4}\uFE0F Trekking"];
  currentIndex = 0;
  showConfetti = false;
  showMatchOverlay = false;
  activeFilter = "Todos";
  /** The profile card currently on top of the stack. */
  get currentProfile() {
    const all = this.profiles();
    return all[this.currentIndex % (all.length || 1)];
  }
  handleNext() {
    this.currentIndex++;
  }
  handleAccept() {
    this.showConfetti = true;
    this.showMatchOverlay = true;
    setTimeout(() => {
      this.showMatchOverlay = false;
      this.handleNext();
      setTimeout(() => this.showConfetti = false, 500);
    }, 1500);
  }
  ngOnInit() {
    this.store.dispatch([
      new UserActions.LoadProfiles(),
      new CommunitiesActions.LoadGroups()
    ]);
  }
  static \u0275fac = function MatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchComponent, selectors: [["app-match"]], decls: 81, vars: 10, consts: [[1, "h-full", "flex", "flex-col", "md:flex-row", "max-w-6xl", "mx-auto", "md:py-8", "gap-8", "px-4", "md:px-0"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-sm", "rounded-3xl", "animate-fade-in"], [1, "flex-1", "flex", "flex-col", "max-w-md", "mx-auto", "w-full"], [1, "mb-6"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-2xl", "md:text-3xl", "font-black", "text-gray-900", "dark:text-white", "transition-colors"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "transition-colors"], [1, "md:hidden", "w-10", "h-10", "rounded-full", "bg-gray-200", "overflow-hidden", "border-2", "border-white", "dark:border-[#2D2D4A]", "shadow-sm"], ["src", "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "alt", "User", 1, "w-full", "h-full", "object-cover"], [1, "flex", "gap-2", "overflow-x-auto", "no-scrollbar", "pb-2"], [3, "class"], [1, "relative", "z-10", "flex-1", "min-h-[500px]"], [1, "space-y-4"], [3, "profile"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-4", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "transition-colors", "duration-300", "animate-fade-up"], [1, "flex", "items-center", "gap-2", "mb-3", "text-sm", "font-bold", "text-gray-900", "dark:text-white"], [1, "w-4", "h-4", "text-[#FF6B6B]", 3, "img"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], [1, "px-2", "py-1", "bg-green-50", "dark:bg-green-900/20", "text-green-700", "dark:text-green-400", "text-xs", "font-semibold", "rounded-md"], [1, "px-2", "py-1", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-700", "dark:text-blue-400", "text-xs", "font-semibold", "rounded-md"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "flex", "items-center", "ml-auto"], [1, "border-t", "border-gray-50", "dark:border-[#2D2D4A]", "pt-3"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-xs", "font-bold", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "text-[#FF6B6B]", "font-bold", "cursor-pointer"], [1, "flex", "gap-3", "overflow-x-auto", "no-scrollbar", "pb-1"], [1, "flex", "flex-col", "items-center", "gap-1", "min-w-[50px]"], [1, "hidden", "md:flex", "flex-1", "flex-col", "space-y-6", "max-w-sm", "lg:max-w-md"], [1, "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "p-6", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "transition-colors", "duration-300"], [1, "font-bold", "text-gray-900", "dark:text-white", "mb-4", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "text-[#FF6B6B]", 3, "img"], [1, "grid", "grid-cols-2", "gap-4"], [1, "p-3", "bg-gray-50", "dark:bg-[#22223A]", "rounded-xl", "text-center"], [1, "text-2xl", "font-black", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "font-medium"], [1, "mt-4", "text-xs", "text-center", "text-gray-400"], [1, "font-bold", "text-[#FF6B6B]"], [1, "w-5", "h-5", "text-yellow-500", 3, "img"], [1, "flex", "items-center", "justify-between", "group", "cursor-pointer"], [1, "bg-blue-50", "dark:bg-blue-900/10", "rounded-2xl", "p-6", "border", "border-blue-100", "dark:border-blue-900/30", "transition-colors"], [1, "flex", "items-start", "mb-4"], [1, "p-2", "bg-blue-100", "dark:bg-blue-900/30", "rounded-lg", "mr-3", "transition-colors"], [1, "w-6", "h-6", "text-blue-600", "dark:text-blue-400", 3, "img"], [1, "font-bold", "text-blue-900", "dark:text-blue-300", "text-lg", "transition-colors"], [1, "text-blue-700", "dark:text-blue-400", "text-sm", "mt-1", "transition-colors"], [1, "flex", "items-center", "justify-center", "text-xs", "text-gray-400", "dark:text-gray-500", "space-x-2", "transition-colors"], [1, "w-4", "h-4", 3, "img"], [1, "md:hidden", "pb-24"], [3, "groups"], [1, "bg-white", "dark:bg-[#1A1A2E]", "px-12", "py-6", "rounded-3xl", "shadow-2xl", "transform", "-translate-y-20", "border-4", "border-[#FF6B6B]", "animate-bounce-in"], [1, "text-5xl", "font-black", "bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-[#FF6B6B]", "to-[#FF8E8E]"], [3, "click"], [3, "accept", "skip", "profile"], [1, "relative"], ["alt", "Nearby", 1, "w-10", "h-10", "rounded-full", "bg-gray-100", "dark:bg-[#2D2D4A]", 3, "src"], [1, "absolute", "-bottom-1", "-right-1", "bg-white", "dark:bg-[#1A1A2E]", "text-[8px]", "font-bold", "px-1", "rounded-full", "border", "border-gray-100", "dark:border-[#2D2D4A]", "shadow-sm"], [1, "flex", "items-center", "gap-3"], [1, "text-2xl", "bg-gray-50", "dark:bg-[#22223A]", "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-full", "group-hover:scale-110", "transition-transform"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "group-hover:text-[#FF6B6B]", "transition-colors"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "font-bold", "text-green-500", "bg-green-50", "dark:bg-green-900/20", "px-2", "py-1", "rounded-full"]], template: function MatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, MatchComponent_Conditional_1_Template, 1, 0, "app-confetti-effect");
      \u0275\u0275conditionalCreate(2, MatchComponent_Conditional_2_Template, 4, 0, "div", 1);
      \u0275\u0275elementStart(3, "div", 2)(4, "header", 3)(5, "div", 4)(6, "div")(7, "h1", 5);
      \u0275\u0275text(8, "Descubrir");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "Encuentra tu partner deportivo ideal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275element(12, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275repeaterCreate(14, MatchComponent_For_15_Template, 2, 3, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
      \u0275\u0275conditionalCreate(18, MatchComponent_Conditional_18_Template, 1, 1, "app-profile-card", 13);
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
      \u0275\u0275element(21, "i-lucide", 16);
      \u0275\u0275text(22, " Disponibilidad ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17)(24, "span", 18);
      \u0275\u0275text(25, "Ma\xF1anas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27, "Fines de Semana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 20);
      \u0275\u0275text(29, "Pref: 18:00 - 20:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "span", 23);
      \u0275\u0275text(33, "Deportistas cerca de ti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 24);
      \u0275\u0275text(35, "Ver mapa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 25);
      \u0275\u0275repeaterCreate(37, MatchComponent_For_38_Template, 5, 2, "div", 26, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "h3", 29);
      \u0275\u0275element(42, "i-lucide", 30);
      \u0275\u0275text(43, " Estad\xEDsticas de Match ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "div", 33);
      \u0275\u0275text(47, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 34);
      \u0275\u0275text(49, "Matches esta semana");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 32)(51, "div", 33);
      \u0275\u0275text(52, "85%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 34);
      \u0275\u0275text(54, "Tasa de aceptaci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 35);
      \u0275\u0275text(56, " Tu deporte m\xE1s compatible: ");
      \u0275\u0275elementStart(57, "span", 36);
      \u0275\u0275text(58, "Running");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 28)(60, "h3", 29);
      \u0275\u0275element(61, "i-lucide", 37);
      \u0275\u0275text(62, " Deportistas Destacados ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 12);
      \u0275\u0275repeaterCreate(64, MatchComponent_For_65_Template, 11, 4, "div", 38, _forTrack04);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 39)(67, "div", 40)(68, "div", 41);
      \u0275\u0275element(69, "i-lucide", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div")(71, "h3", 43);
      \u0275\u0275text(72, "Consejo Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 44);
      \u0275\u0275text(74, " Los usuarios con intereses similares en deportes tienen un 40% m\xE1s de probabilidad de mantener una rutina de entrenamiento. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 45);
      \u0275\u0275element(76, "i-lucide", 46);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Perfiles verificados y seguros");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 47);
      \u0275\u0275element(80, "app-grupos-scroll", 48);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showConfetti ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showMatchOverlay ? 2 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.currentProfile ? 18 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.clockIcon);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.activityIcon);
      \u0275\u0275advance(19);
      \u0275\u0275property("img", ctx.starIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.profiles());
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.infoIcon);
      \u0275\u0275advance(7);
      \u0275\u0275property("img", ctx.shieldIcon);
      \u0275\u0275advance(4);
      \u0275\u0275property("groups", ctx.groups());
    }
  }, dependencies: [ProfileCardComponent, GruposScrollComponent, ConfettiEffectComponent, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.animate-bounce-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.animate-fade-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounceIn {\n  from {\n    transform: scale(0.5) rotate(-10deg) translateY(-80px);\n  }\n  to {\n    transform: scale(1.2) rotate(0) translateY(-80px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=match.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchComponent, [{
    type: Component,
    args: [{ selector: "app-match", imports: [ProfileCardComponent, GruposScrollComponent, ConfettiEffectComponent, LucideAngularModule], template: `<!-- match.component.html
     Match / Discover page template.
     Left column: profile card stack, filters, nearby athletes.
     Right column (desktop): match stats, featured athletes, pro tip.
     Mobile: grupos-scroll at the bottom.
-->

<div class="h-full flex flex-col md:flex-row max-w-6xl mx-auto md:py-8 gap-8 px-4 md:px-0">

  <!-- Confetti overlay -->
  @if (showConfetti) {
    <app-confetti-effect />
  }

  <!-- Match success overlay -->
  @if (showMatchOverlay) {
    <div class="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl animate-fade-in">
      <div class="bg-white dark:bg-[#1A1A2E] px-12 py-6 rounded-3xl shadow-2xl transform -translate-y-20 border-4 border-[#FF6B6B] animate-bounce-in">
        <span class="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]">
          \xA1MATCH! \u{1F389}
        </span>
      </div>
    </div>
  }

  <!-- =====================================================================
       Left Column: Card Stack
       ===================================================================== -->
  <div class="flex-1 flex flex-col max-w-md mx-auto w-full">

    <!-- Header & Filters -->
    <header class="mb-6">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h1 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white transition-colors">Descubrir</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 transition-colors">Encuentra tu partner deportivo ideal</p>
        </div>
        <div class="md:hidden w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white dark:border-[#2D2D4A] shadow-sm">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- Sport filters -->
      <div class="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        @for (filter of filters; track filter) {
          <button
            (click)="activeFilter = filter"
            [class]="'px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ' +
              (activeFilter === filter ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-md shadow-rose-200 dark:shadow-none' : 'bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]')">
            {{ filter }}
          </button>
        }
      </div>
    </header>

    <!-- Card stack area -->
    <div class="relative z-10 flex-1 min-h-[500px]">
      <div class="space-y-4">
        @if (currentProfile) {
          <app-profile-card
            [profile]="currentProfile"
            (accept)="handleAccept()"
            (skip)="handleNext()" />
        }

        <!-- Availability & Nearby panel -->
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300 animate-fade-up">
          <div class="flex items-center gap-2 mb-3 text-sm font-bold text-gray-900 dark:text-white">
            <i-lucide [img]="clockIcon" class="w-4 h-4 text-[#FF6B6B]"></i-lucide>
            Disponibilidad
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-md">Ma\xF1anas</span>
            <span class="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md">Fines de Semana</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center ml-auto">Pref: 18:00 - 20:00</span>
          </div>
          <div class="border-t border-gray-50 dark:border-[#2D2D4A] pt-3">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-gray-500 dark:text-gray-400">Deportistas cerca de ti</span>
              <span class="text-xs text-[#FF6B6B] font-bold cursor-pointer">Ver mapa</span>
            </div>
            <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
              @for (i of [1,2,3,4,5]; track i) {
                <div class="flex flex-col items-center gap-1 min-w-[50px]">
                  <div class="relative">
                    <img [src]="'https://api.dicebear.com/7.x/avataaars/svg?seed=' + (i * 55)" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2D2D4A]" alt="Nearby" />
                    <div class="absolute -bottom-1 -right-1 bg-white dark:bg-[#1A1A2E] text-[8px] font-bold px-1 rounded-full border border-gray-100 dark:border-[#2D2D4A] shadow-sm">
                      {{ i * 200 }}m
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- =====================================================================
       Right Column: Desktop only
       ===================================================================== -->
  <div class="hidden md:flex flex-1 flex-col space-y-6 max-w-sm lg:max-w-md">

    <!-- Match Stats -->
    <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
      <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <i-lucide [img]="activityIcon" class="w-5 h-5 text-[#FF6B6B]"></i-lucide>
        Estad\xEDsticas de Match
      </h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-3 bg-gray-50 dark:bg-[#22223A] rounded-xl text-center">
          <div class="text-2xl font-black text-gray-900 dark:text-white">12</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 font-medium">Matches esta semana</div>
        </div>
        <div class="p-3 bg-gray-50 dark:bg-[#22223A] rounded-xl text-center">
          <div class="text-2xl font-black text-gray-900 dark:text-white">85%</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 font-medium">Tasa de aceptaci\xF3n</div>
        </div>
      </div>
      <div class="mt-4 text-xs text-center text-gray-400">
        Tu deporte m\xE1s compatible: <span class="font-bold text-[#FF6B6B]">Running</span>
      </div>
    </div>

    <!-- Featured Athletes -->
    <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
      <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <i-lucide [img]="starIcon" class="w-5 h-5 text-yellow-500"></i-lucide>
        Deportistas Destacados
      </h3>
      <div class="space-y-4">
        @for (p of profiles(); track p.id) {
          <div class="flex items-center justify-between group cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="text-2xl bg-gray-50 dark:bg-[#22223A] w-10 h-10 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {{ p.emoji }}
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white text-sm group-hover:text-[#FF6B6B] transition-colors">{{ p.name }}</h4>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ p.level }}</span>
              </div>
            </div>
            <span class="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">{{ p.compatibility }}%</span>
          </div>
        }
      </div>
    </div>

    <!-- Pro Tip -->
    <div class="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30 transition-colors">
      <div class="flex items-start mb-4">
        <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 transition-colors">
          <i-lucide [img]="infoIcon" class="w-6 h-6 text-blue-600 dark:text-blue-400"></i-lucide>
        </div>
        <div>
          <h3 class="font-bold text-blue-900 dark:text-blue-300 text-lg transition-colors">Consejo Pro</h3>
          <p class="text-blue-700 dark:text-blue-400 text-sm mt-1 transition-colors">
            Los usuarios con intereses similares en deportes tienen un 40% m\xE1s de probabilidad de mantener una rutina de entrenamiento.
          </p>
        </div>
      </div>
    </div>

    <!-- Verified badge -->
    <div class="flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 space-x-2 transition-colors">
      <i-lucide [img]="shieldIcon" class="w-4 h-4"></i-lucide>
      <span>Perfiles verificados y seguros</span>
    </div>
  </div>

  <!-- =====================================================================
       Mobile: grupos scroll
       ===================================================================== -->
  <div class="md:hidden pb-24">
    <app-grupos-scroll [groups]="groups()" />
  </div>
</div>
`, styles: ["/* src/app/pages/match/match.component.scss */\n.animate-fade-in {\n  animation: fadeIn 0.3s ease-out;\n}\n.animate-bounce-in {\n  animation: bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.animate-fade-up {\n  animation: fadeUp 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bounceIn {\n  from {\n    transform: scale(0.5) rotate(-10deg) translateY(-80px);\n  }\n  to {\n    transform: scale(1.2) rotate(0) translateY(-80px);\n  }\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=match.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchComponent, { className: "MatchComponent", filePath: "src/app/pages/match/match.component.ts", lineNumber: 27 });
})();
export {
  MatchComponent
};
//# sourceMappingURL=chunk-GHUQ7U4D.js.map
