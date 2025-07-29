
  const sliderList = document.getElementById('sliderList');
  const totalSlides = document.querySelectorAll('.item').length;
  let index = 0;

  function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    sliderList.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
   