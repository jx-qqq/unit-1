//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and populations
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
		//apply the following two methods
    addColumns(cityPop);
    addEvents();
};

//function to add a new column that describes the level of city size based on population
function addColumns(cityPop){
    //for each element in cityPop, add the corresponding city size
    $('tr').each(function(i){
      //for the first line, add a header called 'City Size'
    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {
        //for the next lines, get the actual size of the city based on its population
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
        //append the city size to the table data
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//change the color everytime the mouse moves over
function addEvents(){

	$('table').mouseover(function(){
    //create a string that represent the rgb color
		var color = "rgb(";
    //add three numbers in the rgb model
		for (var i=0; i<3; i++){
      //generate three times a random integer between 0 and 255
			var random = Math.round(Math.random() * 255);
       //concatenate the string, change the datatype from number to string
			color += random.toString();
      //a final string looks like 'rgb(num1,num2,num3)'
			if (i<2){
				color += ",";
			} else {
				color += ")";
			};

		  $(this).css('color', color);
		};
    //whenever clicking the table, pop up the alert
	  function clickme(){

		  alert('Hey, you clicked me!');
  	};

	  $('table').on('click', clickme);
	 });
}
//call the initialize function when the document has loaded
$(document).ready(initialize);
