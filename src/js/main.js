
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
	  var a = new Date(timestamp);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = a.getMonth();
	  var date = a.getDate();
	  var time = month + '/' + date + '/' + year ;
	  return time;
	}

	let sortedComments = comments.sort(function(a, b) {
		return b.timestamp - a.timestamp;
	}); 

	const commentSection = document.getElementById('comments');
	const commentersInfo = document.getElementById('selected-commenters-info');

	commentersInfo.innerHTML = sortedComments[0].name;

	let allComments = sortedComments.map(function(result) {
		let indCommentContainer = document.createElement("li");
		indCommentContainer.innerHTML = result.comment;
		commentSection.appendChild(indCommentContainer);
		result.timestamp = convertTimeStamp(result.timestamp);
		/*return (
				indCommentContainer
			);*/
	});

	commentersInfo.innerHTML = sortedComments[0].name + " " + sortedComments[0].timestamp;



})();

/*

use css animations
use class active on first li
use javascript to toggle between li and set active to next li

Friday 3/2 12:30 - 7p
Thrus 2/28 2p -7p
*/