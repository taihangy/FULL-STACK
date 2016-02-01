'use strict';

angular.module('confusionApp')
  .constant("baseURL", "http://localhost:3000/")
  .factory('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        var menuFac = {};
        
        menuFac.getDishes = function() {
          return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
        };

        return menuFac;
  }])

;