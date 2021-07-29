try {
  // jQuery.noConflict(true); // Removes previous jQuery
  require("@fancyapps/fancybox");
} catch (e) {
  console.log(e)
}

$('[data-fancybox]').fancybox({
  protect: true,
  buttons: [
    // "zoom",
    // "share",
    "slideShow",
    "fullScreen",
    //"download",
    "thumbs",
    "close"
  ],
  animationEffect: "zoom-in-out",
  transitionEffect: "tube",
});
