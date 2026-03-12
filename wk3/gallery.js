const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.coolimage.jpg, .coolimage.png, .coolimage.jpeg');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src; 
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.style.display = 'none';
  }
});
