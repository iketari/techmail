define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_blocks["b-head"]=function(params){var __fest_buf="";__fest_buf+=("<div class=\"b-head\"><h1 class=\"b-logo\">InstaContest</h1><ul class=\"b-menu\"><li class=\"b-menu__item\"><a class=\"b-menu__link\" href=\"#signup\">Регистрация</a></li><li class=\"b-menu__item\"><a class=\"b-menu__link\" href=\"#login\">Авторизация</a></li><li class=\"b-menu__item\"><a class=\"b-menu__link\" href=\"#scoreboard\">Конкурсы</a></li></ul></div>");return __fest_buf;};})(__fest_context0);var __fest_context1;try{__fest_context1=json}catch(e){__fest_context1={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_blocks["b-foot"]=function(params){var __fest_buf="";__fest_buf+=("<div class=\"b-footer\">&copy 2015, InstaContest</div>");return __fest_buf;};})(__fest_context1);})(__fest_context0);__fest_select="b-head";__fest_params={};__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_buf+=("<div class=\"b-page\"><div class=\"b-panel\"><div class=\"b-panel__left\"><div class=\"b-panel__ill\"><img src=\"https:\/\/img.imgsmail.ru\/r\/themes\/t1086\/settings__preview.HiDPi.jpg\"/></div></div><div class=\"b-panel__right\"><p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.</p><p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.</p></div></div></div>");__fest_select="b-foot";__fest_params={};__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });