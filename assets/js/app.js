function setUpResponsiveNav(e){$(".horizontal-nav .menu").addClass(e.animation),$(".horizontal-nav .menu").css({width:e.width}),$("#hamburger").click(function(){$(this).toggleClass("open"),"slideDown"==e.animation?$(".horizontal-nav .menu").slideToggle():$(".horizontal-nav .menu").toggleClass("open")})}function setUpLightbox(e,t,n,o){$(e).click(function(){n(),$("body").addClass("no-scroll"),fadeIn(t+".lightbox")}),$(t+".lightbox svg#close").click(function(){o(),$("body").removeClass("no-scroll"),fadeOut(t+".lightbox")})}function fadeIn(e){$(e).addClass("show"),setTimeout(function(){$(e).addClass("visually-show")},20)}function fadeOut(e){$(e).removeClass("visually-show"),$(e).one("transitionend",function(){$(e).removeClass("show")})}function onResizeCallBack(){if(new Date-rtime<delta)setTimeout(onResizeCallBack,delta);else{timeout=!1;try{onResize()}catch(e){}}}function addClassInSuccession(e,t,n,o,a,i){n&&(e=$(e.get().reverse())),e.each(function(e){var n=$(this);setTimeout(function(){n.addClass(t)},a*e+o),o*=i})}var debug=2,rtime,timeout=!1,delta=200;$(window).on("resize",function(){rtime=new Date,timeout===!1&&(timeout=!0,setTimeout(onResizeCallBack,delta))});
function onResize(){}function initMap(){var e=document.getElementById("map"),t=new google.maps.Map(e,{center:{lat:44.54,lng:-78.546},zoom:8});t.set("styles",[{featureType:"landscape",stylers:[{hue:"#FFBB00"},{saturation:43.400000000000006},{lightness:37.599999999999994},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FFC200"},{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0078FF"},{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF6A"},{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]}]),google.maps.event.addDomListener(window,"resize",function(){t.setCenter({lat:44.54,lng:-78.546})})}$(document).ready(function(){setUpResponsiveNav({animation:"slideInRight",width:"80%"}),setUpLightbox(".horizontal-nav .menu li:first-child","#main",function(){$("#main.lightbox .wrapper").css({height:"200px",width:"200","background-color":"#fff"})},function(){$("#main.lightbox .wrapper").css({height:"0",width:"0","background-color":"#fff"})}),$("body").imagesLoaded(function(){$.stellar()}),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}),wow.init()});
//# sourceMappingURL=app.js.map