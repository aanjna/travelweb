// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: true,
    height: 500,
    transition: 500,
    interval: 6000
  });

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// Auto Complete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
      "Bali, Indonesia": null,
      "Cancun, Mexico": null,
      "Hawaii": null,
      "China": null,
      "Montreal": null,
      "Florida": null,
      "California": null,
      "Jamaica": null,
      "Europe": null,
      "The Bahamas": null,
    }
  });


$(document).ready(function(){
  $(".btn-small").click(function(){
    for (i = 1; i < 13; i++) {
      switch(i){
        case 1:
          var imageSrc = 'https://source.unsplash.com/1600x900/?beach=' + Math.random()* Math.floor(50);
          $("#pg_1").attr('src',imageSrc);
          break;
        case 2:
          var imageSrc = 'https://source.unsplash.com/1600x900/?travel=' + Math.random()* Math.floor(50);
          $("#pg_2").attr('src',imageSrc);
          break;
        case 3:
          var imageSrc = 'https://source.unsplash.com/1600x900/?nature=' + Math.random()* Math.floor(50);
          $("#pg_3").attr('src',imageSrc);
        case 4:
          var imageSrc = 'https://source.unsplash.com/1600x900/?beach, travel=' + Math.random()* Math.floor(50);
          $("#pg_4").attr('src',imageSrc);
          break;
        case 5:
          var imageSrc = 'https://source.unsplash.com/1600x900/?beaches=' + Math.random()* Math.floor(50);
          $("#pg_5").attr('src',imageSrc);
          break;
        case 6:
          var imageSrc = 'https://source.unsplash.com/1600x900/?traveling=' + Math.random()* Math.floor(50);
          $("#pg_6").attr('src',imageSrc);
          break;
        case 7:
          var imageSrc = 'https://source.unsplash.com/1600x900/?bridge=' + Math.random()* Math.floor(50);
          $("#pg_7").attr('src',imageSrc);
          break;
        case 8:
          var imageSrc = 'https://source.unsplash.com/1600x900/?flower=' + Math.random()* Math.floor(50);
          $("#pg_8").attr('src',imageSrc);
          break;
        case 9:
          var imageSrc = 'https://source.unsplash.com/1600x900/?water=' + Math.random()* Math.floor(50);
          $("#pg_9").attr('src',imageSrc);
          break;
        case 10:
          var imageSrc = 'https://source.unsplash.com/1600x900/?building=' + Math.random()* Math.floor(50);
          $("#pg_10").attr('src',imageSrc);
          break;
        case 11:
          var imageSrc = 'https://source.unsplash.com/1600x900/?trees=' + Math.random()* Math.floor(50);
          $("#pg_11").attr('src',imageSrc);
          break;
        case 12:
          var imageSrc = 'https://source.unsplash.com/1600x900/?cruise=' + Math.random()* Math.floor(50);
          $("#pg_12").attr('src',imageSrc);
          break;
        }
      }
});
});