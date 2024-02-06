/*
*THIS SCRIPT FILE HANDLES ALL EVENTS THAT OCCUR ON THE HOME PAGE
*/
/* VARIABLE DECLERATION */
const menu = document.getElementById('menu');
const contentContainer = document.getElementById('contentContainer')

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE MENU EVENTS ON MOBILE DEVICES*/
var sectionsBtn = document.getElementById('sectionsBtn');
var menuTray = document.getElementById('menuTray');
var menuLogo = document.getElementById('menuLogo');

sectionsBtn.addEventListener('click', (event) =>{

	sectionsBtn.classList.toggle('activateSectionBtn')
    menuTray.classList.toggle('showMenuTray');
	menuLogo.classList.toggle('hideMenuLogo');
})

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE PAGES SMOOTH SCROLL BEHAVIOR WHEN A MENU ITEM IS PRESSED*/

const sectionLinks = document.querySelectorAll('a[href^="#"]');

sectionLinks.forEach(trigger => {

	trigger.onclick = (e) => {
		
		e.preventDefault();
		let hash = e.target.getAttribute('href');
		let target = document.querySelector(hash);
		let headerOffset = 70;
		let elementPosition = target.offsetTop;
		let offsetPosition = elementPosition - headerOffset;

		contentContainer.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
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
			entry.target.classList.add('floatingSection');

			document.querySelector("a[href='#" + entry.target.id + "']").classList.add('activeSectionLink');
		}

		if(!entry.isIntersecting){
			entry.target.classList.remove('floatingSection');

			document.querySelector("a[href='#" + entry.target.id + "']").classList.remove('activeSectionLink');
		}

    });
  }, { 
	root: null, // observe relative to the document's viewport
	rootMargin: '-30px 0px -70% 0px', // a negative top margin equal to the height of the target div
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
	
	var rect = menu.getBoundingClientRect();
    var offset = rect.top;

    if (offset <= 5) {
    // Element is now sticky
		menu.classList.add('showMenu');
    } else{
    // Element is no longer sticky
		menu.classList.remove('showMenu');
    }
});