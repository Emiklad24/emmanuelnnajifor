if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DISREG.png",revision:"54e9a9c620713ad56d7999009996520d"},{url:"/REAPS.png",revision:"a8dbbadddd4f9677c7a68bed474d2e42"},{url:"/Reporta.png",revision:"97b2b2c3c98b810690b28106d5918200"},{url:"/_next/static/NaV-msGiDKvHkvoT84fNC/_buildManifest.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/NaV-msGiDKvHkvoT84fNC/_ssgManifest.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/69dfc60cb0c0af1f7209bc80d5bc8d64b9a9abf5.e0ab17e5fd099bee3d7f.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.2d9f8e04f907e560a571.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/commons.50d924ec3430cc5239be.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/main-0aefbe7b2a757673b86f.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/_app-6ea4837b0505853ae22e.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/_error-314c147cbe0daaa0b2ec.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/about-79e6620a29b5dbed6d29.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/contact-16f9fab6070fb75f233e.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/experience-fbb5950e1f3abaeecc97.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/index-0d657bb468285356ec34.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/pages/projects-b8576c0e46dd597e3450.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/css/e232dca84eb7372286e8.css",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/media/Inter-italic-latin.var.e1716d2a673d0faa8f1372b4bd6de8ab.woff2",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/media/Inter-roman-latin.var.8ea4e689450e2f0c3f45a590d73601ce.woff2",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/media/SourceSansPro-Regular.7a9975d8c02d6933c47df31af5854fb2.otf",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/media/Ubuntu-Mono-bold.c7e922d16dc4870715e291be072a6706.woff2",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/_next/static/media/flow-circular.853ff76f08786ae44ca0f167cac8bbe5.woff",revision:"NaV-msGiDKvHkvoT84fNC"},{url:"/avatar.jpg",revision:"dda66e4d43e50618b1cf0006ceeb9e7a"},{url:"/moniya.png",revision:"6d3bc264605243a4ed82bb14eacff50d"},{url:"/movieapp.png",revision:"fa4beebf467cad75b8d923bb6e7ed481"},{url:"/next-js.png",revision:"7118d59f8ed9d82b787fdfe0bcba7122"},{url:"/photostore.png",revision:"7c79db3dd761d9c8ab47a5023a743967"},{url:"/strapi.png",revision:"814c29792cb5d8bc72c99476e3106d21"},{url:"/tetelastai.png",revision:"da511cd3c8c7fce28f90f61a5d45cb54"},{url:"/worldrank.png",revision:"4826812e7293bcbdf9b3f0843f933223"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
