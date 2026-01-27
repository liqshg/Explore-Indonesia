// const track = document.querySelector('.track');
// const dots = document.querySelectorAll('.dot');
// const slidesCount = 5;
// const visible = 3;

// let index = 0;

// function update() {
//   const shift = (index * 100) / visible;
//   track.style.transform = `translateX(-${shift}%)`;

//   dots.forEach(d => d.classList.remove('active'));
//   dots[index].classList.add('active');
// }

// document.querySelector('.right').onclick = () => {
//   if (index + visible < slidesCount) {
//     index += visible;
//     update();
//   }
// };

// document.querySelector('.left').onclick = () => {
//   if (index - visible >= 0) {
//     index -= visible;
//     update();
//   }
// };

// dots.forEach((dot, i) => {
//   dot.onclick = () => {
//     index = i;
//     update();
//   };
// });


  // $('.multiple-items').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   dots: true,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  const scrollBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });