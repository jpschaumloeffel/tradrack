
var rackEntries = [
	{
		"minWidth": 30.2,
		"maxWidth": 52.1,
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "#1",
		"weight": 132.9,
		"color": "red"
	},
	{
		"minWidth": 37.2,
		"maxWidth": 64.9,
		"manufacturer": "Black Diamond",
		"series": "Camalot C4",
		"size": "#2",
		"weight": 140.3,
		"color": "yellow"
	}
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
	var maxGraph = 200.0;

	var i = 0;
	rackEntries.forEach((entry) => {

		// minGraph is mapped to left border
		var left_x = Math.max(0, entry["minWidth"] - minGraph);

		// scale the absolute value to the graph
		left_x = (left_x / maxGraph) * canvas.width;


		var right_x = Math.min(entry["maxWidth"], maxGraph);
		right_x = (right_x / maxGraph) * canvas.width;

		ctx.fillStyle = entry["color"];
		ctx.fillRect(left_x, i*height, right_x, height);

		ctx.strokeStyle = "black";
		ctx.strokeRect(left_x, i*height, right_x, height);

		ctx.fillStyle = "black";
		ctx.fillText(entry["manufacturer"] + " " + entry["series"] + " " + entry["size"], left_x + 10, (i + 0.5)*height);

		i++;
	});

});



