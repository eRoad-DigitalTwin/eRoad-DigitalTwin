//SideNav
const sideNav = document.querySelector("nav.mobile");

function openSideNav() {
  sideNav.classList.toggle("open");
}

//Configuration de swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

//AOS
AOS.init({
  once: true,
});
