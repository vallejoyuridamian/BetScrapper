
	var webPage = require('webpage');
	var page = webPage.create();
	
	page.settings.loadImages  = false;
	page.settings.resourceTimeout = 6000;

	page.open('https://www.supermatch.com.uy/live#/32810069', function(status) {
	  
	  setTimeout(function() {
		console.log(page.content);
		phantom.exit();
	  }, 6000);
    });
	
	