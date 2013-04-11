'use strict';

angular.module('swaApp')
  .directive('infobox', function () {
    return {
      templateUrl: '../views/infobox.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

          scope.$on('showInfo', function(e,value) {
              scope.info.title = value.name;
              scope.info.desc = value.info;
          });

          scope.info = {title : '',
                            desc: ''}

          scope.showImgSlider = function(){
              scope.$emit('showImgSlider');
          }
      }
    };
  });
