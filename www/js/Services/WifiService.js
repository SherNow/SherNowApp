angular.module('shernow.services')
    .factory('Wifis', function ($http) {
        var wifis = [ {name:"Zap1", distance:"100m"}, {name:"Zap2", distance:"150m"}, {name:"Zap3", distance:"155m"}];
        
		var getAll = function () {
            return wifis;
        };
        
        var get = function (id) {
            return _.find(wifis, function (wifi) { return wifi.id == id; });
        };
		
		return {
            getAll: getAll
        };
	});