(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{889:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",function(){return f});var n=i(6),r=i(9),o="item",s="header",l="footer",h=0,a=1,c=2,u=2;function d(t,e){var i=function(t,e){switch(e){case o:return t.querySelector("template:not([name])");case s:return t.querySelector("template[name=header]");case l:return t.querySelector("template[name=footer]")}}(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null}function p(t,e,i,n,r,h,a,c,d,p){for(var f=[],g=p+d,v=d;v<g;v++){var m,y=t[v];if(i)null!=(m=i(y,v,t))&&f.push({i:c++,type:s,value:m,index:v,height:r,reads:u,visible:!1});if(f.push({i:c++,type:o,value:y,index:v,height:e?e(y,v):a,reads:e?0:u,visible:!!e}),n)null!=(m=n(y,v,t))&&f.push({i:c++,type:l,value:m,index:v,height:h,reads:2,visible:!1})}return f}var f=function(){function t(t){var e=this;Object(r.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return n.__awaiter(this,void 0,void 0,function(){var t,e;return n.__generator(this,function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return i.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=i.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find(function(e){return e.type===o&&e.index===t});return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),n.__awaiter(this,void 0,void 0,function(){var i,r,o;return n.__generator(this,function(n){return this.items?(i=-1===e?this.items.length-t:e,r=function(t,e){var i=t[t.length-1].index||0;return 0===e?0:e===i+1?t.length:t.findIndex(function(t){return t.index===e})}(this.cells,t),o=p(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,o,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]})})},t.prototype.checkEnd=function(){return n.__awaiter(this,void 0,void 0,function(){return n.__generator(this,function(t){return this.items&&this.checkRange(this.lastItemLen),[2]})})},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.m)(this.readVS.bind(this)),Object(r.u)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),n=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var s=Math.max(o-i-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+i,t.length)-s}}(i,e,2);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,n)&&(this.range=n,function(t,e,i,n){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=h,s.d=!0}for(var l=[],u=n.offset+n.length,d=function(n){var r=i[n],o=t.find(function(t){return t.d&&t.cell===r});if(o){var s=e[n];s!==o.top&&(o.top=s,o.change=a),o.d=!1}else l.push(r)},p=n.offset;p<u;p++)d(p);for(var f=t.filter(function(t){return t.d}),g=function(i){var n=f.find(function(t){return t.d&&t.cell.type===i.type}),r=i.i;n?(n.d=!1,n.change=c,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:c,top:e[r]})},v=0,m=l;v<m.length;v++)g(m[v]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=a,t.top=-9999})}(this.virtualDom,i,this.cells,n),this.nodeRender?function(t,e,i,n){for(var r,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),s=o.length,l=0;l<i.length;l++){var a=i[l],u=a.cell;if(a.change===c){if(l<s)e(r=o[l],u,l);else{var p=d(t,u.type);(r=e(p,u,l)||p).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=u}else r=o[l];a.change!==h&&(r.style.transform="translate3d(0,"+a.top+"px,0)");var f=u.visible;a.visible!==f&&(f?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),a.visible=f),u.reads>0&&(n(u,r),u.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=p(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case o:return this.renderItem(n,r);case s:return this.renderHeader(n,r);case l:return this.renderFooter(n,r)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.__stencil_render=function(){var t=this;if(this.renderItem)return Object(r.j)(g,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.l)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(r.j)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),g=function(t,e,i){var n=t.dom;return i.map(e,function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},r,{class:o,style:Object.assign({},r.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})}}}]);
//# sourceMappingURL=96.c1551adb.chunk.js.map