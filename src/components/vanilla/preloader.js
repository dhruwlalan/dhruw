const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
   setTimeout(() => {
      preloader.classList.remove('spinner');
      preloader.classList.add('fade-out');
      setTimeout(() => {
         preloader.remove();
      }, 1000);
   }, 500);
});
