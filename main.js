
// Search Bar JS

let toggleSearch = () => {
    let searchBar = document.querySelector('.search-bar')
    let searchButton = document.querySelector('.nav-icon')
    let searchInput = document.querySelector('.search-input')

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('active-search')
    }); 

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInput.value = '';
            searchBar.classList.remove('active-search')
        }
    });
};

toggleSearch();

// Scroll Animation



// Swiper Image Carousels

var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// Homepage Animation

const container = document.querySelector('.image-animation');
const animation = container.querySelector('sl-animation');
const box = animation.querySelector('.live-event');

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
  
observer.observe(box);



