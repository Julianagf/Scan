!function(t){"use strict";jQuery("body").css("direction");jQuery(".c-testimonials").each((function(){var t=jQuery(this);t.imagesLoaded((function(){var a=t.attr("data-id"),e=t.attr("data-bullets"),r=t.attr("data-autoplay"),o=t.attr("data-arrows"),i=t.attr("data-style"),s=t.attr("data-item-per-row"),n=3,d=2,l=1;e=parseInt(e),r=parseInt(r),r=parseInt(r),s=parseInt(s),"1"!=i?(s=1,n=1,d=1,l=1):1==s?(n=1,d=1,l=1):2==s?(n=2,d=2,l=1):(n=1,d=1,l=1),jQuery("#"+a+" .block-group").slick({lazyLoad:"ondemand",fade:1==s,cssEase:"ease-out",dots:1==e,autoplay:1==r,arrows:1==o,autoplaySpeed:5e3,infinite:!0,speed:300,rtl:!0,slidesToShow:s,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:parseInt(n),slidesToScroll:parseInt(n),infinite:!0,dots:!0,fade:!1}},{breakpoint:768,settings:{slidesToShow:parseInt(d),slidesToScroll:parseInt(d),fade:!1}},{breakpoint:480,settings:{slidesToShow:parseInt(l),slidesToScroll:parseInt(l),fade:!1}}]})}))}));var a=[];jQuery(document).ready((function(){"undefined"!=typeof ProgressBar&&jQuery(".c-progress-item").each((function(){var e,r=jQuery(this),o=r.attr("data-id"),i=r.attr("data-type"),s=r.attr("data-percent"),n=r.attr("data-value-text"),d=r.attr("data-text-color"),l=r.attr("data-bg-color"),u=r.attr("data-font-family"),c=r.attr("data-font-size"),p=r.attr("data-trail-color"),f=r.attr("data-trail-width"),h=r.attr("data-stroke-width"),y=r.attr("data-duration");""==p&&(p="bar"===i?"#eee":"#32211c"),""==c&&(c="bar"===i?"14px":"36px"),(f=parseInt(f))&&""!=f||(f="bar"===i?.1:8),(h=parseInt(h))&&""!=h||(h="bar"===i?2:8),""==y&&(y="bar"===i?1400:2e3),o=document.getElementById(o);t(o);o&&("bar"===i?(e=new ProgressBar.Line(o,{color:l,strokeWidth:h,trailWidth:f,trailColor:p,easing:"easeInOut",duration:y,svgStyle:{width:"100%",height:"100%"},text:{style:{color:d,position:"absolute",right:"0",top:"30px",padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:l,width:h},to:{color:l,width:h},step:function(t,a){a.setText(Math.round(100*a.value()))}})).path.style.strokeLinecap="round":"circle"===i&&(e=new ProgressBar.Circle(o,{color:d,strokeWidth:h,trailWidth:f,trailColor:p,easing:"easeInOut",duration:y,text:{autoStyleContainer:!1},from:{color:l,width:h},to:{color:l,width:h},step:function(t,a){if(a.path.setAttribute("stroke",t.color),a.path.setAttribute("stroke-width",t.width),""===n){var e=Math.round(100*a.value());0===e?a.setText(""):a.setText(e)}else a.setText(n)}})),"bar"!==i&&"circle"!==i||(""!=u&&(e.text.style.fontFamily=u),e.text.style.fontSize=c),a.push(["#"+r.attr("data-id"),e,s,!1]))})),t(document).bind("scroll",(function(){var e=t(document).scrollTop();for(var r in a){var o=a[r][0],i=a[r][1],s=a[r][2],n=a[r][3];if(!n)e>t(o).offset().top-window.innerHeight&&(i.animate(s),n=!0,a[r][3]=!0)}})),jQuery(".c-icon-box").each((function(){var t=jQuery(this),a=parseInt(t.attr("data-count")),e=t.find("li.c-column");if("undefined"!==e){e.unwrap(),e.unwrap();for(var r=0;r<e.length;r++)r%a==0&&e.slice(r,r+a).wrapAll('<li class="block-group"><ul></ul></li>')}}));t(".c-countdown__inner").each((function(a,e){var r,o=t(this),i=o.attr("data-years-text"),s=o.attr("data-months-text"),n=o.attr("data-week-text"),d=n+"s",l=o.attr("data-days-text"),u=o.attr("data-hours-text"),c=o.attr("data-minutes-text"),p=o.attr("data-seconds-text"),f=o.attr("data-countdown"),h=o.attr("data-format");if(h="full"==h?"yodHMS":"dHMS","NaN"==(r=new Date(f)).toString()||"Invalid Date"==r.toString())return alert("You have entered an incorrect time value"),!1;o.countdown({until:new Date(f),labels:[i,s,d,l,u,c,p],labels1:[i,s,n,l,u,c,p],format:h,padZeroes:!0})})),jQuery().swipebox&&jQuery(".c-video-lightbox-item").swipebox(),jQuery().swipebox&&jQuery(".c-gallery-item").swipebox({loopAtEnd:!1,hideBarsDelay:5e3}),jQuery().swipebox&&jQuery(".c-portfolio-lightbox").swipebox({loopAtEnd:!1,hideBarsDelay:5e3}),jQuery(".c-counter__value").each((function(){var a=jQuery(this),e=a.attr("data-id"),r=a.attr("data-value"),o=a.attr("data-time"),i=a.attr("data-separator"),s=a.attr("data-suffix");o/=1e3;var n=new CountUp(e,0,r,0,o,{useEasing:!1,useGrouping:!0,separator:i,decimal:"",suffix:s});t(document).bind("scroll",(function(){t(document).scrollTop()>t("#"+e).offset().top-window.innerHeight&&n.start()}))})),t(window).width()<=480?jQuery(".grid9").slick({lazyLoad:"ondemand",fade:!1,cssEase:"ease-out",dots:!1,autoplay:!1,arrows:!0,autoplaySpeed:5e3,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:2,adaptiveHeight:!1}):jQuery(".grid9").addClass("block")}))}(jQuery);