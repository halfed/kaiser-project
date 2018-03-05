
(function() {
	const comments = [
	  {"name":"Garfield","comment":"The most active thing about me is my imagination.","timestamp":69379200000},
	  {"name":"Daffy Duck","comment":"Maybe if I stare at this paper long enough people will think I can read.","timestamp":1007683200000},
	  {"name":"Bugs Bunny","comment":"Eh, what's up doc? Got any carrots?","timestamp":583113600000},
	  {"name":"Olaf","comment":"Some people are worth melting for.","timestamp":172281600000},
	  {"name":"Snow White","comment":"You're never too old to be young","timestamp":882489600000},
	  {"name":"Wreck-It Ralph","comment":"There's no one I'd rather be than me.","timestamp":678326400000},
	  {"name":"Mickey Mouse","comment":"To laugh at yourself is to love yourself.","timestamp":1215993600000}
	];

	function convertTimeStamp(timestamp){
	  let a = new Date(timestamp);
	  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  let year = a.getFullYear();
	  let month = a.getMonth();
	  let date = a.getDate();
	  let
	   time = month + '/' + date + '/' + year ;
	  return time;
	}

	let sortedComments = comments.sort(function(a, b) {
		return b.timestamp - a.timestamp;
	}); 

	const commentSection = document.getElementById('comments-box');
	const commentersInfo = document.getElementById('selected-commenters-info');

	commentersInfo.innerHTML = sortedComments[0].name;

	/*let allComments = sortedComments.map(function(result) {
		let indCommentContainer = document.createElement("li");
		indCommentContainer.innerHTML = result.comment;
		commentSection.appendChild(indCommentContainer);
		result.timestamp = convertTimeStamp(result.timestamp);
		/*return (
				indCommentContainer
			);*/
	//});

	console.log("all comments: " + Object.keys(sortedComments)[0]);

	

	for(var key in sortedComments){
	  console.log("key: " + key + ' - ' + sortedComments[key].comment);
	  let indCommentContainer = document.createElement("li");
	  indCommentContainer.innerHTML = sortedComments[key].comment;
	  
	  if(key === '0') {
	  	indCommentContainer.className = 'active';
	  	console.log("first key: " + key + ' - ' + sortedComments[key].comment);
	  	console.log(typeof(key));
	  	console.log("value: " + key.comment);
	  }
	  commentSection.appendChild(indCommentContainer);
	  sortedComments[key].timestamp = convertTimeStamp(sortedComments[key].timestamp);
	}

	commentersInfo.innerHTML = sortedComments[0].name + ", " + sortedComments[0].timestamp;

	let toggleList = () => {
		alert("it works");
	}

	let bindEvent = element => {
		let prevElement = document.getElementById(element);
		prevElement.addEventListener("click", toggleList, false);
	}

	bindEvent('previous-button');
	bindEvent('next-button');
	//bindEvent('');
	//bindEvent('');

})();

/*

use css animations
use class active on first li
use javascript to toggle between li and set active to next li
bind elements to events
build list of comments
toggle between lists
get array of all lis 
on click remove existing class and append it to next li and add inline style of display
css to transistion 
display commenter's info when their comment displays

Thrus 2/28 2p -7p
Friday 3/2 12:30 - 7p
Saturday 3/3 4p - 8:30p

*/