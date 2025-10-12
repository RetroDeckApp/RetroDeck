// Smooth scroll for on-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Mobile menu toggle
const btn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.nav-menu');
btn?.addEventListener('click', ()=> menu.classList.toggle('active'));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
