if(typeof jQuery=="undefined"){if(typeof $=="function"){thisPageUsingOtherJSLibrary=true}function getScript(c,e){var b=document.createElement("script");b.src=c;var d=document.getElementsByTagName("head")[0],a=false;b.onload=b.onreadystatechange=function(){if(!a&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){a=true;e();b.onload=b.onreadystatechange=null;d.removeChild(b)}};d.appendChild(b)}getScript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js",function(){if(typeof jQuery=="undefined"){}else{krilAds()}})}else{krilAds()};

function krilAds(){
	$.ajax({
	    url: "https://deyoonoo.herokuapp.com/game/apitest",
		cache: false,
	    dataType: "jsonp",
	    error: function(err) { console.log('error') },
	    success: function( data ) {
	        console.log( data );
	        jQuery('#kilads-top').html('<a href="'+data.top.link+'" target="_blank"><img src="'+data.top.image+'"/></a>')
	        jQuery('#kilads-center').html('<a href="'+data.center.link+'" target="_blank"><img src="'+data.center.image+'"/></a>')
	        jQuery('#kilads-bottom').html('<a href="'+data.bottom.link+'" target="_blank"><img src="'+data.bottom.image+'"/></a>')
	    }

	});
}