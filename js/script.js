// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON("assets/data.json", function (data) {
	console.log("success");
})
	.done(function (data) {

		var mainSection = '<main role="main">';
		$.each(data, function (index, obj) {
			var profileImg = obj.picture,
				profileName = obj.name,
				profileAge = obj.age,
				profileGender = obj.gender,
				profileCompany = obj.company,
				profileEmail = obj.email,
				profilePhone = obj.phone,
				profileLocationLat = obj.latitude,
				profileLocationLong = obj.longitude;

			mainSection += '<section class="row">' +
							'<img src="' + profileImg + '" />' + 
							'<h2>' + profileName + '</h2>' +
							'<br /><strong>Age:&nbsp;</strong>' + profileAge + '&nbsp;<strong>Gender:&nbsp;</strong>' + profileGender +
							'<br /><strong>Company:&nbsp;</strong>' + profileCompany + '&nbsp;<strong>Email:&nbsp;</strong>' + profileEmail + '&nbsp;<strong>Phone:&nbsp;</strong>' + profilePhone +
							'<h3>Location:</h3>' +
							'<strong>Lat:&nbsp</strong>' + profileLocationLat + '&nbsp;<strong>Long:&nbsp</strong>' + profileLocationLong +
							'</section>';
		});
		mainSection += '</main>';
		//console.log(str);
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