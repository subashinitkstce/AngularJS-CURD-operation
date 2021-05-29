var crudOperationApp = angular.module('crudOperationApp', []);

crudOperationApp.controller('crudOperationCntrl', function($scope,sureHttpService) {
    
    $scope.featureScopeVariable;
    
    $scope.path = {};
    
    $scope.createpath = function(){
      console.log('create path');
      window.location = "/New_SureUI/createpath.html";
    };
    
    $scope.requestPageData = function() {
        $scope.templateData = sureHttpService.get('path_template.json');		
        $scope.featureScopeVariable = [  
                   {  
                      "name":"string dropdown",
                      "value":"kbcde",
                      "DataType":"String",
                      "MinLength":"1",
                      "MaxLength":"10",
                      "AllowedValues":"abcdef,abcd,bcded,kbcde,xyzded",
                      "Pattern":"abcdef",
                      "GloballySet":false,
                      "Mandatory":true
                   },
                   {  
                      "name":"int dropdown",
                      "value":"7",
                      "DataType":"Integer",
                      "MinLength":"1",
                      "MaxLength":"10",
                      "AllowedValues":"1,2,3,5,7,9",
                      "Pattern":"",
                      "GloballySet":false,
                      "Mandatory":false
                   },
                    {  
                      "name":"int drop no def",
                      "value":"",
                      "DataType":"Integer",
                      "MinLength":"1",
                      "MaxLength":"10",
                      "AllowedValues":"1,2,3,5,7,9",
                      "Pattern":"",
                      "GloballySet":false,
                      "Mandatory":false
                   },
                   {  
                      "name":"int text",
                      "value":"50",
                      "DataType":"Integer",
                      "MinLength":"10",
                      "MaxLength":"100",
                      "AllowedValues":"",
                      "Pattern":"",
                      "GloballySet":false,
                      "Mandatory":true
                   },
                    {  
                      "name":"string text",
                      "value":"default value",
                      "DataType":"String",
                      "MinLength":"1",
                      "MaxLength":"20",
                      "AllowedValues":"",
                      "Pattern":"",
                      "GloballySet":false,
                      "Mandatory":true
                   },
                   {  
                      "name":"boolean",
                      "value":"true",
                      "DataType":"Boolean",
                      "AllowedValues":"true,false",
                      "GloballySet":false,
                      "Mandatory":true
                   }
                ];
        console.log($scope.templateData);
        console.log($scope.featureScopeVariable);
        console.log($scope.featureScopeVariable.length);
        
        $scope.subPaths = [{
            "UUID": "123",
            "SureName": "IPTC.net/VPLS-VPLS_JUNE24_1.path",		
        },
        {
            "UUID": "345",
            "SureName": "IPTC.net/VPLS-VPLS_JUNE_22_2.path",		
        },
        {
            "UUID": "567",
            "SureName": "IPTC.net/VPLS-VPLS_JUNE_15_3.path",		
        },
        {
            "UUID": "789",
            "SureName": "IPTC.net/VPLS-VPLS_JUNE_18_4.path",		
        },
        {
            "UUID": "987",
            "SureName": "IPTC.net/VPLS-VPLS_JUNE_3_5.path",		
        }];
        
        console.log($scope.subPaths);

		$scope.path.pathName = "my path";      
    };
    
    
    $scope.savepath = function(){
        console.log("save data");
        console.log($scope.path);
        console.log($scope.path.aend);
        console.log("features");
        console.log($scope.featureScopeVariable[0].value);
        console.log($scope.featureScopeVariable[1].value);        
        
		$scope.path.feature = $scope.featureScopeVariable;
        
		console.log($scope.path.feature[0].value);
        console.log($scope.path.feature[1].value);
        
		
		$scope.path.subPaths = $scope.subPaths;
		
		console.log($scope.path.subPaths[0].UUID);
		console.log($scope.path.subPaths[0].SureName);
		
        var pathJSON = JSON.stringify($scope.path);
        console.log(pathJSON);
		
        var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(pathJSON);

        var a = document.createElement('a');
        a.href = uri;
        a.innerHTML = "Right-click and choose 'save as...'";
        document.body.appendChild(a);
    };
    
});
        

		
crudOperationApp.filter('$split', function() {
  return function(val, splitter) {
    if (!splitter) { splitter = ','; }
    return (val && val.length) ? val.split(splitter) : [];
  }
  
});