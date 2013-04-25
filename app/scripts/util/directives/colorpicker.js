'use strict';

angular.module('udm.util')
  .directive('colorpicker', [function () {
    return {
      template: '',
      restrict: 'E',
        scope:{
            color:'@color',
            name:'@name'
        },
      link: function postLink(scope, element, attrs) {

          var colorpickerCreated = false;

          attrs.$observe('color', function(changedValue){
              processChange()
          });
          attrs.$observe('name', function(changedValue){
              processChange()
          });

          function processChange(){
              if( scope.name && scope.color){
                  if(colorpickerCreated) updateColorPicker();
                  else createColorPicker()
              }
          }

          function createColorPicker(){

              var firstChange = true;

              var name = scope.name;
              var color = scope.color;

              element.html('<input id="colorpicker-'+name+'" class="colorpickerInput" type="text" value="'+color+'">');

              $( "#colorpicker-"+name ).minicolors({
                  theme: 'bootstrap',
                  swatchPosition: 'right',
                  position : 'left',
                  change: function(hex, opacity) {
                      scope.$emit('colorpickerChanged',{value:hex,name:name});
                  }
              });

              colorpickerCreated = true;
          }

          function updateColorPicker(){

              var name = scope.name;
              var color = scope.color;

              $( "#colorpicker-"+name ).minicolors('value',color);
          }


      }
    };
  }]);