// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON("assets/data.json", function (data) {
	console.log("success");
})
	.done(function (data) {

		var mainSection = '<main role="main">';
		$.each(data, function (index, obj) {
			var profileId = obj.id,
				profileImg = obj.picture,
				profileName = obj.name,
				profileAge = obj.age,
				profileGender = obj.gender,
				profileCompany = obj.company,
				profileEmail = obj.email,
				profilePhone = obj.phone,
				profileLocationLat = obj.latitude,
				profileLocationLong = obj.longitude;

			mainSection += '<section class="row" data-id="' + profileId + '" >' +
				'<div class="col-md-4 text-center"><img class="profile" alt="' + profileName + '" src="' + profileImg + '" /></div>' +
				'<div class="col-md-4">' +
				
				'<div id="personalInfo">' +
				'<h2>' + profileName + '</h2>' +
				'<ul class="list-unstyled list-inline">' +
				'<li><strong>Age:&nbsp;</strong>' + profileAge + '</li>' +
				'<li><strong>Gender:&nbsp;</strong>' + profileGender + '</li></ul></div>' +
				
				'<address><ul id="companyInfo" class="list-unstyled">' +
				'<li><span class="glyphicon glyphicon-briefcase"></span>&nbsp;' + profileCompany + '</li>' +
				'<li><span class="glyphicon glyphicon-envelope"></span>&nbsp;<a href="mailto:' + profileEmail + '">' + profileEmail + '</a></li>' +
				'<li><span class="glyphicon glyphicon-earphone"></span>&nbsp;' + profilePhone + '</li>' +
				'</ul></address></div>' +
				
				
				
				
				
				'<div class="col-md-4"><h3>Location:</h3>' +
				'<ul id="locationList" class="list-unstyled list-inline">' +
				'<li><strong>Lat:&nbsp</strong>' + profileLocationLat + '</li>' +
				'<li><strong>Long:&nbsp</strong>' + profileLocationLong + '</li></ul></div>' +
				'</section>';
		});
		mainSection += '</main>';

		var navSection = '<nav role="main"><ul class="list-inline text-center">';
		$.each(data, function (index, obj) {
			var profileId = obj.id,
				profileName = obj.name;

			navSection += '<li><a data-id="' + profileId + '"  href="javascript:void(0);">' + profileName + '</a></li>';
		});
		navSection += '</ul></nav>';

		//console.log(str);
		$('header').append(navSection);
		$('#allHolder').append(mainSection);
		console.log("second success");

	})
	.fail(function () {
		$('#allHolder').append("Your data has failed to load");
		console.log("error");
	})
	.always(function () {
		console.log("complete");
	});
// Perform other work here ...
// Set another completion function for the request above
jqxhr.complete(function () {
	console.log("second complete");
});

$(document).ready(function () {
	var $navLink = $('nav ul').children('li').children('a');
	
	$('main').children('section').hide();
	
	$navLink.click(function() {
		var $navLinkId = $(this).attr('data-id'),
			$x = $(this).parents('header').siblings('main').children('section');
			
			$x.slideUp( 1000 );
			$($x[$navLinkId]).slideToggle( 1000 );
	})
	
});