'use strict';

angular.module('udm.map')
  .directive('map', function (map,$compile) {
    return {
      template: '<div id="map" class="{{mapClass}}"></div><layerswitcher></layerswitcher>',
      restrict: 'E',
      controller: 'MapCtrl',
      link: function postLink(scope, element, attrs) {
          scope.basemaps = map.getBasemaps();

      }
    };
  });
