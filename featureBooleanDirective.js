crudOperationApp.directive('featureBooleanType', function () {
    return {
        restrict: 'A',
        template: '<span style="padding-right:20px"><label value="{{feat.name}}">{{feat.name}}</label></span><input type="text" id="{{feat.name}}" value="{{feat.value}}" ng-model="feat.value" />'        
    };
});

