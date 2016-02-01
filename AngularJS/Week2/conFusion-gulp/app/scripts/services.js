'use strict';

angular.module('confusionApp')
  .constant("baseURL", "http://localhost:3000/")
  .factory('menuFactory', ['$http', 'baseURL', function($http, baseURL) {
        var menuFac = {};
        
        menuFac.getDishes = function() {
          return $http.get(baseURL+"dishes");
        };

        menuFac.getDish = function(index) {
          return $http.get(baseURL+"dishes/"+index);
        };

        return menuFac;
  }])

;