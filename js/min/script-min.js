$(function(){var e=$(".sf-menu");e.clone().removeClass().addClass("rwd-menu").prependTo(".navbar-container nav"),e.superfish(),$("#rwd-trigger").on("click",function(e){e.preventDefault(),$(".rwd-menu").slideToggle()}),$("#demo-animations").find(".demo-col").on("click",function(){var e=$(this);e.addClass("animated "+e.attr("id"))}),$(".tabs-links a").on("click",function(e){e.preventDefault();var n=$(this).attr("href");$(n).show().siblings().hide(),$(this).parent("li").addClass("active").siblings().removeClass("active")}),$(".accordion-element-title").on("click",function(e){e.preventDefault();var n=$(this).attr("href");$(".accordion-element-title").removeClass("active"),$(".accordion-element-content").hide(),$(this).addClass("active"),$(n).slideDown()})});