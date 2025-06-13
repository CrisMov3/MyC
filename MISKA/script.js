document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-button");
  const header = document.querySelector("header");
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    product.addEventListener("click", () => {
      const img = product.querySelector("img").src;
      const title = product.querySelector(".product-title").textContent;
      const desc = product.getAttribute("data-description");
      modalImg.src = img;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.style.display = "block";
      modal.classList.remove("hide");
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
      header.style.display = "none";
    });
  });

  function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("hide");
      header.style.display = "flex";
    }, 300);
  }

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const scrollBtn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 300);
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});