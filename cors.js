/*	SAMPLE HOW TO USE
	
	{METHOD} = String
	{URL} = String
	
	var request = createCORSRequest({METHOD},{URL});
		
	if(request) {
		request.onload = function(){
			// Script that you want to run here
		};
		request.send();
	}
*/
// Allow xDomain Request
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}