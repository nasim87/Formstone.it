/*! 
 * Formstone.it v1.0.0 [2014-10-21] 
 * Formstone website. 
 * Ben Plum 
 */ 

function GridlockBookmarklet(){function a(){d=new e}function b(){var b=document.createElement("script");b.id="gridlock-jquery",b.src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",b.onload=function(){c=jQuery.noConflict(!0),a()},document.body.appendChild(b)}var c,d,e=function(){var a=this,b=c.extend({onLoad:!1,position:"top-right",useCookies:!1},window.GridlockBookmarkletConfig);if(c(".gridlock").length<1)alert("Gridlock Not Found.\nYou'll need to include Gridlock before using this bookmarklet.\n\nLearn more: http://formstone.it/gridlock/");else{{var d=c(".gridlock").hasClass("gridlock-16")?16:12,e=c(".gridlock").hasClass("gridlock-mf");Math.ceil(d/2)}if(c("#gridlock_styles").length<1&&c("body").append('<link id="gridlock_styles" rel="stylesheet" href="http://formstone.it/css/gridlock.bookmarklet.css" type="text/css" media="all">'),c("#gridlock_overlay").length<1){var f="";f+='<menu id="gridlock_menu" class="'+b.position+'">',f+='<span class="gridlock_show gridlock_option">Show Grid</span>',f+='<span class="gridlock_icon gridlock_remove">Close</span>',f+="</menu>",f+='<section id="gridlock_overlay" class="'+(e?"mobile-first":"")+'">',f+='<div class="row">';for(var g=0;d>g;g++)f+='<div class="desktop-1 tablet-1 mobile-1"> <span> </span> </div>';f+="</div>",f+="</section>",c("body").append(f),a.$menu=c("#gridlock_menu"),a.$menuItems=a.$menu.find("span"),a.$overlay=c("#gridlock_overlay"),a.$menu.on("click",".gridlock_option",c.proxy(a.onClick,a)).on("click",".gridlock_remove",c.proxy(a.remove,a)),(b.onLoad||b.useCookies===!0&&"true"===a.readCookie("gridlock-active"))&&a.$menuItems.filter(".gridlock_show").trigger("click")}}};if(e.prototype={onClick:function(a){var b=this,d=c(a.currentTarget);d.hasClass("active")||d.hasClass("remove")?(d.removeClass("active").html("Show Grid"),b.$overlay.removeClass("visible"),b.eraseCookie("gridlock-active")):(d.addClass("active").html("Hide Grid"),b.$overlay.addClass("visible"),b.createCookie("gridlock-active","true",7))},remove:function(){var a=this;a.$menu.remove(),a.$overlay.remove()},createCookie:function(a,b,c){var d=new Date,e="; path=/",f="; domain="+document.domain;d.setTime(d.getTime()+24*c*60*60*1e3),c="; expires="+d.toGMTString(),document.cookie=a+"="+b+c+f+e},readCookie:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},eraseCookie:function(a){this.createCookie(a,"",-1)}},"undefined"==typeof jQuery)b();else{var f=jQuery.fn.jquery.split(".");parseInt(f[1],10)<7?b():(c=jQuery,a())}}var GB=new GridlockBookmarklet;