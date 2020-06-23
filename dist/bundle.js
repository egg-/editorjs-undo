!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DataHistory=e():t.DataHistory=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"default",(function(){return o}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n={maxLength:30,onUpdate:function(){}};this.editor=e.editor,this.shouldSaveHistory=!0,this.maxLength=e.maxLength?e.maxLength:n.maxLength,this.onUpdate=e.onUpdate?e.onUpdate:n.onUpdate,this.setEventListeners(),this.initialItem=null,this.clear()}var e,n,o;return e=t,(n=[{key:"truncate",value:function(t,e){for(;t.length>e;)t.shift()}},{key:"initialize",value:function(t){this.stack[0]=t,this.initialItem=t}},{key:"clear",value:function(){this.stack=[this.initialItem],this.position=0,this.onUpdate()}},{key:"registerChange",value:function(){var t=this;this.shouldSaveHistory&&this.editor.save().then((function(e){t.editorDidUpdate(e.blocks)&&t.save(e.blocks)})),this.shouldSaveHistory=!0}},{key:"editorDidUpdate",value:function(t){if(!this.count()&&!this.initialItem)return!0;var e=this.stack[this.position];return t.length!==e.length||JSON.stringify(e)!==JSON.stringify(t)}},{key:"save",value:function(t){this.position>=this.maxLength&&this.truncate(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1),this.stack.push(t),this.position+=1,this.onUpdate()}},{key:"undo",value:function(){if(this.shouldSaveHistory=!1,this.canUndo()){var t=this.stack[this.position-=1];this.onUpdate(),this.editor.blocks.render({blocks:t})}}},{key:"redo",value:function(){if(this.shouldSaveHistory=!1,this.canRedo()){var t=this.stack[this.position+=1];this.onUpdate(),this.editor.blocks.render({blocks:t})}}},{key:"canUndo",value:function(){return this.position>0}},{key:"canRedo",value:function(){return this.position<this.count()}},{key:"count",value:function(){return this.stack.length-1}},{key:"setEventListeners",value:function(){var t=this;document.addEventListener("keydown",(function(e){e.ctrlKey&&"z"===e.key&&(e.preventDefault(),t.undo())})),document.addEventListener("keydown",(function(e){e.ctrlKey&&"y"===e.key&&(e.preventDefault(),t.redo())}))}}])&&i(e.prototype,n),o&&i(e,o),t}()}]).default}));