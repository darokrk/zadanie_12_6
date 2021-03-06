// variable declaration

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

// show country list function implementation

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>')
		.append($('<h3>').text(item.name))
		.append($('<p>').text('Capital city: ' + item.capital))
		.append($('<p>').text('Region: ' + item.region))
		.append($('<p>').text('Population: ' + item.population))
		.append($('<p>').text('Area: ' + item.area))
		.append($('<p>').text('Time-zones: ' + item.timezones))
		.append($('<div>').append('<img ' + 'class="flag"' + 'src="' + item.flag + '">'))
		.appendTo(countriesList);
	});
}

// function implementation onclick

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

// attaching a request for a button

$('#search').click(searchCountries);
$('#country-name').keypress(searchCountries);