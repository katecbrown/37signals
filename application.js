$(document).ready(function () {

	// Change text in #product-swap div on mouseover

	$('#basecamp').mouseover(function() {
		$('#product-swap h1').text("Basecamp is the project management tool you wish you had on your last project.");
		$('#product-swap h5').text("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
	});
	$('#highrise').mouseover(function() {
		$('#product-swap h1').text("Highrise remembers the important things about people you'd normally forget.");
		$('#product-swap h5').text("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.");
	});
	$('#campfire').mouseover(function() {
		$('#product-swap h1').text("From near or far, Campfire helps teams work together over the web in real-time.");
		$('#product-swap h5').text("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.");
	});

	// Change styles in #product-swap div on mouseover

	$('#basecamp, #highrise, #campfire').mouseover(function() {
		$('#product-swap h1').addClass('hover-style');
		$('#product-swap h5').addClass('hover-style');
	});

	// Revert text in #product-swap div on mouseout

	$('#basecamp, #highrise, #campfire').mouseout(function() {
		$('#product-swap h1').text("Making collaboration productive and enjoyable for people every day.");
		$('#product-swap h5').text("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	});

	// Revert styles in #product-swap div on mouseout

	$('#basecamp, #highrise, #campfire').mouseout(function() {
		$('#product-swap h1').removeClass('hover-style');
		$('#product-swap h5').removeClass('hover-style');
	});

});