document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById("hero")
    const navbar = document.getElementById("navbar");
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const classList = ["fixed", "bg-background", "shadow-lg"];
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroBottom) {
          classList.forEach((c) => navbar.classList.add(c));
        } else {
          classList.forEach((c) => navbar.classList.remove(c));
        }
      });
})
