// // Import jQuery module (npm i jquery)
 import $ from 'jquery'
 window.jQuery = $
 window.$ = $


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS


	const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  };


  const tabLinks1 = document.querySelectorAll(".tabs1 a");
  const tabPanels1 = document.querySelectorAll(".tabs-panel1");
  
  for (let el of tabLinks1) {
    el.addEventListener("click", e => {
      e.preventDefault();
  
      document.querySelector(".tabs1 li.active").classList.remove("active");
      document.querySelector(".tabs-panel1.active").classList.remove("active");
  
      const parentListItem1 = el.parentElement;
      parentListItem1.classList.add("active");
      const index = [...parentListItem1.parentElement.children].indexOf(parentListItem1);
  
      const panel = [...tabPanels1].filter(el => el.getAttribute("data-index") == index);
      panel[0].classList.add("active");
      });
    };

    const tabLinks2 = document.querySelectorAll(".tabs2 a");
  const tabPanels2 = document.querySelectorAll(".tabs-panel2");
  
  for (let el of tabLinks2) {
    el.addEventListener("click", e => {
      e.preventDefault();
  
      document.querySelector(".tabs2 li.active").classList.remove("active");
      document.querySelector(".tabs-panel2.active").classList.remove("active");
  
      const parentListItem2 = el.parentElement;
      parentListItem2.classList.add("active");
      const index = [...parentListItem2.parentElement.children].indexOf(parentListItem2);
  
      const panel = [...tabPanels2].filter(el => el.getAttribute("data-index") == index);
      panel[0].classList.add("active");
      });
    }

    $(".slider_talant").slick({
      arrows:false,
      dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".partners_slider").slick({
arrows:true,
dots: false,
infinite: true,
speed: 300,
slidesToShow: 5,
slidesToScroll: 5,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 991,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
]
});

$(".projects_slider").slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

})


