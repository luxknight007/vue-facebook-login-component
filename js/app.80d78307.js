(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)a=r[d],s[a]&&p.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},i=[];function a(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c9b27963"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=s[e]=[t,o]});t.push(n[2]=o);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=a(e),i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}s[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18a4":function(e,t,n){},"21bb":function(e,t,n){"use strict";var o=n("c188"),s=n.n(o);s.a},"3bd6":function(e,t,n){},"3eb0":function(e,t,n){},"40fd":function(e){e.exports={name:"facebook-login-vuejs",version:"2.1.3",description:"A fully customizable button component for integrating Facebook login fast",author:"iliran11",private:!0,main:"dist",scripts:{test:'echo "Error: no test specified" && exit 1',build:"node_modules/.bin/webpack --config webpack.config.js",start:"node_modules/.bin/webpack --config webpack.config.js --watch",link:"cd ./docs && npm link facebook-login-vuejs",unlink:"npm unlink","unlink-docs":"cd ./docs && npm unlink --no-save facebook-login-vuejs",predocs:"npm link && npm run link",docs:"npm run serve --prefix ./docs",deploy:"cd ./docs && npm run deploy","prerelease-patch":"npm run build && npm version patch","prerelease-minor":"npm run build && npm version minor","prerelease-major":"npm run build && npm version major","postrelease-patch":"git push --follow-tags","postrelease-minor":"git push --follow-tags","postrelease-major":"git push --follow-tags","release-patch":"npm publish","release-minor":"npm publish","release-major":"npm publish"},repository:{type:"git",url:"https://github.com/iliran11/facebook-login-vue"},bugs:{url:"https://github.com/iliran11/facebook-login-vue/issues"},peerDependencies:{vue:"^2.x"},devDependencies:{"@babel/core":"^7.0.0-beta.51","@babel/helper-module-imports":"^7.0.0-beta.54","@babel/plugin-syntax-jsx":"^7.0.0-beta.54","@babel/preset-env":"^7.0.0-beta.54","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^8.0.0-beta.4","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-vue-jsx":"^4.0.1","css-loader":"^1.0.0",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.12.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","node-sass":"^4.9.2","sass-loader":"^7.0.3","url-loader":"^1.0.1","vue-loader":"^15.2.4","vue-style-loader":"^4.1.0","vue-template-compiler":"^2.5.16",webpack:"^4.12.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.8"},dependencies:{}}},"490c":function(e,t,n){"use strict";var o=n("6ab6"),s=n.n(o);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-menu",{attrs:{routes:e.routes}}),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["v-menu","clearfix",e.classes]},[n("div",{staticClass:"token",on:{"&touchstart":function(t){return e.toggle(t)},click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggle(t)}}}),n("ul",{ref:"menu",staticClass:"menu",style:e.menuStyle,on:{"&touchstart":function(e){}}},[e._l(e.computedRoutes,function(t,o){return n("li",{key:o},[t.name?n("router-link",{attrs:{to:{name:t.name}},domProps:{innerHTML:e._s(t.name)}}):e._e()],1)}),n("li",[e._t("last-child")],2)],2)])},r=[],c=(n("6762"),n("2fdb"),n("3846"),n("f60b")),l={name:"VMenu",props:{routes:{type:Array,default:function(){return[]}},menuStyle:{type:Object,default:function(){return{backgroundColor:"rgba(28, 40, 76, 0.8)"}}}},data:function(){return{flags:{open:!1}}},watch:{"flags.open":function(e){this.emitToggle(e)}},mounted:function(){document.addEventListener("click",this.dismiss),document.addEventListener("touchstart",this.dismiss),window.addEventListener("resize",this.handleResize)},destroyed:function(){document.removeEventListener("click",this.dismiss),document.removeEventListener("touchstart",this.dismiss),window.removeEventListener("resize",this.handleResize)},computed:{classes:function(){return{"is-open":this.flags.open}},computedRoutes:function(){return Object(c["flattenRoutes"])(this.routes)}},methods:{toggle:function(e){[!0,!1].includes(e)?this.flags.open=e:this.flags.open=!this.flags.open,this.$emit("toggle",this.flags.open)},dismiss:function(){this.toggle(!1)},emitToggle:function(e){this.$emit(e?"open":"close",{width:this.getWidth()})},handleResize:function(){this.emitToggle(this.flags.open)},getWidth:function(){return this.$refs.menu.getBoundingClientRect().width}}},d=l,u=(n("a6ba"),n("2877")),p=Object(u["a"])(d,a,r,!1,null,"60dbeb4d",null),h=p.exports,f=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs"},[n("div",{staticClass:"docs-container docs-container--has-jumbotron docs-100vh js-vh-fix"},[n("div",{staticClass:"docs-jumbotron container",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("a",{staticClass:"docs-github",attrs:{href:e.pkg.repository.url,target:"_blank"}},[n("img",{attrs:{src:"octocat.png",alt:"Go to GitHub"}})]),n("div",{staticClass:"docs-clearfix text-center"},[n("img",{staticClass:"docs-vue-logo mb-10",attrs:{src:"vue-fb.svg"}}),n("h1",[e._v("Facebook Login")]),n("p",{staticClass:"docs-tagline text-center mb-20"},[e._v("\n          Integrate Facebook Login and "),e.breakpoint.noMatch?n("br"):e._e(),e._v(" access the benefits quickly and easily.\n        ")])]),n("v-facebook-login",{staticClass:"docs-facebook-button mx-auto mb-35",attrs:{"app-id":"326022817735322"},on:{"sdk-load":e.handleSdkLoad,connect:e.handleConnect,logout:e.handleLogout,click:e.handleClick},model:{value:e.facebook.model,callback:function(t){e.$set(e.facebook,"model",t)},expression:"facebook.model"}}),n("div",{staticClass:"docs-user mx-auto mb-35"},[n("div",{staticClass:"docs-user-picture",class:{"docs-user-picture--is-visible":e.computed.picture},style:{backgroundImage:"url("+(e.connected&&e.computed.picture||"")}}),e.connected&&e.computed.nopicture?[e._v(e._s(e.computed.name))]:e._e(),n("div",{staticClass:"docs-user-state-placeholder"},[e._v("Disconnected")]),n("div",{staticClass:"docs-user-state-indicator",class:{"docs-user-state-indicator--green":e.connected}})],2),e._m(0),n("div",{staticClass:"docs-version"},[e._v(e._s(e.pkg.version)+" - "+e._s(e.docspkg.version))]),n("v-a",{staticClass:"docs-fixed-anchor",attrs:{"scroll-to":e.$refs.docs}},[e._v("Install, Examples & Documentation")])],1)]),n("div",{ref:"docs",staticClass:"docs-container docs-min-100vh"},[n("div",{staticClass:"container docs-clearfix",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.readme)}})])]),n("footer",{staticClass:"docs-footer"},[n("div",{staticClass:"container",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[e._m(1)])]),n("v-breakpoint",{model:{value:e.breakpoint,callback:function(t){e.breakpoint=t},expression:"breakpoint"}})],1)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center"},[n("a",{staticClass:"github-button",attrs:{href:"https://github.com/iliran11/facebook-login-vue","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star iliran11/facebook-login-vue on GitHub"}},[e._v("Star")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs-credit"},[n("span",{staticClass:"docs-credit-made-by"},[e._v("Made by")]),n("div",{staticClass:"docs-credit-authors"},[n("a",{staticClass:"docs-anchor--author",attrs:{href:"https://github.com/iliran11",target:"_blank"}},[e._v("🐙  Liran Cohen")]),n("a",{staticClass:"docs-anchor--author",attrs:{href:"https://github.com/adi518",target:"_blank"}},[e._v("🦊 Adi Sahar")])])])}],g=(n("7f7f"),n("c197")),v=n.n(g),k=n("3637"),y=n.n(k),w=n("6043"),j=n.n(w),x=n("dc27"),_=n.n(x),C=n("9224"),E=n("40fd"),L=n("eceb"),O=n.n(L),S=n("c665"),F=n("aa9a"),T=function(){function e(t){var n=this;Object(S["a"])(this,e),this.selectors=t;var o=navigator.userAgent.toLowerCase(),s=/chrome/.test(o)&&/android/.test(o),i=/crios/.test(o);(s||i)&&(this.getElements(this.selectors),this.fixAll(),this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.onResize=function(){n.windowWidth=window.innerWidth,n.windowHeight=window.innerHeight,n.fixAll()},window.addEventListener("resize",this.onResize,!1))}return Object(F["a"])(e,[{key:"getElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.elements=[],e=[].concat(e);for(var t=0;t<e.length;t++)for(var n=e[t].selector,o=document.querySelectorAll(n),s=0;s<o.length;s++){var i=e[t].offset||0;this.elements.push({domElement:o[s],vh:e[t].vh,offset:i})}}},{key:"fixAll",value:function(){for(var e=0;e<this.elements.length;e++){var t=this.elements[e],n=t.offset;t.domElement.style.height=window.innerHeight*(t.vh/100)-n+"px"}}},{key:"destroy",value:function(){window.removeEventListener("resize",this.onResize)}}]),e}(),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"v-a",attrs:{href:e.href,target:e.computedTarget,tabindex:e.tabindex},on:{click:e.handleClick}},[e._t("default")],2)},B=[],P=n("c93e"),$={name:"VA",props:{name:{type:String,default:""},href:{type:String,default:""},tabindex:{type:String,default:""},refs:{type:Object,default:function(){return{}}},scrollTo:{type:[String,Element],default:""},target:{type:String,default:"_blank"},prevent:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},computed:{computedTarget:function(){if(!this.scrollTo)return this.target}},methods:{handleClick:function(e){(this.prevent||this.scrollTo||this.static)&&e.preventDefault(),this.scrollTo&&this.$scrollTo(this.scrollTo),this.$emit("click",{href:this.href})},getElementByRef:function(e,t){t=t||this.$refs;var n=!t;if(!n){var o=t[e];return o instanceof Element?o:t[e]&&(o=t[e].el,o instanceof Element)?o:(console.error('[getElementByRef warn]: No such ref as "'.concat(e,'".')),null)}console.error("[getElementByRef warn]: No refs found.")},$scrollTo:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=e instanceof Element?e:this.getElementByRef(e,this.refs),t&&t.scrollIntoView(Object(P["a"])({behavior:"smooth",block:"start"},n))}}},D=$,M=Object(u["a"])(D,R,B,!1,null,null,null),A=M.exports,q={name:"Docs",components:{VA:A,VBreakpoint:_.a,VFacebookLogin:j.a},data:function(){return{pkg:E,docspkg:C,markdowns:{readme:O.a},facebook:{FB:{},model:{}},user:{},instances:{},breakpoint:new x["Model"]}},created:function(){this.instances.ChromeFix=void 0},mounted:function(){window.setTimeout(v.a.highlightAll),this.instances.vhChromeFix=new T([{selector:".js-vh-fix",vh:100}])},destroyed:function(){this.instances.vhChromeFix.destroy()},computed:{computed:function(){var e=this.user.name,t=y()(this.user,"picture.data.url").safeString,n=!t;return{name:e,picture:t,nopicture:n}},connected:function(){return this.facebook.model.connected}},methods:{getUserData:function(){var e=this,t=this.facebook.FB.api;t("/me",{fields:"id, name"},function(n){e.user=n,t("".concat(e.user.id,"/picture?width=9999&redirect=false"),function(t){e.$set(e.user,"picture",t)})})},handleConnect:function(){this.getUserData()},handleSdkLoad:function(e){var t=e.FB;this.facebook.FB=t},handleLogout:function(){console.info("[V-Facebook-Login info]: Logged `logout` event.")},handleClick:function(){console.info("[V-Facebook-Login info]: Logged `click` event.")}}},z=q,V=(n("21bb"),n("92da"),Object(u["a"])(z,m,b,!1,null,null,null)),H=V.exports;o["a"].use(f["a"]);var N=[{path:"/",name:"Home",component:H},{path:"/privacy-policy",name:"Privacy Policy",component:function(){return n.e("about").then(n.bind(null,"729e"))}}],I=new f["a"]({routes:N}),U={name:"app",components:{VMenu:h},data:function(){return{routes:N}}},W=U,G=(n("5c0b"),n("490c"),Object(u["a"])(W,s,i,!1,null,null,null)),J=G.exports;o["a"].config.productionTip=!1,new o["a"]({router:I,render:function(e){return e(J)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("18a4"),s=n.n(o);s.a},"6ab6":function(e,t,n){},9224:function(e){e.exports={name:"docs",version:"1.0.8",private:!0,scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build",lint:"vue-cli-service lint",predeploy:"npm version patch --no-git-tag-version && npm run build",deploy:"node gh-pages",postdeploy:"git add package.json package-lock.json && git commit -mv%npm_package_version%"},dependencies:{bootstrap:"^4.1.3",prismjs:"^1.15.0",typy:"^2.0.1",vue:"^2.5.16","vue-breakpoint-component":"^1.0.3","vue-flatten-routes":"^1.0.2","vue-router":"^3.0.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.0.0-rc.8","@vue/cli-plugin-eslint":"^3.0.0-rc.8","@vue/cli-service":"^3.0.0-rc.8","gh-pages":"^1.2.0","html-loader":"^0.5.5","markdown-loader":"^3.0.0",stylus:"^0.54.5","stylus-loader":"^3.0.2","vue-template-compiler":"^2.5.16"},eslintConfig:{root:!0,env:{node:!0},extends:["plugin:vue/essential","eslint:recommended"],rules:{},parserOptions:{parser:"babel-eslint"}},postcss:{plugins:{autoprefixer:{}}},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"92da":function(e,t,n){"use strict";var o=n("3bd6"),s=n.n(o);s.a},a6ba:function(e,t,n){"use strict";var o=n("3eb0"),s=n.n(o);s.a},c188:function(e,t,n){},eceb:function(e,t){e.exports='<h2 id="install">Install</h2>\n<pre><code class="language-bash">npm install --save facebook-login-vuejs</code></pre>\n<h2 id="usage">Usage</h2>\n<p>To use the component in your template, simply import and register with your component.</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import VFBLogin from &#39;facebook-login-vuejs&#39;\n\n// OR, use cherry-pick export (better consistency)\nimport { VFBLogin } from &#39;facebook-login-vuejs&#39;\n\nexport default {\n  components: {\n    VFBLogin\n  }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-facebook-login app-id=&quot;326022817735322&quot; @sdk-load=&quot;handleSdkLoad&quot;&gt;&lt;/v-facebook-login&gt;\n\n&lt;!-- OR use the shorthand variation --&gt;\n&lt;v-facebook-login app-id=&quot;326022817735322&quot; @sdk-load=&quot;handleSdkLoad&quot; /&gt;</code></pre>\n<h2 id="props">Props</h2>\n<div id="props-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>app-id</td>\n<td>String</td>\n<td>None</td>\n<td><strong>Required</strong></td>\n</tr>\n<tr>\n<td>version</td>\n<td>String</td>\n<td><code>&#39;v3.1&#39;</code></td>\n<td>See <a href="https://developers.facebook.com/docs/apps/changelog/">Facebook Docs</a> for available values.</td>\n</tr>\n<tr>\n<td>login-options</td>\n<td>Object</td>\n<td><code>{ scope: &#39;email&#39; }</code></td>\n<td>See <a href="https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9">Facebook Docs</a> for available values. Pass with Camel-case: <br> <code>{ returnScopes: false }</code></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="slots">Slots</h2>\n<div id="slots-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td>Log in to Facebook</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Log out from Facebook</td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="events">Events</h2>\n<div id="events-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Payload</th>\n<th>Description</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>sdk-load</td>\n<td>Object</td>\n<td>Returns an object with <br> a Facebook API instance.</td>\n<td>@Returns <br> <code>FB[Object]</code></td>\n</tr>\n<tr>\n<td>connect</td>\n<td>Boolean</td>\n<td>User is connected.</td>\n<td></td>\n</tr>\n<tr>\n<td>login</td>\n<td>Object</td>\n<td>User attempted login.</td>\n<td>@Returns <br> <code>response[Object]</code></td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Object</td>\n<td>User attempted logout.</td>\n<td>@Returns <br> <code>response[Object]</code></td>\n</tr>\n<tr>\n<td>click</td>\n<td>None</td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="development">Development</h2>\n<p>Fork, clone and use the following scripts.</p>\n<p>For component:</p>\n<pre><code class="language-bash">npm start</code></pre>\n<p>For documentation:</p>\n<pre><code class="language-bash">npm run docs</code></pre>\n<p>For deploying documentation to github pages:</p>\n<pre><code class="language-bash">npm run deploy</code></pre>\n<h2 id="support">Support</h2>\n<p>Please open an <a href="https://github.com/iliran11/facebook-login-vue/issues">issue</a> for support.</p>\n<h2 id="license">License</h2>\n<p>Copyright (c) 2018 by <a href="https://opensource.org/licenses/MIT">MIT</a></p>\n'}});
//# sourceMappingURL=app.80d78307.js.map