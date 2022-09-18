//making navbar functional
const navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

//making search button functional
const searchForm = document.querySelector(".search-form");

document.querySelector("#search-button").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

{
  // swiper js for image slider

  const swiper = new Swiper(".home-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

{
  // swiper js for product slider

  const swiper = new Swiper(".product-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}

{
  // swiper js for reviews slider

  const swiper = new Swiper(".review-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
}

{
  // swiper js for blogs slider

  const swiper = new Swiper(".blogs-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}

{
  // swiper js for clients slider

  const swiper = new Swiper(".clients-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}
