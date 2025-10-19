// ===== Fade-in animation for Guidelines =====
const guidelineItems = document.querySelectorAll('.guidelines li');

function checkGuidelines() {
  const triggerBottom = window.innerHeight * 0.9;
  guidelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom){
      item.classList.add('visible');
    }
  });
}

// ===== Fade-in animation for Paths =====
const pathCards = document.querySelectorAll('.path-card');

function revealPaths() {
  const triggerBottom = window.innerHeight * 0.9;
  pathCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', () => {
  checkGuidelines();
  revealPaths();
});
window.addEventListener('load', () => {
  checkGuidelines();
  revealPaths();
});

// Select all path nodes
const pathNodes = document.querySelectorAll('.path-node');

pathNodes.forEach(node => {
  node.addEventListener('click', () => {
    // Remove active from all nodes
    pathNodes.forEach(n => n.classList.remove('active'));
    // Add active to the clicked one
    node.classList.add('active');
  });
});

// Toggle menu on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
