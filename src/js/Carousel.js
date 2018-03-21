class Carousel {

	constructor(carouselItems, carouselButtonContainer, timer, dataArray, infoContainer) {
		this.carouselItems = carouselItems;
		this.carouselButtonContainer = carouselButtonContainer;
	    this.timer = timer;
	    this.dataArray = dataArray;
	    this.previousIndex = "";
	    this.indexCounter = 0;
	    this.infoContainer = infoContainer;
	}
	
	//FUNCTION USED FOR BUTTONS TO TOGGLE THROUGH EACH LIST ITEM, SETS AN ACTIVE CLASS OR REMOVES THE ACTIVE CLASS
	//ALSO UPDATES DISPLAYING COMMENTER'S INFO TO THE SCREEN
	toggleList(element, dataArrayList){

		this.previousIndex = this.indexCounter;
		
		if(element === 'next-button') {

			this.indexCounter += 1;
			
			if(this.indexCounter > (this.carouselItems.length -1)) {
				this.indexCounter = 0;
			}
		}
		else {
			this.indexCounter -= 1;
			
			if(this.indexCounter < 0 ) {
				this.indexCounter += this.carouselItems.length;
			}
		}

		this.carouselItems[this.previousIndex].classList.remove('slide-show-active');
		this.carouselItems[this.indexCounter].classList.add('slide-show-active');

		//GET THE NEXT COMMENTER'S INFO AND DISPLAY IT
		if(this.infoContainer !== null) {
			this.infoContainer.innerHTML = this.dataArray[this.indexCounter].name + ", " + this.dataArray[this.indexCounter].timestamp;
		}
	}

	//FUNCTION TO BIND A CLICK EVENT TO A GIVEN ELEMENT
	bindEvent() {
		let actionElement = document.getElementById("carousel-buttons");
		for (let i = 0; i < actionElement.children.length; i++) {
		    let buttonName = actionElement.children[i].getAttribute('id');
		    let buttonElement = document.getElementById(buttonName);
		    buttonElement.addEventListener("click", () =>{this.toggleList(buttonName, this.dataArray)}, false);
		}
	}
}

const commentCarousel = new Carousel(document.getElementsByClassName('slide-show-initial'), "carousel-buttons", false, sortedComments, document.getElementById('selected-commenters-info'));
commentCarousel.bindEvent();

export {Carousel};