document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let currentIndex = 0;
  
    function goToIndex(index) {
      currentIndex = index;
      const offset = -100 * currentIndex;
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        goToIndex(currentIndex - 1);
      }
    });
  
    nextBtn.addEventListener('click', function() {
      if (currentIndex < carouselInner.children.length - 1) {
        goToIndex(currentIndex + 1);
      }
    });
  });
  