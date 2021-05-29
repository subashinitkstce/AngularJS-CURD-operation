crudOperationApp.factory("sureHttpService", function($http, $q){
	
	var sureHttpService = {};
	config = {
				   headers: {
                    'Accept': 'application/json'
                    ,'Namespace': 'false'  }
               };
	
	/*The response object has these properties:

    data – {string|Object} – The response body transformed with the transform functions.
    status – {number} – HTTP status code of the response.
    headers – {function([headerName])} – Header getter function.
    config – {Object} – The configuration object that was used to generate the request.
    statusText – {string} – HTTP status text of the response.*/

	sureHttpService.get = function(url){
		 return $http.get(url, config)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.status);
                    });
	}
	
	return sureHttpService;
});