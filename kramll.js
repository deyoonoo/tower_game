if (typeof jQuery == "undefined") {
	if (typeof $ == "function") {
		thisPageUsingOtherJSLibrary = true
	}

	function getScript(j, h) {
		var f = document.createElement("script");
		f.src = j;
		var i = document.getElementsByTagName("head")[0],
			g = false;
		f.onload = f.onreadystatechange = function () {
			if (!g && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				g = true;
				h();
				f.onload = f.onreadystatechange = null;
				i.removeChild(f)
			}
		};
		i.appendChild(f)
	}
	getScript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js", function () {
		if (typeof jQuery == "undefined") {} else {
			krilAds();
		}
	})
} else {
	krilAds();
}

function krillirk_modal_box(a) {
	$("html, body").animate({ scrollTop: 0 });
	$('body').css('overflow','hidden');
	add_block_page();
	add_popup_box(a);
	add_styles(a);
	$(".krillirk_modal_box").fadeIn('500');
}

function add_styles(a) {
	$(".krillirk_modal_box").css({
		position: "relative",
		margin: "0 auto",
		top: "25%",
		display: "none",
		height: a.height + "px",
		width: a.width + "px",
		border: "1px solid #fff",
		"box-shadow": "0px 2px 7px #292929",
		"-moz-box-shadow": "0px 2px 7px #292929",
		"-webkit-box-shadow": "0px 2px 7px #292929",
		background: "rgb(255, 255, 255)",
		"z-index": "50",
	});
	$(".krillirk_modal_close").css({
		position: "absolute",
		right: "0",
		top: "-20px",
		display: "block",
		height: "16px",
		width: "16px",
		background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVQ4T6XTyUkGQRDF8d/nGoWePImBKO4rYggeDEWTEAVX3EHENPTiQZNwBynogabtAWXqNAP1/t316nVPx+p11MsBE7jGJi5bwEvYwSQeoicHvGAEH1jDWQFZwT4G8ISxErCAAwziE+s4SZBV7CXxOxZxUwLifxZHGMIXNtCH3SR+wzxum9vVTJzGMYbxnRr78Yo53OWjtW1hCqcJEv0hnsF9aW4bIE46TKOEJowNEy/+AsjFIYwKT+J7uVxxeYNSHO5HhbGxnV+QHFATnydAOB8jNZAI1FW5xmeMplPi5EbcjJ3npBqk8RTlrYq4gUSAthFbeqwF6d9vq/Nr/AEBuzYR94pKhwAAAABJRU5ErkJggg==") no-repeat',
	});
	$(".krillirk_block_page").css({
		position: "absolute",
		top: "0",
		left: "0",
		"background-color": "rgba(22,22,22,0.5)",
		height: "100%",
		width: "100%",
		"z-index": "10"
	})
}

function add_block_page() {
	var a = $('<div class="krillirk_block_page"></div>');
	$(a).appendTo("body");
}

function add_popup_box(a) {
	var b = $('<div class="krillirk_modal_box"><a href="#" class="krillirk_modal_close"></a><div class="krillirk_inner_modal_box"><a href="' + a.link + '" target="_blank"><img src="' + a.image + '" style="width: 100%;"/></a></div></div>');
	$(b).appendTo(".krillirk_block_page");
	$(".krillirk_modal_close").click(function () {
		$(this).parent().fadeOut().remove();
		$(".krillirk_block_page").fadeOut().remove();
		$('body').css('overflow', 'auto');
	})
};

function krilAds(){
	$.ajax({
	    url: "https://deyoonoo.herokuapp.com/game/apitest",
		cache: false,
	    dataType: "jsonp",
	    error: function(err) { console.log('error') },
	    success: function( data ) {
	        jQuery('#kilads-top').html('<a href="'+data.top.link+'" target="_blank"><img src="'+data.top.image+'"/></a>');
	        jQuery('#kilads-center').html('<a href="'+data.center.link+'" target="_blank"><img src="'+data.center.image+'"/></a>');
	        jQuery('#kilads-bottom').html('<a href="'+data.bottom.link+'" target="_blank"><img src="'+data.bottom.image+'"/></a>');
	        krillirk_modal_box({
	            height:data.modal.height,
	            width:data.modal.width,
	            link:data.modal.link,
	            image:data.modal.image
	        });
	    }

	});
}