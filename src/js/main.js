
(function() {
	/*WE WILL MIMIC THIS AS DATA COMING IN AS AN AJAX REQUEST AND IMPORTED AS A MODULE OR SERVICE FROM ANOTHER SOURCE*/
	const comments = [
	  {"name":"Garfield","comment":"The most active thing about me is my imagination.","timestamp":69379200000},
	  {"name":"Daffy Duck","comment":"Maybe if I stare at this paper long enough people will think I can read.","timestamp":1007683200000},
	  {"name":"Bugs Bunny","comment":"Eh, what's up doc? Got any carrots?","timestamp":583113600000},
	  {"name":"Olaf","comment":"Some people are worth melting for.","timestamp":172281600000},
	  {"name":"Snow White","comment":"You're never too old to be young","timestamp":882489600000},
	  {"name":"Wreck-It Ralph","comment":"There's no one I'd rather be than me.","timestamp":678326400000},
	  {"name":"Mickey Mouse","comment":"To laugh at yourself is to love yourself.","timestamp":1215993600000}
	];

	const commentersInfo = document.getElementById('selected-commenters-info');
	const mainContent = document.getElementsByClassName('main-content');
	const mobileNavContainer = document.getElementsByClassName('mobile-nav');
	const listItems = document.getElementsByClassName('slide-show-initial');
	const mobileMenu = document.getElementById('mobile-menu-icon');

	//COUNTER INDEX FOR KEEPING TRACK OF NEXT ELEMENT TO DISPLAY IN A CAROUSEL
	let indexCounter = 0;
	//PREVIOUS COUNTER TO KEEP TRACK OF LAST ELEMENT TO REMOVE STYLE IN A CAROUSEL
	let previousIndex;

	//METHOD TO CONVERT A TIME STAMP TO A DISPLAYABLE DATE
	let convertTimeStamp = timestamp =>{
	  let a = new Date(timestamp);
	  let year = a.getFullYear();
	  let month = a.getMonth();
	  let date = a.getDate();
	  let newTimeStamp = month + '/' + date + '/' + year ;
	  return newTimeStamp;
	}

	//FUNCTION TO BIND A CLICK EVENT GIVEN AN ELEMENT PASSED TO IT
	const bindEvent = element => {
		let prevElement = document.getElementById(element);
		prevElement.addEventListener("click", () =>{toggleList(element)}, false);
	}

	//FUNCTION USED FOR BUTTONS TO TOGGLE THROUGH EACH LIST ITEM, SETS AN ACTIVE CLASS OR REMOVES THE ACTIVE CLASS
	//ALSO UPDATES DISPLAYING COMMENTER'S INFO TO THE SCREEN
	const toggleList = element => {
		
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
		commentersInfo.innerHTML = sortedComments[indexCounter].name + ", " + sortedComments[indexCounter].timestamp;
	}

	//FUNCTION TO TOGGLE DISPLAYING AND HIDING MOBILE NAVIGATION
	const toggleMobileMenuDisplay = () => {
		mainContent[0].classList.toggle('main-content-width');
		mobileNavContainer[0].classList.toggle('mobile-nav-active');
	}

	//ON INITIAL LOAD, GET COMMENTS FROM JSON OBJECT AND BUILD LIST ITEMS AND DISPLAY FIRST COMMENTER'S INFO TO SCREEN 
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
		  sortedComments[key].timestamp = convertTimeStamp(sortedComments[key].timestamp);
		}

		//WE TAKE THE FIRST ITEM IN THE SORTED ARRAY SINCE WE KNOW THAT THE FIRST COMMENTER'S DATA SHOULD DISPLAY ON INITIAL LOAD
		commentersInfo.innerHTML = sortedComments[0].name + ", " + sortedComments[0].timestamp;
	}

	//WE CALL SORT ON THE COMMENTS TO RETURN A NEW LIST SORTED BY NEWEST COMMENT ACCORDING TO TIMESTAMP
	let sortedComments = comments.sort( (a, b) => {
		return b.timestamp - a.timestamp;
	});

	displayCommentsList(sortedComments);

	//BIND EVENTS TO ELEMENTS
	bindEvent('previous-button');
	bindEvent('next-button');
	
	//BIND CLICK EVENT FOR MOBILE MENU ICON
	mobileMenu.addEventListener("click", toggleMobileMenuDisplay, false);
})();

/*
Thrus 2/28 2p -7p - No dev work just going over instructions and assets, coming up with game plan
Friday 3/2 12:30 - 7p
Saturday 3/3 4p - 8:30p
Sunday 3/4 3p - 8p
Monday 3/5 2p - 8p
Tuesday 3/6 2px - 7p
Wednesday 3/7 4p - 8p
*/