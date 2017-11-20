// pseudocodin time

// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
//    * We chose animals for our theme, but you can make a list to your own liking.
var topics=["American Airlines","United Airlines", "Delta Airlines", "Hawaiian Airlines", "Alaska Airlines", "Southwest Airlines", "JetBlue Airlines","Japan Airlines", "All Nippon Airways","Lufthansa", "Cathay Pacific", "Singapore Airlines", "Cebu Pacific"];
$("#header").html("<p>Here are the airlines from the topcs array:</p><br>"+topics);
// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.
// 	// $ a id for an area, loop an append statement

displayTopics();
function displayTopics(){
	for (i=0;i<topics.length;i++){
		$("#tabs").append("<button id=topic"+i+">"+topics[i]+"</button>");
		console.log("appended topics index: "+i);
	}
}


// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 


// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.


// 5. Under every gif, display its rating (PG, G, so on). 
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.


// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.