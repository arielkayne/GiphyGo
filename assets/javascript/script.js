// pseudocodin time

// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
//    * We chose animals for our theme, but you can make a list to your own liking.
var topics=["football","soccer","equestrian","lacrosse","tennis","track & field","jai ali","baseball","golf","bandy","hockey","sailing","noodling","skiing","rollerblading"];
// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.
// 	// $ a id for an area, loop an append statement

displayTopics();
function displayTopics(){
	$("#tabs").html("");
	for (i=0;i<topics.length;i++){
		$("#tabs").append("<button id='topicindex'"+i+" value='"+topics[i]+"''>"+topics[i]+"</button>");
		console.log("appended topics index: "+i);
	}



// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 
$("button").on("click", function() {
	// Grabbing and storing the data-animal property value from the button
	console.log(this);
	var topic = $(this).attr("value");
	console.log(topic);
	// clears previous query
	$("#output").html("");
	
	// Constructing a queryURL using the animal name
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

  	// Performing an AJAX request with the queryURL
  	$.ajax({
      	url: queryURL,
      	method: "GET"
    })

    // After data comes back from the request
    .done(function(response) {
	   	console.log(queryURL);
	    console.log(response);
	      // storing the data from the AJAX request in the results variable
	    var results = response.data;

	      // Looping through each result item
	    for (var i = 0; i < 10; i++) {

	        // Creating and storing a div tag
		    var topicDiv = $("<div>");

		        // Creating a paragraph tag with the result item's rating
		    var p = $("<p>").html("Rating: " + results[i].rating + "<br><br>");

		        // Creating and storing an image tag
		    var topicImage = $("<img>");


		        // Setting the src attribute of the image to a property pulled off the result item
		    topicImage.attr({
		    	"src": results[i].images.fixed_height_still.url,
		    	"alt": results[i].images.fixed_height.url,
		    	"id": "topic"+i,
		    	"class": "staticResults"
		    });

		        // Appending the paragraph and image tag to the topicDiv
		    topicDiv.append(topicImage);
		    topicDiv.append(p);

		        // Prependng the topicDiv to the HTML page in the "#output" div
		    $("#output").prepend(topicDiv);
      	}

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    	$(".staticResults").click(function(){
    		console.log(this);
    		var e=this.alt;
    		var f=this.id;
    		var g=this.src;
    		console.log(e);
    		console.log(f);
    		console.log(g);
    		this.src=e;
    		this.alt=g;
    	});
    });
});


// 5 (done above ...search var p
// 	  Under every gif, display its rating (PG, G, so on). 
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.
// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. 
// Then make a function call that takes each topic in the array remakes the buttons on the page.

    	$("#addItem").on("click", function(event) {

	        // event.preventDefault() can be used to prevent an event's default behavior.
	        // Here, it prevents the submit button from trying to submit a form when clicked
	        event.preventDefault();

	        // Here we grab the text from the input box
	        var newAdd = $("#addInput").val().trim();

	        if (newAdd!=="") {
		        // Here we add to array
		        topics.push(newAdd);
		        console.log(topics);

		        // here we clear the input
		        $("#addInput").val("");

		        //reload the tabs
		        displayTopics();
	    	}
		});
}

