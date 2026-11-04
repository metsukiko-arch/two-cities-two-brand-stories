const progress = document.getElementById('progress');
const navLinks = [...document.querySelectorAll('.nav a')];
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();
const sections = ['intro','before','turning','after','conclusion'].map(id => document.getElementById(id));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {rootMargin:'-30% 0px -60% 0px'});
sections.forEach(section => observer.observe(section));
