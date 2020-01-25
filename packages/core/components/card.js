(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);document,window;var t=e.$,r=(e.Template7,e.utils),n=(e.device,e.support),s=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{open:function(e,a){var r;void 0===e&&(e=".card-expandable"),void 0===a&&(a=!0);var s=this;if(!t(".card-opened").length){var o=t(e).eq(0);if(o&&o.length&&!(o.hasClass("card-opened")||o.hasClass("card-opening")||o.hasClass("card-closing"))){var d,c=o.parents(".page").eq(0);if(c.length)if(o.trigger("card:beforeopen",{prevent:R}),s.emit("cardBeforeOpen",o[0],R),!d){var i,l,p,h=Object.assign({animate:a},s.params.card,o.dataset()),f=o.parents(".page-content");o.attr("data-backdrop-el")&&(i=t(o.attr("data-backdrop-el"))),!i&&h.backdrop&&((i=f.find(".card-backdrop")).length||(i=t('<div class="card-backdrop"></div>'),f.append(i))),h.hideNavbarOnOpen&&((l=c.children(".navbar")).length||c[0].f7Page&&(l=c[0].f7Page.$navbarEl)),h.hideToolbarOnOpen&&((p=c.children(".toolbar")).length||(p=c.parents(".view").children(".toolbar")),p.length||(p=c.parents(".views").children(".toolbar")));var g,v=o.css("transform");v&&v.match(/[2-9]/)&&(g=!0);var b=o.children(".card-content"),m=t(document.createElement("div")).addClass("card-expandable-size");o.append(m);var u,C=o[0].offsetWidth,O=o[0].offsetHeight,x=c[0].offsetWidth,k=c[0].offsetHeight,w=m[0].offsetWidth||x,T=m[0].offsetHeight||k;l&&!h.hideStatusbarOnOpen&&T===k&&(u=parseInt(l.css("--f7-safe-area-top"),10),Number.isNaN(u)&&(u=0)),u&&(T-=u);var E,N,H=w/C,M=T/O,$=o.offset(),y=c.offset();if(u&&(y.top+=u/2),$.left-=y.left,g){var B=v.replace(/matrix\(|\)/g,"").split(",").map((function(e){return e.trim()}));if(B&&B.length>1){var K=parseFloat(B[0]);E=$.left-C*(1-K)/2,N=$.top-y.top-O*(1-K)/2,s.rtl&&(E-=o[0].scrollLeft)}else E=o[0].offsetLeft,N=o[0].offsetTop-(f.length?f[0].scrollTop:0)}else E=$.left,N=$.top-y.top,s.rtl&&(E-=o[0].scrollLeft);N-=(k-T)/2;var W=w-C-(E-=(x-w)/2);s.rtl&&(E=(r=[W,E])[0],W=r[1]);var q,L,P,S,z,I,X,j,Y,D,F,A,G=T-O-N,J=(W-E)/2,Q=(G-N)/2;h.hideNavbarOnOpen&&l&&l.length&&(l.closest(".navbar-hidden").length?o[0].f7KeepNavbarOnClose=!0:(delete o[0].f7KeepNavbarOnClose,s.navbar.hide(l,h.animate,h.hideStatusbarOnOpen))),h.hideToolbarOnOpen&&p&&p.length&&(p.closest(".toolbar-hidden").length?o[0].f7KeepToolbarOnClose=!0:(delete o[0].f7KeepToolbarOnClose,s.toolbar.hide(p,h.animate))),i&&i.removeClass("card-backdrop-out").addClass("card-backdrop-in"),o.removeClass("card-transitioning"),h.animate&&o.addClass("card-opening"),o.trigger("card:open"),s.emit("cardOpen",o[0]),b.css({width:w+"px",height:T+"px"}).transform("translate3d("+(s.rtl?E+J:-E-J)+"px, 0px, 0) scale("+1/H+", "+1/M+")"),o.transform("translate3d("+J+"px, "+Q+"px, 0) scale("+H+", "+M+")"),h.animate?o.transitionEnd((function(){U()})):U(),o[0].detachEventHandlers=function(){s.off("resize",V),n.touch&&h.swipeToClose&&(s.off("touchstart:passive",Z),s.off("touchmove:active",_),s.off("touchend:passive",ee))},s.on("resize",V),n.touch&&h.swipeToClose&&(s.on("touchstart:passive",Z),s.on("touchmove:active",_),s.on("touchend:passive",ee))}}}function R(){d=!0}function U(){c.addClass("page-with-card-opened"),s.device.ios&&f.length&&(f.css("height",f[0].offsetHeight+1+"px"),setTimeout((function(){f.css("height","")}))),o.addClass("card-opened"),o.removeClass("card-opening"),o.trigger("card:opened"),s.emit("cardOpened",o[0],c[0])}function V(){var e;o.removeClass("card-transitioning"),C=o[0].offsetWidth,O=o[0].offsetHeight,x=c[0].offsetWidth,k=c[0].offsetHeight,w=m[0].offsetWidth||x,T=m[0].offsetHeight||k,u=0,l&&!h.hideStatusbarOnOpen&&T===k&&(u=parseInt(l.css("--f7-safe-area-top"),10),Number.isNaN(u)&&(u=0)),u&&(T-=u),H=w/C,M=T/O,o.transform("translate3d(0px, 0px, 0) scale(1)"),$=o.offset(),y=c.offset(),u&&(y.top+=u/2),$.left-=y.left,$.top-=y.top,E=$.left-(x-w)/2,s.rtl&&(E-=o[0].scrollLeft),N=$.top-(k-T)/2,W=w-C-E,G=T-O-N,s.rtl&&(E=(e=[W,E])[0],W=e[1]),J=(W-E)/2,Q=(G-N)/2,o.transform("translate3d("+J+"px, "+Q+"px, 0) scale("+H+", "+M+")"),b.css({width:w+"px",height:T+"px"}).transform("translate3d("+(s.rtl?E+J:-E-J)+"px, 0px, 0) scale("+1/H+", "+1/M+")")}function Z(e){t(e.target).closest(o).length&&o.hasClass("card-opened")&&(A=o.find(h.scrollableEl),q=A[0]&&A[0]!==b[0]&&!A[0].contains(e.target)?0:A.scrollTop(),L=!0,S=e.targetTouches[0].pageX,z=e.targetTouches[0].pageY,j=void 0,D=!1,F=!1)}function _(e){if(L){if(I=e.targetTouches[0].pageX,X=e.targetTouches[0].pageY,void 0===j&&(j=!!(j||Math.abs(X-z)>Math.abs(I-S))),F||D||(!j&&e.targetTouches[0].clientX<=50?F=!0:D=!0),!F&&!D||D&&0!==q)return L=!0,void(P=!0);P||o.removeClass("card-transitioning"),P=!0,((Y=D?Math.max((X-z)/150,0):Math.max((I-S)/(C/2),0))>0&&D||F)&&(D&&s.device.ios&&A[0]===b[0]&&(A.css("-webkit-overflow-scrolling","auto"),A.scrollTop(0)),e.preventDefault()),Y>1&&(Y=Math.pow(Y,.3)),Y>(D?1.3:1.1)?(L=!1,P=!1,s.card.close(o)):o.transform("translate3d("+J+"px, "+Q+"px, 0) scale("+H*(1-.2*Y)+", "+M*(1-.2*Y)+")")}}function ee(){L&&P&&(L=!1,P=!1,s.device.ios&&A.css("-webkit-overflow-scrolling",""),Y>=.8?s.card.close(o):o.addClass("card-transitioning").transform("translate3d("+J+"px, "+Q+"px, 0) scale("+H+", "+M+")"))}},close:function(e,a){void 0===e&&(e=".card-expandable.card-opened"),void 0===a&&(a=!0);var r=this,n=t(e).eq(0);if(n&&n.length&&n.hasClass("card-opened")&&!n.hasClass("card-opening")&&!n.hasClass("card-closing")){var s=n.children(".card-content"),o=n.parents(".page-content"),d=n.parents(".page").eq(0);if(d.length){var c,i,l,p=Object.assign({animate:a},r.params.card,n.dataset()),h=n.find(p.scrollableEl);n.attr("data-backdrop-el")&&(l=t(n.attr("data-backdrop-el"))),p.backdrop&&(l=n.parents(".page-content").find(".card-backdrop")),p.hideNavbarOnOpen&&((c=d.children(".navbar")).length||d[0].f7Page&&(c=d[0].f7Page.$navbarEl),c&&c.length&&!n[0].f7KeepNavbarOnClose&&r.navbar.show(c,p.animate)),p.hideToolbarOnOpen&&((i=d.children(".toolbar")).length||(i=d.parents(".view").children(".toolbar")),i.length||(i=d.parents(".views").children(".toolbar")),i&&i.length&&!n[0].f7KeepToolbarOnClose&&r.toolbar.show(i,p.animate)),d.removeClass("page-with-card-opened"),r.device.ios&&o.length&&(o.css("height",o[0].offsetHeight+1+"px"),setTimeout((function(){o.css("height","")}))),l&&l.length&&l.removeClass("card-backdrop-in").addClass("card-backdrop-out"),n.removeClass("card-opened card-transitioning"),p.animate?n.addClass("card-closing"):n.addClass("card-no-transition"),n.transform(""),n.trigger("card:close"),r.emit("cardClose",n[0],d[0]);var f=n.hasClass("card-expandable-animate-width");f&&s.css({width:"",height:""}),s.transform("").scrollTop(0,a?300:0),h.length&&h[0]!==s[0]&&h.scrollTop(0,a?300:0),a?s.transitionEnd((function(){g()})):g(),n[0].detachEventHandlers&&(n[0].detachEventHandlers(),delete n[0].detachEventHandlers)}}function g(){f||s.css({width:"",height:""}),n.removeClass("card-closing card-no-transition"),n.trigger("card:closed"),n.find(".card-expandable-size").remove(),r.emit("cardClosed",n[0],d[0])}},toggle:function(e,a){void 0===e&&(e=".card-expandable");var r=t(e).eq(0);r.length&&(r.hasClass("card-opened")?this.card.close(r,a):this.card.open(r,a))}}),o={name:"card",params:{card:{hideNavbarOnOpen:!0,hideStatusbarOnOpen:!0,hideToolbarOnOpen:!0,scrollableEl:".card-content",swipeToClose:!0,closeByBackdropClick:!0,backdrop:!0}},create:function(){r.extend(this,{card:{open:s.open.bind(this),close:s.close.bind(this),toggle:s.toggle.bind(this)}})},on:{pageBeforeIn:function(e){if(this.params.card.hideNavbarOnOpen&&e.navbarEl&&e.$el.find(".card-opened.card-expandable").length&&this.navbar.hide(e.navbarEl,!0,this.params.card.hideStatusbarOnOpen),this.params.card.hideToolbarOnOpen&&e.$el.find(".card-opened.card-expandable").length){var a=e.$el.children(".toolbar");a.length||(a=e.$el.parents(".view").children(".toolbar")),a.length||(a=e.$el.parents(".views").children(".toolbar")),a&&a.length&&this.toolbar.hide(a)}}},clicks:{".card-close":function(e,a){this.card.close(a.card,a.animate)},".card-open":function(e,a){this.card.open(a.card,a.animate)},".card-expandable":function(e,a,r){e.hasClass("card-opened")||e.hasClass("card-opening")||e.hasClass("card-closing")||t(r.target).closest(".card-prevent-open, .card-close").length||this.card.open(e)},".card-backdrop-in":function(){var e=!1;this.params.card.closeByBackdropClick&&(e=!0);var a=t(".card-opened");a.length&&("true"===a.attr("data-close-by-backdrop-click")?e=!0:"false"===a.attr("data-close-by-backdrop-click")&&(e=!1),e&&this.card.close(a))}}};if(a){if(e.prototype.modules&&e.prototype.modules[o.name])return;e.use(o),e.instance&&(e.instance.useModuleParams(o,e.instance.params),e.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
