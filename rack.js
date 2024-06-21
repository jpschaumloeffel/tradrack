


var rackEntries = [
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "0.3",
		"minWidth": 13.8,
		"maxWidth": 23.4,
		"mbs": 8,
		"weight": 69.8,
		"color": "blue"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "0.4",
		"minWidth": 15.5,
		"maxWidth": 26.7,
		"mbs": 9,
		"weight": 77.5,
		"color": "lightgray"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "0.5",
		"minWidth": 19.6,
		"maxWidth": 33.5,
		"mbs": 12,
		"weight": 93.0,
		"color": "violet"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "0.75",
		"minWidth": 23.9,
		"maxWidth": 41.2,
		"mbs": 14,
		"weight": 107.5,
		"color": "green"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "1",
		"minWidth": 30.2,
		"maxWidth": 52.1,
		"mbs": 14,
		"weight": 132.9,
		"color": "red"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "2",
		"minWidth": 37.2,
		"maxWidth": 64.9,
		"mbs": 14,
		"weight": 140.3,
		"color": "yellow"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "3",
		"minWidth": 50.7,
		"maxWidth": 87.9,
		"mbs": 14,
		"weight": 181.1,
		"color": "blue"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "4",
		"minWidth": 66.0,
		"maxWidth": 114.7,
		"mbs": 14,
		"weight": 257.8,
		"color": "lightgray"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "5",
		"minWidth": 85.4,
		"maxWidth": 148.5,
		"mbs": 14,
		"weight": 348.1,
		"color": "violet"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "6",
		"minWidth": 114.1,
		"maxWidth": 195.0,
		"mbs": 14,
		"weight": 529.9,
		"color": "turquoise"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": "0",
		"minWidth": 7.5,
		"maxWidth": 11.8,
		"mbs": 5,
		"weight": 43,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".1",
		"minWidth": 8.8,
		"maxWidth": 13.8,
		"mbs": 5,
		"weight": 45,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".2",
		"minWidth": 10.4,
		"maxWidth": 16.3,
		"mbs": 6,
		"weight": 48,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".3",
		"minWidth": 12.4,
		"maxWidth": 22.6,
		"mbs": 8,
		"weight": 54,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".4",
		"minWidth": 15.3,
		"maxWidth": 27.7,
		"mbs": 9,
		"weight": 61,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".5",
		"minWidth": 18.8,
		"maxWidth": 33.9,
		"mbs": 10,
		"weight": 77,
		"color": "white"
	},
	{
		"manufacturer": "Black Diamond",
		"series": "Camalot Z4",
		"size": ".75",
		"minWidth": 23.1,
		"maxWidth": 42.1,
		"mbs": 10,
		"weight": 93,
		"color": "white"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "0.50",
		"minWidth": 11.7,
		"maxWidth": 18.9,
		"mbs": 6,
		"weight": 69,
		"color": "white"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "0.65",
		"minWidth": 13.8,
		"maxWidth": 22.5,
		"mbs": 8,
		"weight": 75,
		"color": "blue"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "0.80",
		"minWidth": 17,
		"maxWidth": 27.7,
		"mbs": 9,
		"weight": 83,
		"color": "yellow"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "1.00",
		"minWidth": 20.9,
		"maxWidth": 34.2,
		"mbs": 10,
		"weight": 95,
		"color": "purple"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "1.25",
		"minWidth": 25.7,
		"maxWidth": 42.3,
		"mbs": 13,
		"weight": 109,
		"color": "green"
	},
	{
		"manufacturer": "Alien",
		"series": "Totemcam",
		"size": "1.50",
		"minWidth": 31.6,
		"maxWidth": 52.2,
		"mbs": 13,
		"weight": 132.5,
		"color": "red"
	},


];


$( document ).ready(function() {

	const canvas = document.getElementById("rackCanvas");
	const ctx = canvas.getContext("2d");

	// sort entries by minWidth
	rackEntries.sort((a, b) => b["minWidth"] - a["minWidth"]);

	var numEntries = rackEntries.length;
	var height = Math.min(25, canvas.height / numEntries);

	// determine actual present max and min values
	var maxWidth = null;
	var minWidth = null;
	rackEntries.forEach((entry) => {
		if (maxWidth === null || entry["maxWidth"] > maxWidth) {
			maxWidth = entry["maxWidth"];
		}
		if (minWidth === null || entry["minWidth"] < minWidth) {
			minWidth = entry["minWidth"];
		}
	});

	// set max and min of axis (in mm)
	var minGraph = 0.0;
	var maxGraph = 220.0;
	var spanGraph = maxGraph - minGraph;

	var i = 0;
	rackEntries.forEach((entry) => {

		// minGraph is mapped to left border
		var left_x = Math.max(0, entry["minWidth"] / spanGraph) * canvas.width;

		// maxGraph is mapped to the right border
		var right_x = Math.min(1, entry["maxWidth"] / spanGraph) * canvas.width;

		ctx.fillStyle = entry["color"];
		ctx.fillRect(left_x, i*height, right_x - left_x, height);

		ctx.strokeStyle = "black";
		ctx.strokeRect(left_x, i*height, right_x - left_x, height);

		ctx.fillStyle = "black";
		ctx.fillText(entry["manufacturer"] + " " + entry["series"] + " " + entry["size"], left_x + 10, (i + 0.5)*height);

		i++;
	});

});



