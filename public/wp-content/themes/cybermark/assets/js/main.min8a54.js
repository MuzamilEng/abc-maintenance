window.COOKIES_ENABLER=window.COOKIES_ENABLER||function(){"use strict";var c,l,r,s={scriptClass:"ce-script",iframeClass:"ce-iframe",acceptClass:"ce-accept",disableClass:"ce-disable",dismissClass:"ce-dismiss",bannerClass:"ce-banner",bannerHTML:null!==document.getElementById("ce-banner-html")?document.getElementById("ce-banner-html").innerHTML:'<p>This website uses cookies. <a href="#" class="ce-accept">Enable Cookies</a></p>',eventScroll:!1,scrollOffset:200,clickOutside:!1,cookieName:"ce-cookie",cookieDuration:"365",wildcardDomain:!1,iframesPlaceholder:!0,iframesPlaceholderHTML:null!==document.getElementById("ce-iframePlaceholder-html")?document.getElementById("ce-iframePlaceholder-html").innerHTML:'<p>To view this content you need to<a href="#" class="ce-accept">Enable Cookies</a></p>',iframesPlaceholderClass:"ce-iframe-placeholder",onEnable:"",onDismiss:"",onDisable:""};function d(e,s){do{if(n=s,-1<(" "+e.className+" ").indexOf(" "+n+" "))return e}while(e=e.parentNode);var n}function m(){Math.abs(window.pageYOffset-r)>c.scrollOffset&&u()}function n(){var e,s=(l={accept:document.getElementsByClassName(c.acceptClass),disable:document.getElementsByClassName(c.disableClass),banner:document.getElementsByClassName(c.bannerClass),dismiss:document.getElementsByClassName(c.dismissClass)}).accept,n=s.length,t=l.disable,a=t.length,i=l.dismiss,o=i.length;for(c.eventScroll&&window.addEventListener("load",function(){r=window.pageYOffset,window.addEventListener("scroll",m)}),c.clickOutside&&document.addEventListener("click",function(e){e=e.target;if(d(e,c.iframesPlaceholderClass)||d(e,c.disableClass)||d(e,c.bannerClass)||d(e,c.dismissClass)||d(e,c.disableClass))return!1;u()}),e=0;e<n;e++)s[e].addEventListener("click",function(e){e.preventDefault(),u(e)});for(e=0;e<a;e++)t[e].addEventListener("click",function(e){e.preventDefault(),f(e)});for(e=0;e<o;e++)i[e].addEventListener("click",function(e){e.preventDefault(),p.dismiss()})}var t,a,u=(t=function(e){void 0!==e&&"click"===e.type&&e.preventDefault(),"Y"!=i.get()&&(i.set(),b.get(),o.get(),o.removePlaceholders(),p.dismiss(),window.removeEventListener("scroll",m),"function"==typeof c.onEnable&&c.onEnable())},0,function(){var e=this,s=arguments;clearTimeout(a),a=setTimeout(function(){a=null,t.apply(e,s)},250)}),f=function(e){void 0!==e&&"click"===e.type&&e.preventDefault(),"N"!=i.get()&&(i.set("N"),p.dismiss(),window.removeEventListener("scroll",m),"function"==typeof c.onDisable&&c.onDisable())},p={create:function(){var e='<div class="'+c.bannerClass+'">'+c.bannerHTML+"</div>";document.body.insertAdjacentHTML("beforeend",e)},dismiss:function(){l.banner[0].style.display="none","function"==typeof c.onDismiss&&c.onDismiss()}},i={set:function(e){var s,n=void 0!==e?e:"Y",t=c.cookieDuration?((s=new Date).setTime(s.getTime()+24*c.cookieDuration*60*60*1e3),"; expires="+s.toGMTString()):"";1!==(e=location.hostname).split(".")&&c.wildcardDomain?((s=e.split(".")).shift(),s="."+s.join("."),document.cookie=c.cookieName+"="+n+t+"; path=/; domain="+s,null==i.get()&&(s="."+e,document.cookie=c.cookieName+"="+n+t+"; path=/; domain="+s)):document.cookie=c.cookieName+"="+n+t+"; path=/"},get:function(){for(var e,s,n=document.cookie.split(";"),t=n.length,a=0;a<t;a++)if(e=n[a].substr(0,n[a].indexOf("=")),s=n[a].substr(n[a].indexOf("=")+1),(e=e.replace(/^\s+|\s+$/g,""))==c.cookieName)return unescape(s)}},o={hide:function(){for(var e,s,n=document.getElementsByClassName(c.iframeClass),t=n.length,a=0;a<t;a++)(s=n[a]).style.display="none",c.iframesPlaceholder&&(e=s,s=void 0,(s=document.createElement("div")).className=c.iframesPlaceholderClass,s.innerHTML=c.iframesPlaceholderHTML,e.parentNode.insertBefore(s,e))},get:function(){for(var e,s,n=document.getElementsByClassName(c.iframeClass),t=n.length,a=0;a<t;a++)e=(s=n[a]).attributes["data-ce-src"].value,s.src=e,s.style.display="block"},removePlaceholders:function(){for(var e=document.getElementsByClassName(c.iframesPlaceholderClass),s=e.length-1;0<=s;s--)e[s].parentNode.removeChild(e[s])}},b={get:function(){for(var e,s,n,t=document.getElementsByClassName(c.scriptClass),a=t.length,i=document.createDocumentFragment(),o=0;o<a;o++)if(t[o].hasAttribute("data-ce-src"))"undefined"!=typeof postscribe&&postscribe(t[o].parentNode,'<script src="'+t[o].getAttribute("data-ce-src")+'"><\/script>');else{for((s=document.createElement("script")).type="text/javascript",e=0;e<t[o].attributes.length;e++)(n=t[o].attributes[e]).specified&&"type"!=n.name&&"class"!=n.name&&s.setAttribute(n.name,n.value);s.innerHTML=t[o].innerHTML,i.appendChild(s)}document.body.appendChild(i)}};return{init:function(e){c=function(e){for(var s,n=1;n<arguments.length;n++)for(s in arguments[n])arguments[n].hasOwnProperty(s)&&(e[s]=arguments[n][s]);return e}({},s,e),"Y"==i.get()?("function"==typeof c.onEnable&&c.onEnable(),b.get(),o.get()):("N"==i.get()?"function"==typeof c.onDisable&&c.onDisable():p.create(),o.hide(),n())},enableCookies:u,dismissBanner:p.dismiss}}(),jQuery(document).ready(function(e){e(window).scroll(function(){1<e(this).scrollTop()?e(".header").addClass("sticky"):e(".header").removeClass("sticky")})}),COOKIES_ENABLER.init({scriptClass:"ce-script",iframeClass:"ce-iframe",acceptClass:"ce-accept",dismissClass:"ce-dismiss",disableClass:"ce-disable",bannerClass:"ce-banner",bannerHTML:'<div class="popup"><div class="row align-items-center"><div class="col-md-6 col-lg-8 text-center">Just a quick heads up: We use cookies on our site to enhance your experience.</div><div class="col-md-6 col-lg-4 text-center"><a href="#" role="button" class="btn btn-primary mr-1 ce-accept" >Okay</a><a href="/privacy-policy/" target="_blank" rel="nofollow" class="btn btn-secondary">Learn More<span class="screen-reader-text">(link opens in new tab/window)</span></a></div></div></div>',eventScroll:!1,scrollOffset:200,clickOutside:!0,cookieName:"ce-cookie",cookieDuration:"365",wildcardDomain:!1,iframesPlaceholder:!0,iframesPlaceholderHTML:'<p>To view this content you need to<a href="#" class="ce-accept">Enable Cookies</a></p>',iframesPlaceholderClass:"ce-iframe-placeholder",onEnable:"",onDismiss:"",onDisable:""}),jQuery(document).ready(function(e){e(".menubars").click(function(){e(".mobile-nav-menu").fadeToggle(200),e(this).toggleClass("active")})});