import 'bootstrap'

// Hack pour jQuery
window.$ = jQuery.noConflict();
$.animate = $.fn.animate;
