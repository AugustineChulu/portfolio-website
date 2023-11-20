/*
*THIS SCRIPT FILE HANDLES ALL EVENTS THAT OCCUR ON THE HOME PAGE
*/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE MENU EVENTS ON MOBILE DEVICES*/

let indexes = document.getElementById('indexes');

const indexesStyle = window.getComputedStyle(indexes,null);

const collapsibleHandle = document.getElementById('show_indexes');

// event listener for the collapsible handle
collapsibleHandle.addEventListener('click', changeVisibility);

//event handler for openning or closing the pages list
function changeVisibility()
{

	if (indexesStyle.getPropertyValue('display') != 'none'){

		indexes.setAttribute('style', 'display: none;');
		
		collapsibleHandle.setAttribute('style', 'background-color: initial; color: initial;');

	}
	else {

    	indexes.setAttribute('style', 'display: flex;');
    	
    	collapsibleHandle.setAttribute('style', 'background-color: var(--compliment); color: #ffffff;');

	}

}

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE PAGES SMOOTH SCROLL BEHAVIOR WHEN A MENU ITEM IS PRESSED*/

const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800, // Adjust the scrolling speed
	offset: 130, // Offset to control the scrolling endpoint
	updateURL: false, // Prevent the URL from updating
});

const links = document.querySelectorAll('a[href*="#"]');
    const offset = 200; // Adjust this to match your header height or desired offset

    function updateActiveLink() {
        const fromTop = window.scrollY + offset;

        links.forEach(link => {
            const section = document.querySelector(link.hash);
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {

				if(link.parentElement.classList.contains('index'))
                	link.parentElement.classList.add('active');
            } else {

				if(link.parentElement.classList.contains('index'))
                	link.parentElement.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

/**************************************************************************************************************/

/**************************************************************************************************************/
/*THIS SECTION HANDLES THE EFFECTS CAUSED BY THE STICKY BEHAVIOUR OF THE MENU*/

var stickyElement = document.getElementById('menu');
var name_title = document.getElementById('name_title');
var isSticky = false;

window.addEventListener('scroll', function() {
    var rect = stickyElement.getBoundingClientRect();
    var offset = rect.top;

    if (offset <= 0 && !isSticky) {
    // Element is now sticky
        stickyElement.classList.add('stickyStyle');
		name_title.classList.add('visible_name_title');
        isSticky = true;
    } else if (offset > 0 && isSticky) {
    // Element is no longer sticky
        stickyElement.classList.remove('stickyStyle');
		name_title.classList.remove('visible_name_title');
        isSticky = false;
    }
});