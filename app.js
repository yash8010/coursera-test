(function(){
'use strict';
angular.module('NameCalculator',[])
.controller('NameCalculatorController', Function ($scope){
  $scope.name ="";
  $scope.totalvalue = 0;
  $scope.displayNumeric = function (){
    var totalNameValue =
    calculatNumericForString($scope.name);
    $scope.totalvalue = totalNameValue;
  };


  function calculatNumericForString(string) {
    var totalStringValue = 0;
    for(var i =0; i < string.length; i++){
      totalStringValue +=string.charCodeAt(i);
    }
    return totalStringValue;
  }

});

})();
