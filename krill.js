if (typeof jQuery == 'undefined') {
	if (typeof $ == 'function') {
		thisPageUsingOtherJSLibrary = true;
	}
	function getScript(url, success) {
		var script = document.createElement('script');
		    script.src = url;
		
		var head = document.getElementsByTagName('head')[0],
		done = false;
		
		
		script.onload = script.onreadystatechange = function() {
		
			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
			
			done = true;
				
				
				success();
				
				script.onload = script.onreadystatechange = null;
				head.removeChild(script);
				
			};
		
		};
		
		head.appendChild(script);
	
	};
	
	getScript('https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js', function() {
	
		if (typeof jQuery=='undefined') {
		
			
		
		} else {
			krilAds()
		}
	
	});
	
} else { 
	krilAds()

};
function krilAds(){
	$.ajax({
	    url: "https://deyoonoo.herokuapp.com/game/apitest",
		cache: false,
	    dataType: "jsonp",
	    error: function(err) { console.log('error') },
	    success: function( data ) {
	        console.log( data );
	        jQuery('#kilads-top').html('<a href="'+data.link+'" target="_blank"><img src="'+data.image+'"/></a>')
	        jQuery('#kilads-center').html('<a href="'+data.link+'" target="_blank"><img src="'+data.image+'"/></a>')
	        jQuery('#kilads-bottom').html('<a href="'+data.link+'" target="_blank"><img src="'+data.image+'"/></a>')
	    }

	});
}