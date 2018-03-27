;
import {comments} from './comments.js';

const landingPageModule = (function() {
	const commentersInfo = document.getElementById('selected-commenters-info'),
		  //CLASS NAME GIVEN TO INITIAL LIST ITEM FOR CAROUSEL
		  listItems = document.getElementsByClassName('slide-show-initial'),
		  body = document.getElementsByTagName('body'),
		  wrapper = document.getElementsByClassName('wrapper'),
		  mobileNavContainer = document.getElementsByClassName('mobile-nav');

	//COUNTER INDEX FOR KEEPING TRACK OF NEXT ELEMENT TO DISPLAY IN A CAROUSEL
	//PREVIOUS COUNTER TO KEEP TRACK OF LAST ELEMENT TO REMOVE STYLE IN A CAROUSEL
	let previousIndex, indexCounter = 0;

	let __convertTimeStamp = timestamp =>{
	  let a = new Date(timestamp);
	  let year = a.getFullYear();
	  let month = a.getMonth();
	  let date = a.getDate();
	  let newTimeStamp = month + '/' + date + '/' + year ;
	  return newTimeStamp;
	}

	let sortListByDate = comments => {
		let sortedComments = comments.sort( (a, b) => {
			return b.timestamp - a.timestamp;
		});
		
		return sortedComments
	}

	let displayCommentsList = sortedComments => {
		const commentSection = document.getElementById('comments-box');

		//LOOP THROUGH ELEMENTS IN SORTED ARRAY AND BUILD LIST OF COMMENTS FOR CAROUSEL
		for(var key in sortedComments){
		  let indCommentContainer = document.createElement("li");
		  indCommentContainer.innerHTML = sortedComments[key].comment;
		  indCommentContainer.className = 'slide-show-initial';
		  
		  //APPEND ACTIVE CLASS TO FIRST LIST ELEMENT ON LOAD
		  if(key === '0') {
		  	indCommentContainer.className += ' ' + 'slide-show-active';
		  }
		  commentSection.appendChild(indCommentContainer);
		  sortedComments[key].timestamp = __convertTimeStamp(sortedComments[key].timestamp);
		}

		//WE TAKE THE FIRST ITEM IN THE SORTED ARRAY SINCE WE KNOW THAT THE FIRST COMMENTER'S DATA SHOULD DISPLAY ON INITIAL LOAD
		commentersInfo.innerHTML = sortedComments[0].name + ", " + sortedComments[0].timestamp;
	}

	//FUNCTION USED FOR BUTTONS TO TOGGLE THROUGH EACH LIST ITEM, SETS AN ACTIVE CLASS OR REMOVES THE ACTIVE CLASS
	//ALSO UPDATES DISPLAYING COMMENTER'S INFO TO THE SCREEN
	let __toggleList = (element, commentsList) => {
		
		previousIndex = indexCounter;
		if(element === 'next-button') {

			indexCounter += 1;
			if(indexCounter > (listItems.length -1)) {
				indexCounter = 0;
			}
		}
		else {
			indexCounter -= 1;
			if(indexCounter < 0 ) {
				indexCounter += listItems.length;
			}
		}
		
		listItems[previousIndex].classList.remove('slide-show-active');
		listItems[indexCounter].classList.add('slide-show-active');

		//GET THE NEXT COMMENTER'S INFO AND DISPLAY IT
		commentersInfo.innerHTML = commentsList[indexCounter].name + ", " + commentsList[indexCounter].timestamp;
	}

	//FUNCTION TO BIND A CLICK EVENT GIVEN AN ELEMENT PASSED TO IT
	let bindEvent = (element, commentsList) => {
		let prevElement = document.getElementById(element);
		prevElement.addEventListener("click", () =>{__toggleList(element, commentsList)}, false);
	}

	//FUNCTION TO TOGGLE DISPLAYING AND HIDING MOBILE NAVIGATION
	let toggleMobileMenuDisplay = () => {
		wrapper[0].classList.toggle('mobile-content-width');
		mobileNavContainer[0].classList.toggle('mobile-nav-active');
	}

	return {displayCommentsList: displayCommentsList,
			bindEvent: bindEvent,
			toggleMobileMenuDisplay: toggleMobileMenuDisplay,
			sortListByDate: sortListByDate
	};
})();

let sortedComments = landingPageModule.sortListByDate(comments);

landingPageModule.displayCommentsList(sortedComments);

//BIND EVENTS TO ELEMENTS
landingPageModule.bindEvent('previous-button', sortedComments);
landingPageModule.bindEvent('next-button', sortedComments);

//BIND CLICK EVENT FOR MOBILE MENU ICON
document.getElementById('mobile-menu-icon').addEventListener("click", landingPageModule.toggleMobileMenuDisplay, false);

/*
Thrus 2/28 2p -7p - No dev work just going over instructions and assets, coming up with game plan
Friday 3/2 12:30 - 7p
Saturday 3/3 4p - 8:30p
Sunday 3/4 3p - 8p
Monday 3/5 2p - 8p
Tuesday 3/6 2px - 7p
Wednesday 3/7 4p - 8p
*/