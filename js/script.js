'use scrict';

// Introduction modal
const introModal = document.querySelector('.intro-close-btn');
const siteIntro = document.querySelector('.site-intro');
const siteIntoBtn = document.querySelector('.site-intro-container-close');

const closeIntroModal = function(){
  siteIntro.style.opacity = '0';
  siteIntro.style.visibility = 'hidden';
  documentBody.style.overflow = 'auto';
};

introModal.addEventListener('click', closeIntroModal);
siteIntoBtn.addEventListener('click', closeIntroModal);

(function(){
  setTimeout(function(){
    siteIntro.style.opacity = '1';
    siteIntro.style.visibility = 'visible';
    documentBody.style.overflow = 'hidden';
  }, 3000);
})();



// Self Update 
const year = new Date().getFullYear();
document.querySelectorAll('.self-update').forEach(date => date.textContent = year);



// Animation on scroll function
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    sections.forEach(sec => {
        const secDistance = sec.offsetTop;
        if (scrollDistance >= (secDistance + 270)) {
            sec.classList.add('show-animation');
        }
    });
});



// Drop down nav
let prevScrollPos = window.scrollY; // Remove the parentheses
window.addEventListener('scroll', function(){
    // Current Scroll Position
    const currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos & currentScrollPos > 800){
        // User has scrolled up
        document.querySelector('.drop-nav__navi').style.transform = 'translateY(0)';
    } else{
        // User has scrolled down
        document.querySelector('.drop-nav__navi').style.transform = 'translateY(-103%)'
    }
    prevScrollPos = currentScrollPos; // Update prevScrollPos for the next scroll event
});



// FAQ Section Accordian
const faqItems = document.querySelectorAll('.faqs__section-content-accordian-item');

faqItems.forEach(item => {
  const visiblePart = item.querySelector('.faqs__section-content-accordian-item-visible');
  const hiddenPart = item.querySelector('.hidden');
  const faqIcon = item.querySelector('.faqs-span-icon');

  visiblePart.addEventListener('click', () => {
    // Check if the current item is already expanded
    const isExpanded = hiddenPart.classList.contains('show-info');
    
    // Close all other accordion items
    faqItems.forEach(otherItem => {
      const otherHiddenPart = otherItem.querySelector('.hidden');
      const otherVisiblePart = otherItem.querySelector('.faqs__section-content-accordian-item-visible');
      const otherFaqIcon = otherItem.querySelector('.faqs-span-icon');
      
      if (otherHiddenPart !== hiddenPart && otherHiddenPart.classList.contains('show-info')) {
        otherHiddenPart.style.maxHeight = '0';
        otherHiddenPart.classList.remove('show-info');
        otherVisiblePart.classList.remove('info-shown');
        otherFaqIcon.textContent = '+';
      }
    });

    // Toggle the current accordion item
    if (isExpanded) {
      hiddenPart.style.maxHeight = '0';
      hiddenPart.classList.remove('show-info');
      visiblePart.classList.remove('info-shown');
      faqIcon.textContent = '+';
    } else {
      hiddenPart.style.maxHeight = hiddenPart.scrollHeight + 'px';
      hiddenPart.classList.add('show-info');
      visiblePart.classList.add('info-shown');
      faqIcon.textContent = '–';
    }
  });
});



// Video Modal
const videoModal = document.querySelector('.video-modal');
const overlay = document.querySelector('.overlay');
const closeBTN = document.querySelector('.video-close-btn-actual');
const playbutton = document.querySelector('.video__section-playbutton');
const video = document.querySelector('.actual-video');

playbutton.addEventListener('click', function() {
  setTimeout(() => videoModal.classList.remove('close-video'), 50);
});

const closeVideoModal = () => {
  videoModal.classList.add('close-video');
  video.pause();
  video.currentTime = 0; // Reset video to start
}

closeBTN.addEventListener('click', closeVideoModal);
overlay.addEventListener('click', closeVideoModal);

video.addEventListener('click', (event) => event.stopPropagation());

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !videoModal.classList.contains('close-video')) {
    closeVideoModal();
  }
});



// Image Slider
function plusSlides(element, n) {
  const sliderContainer = element.closest('.slideshow-container');
  let slideIndex = parseInt(sliderContainer.dataset.slideIndex) || 1;
  showSlides(sliderContainer, slideIndex + n);
}

function showSlides(sliderContainer, n) {
  const slides = sliderContainer.querySelectorAll('.mySlides');
  let slideIndex = n;

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex - 1].style.display = "block";

  sliderContainer.dataset.slideIndex = slideIndex;
}

// Initialize sliders
document.querySelectorAll('.slideshow-container').forEach(sliderContainer => {
  showSlides(sliderContainer, 1);
});



// All Nearby Locations Modal
const openLocations = document.querySelector('.open-locations-modal');
const closeLocations = document.querySelector('.locations__section');
const closeBTNLocations = document.querySelector('.locations-close-btn');
const documentBody = document.querySelector('body');

const toggleScrollbar = (hide) => {
  const scrollbarWidth = hide ? '0' : '7px';
  const style = document.createElement('style');
  style.textContent = `::-webkit-scrollbar { width: ${scrollbarWidth}; }`;
  document.head.appendChild(style);
};

const openLocationsModal = () => {
  if (window.innerWidth < 1000) {
    toggleScrollbar(true);
  }
  closeLocations.classList.remove('remove-location-modal');
  documentBody.style.overflowY = 'hidden';
};

const closeLocationsModal = () => {
  if (window.innerWidth < 1000) {
    toggleScrollbar(false);
  }
  closeLocations.classList.add('remove-location-modal');
  documentBody.style.overflowY = 'auto';
};

openLocations.addEventListener('click', openLocationsModal);
closeBTNLocations.addEventListener('click', closeLocationsModal);



// Opening and taking to Kauri section
const openKauri = document.querySelector('.kauri-open');

openKauri.addEventListener('click', () => {
  // Check if the viewport width is below 1000px
  if (window.innerWidth < 1000) {
    // Add a style rule to hide the scrollbar
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 0; }`;
    document.head.appendChild(style);
  }

  // Open the modal and scroll to Kauri after a delay
  openLocationsModal();
  setTimeout(() => {
    const kauriElement = document.getElementById('kauri-open');
    if (kauriElement) {
      kauriElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, 280); // Adjust the delay time (in milliseconds) as needed
});



// Opening and taking to Nautilus section
const openNautilus = document.querySelector('.nautilus-open');

openNautilus.addEventListener('click', () => {
  // Check if the viewport width is below 1000px
  if (window.innerWidth < 1000) {
    // Add a style rule to hide the scrollbar
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 0; }`;
    document.head.appendChild(style);
  }

  // Open the modal after a slight delay
  openLocationsModal();

  setTimeout(() => {
    // Scroll to Nautilus after opening the modal
    const nautilusElement = document.getElementById('nautilus-open');
    if (nautilusElement) {
      nautilusElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, 280); // Adjust the delay time (in milliseconds) as needed
});

// Keydown For all locations modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !closeLocations.classList.contains('remove-location-modal')) {
    closeLocationsModal();
  }
});



// OPENING VILLA A ///////////////////////////////////////////////////
// OPENING VILLA A FROM CATALOG
const villaCloseBTN = document.querySelector('.villa-desc-close-btn');
const villaDescSection = document.querySelector('.m-villa-a__section');

villaCloseBTN.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    document.body.style.overflowY = 'auto';
  }
  villaDescSection.classList.add('remove-villa');
  closeCatalogModal();
});

const cardMVillaA = document.querySelector('.card-m-vill-a');

cardMVillaA.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    document.body.style.overflowY = 'hidden';
  }
  villaDescSection.classList.remove('remove-villa');
  openCatalogModal();
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !villaDescSection.classList.contains('remove-villa')) {
    villaDescSection.classList.add('remove-villa');
  }
});



// OPENING AND CLOSING FOR VILLA B MODAL
const openVillaB = document.querySelector('.card-m-vill-b');
const VillaBSection = document.querySelector('.m-villa-b__section');
const closeVillaB = document.querySelector('.villa-b-desc-close-btn');

openVillaB.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 0; }`;
    document.head.appendChild(style);
    document.body.style.overflowY = 'hidden';
  }
  VillaBSection.classList.remove('remove-villa-b');
});

closeVillaB.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 7px; }`;
    document.head.appendChild(style);
    document.body.style.overflowY = 'auto';
  }
  VillaBSection.classList.add('remove-villa-b');
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !VillaBSection.classList.contains('remove-villa-b')) {
    VillaBSection.classList.add('remove-villa-b');
    document.body.style.overflowY = 'auto';
  }
});



// OPENING AND CLOSING FOR VILLA C MODAL
const openVillaC = document.querySelector('.card-m-vill-c');
const villaCSection = document.querySelector('.m-villa-c__section');
const closeVillaC = document.querySelector('.villa-c-desc-close-btn');

openVillaC.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 0; }`;
    document.head.appendChild(style);
    document.body.style.overflowY = 'hidden';
  }
  villaCSection.classList.remove('remove-villa-c');
});

closeVillaC.addEventListener('click', function() {
  if (window.innerWidth < 1000) {
    const style = document.createElement('style');
    style.textContent = `::-webkit-scrollbar { width: 7px; }`;
    document.head.appendChild(style);
    document.body.style.overflowY = 'auto';
  }
  villaCSection.classList.add('remove-villa-c');
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !villaCSection.classList.contains('remove-villa-c')) {
    villaCSection.classList.add('remove-villa-c');
    document.body.style.overflowY = 'auto';
  }
});



// OPENING AND CLOSING MOBILE MENU
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBTN = document.querySelector('.drop-nav__navi-menu-icon');
const heroMenuBTN = document.querySelector('.nav__menu-icon');
const closeMenuBTN = document.querySelector('.mobile-menu__container-close-btn');

mobileMenu.style.transform = 'translateX(-102%)';

const openMobileMenu = () => {
  mobileMenu.style.transform = 'translateX(0)';
  mobileMenu.style.transition = 'all .35s ease-in-out';
};

const closeMobileMenu = () => {
  mobileMenu.style.transition = 'all .35s ease-in-out';
  mobileMenu.style.transform = 'translateX(-102%)';
};

mobileMenuBTN.addEventListener('click', openMobileMenu);
heroMenuBTN.addEventListener('click', openMobileMenu);
closeMenuBTN.addEventListener('click', closeMobileMenu);



// MOBILE MENU LINKS
const mobileMenuOurVillas = document.getElementById('menu-our-villas');
const mobileMenuOurSpa = document.getElementById('menu-our-spa');
const mobileMenuOurMeals = document.getElementById('menu-our-meals');
const mobileMenuOurTestimonials = document.getElementById('menu-our-testimonials');
const mobileMenuOurFAQS = document.getElementById('menu-our-faqs');
const mobileMenuContactUs = document.getElementById('menu-contact-us');

mobileMenuOurVillas.addEventListener('click', closeMobileMenu);
mobileMenuOurSpa.addEventListener('click', closeMobileMenu);
mobileMenuOurMeals.addEventListener('click', closeMobileMenu);
mobileMenuOurTestimonials.addEventListener('click', closeMobileMenu)
mobileMenuOurFAQS.addEventListener('click', closeMobileMenu);
mobileMenuContactUs.addEventListener('click', closeMobileMenu);



// Preventing from from submitting and giving confirmation message
const formSubmit = document.querySelector('.form-submit');
const formConfirmation = document.querySelector('.form-submit-confirmation');
const formNameInput = document.querySelector('.form-name');
const formNumberInput = document.querySelector('.form-number');
const formEmailInput = document.querySelector('.form-email');
const formSubjectInput = document.querySelector('.form-subject');
const formMessageInput = document.querySelector('.form-message');

formSubmit.addEventListener('click', function(e){
  if(formNameInput.value === '' || formSubjectInput.value === ''){
    e;
  } else{
    e.preventDefault();

    formConfirmation.style.opacity = '1';
    formConfirmation.style.visibility = 'visible';

    // Apply transition delay separately
    formConfirmation.style.transitionDelay = '.5s';

    formNameInput.value = formNumberInput.value = formEmailInput.value = formSubjectInput.value = formMessageInput.value = '';

    setTimeout(function(){
      formConfirmation.style.opacity = '0';
      formConfirmation.style.visibility = 'hidden';
    }, 6500)
  }
});





