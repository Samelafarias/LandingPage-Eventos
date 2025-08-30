// modo escuro
const darkModeBtn = document.getElementById ("btn-dark-mode");

darkModeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

// carrossel
let index = 0;
  const slides = document.querySelectorAll(".carrossel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === n) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  showSlide(index);

// seção de cadastro
  const modal = document.getElementById("modal-cadastro");
  const btn = document.querySelector(".btn-cadastrar");
  const span = document.querySelector(".fechar");

  // Abrir modal
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Fechar modal ao clicar no X
  span.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  // Fechar modal ao clicar fora dela
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });