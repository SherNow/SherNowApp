'use strict';

angular.module('shernow.services', []);

var baseApi = 'http://localhost:3000';


function redirectToWifis(){
	redirectTo('wifi');
}

function redirectTo(section){
    window.location.replace(window.location.origin + '/' + (window.location.search != '' ? window.location.search + '/' : '') + '#/tab/' + section);
}
