/*
*THIS SCRIPT FILE HANDLES ALL EVENTS THAT OCCUR ON THE HOME PAGE
*/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE MENU EVENTS ON MOBILE DEVICES*/
var pagesBtn = document.getElementById('pagesBtn');
var bottomBar = document.getElementById('bottomBar');

pagesBtn.addEventListener('click', (event) =>{
    
    event.target.classList.toggle('activePagesBtn');
    bottomBar.classList.toggle('visibleBottomBar');
})

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE PAGES SMOOTH SCROLL BEHAVIOR WHEN A MENU ITEM IS PRESSED*/

const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000, // Adjust the scrolling speed
	offset: 180, // Offset to control the scrolling endpoint
	updateURL: false, // Prevent the URL from updating
});

// const links = document.querySelectorAll('a[href*="#"]');
//     const sectionOffset = -500; // Adjust this to match your header height or desired offset

//     function updateActiveLink() {
//         const fromTop = window.scrollY + sectionOffset;

//         links.forEach(link => {
//             const section = document.querySelector(link.hash);
//             if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {

//                 if(!link.classList.contains('footer'))
//                     link.classList.add('focusedSection');

//             } else {

//                 link.classList.remove('focusedSection');
//             }
//         });
//     }

//     window.addEventListener('scroll', updateActiveLink);

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE EFFECTS CAUSED BY THE STICKY BEHAVIOUR OF THE MENU*/

var stickyElement = document.getElementById('menu');
var pageHeader = document.getElementById('pageHeader');

window.addEventListener('scroll', function() {
    
    var rect = pageHeader.getBoundingClientRect();
    var offset = rect.bottom;

    if (offset <= 0) {
    // Element is now sticky
        stickyElement.classList.add('visible');
    } else if (offset > 0) {
    // Element is no longer sticky
        stickyElement.classList.remove('visible');
    }

});