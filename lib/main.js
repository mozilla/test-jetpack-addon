const {Cc,Ci} = require("chrome");

const widgets = require("widget");
const tabs = require("tabs");
var pageMod = require("page-mod");
var windows = require("windows").browserWindows;

var injector = require("injector");

for each (var window in windows) {
    let w_inj = injector.InjectorInit(window);
    w_inj.register({
        apibase: "navigator.foo", name: "bar", script: null,
        getapi: function (contentWindowRef) {
            return function (args) {
                console.log("bar bar!");
            }
        }
    });
}
/*
pageMod.PageMod({
    include : "*",
    contentScript: 'document.onload = function() {alert("oy"); window.document.foo= function(){alert("foo");}}',
});
*/

console.log("The add-on is running.");
