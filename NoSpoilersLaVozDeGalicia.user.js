// ==UserScript==
// @name         NoSpoilersLaVozDeGalicia
// @version      0.2
// @description  Quita spoilers de la voz de galicia
// @author       Borja Pintos
//@downloadURL   https://github.com/BorjaPintos/NoSpoilers/blob/master/NoSpoilersLaVozDeGalicia.user
// @match        *://*.lavozdegalicia.es/*
// @grant        none
// ==/UserScript==

var spoilers;

function init() {
	spoilers = document.getElementsByClassName("television");
    
    var length = spoilers.length;
    for (var i = 0; i<length;i++){
        spoilers[i].style.visibility = "hidden";
        var p = document.createElement("h1");
        var text = document.createTextNode("Posible Spoiler, click 'aquí' para ver");
        p.appendChild(text);
        p.id = i;
        p.addEventListener('click', function(){
           restaurar(this, this.id);
        });
        spoilers[i].parentNode.insertBefore(p, spoilers[i]);
    }
}

function restaurar(h1, nSpoiler){
    h1.remove();
    spoilers[nSpoiler].style.visibility = "visible";
}

init();
