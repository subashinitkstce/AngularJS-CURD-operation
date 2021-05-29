crudOperationApp.directive('featureDropdownType', function () {
    return {
        restrict: 'A',
        template: '<span style="padding-right:20px"><label value="{{feat.name}}">{{feat.name}}</label></span><select ng-model="feat.value" ng-options="x for x in feat.AllowedValues.split(\',\')"></select>'        
    };
});