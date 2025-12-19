const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('main section');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Handle SPA navigation & active state
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // Hide all sections
    sections.forEach(sec => sec.classList.add('hidden'));

    // Show selected section
    document.getElementById(target).classList.remove('hidden');

    // Set active state for nav buttons
    navButtons.forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-target="${target}"]`)
      .forEach(b => b.classList.add('active'));

    // Hide mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Toggle mobile menu on hamburger click
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // toggles instead of only showing
});

// Close mobile menu when clicking outside (overlay)
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu || e.target.classList.contains('bg-black/40')) {
    mobileMenu.classList.add('hidden');
  }
});


