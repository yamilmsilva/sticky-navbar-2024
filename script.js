// const nav = document.querySelector('.navbar');
// const navHeight = nav.offsetHeight;

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;

//   if (scrollY > navHeight) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });


// document.addEventListener('scroll', () => {
//     const header = document.querySelector('header');

//     if(window.scrollY > 0) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }

// })


window.onscroll = function () {
    const header = document.getElementById("header");
  
    if (window.pageYOffset > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  