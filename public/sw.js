if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,n,t)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=t(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e48df4f42fa5987f981d.js",revision:"fedbaa5a9b057749251c2616e5e053cc"},{url:"/_next/static/chunks/framework.9116e7bff2bfccdffa19.js",revision:"56af6501d39d0d407e4004733ea3ef34"},{url:"/_next/static/chunks/main-132d663f96666d5b5b4a.js",revision:"ce7c039e29c12833c07eb566d4d88ed0"},{url:"/_next/static/chunks/pages/_app-14f03bcf1ebdcffe7068.js",revision:"a04968e37f586151c7ce5c2896c4b3d8"},{url:"/_next/static/chunks/pages/_error-ed1b06dc12d6382f8fbd.js",revision:"61483c6e9b2433d1b87721995d4f0861"},{url:"/_next/static/chunks/pages/index-4eb6264795a75ad56e7a.js",revision:"cc36e7c60419d4423d21bd757ade8894"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/0332532e669c3bf05c4a.css",revision:"2c75cbd7c02a4afc1599a104f0a3a0cc"},{url:"/_next/static/css/89f1355f2da65e5426dd.css",revision:"4ef505796e74bf700360a06465499c05"},{url:"/_next/static/p46BL8uATFELf3EOn6oLC/_buildManifest.js",revision:"d776a126e2a60368d4d5a6f6ddbf6933"},{url:"/_next/static/p46BL8uATFELf3EOn6oLC/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));