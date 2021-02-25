const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
   setTimeout(() => {
      preloader.classList.add('move-down');
      // preloader.classList.add('fade-out');
      setTimeout(() => {
         preloader.remove();
      }, 1000);
   }, 100);
});
