// ==UserScript==
// @name         NoSpoilersLaVozDeGalicia
// @version      0.1
// @description  try to take over the world!
// @author       Borja Pintos
//@downloadURL   https://github.com/BorjaPintos/NoSpoilers/blob/master/PepitoScript.user.js
// @match        *://*.lavozdegalicia.es/*
// @grant        none
// ==/UserScript==



function init() {
	var spoilers = document.getElementsByClassName("television");
    var length = spoilers.length;
    for (var i = 0; i<length;i++){
        spoilers[i].remove();
    }
}

init();
