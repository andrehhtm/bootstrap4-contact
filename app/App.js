jQuery = require("jquery");
window.$ = $ = jQuery;

Tether = require("tether");
require("bootstrap");

$(function() {
    $('[data-toggle="tooltip"').tooltip();
}) 