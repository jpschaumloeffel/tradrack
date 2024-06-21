


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



