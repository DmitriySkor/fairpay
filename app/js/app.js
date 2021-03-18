// // Import jQuery module (npm i jquery)
 import $ from 'jquery'
 window.jQuery = $
 window.$ = $


 import ApexCharts from 'apexcharts'


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

    const tabLinks2 = document.querySelectorAll(".city_tabs a");
  const tabPanels2 = document.querySelectorAll(".tabs-panel2");

  for (let el of tabLinks2) {
    el.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector(".city_tabs li.active").classList.remove("active");
      document.querySelector(".tabs-panel2.active").classList.remove("active");

      const parentListItem2 = el.parentElement;
      parentListItem2.classList.add("active");
      const index = [...parentListItem2.parentElement.children].indexOf(parentListItem2);

      const panel = [...tabPanels2].filter(el => el.getAttribute("data-index") == index);
      panel[0].classList.add("active");
      });
    }

    $(".slider_talant").slick({
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

});

// Charts
$(document).ready(function () {
  const options = {
      series: [{
          name: 'Twitch',
          data: [100, 130, 150, 160, 180, 200, 220, 240, 250, 280, 310, 350, 370, 220, 240, 250, 280, 310, 350, 370]
      }, {
          name: 'Instagram',
          data: [100, 100, 100, 110, 130, 150, 150, 160, 180, 190, 200, 210, 230, 150, 160, 180, 190, 200, 210, 230]
      }, {
          name: 'Youtube',
          data: [100, 100, 100, 120, 140, 160, 170, 180, 190, 200, 220, 240, 260, 170, 180, 190, 200, 220, 240, 260]
      }],
      chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
              show: false
          },
          zoom: {
              enabled: false
          }
      },
      grid: {
          show: false,
      },
      dataLabels: {
          enabled: false
      },
      colors: ['#8330EC', '#FF0099', '#FF003D'],
      responsive: [{
          breakpoint: 480,
          options: {
              legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
              }
          }
      }],
      plotOptions: {
          bar: {
              borderRadius: 10,
              horizontal: false,
              columnWidth: '50%',
              dataLabels: {
                  position: false,
                  maxItems: false,
                  hideOverflowingLabels: false,
              }
          },
      },
      xaxis: {
          type: 'datetime',
          categories: [
              '01/01/2017 GMT', '04/01/2017 GMT', '07/01/2017 GMT', '10/01/2017 GMT',
              '01/01/2018 GMT', '04/01/2018 GMT', '07/01/2018 GMT', '10/01/2018 GMT',
              '01/01/2019 GMT', '04/01/2019 GMT', '07/01/2019 GMT', '10/01/2019 GMT',
              '01/01/2020 GMT', '04/01/2020 GMT', '07/01/2020 GMT', '10/01/2020 GMT',
          ],
          labels: {
              style: {
                  fontSize: '14px',
                  colors: '#FFFFFF'
              }
          },
          axisBorder: {
              color: 'rgba(255, 255, 255, 0.2)'
          },
          axisTicks: {
              show: false,
          },
      },
      yaxis: {
          axisBorder: {
              show: true,
              color: 'rgba(255, 255, 255, 0.2)'
          },
          labels: {
              style: {
                  fontSize: '14px',
                  colors: '#FFFFFF'
              }
          }
      },
      legend: {
          position: 'bottom',
          offsetY: 40
      },
      fill: {
          opacity: 1
      }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
})




