!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}({1:function(e,t,n){e.exports=n("rE4h")},rE4h:function(e,t){var n=wp.editPost,r=(n.PluginSidebar,n.PluginSidebarMoreMenuItem,n.PluginDocumentSettingPanel),o=wp.components,i=(o.TextControl,o.Panel,o.PanelBody,o.PanelRow,wp.plugins.registerPlugin),c=wp.data,a=(c.withSelect,c.withDispatch,wp.i18n.__),l=window.location;i("plugin-document-setting-typerocket-builder",{icon:!1,render:function(){return React.createElement(r,{name:"typerocket-builder",title:"Editor",className:"typerocket-builder"},React.createElement("p",null,a("Click a link below to switch your current editor.","typerocket-domain")),React.createElement("p",null,React.createElement("i",{class:"dashicons dashicons-external"})," ",React.createElement("a",{href:"".concat(l,"&tr_builder=1")},a("Use Page Builder","typerocket-domain"))),React.createElement("p",null,React.createElement("i",{class:"dashicons dashicons-external"})," ",React.createElement("a",{href:"".concat(l,"&tr_builder=0")},a("Use Classic Editor","typerocket-domain"))))}})}});