/*
*THIS SCRIPT FILE HANDLES ALL EVENTS THAT OCCUR ON THE HOME PAGE
*/

/* VARIABLE DECLERATION */

const loadScreen = document.getElementById('loadingScreen');

const orangeLetters = document.querySelectorAll('.orangeLetter');
const blueLetters = document.querySelectorAll('.blueLetter');
const animationContainer = document.getElementById('animationContainer');
const progressBar = document.getElementById('progressBar');
const menu = document.getElementById('menu');
const contentContainer = document.getElementById('contentContainer');
const pageHeader = document.getElementById('pageHeader');
const menuLinks = document.getElementsByClassName('sectionLink');

const animateLoad = (duration) => {

	progressBar.classList.add('stretch');

	blueLetters.forEach(letter => {
		letter.style.animation = `clockwiseStart ${duration}ms infinite`;
	})

	orangeLetters.forEach(letter => {

		if(letter.id != 'T'){
			letter.style.animation = `counterClockwiseStart ${duration}ms infinite`;
		}
		
	})

	setTimeout(() => {
		
		blueLetters.forEach(letter => {
			letter.style.animation = `clockwiseLoop ${duration / 2}ms linear infinite`;
		})
	
		orangeLetters.forEach(letter => {
	
			if(letter.id != 'T'){
				letter.style.animation = `counterClockwiseLoop ${duration / 2}ms linear infinite`;
			}
			
		})

	}, duration);

	setTimeout(() => {
		
		blueLetters.forEach(letter => {
			letter.style.animation = `clockwiseEnd ${duration}ms linear 1`;
		})
	
		orangeLetters.forEach(letter => {
	
			if(letter.id != 'T'){
				letter.style.animation = `counterClockwiseEnd ${duration}ms linear 1`;
			}
			
		})

	}, duration * 2);

	setTimeout(() => {

		contentContainer.style.display = 'grid';
		loadScreen.classList.add('fade')

	}, duration * 3.3);

	setTimeout(() => {
		loadScreen.style.display = `none`;

	}, duration * 3.6);

}

document.addEventListener('load', animateLoad(2000));

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE MENU EVENTS ON MOBILE DEVICES*/
var sectionsBtn = document.getElementById('sectionsBtn');
var menuTray = document.getElementById('menuTray');

sectionsBtn.addEventListener('click', (event) =>{

	sectionsBtn.classList.toggle('activateSectionBtn');
    menuTray.classList.toggle('showMenuTray');
})

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE PAGES SMOOTH SCROLL BEHAVIOR WHEN A MENU ITEM IS PRESSED*/

const sectionLinks = document.querySelectorAll('a[href^="#"]');

sectionLinks.forEach(trigger => {

	trigger.onclick = (e) => {
		
		e.preventDefault();
		let hash = e.currentTarget.getAttribute('href');
		let target = document.querySelector(hash);
		let headerOffset = 70;
		let elementPosition = target.offsetTop;
		let offsetPosition = elementPosition - headerOffset;

		contentContainer.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});

		if(hash === '#pageFooter' && !e.currentTarget.classList.contains('sectionLink')){

			document.querySelector('#contactInfo').classList.add('pulse');

			setTimeout(() => {
				document.querySelector('#contactInfo').classList.remove('pulse');
			  }, "3000");
			
		}

	};

});

const sections = document.querySelectorAll('.smoothscroll');
const menuTrayLinks = document.querySelectorAll('.sectionLink');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

		// Check if the div is intersecting with the viewport
		if (entry.isIntersecting) { 
			// Log which div is intersecting
			// console.log(`${entry.target.id} is intersecting.`);
			if(entry.target.id != 'pageFooter'){
				entry.target.classList.add('floatingSection');
			}

			document.querySelector("a[href='#" + entry.target.id + "']").classList.add('activeSectionLink');
		}

		if(!entry.isIntersecting){
			entry.target.classList.remove('floatingSection');

			document.querySelector("a[href='#" + entry.target.id + "']").classList.remove('activeSectionLink');
		}

    });
  }, { 
	root: null, // observe relative to the document's viewport
	rootMargin: '-50% 0px -60% 0px', // a negative top margin equal to the height of the target div
	threshold: 0
});

  // Start observing each target div
  sections.forEach((div, index) => {
    // Set a custom data attribute to store the index
    div.dataset.index = index;
    
    // Observe the div
    observer.observe(div);
  });

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE EFFECTS CAUSED BY THE STICKY BEHAVIOUR OF THE MENU*/

contentContainer.addEventListener('scroll', () => {
	
	var rect = pageHeader.getBoundingClientRect();
    var offset = rect.bottom;
	// console.log(offset)
    if (offset < 0) {
    // Element is now sticky
		menu.classList.add('showMenu');
    } else{
    // Element is no longer sticky
		menu.classList.remove('showMenu');
    }
});