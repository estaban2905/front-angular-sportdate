import {
  EllipsisVertical,
  LucideAngularComponent,
  LucideAngularModule,
  Phone,
  Search,
  Video
} from "./chunk-BCPD456Q.js";
import {
  Component,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GTOIWY6U.js";

// src/app/pages/chat/chat.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChatComponent_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
}
function ChatComponent_For_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chat_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chat_r1.unread, " ");
  }
}
function ChatComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 36);
    \u0275\u0275element(2, "img", 37);
    \u0275\u0275conditionalCreate(3, ChatComponent_For_10_Conditional_3_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "div", 40)(6, "h3", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, ChatComponent_For_10_Conditional_12_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", chat_r1.avatar, \u0275\u0275sanitizeUrl)("alt", chat_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(chat_r1.online ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(chat_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chat_r1.time);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-sm truncate transition-colors " + (chat_r1.unread > 0 ? "font-bold text-gray-800 dark:text-gray-200" : "text-gray-500 dark:text-gray-400"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chat_r1.message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(chat_r1.unread > 0 ? 12 : -1);
  }
}
var ChatComponent = class _ChatComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  searchIcon = Search;
  moreVerticalIcon = EllipsisVertical;
  phoneIcon = Phone;
  videoIcon = Video;
  // ---------------------------------------------------------------------------
  // Mock chat data
  // ---------------------------------------------------------------------------
  chats = [
    { id: 1, name: "Camila", message: "\xA1Nos vemos en el parque a las 10!", time: "10:30 AM", unread: 2, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camila", online: true },
    { id: 2, name: "Grupo Running", message: "Diego: \xBFQui\xE9n lleva agua?", time: "9:15 AM", unread: 0, avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Running", online: false },
    { id: 3, name: "Javier", message: "Buen partido el de ayer \u{1F919}", time: "Ayer", unread: 0, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Javier", online: true },
    { id: 4, name: "Ana P.", message: "\xBFTe sumas al padel el jueves?", time: "Ayer", unread: 0, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana", online: false },
    { id: 5, name: "Carlos D.", message: "Te envi\xE9 la solicitud del evento", time: "Lun", unread: 0, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos", online: false }
  ];
  static \u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], decls: 58, vars: 8, consts: [[1, "h-full", "flex", "flex-col", "md:flex-row", "max-w-6xl", "mx-auto", "md:h-[calc(100vh-2rem)]", "md:py-4", "gap-6"], [1, "flex-1", "md:max-w-sm", "bg-white", "dark:bg-[#1A1A2E]", "md:rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "flex", "flex-col", "h-full", "overflow-hidden", "transition-all", "duration-300"], [1, "p-4", "border-b", "border-gray-100", "dark:border-[#2D2D4A]"], [1, "text-2xl", "font-black", "text-gray-900", "dark:text-white", "mb-4", "transition-colors"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "text-gray-400", "w-4", "h-4", 3, "img"], ["type", "text", "placeholder", "Buscar chats...", 1, "w-full", "bg-gray-50", "dark:bg-[#22223A]", "border", "border-gray-200", "dark:border-[#2D2D4A]", "rounded-xl", "pl-10", "pr-4", "py-2", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-[#FF6B6B]/20", "focus:border-[#FF6B6B]", "text-gray-900", "dark:text-white", "transition-colors"], [1, "flex-1", "overflow-y-auto"], [1, "flex", "items-center", "p-4", "hover:bg-gray-50", "dark:hover:bg-[#22223A]", "cursor-pointer", "transition-colors", "border-b", "border-gray-50", "dark:border-[#2D2D4A]", "last:border-0"], [1, "hidden", "md:flex", "flex-1", "bg-white", "dark:bg-[#1A1A2E]", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-[#2D2D4A]", "flex-col", "overflow-hidden", "transition-all", "duration-300"], [1, "p-4", "border-b", "border-gray-100", "dark:border-[#2D2D4A]", "flex", "justify-between", "items-center", "bg-gray-50/30", "dark:bg-[#22223A]/30"], [1, "flex", "items-center"], [1, "relative", "mr-3"], ["alt", "User", 1, "w-10", "h-10", "rounded-full", 3, "src"], [1, "absolute", "bottom-0", "right-0", "w-2.5", "h-2.5", "bg-green-500", "rounded-full", "border-2", "border-white", "dark:border-[#1A1A2E]"], [1, "font-bold", "text-gray-900", "dark:text-white", "transition-colors"], [1, "text-xs", "text-green-600", "dark:text-green-400", "font-medium", "transition-colors"], [1, "flex", "items-center", "space-x-2", "text-gray-400"], [1, "p-2", "hover:bg-gray-100", "dark:hover:bg-[#22223A]", "rounded-full", "transition-colors"], [1, "w-5", "h-5", 3, "img"], [1, "flex-1", "p-6", "overflow-y-auto", "bg-[#FAFAFA]", "dark:bg-[#0F0F1A]", "space-y-4", "transition-colors"], [1, "flex", "justify-center", "mb-6"], [1, "text-xs", "font-bold", "text-gray-400", "bg-gray-100", "dark:bg-[#22223A]", "px-3", "py-1", "rounded-full", "transition-colors"], [1, "flex", "justify-end"], [1, "bg-[#FF6B6B]", "text-white", "px-4", "py-2", "rounded-2xl", "rounded-tr-none", "max-w-xs", "shadow-sm"], [1, "text-sm"], [1, "flex", "justify-start"], ["alt", "User", 1, "w-8", "h-8", "rounded-full", "mr-2", "self-end", "mb-1", 3, "src"], [1, "bg-white", "dark:bg-[#22223A]", "text-gray-800", "dark:text-gray-200", "border", "border-gray-100", "dark:border-[#2D2D4A]", "px-4", "py-2", "rounded-2xl", "rounded-tl-none", "max-w-xs", "shadow-sm", "transition-colors"], [1, "p-4", "border-t", "border-gray-100", "dark:border-[#2D2D4A]", "bg-white", "dark:bg-[#1A1A2E]", "transition-colors"], [1, "flex", "items-center", "bg-gray-50", "dark:bg-[#22223A]", "rounded-xl", "px-4", "py-2", "border", "border-gray-200", "dark:border-[#2D2D4A]", "focus-within:ring-2", "focus-within:ring-[#FF6B6B]/20", "focus-within:border-[#FF6B6B]", "transition-all"], ["type", "text", "placeholder", "Escribe un mensaje...", 1, "flex-1", "bg-transparent", "border-none", "focus:ring-0", "focus:outline-none", "text-sm", "py-2", "text-gray-900", "dark:text-white", "placeholder-gray-400", "dark:placeholder-gray-500"], [1, "ml-2", "p-2", "bg-[#FF6B6B]", "text-white", "rounded-lg", "hover:bg-[#FF8E8E]", "transition-colors"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "relative", "mr-4"], [1, "w-12", "h-12", "rounded-full", "bg-gray-200", "dark:bg-[#2D2D4A]", "object-cover", 3, "src", "alt"], [1, "absolute", "bottom-0", "right-0", "w-3", "h-3", "bg-green-500", "rounded-full", "border-2", "border-white", "dark:border-[#1A1A2E]"], [1, "flex-1", "min-w-0"], [1, "flex", "justify-between", "items-baseline", "mb-1"], [1, "font-bold", "text-gray-900", "dark:text-white", "truncate", "transition-colors"], [1, "text-xs", "text-gray-400", "whitespace-nowrap", "ml-2"], [1, "ml-3", "w-5", "h-5", "bg-[#FF6B6B]", "rounded-full", "flex", "items-center", "justify-center", "text-[10px]", "font-bold", "text-white"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Mensajes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "i-lucide", 5)(7, "input", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275repeaterCreate(9, ChatComponent_For_10_Template, 13, 9, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
      \u0275\u0275element(15, "img", 13)(16, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h3", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 16);
      \u0275\u0275text(21, "En l\xEDnea");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
      \u0275\u0275element(24, "i-lucide", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 18);
      \u0275\u0275element(26, "i-lucide", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 18);
      \u0275\u0275element(28, "i-lucide", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 21)(31, "span", 22);
      \u0275\u0275text(32, "Hoy, 10:30 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 23)(34, "div", 24)(35, "p", 25);
      \u0275\u0275text(36, "\xA1Hola Camila! \xBFVas a ir al evento de running hoy?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 26);
      \u0275\u0275element(38, "img", 27);
      \u0275\u0275elementStart(39, "div", 28)(40, "p", 25);
      \u0275\u0275text(41, "\xA1Sii! Justo iba saliendo. \xBFNos juntamos all\xE1?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 23)(43, "div", 24)(44, "p", 25);
      \u0275\u0275text(45, "\xA1Dale! Nos vemos en la entrada del parque a las 10.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 26);
      \u0275\u0275element(47, "img", 27);
      \u0275\u0275elementStart(48, "div", 28)(49, "p", 25);
      \u0275\u0275text(50, "\xA1Nos vemos en el parque a las 10! \u{1F3C3}\u200D\u2640\uFE0F");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 29)(52, "div", 30);
      \u0275\u0275element(53, "input", 31);
      \u0275\u0275elementStart(54, "button", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 33);
      \u0275\u0275element(56, "line", 34)(57, "polygon", 35);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("img", ctx.searchIcon);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.chats);
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.chats[0].avatar, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.chats[0].name);
      \u0275\u0275advance(5);
      \u0275\u0275property("img", ctx.phoneIcon);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.videoIcon);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.moreVerticalIcon);
      \u0275\u0275advance(10);
      \u0275\u0275property("src", ctx.chats[0].avatar, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(9);
      \u0275\u0275property("src", ctx.chats[0].avatar, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n/*# sourceMappingURL=chat.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", imports: [LucideAngularModule], template: `<!-- chat.component.html
     Chat / Mensajes page template.
     Left: chat list. Right (desktop): active conversation window with message input.
-->

<div class="h-full flex flex-col md:flex-row max-w-6xl mx-auto md:h-[calc(100vh-2rem)] md:py-4 gap-6">

  <!-- =====================================================================
       Chat List Sidebar
       ===================================================================== -->
  <div class="flex-1 md:max-w-sm bg-white dark:bg-[#1A1A2E] md:rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex flex-col h-full overflow-hidden transition-all duration-300">

    <!-- Search header -->
    <div class="p-4 border-b border-gray-100 dark:border-[#2D2D4A]">
      <h1 class="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">Mensajes</h1>
      <div class="relative">
        <i-lucide [img]="searchIcon" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"></i-lucide>
        <input type="text" placeholder="Buscar chats..." class="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 focus:border-[#FF6B6B] text-gray-900 dark:text-white transition-colors" />
      </div>
    </div>

    <!-- Chat list -->
    <div class="flex-1 overflow-y-auto">
      @for (chat of chats; track chat.id) {
        <div class="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-[#22223A] cursor-pointer transition-colors border-b border-gray-50 dark:border-[#2D2D4A] last:border-0">
          <div class="relative mr-4">
            <img [src]="chat.avatar" [alt]="chat.name" class="w-12 h-12 rounded-full bg-gray-200 dark:bg-[#2D2D4A] object-cover" />
            @if (chat.online) {
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]"></div>
            }
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-baseline mb-1">
              <h3 class="font-bold text-gray-900 dark:text-white truncate transition-colors">{{ chat.name }}</h3>
              <span class="text-xs text-gray-400 whitespace-nowrap ml-2">{{ chat.time }}</span>
            </div>
            <p [class]="'text-sm truncate transition-colors ' + (chat.unread > 0 ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400')">
              {{ chat.message }}
            </p>
          </div>
          @if (chat.unread > 0) {
            <div class="ml-3 w-5 h-5 bg-[#FF6B6B] rounded-full flex items-center justify-center text-[10px] font-bold text-white">
              {{ chat.unread }}
            </div>
          }
        </div>
      }
    </div>
  </div>

  <!-- =====================================================================
       Chat Window (Desktop only)
       ===================================================================== -->
  <div class="hidden md:flex flex-1 bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex-col overflow-hidden transition-all duration-300">

    <!-- Conversation header -->
    <div class="p-4 border-b border-gray-100 dark:border-[#2D2D4A] flex justify-between items-center bg-gray-50/30 dark:bg-[#22223A]/30">
      <div class="flex items-center">
        <div class="relative mr-3">
          <img [src]="chats[0].avatar" alt="User" class="w-10 h-10 rounded-full" />
          <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]"></div>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white transition-colors">{{ chats[0].name }}</h3>
          <span class="text-xs text-green-600 dark:text-green-400 font-medium transition-colors">En l\xEDnea</span>
        </div>
      </div>
      <div class="flex items-center space-x-2 text-gray-400">
        <button class="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
          <i-lucide [img]="phoneIcon" class="w-5 h-5"></i-lucide>
        </button>
        <button class="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
          <i-lucide [img]="videoIcon" class="w-5 h-5"></i-lucide>
        </button>
        <button class="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
          <i-lucide [img]="moreVerticalIcon" class="w-5 h-5"></i-lucide>
        </button>
      </div>
    </div>

    <!-- Messages area -->
    <div class="flex-1 p-6 overflow-y-auto bg-[#FAFAFA] dark:bg-[#0F0F1A] space-y-4 transition-colors">
      <div class="flex justify-center mb-6">
        <span class="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-[#22223A] px-3 py-1 rounded-full transition-colors">Hoy, 10:30 AM</span>
      </div>
      <!-- Outgoing -->
      <div class="flex justify-end">
        <div class="bg-[#FF6B6B] text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-xs shadow-sm">
          <p class="text-sm">\xA1Hola Camila! \xBFVas a ir al evento de running hoy?</p>
        </div>
      </div>
      <!-- Incoming -->
      <div class="flex justify-start">
        <img [src]="chats[0].avatar" alt="User" class="w-8 h-8 rounded-full mr-2 self-end mb-1" />
        <div class="bg-white dark:bg-[#22223A] text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-[#2D2D4A] px-4 py-2 rounded-2xl rounded-tl-none max-w-xs shadow-sm transition-colors">
          <p class="text-sm">\xA1Sii! Justo iba saliendo. \xBFNos juntamos all\xE1?</p>
        </div>
      </div>
      <!-- Outgoing -->
      <div class="flex justify-end">
        <div class="bg-[#FF6B6B] text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-xs shadow-sm">
          <p class="text-sm">\xA1Dale! Nos vemos en la entrada del parque a las 10.</p>
        </div>
      </div>
      <!-- Incoming -->
      <div class="flex justify-start">
        <img [src]="chats[0].avatar" alt="User" class="w-8 h-8 rounded-full mr-2 self-end mb-1" />
        <div class="bg-white dark:bg-[#22223A] text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-[#2D2D4A] px-4 py-2 rounded-2xl rounded-tl-none max-w-xs shadow-sm transition-colors">
          <p class="text-sm">\xA1Nos vemos en el parque a las 10! \u{1F3C3}\u200D\u2640\uFE0F</p>
        </div>
      </div>
    </div>

    <!-- Message input -->
    <div class="p-4 border-t border-gray-100 dark:border-[#2D2D4A] bg-white dark:bg-[#1A1A2E] transition-colors">
      <div class="flex items-center bg-gray-50 dark:bg-[#22223A] rounded-xl px-4 py-2 border border-gray-200 dark:border-[#2D2D4A] focus-within:ring-2 focus-within:ring-[#FF6B6B]/20 focus-within:border-[#FF6B6B] transition-all">
        <input type="text" placeholder="Escribe un mensaje..." class="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
        <button class="ml-2 p-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF8E8E] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/chat/chat.component.scss */\n/*# sourceMappingURL=chat.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/pages/chat/chat.component.ts", lineNumber: 20 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-3H6WRWQC.js.map
