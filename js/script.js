const menus = document.querySelectorAll(".menu-item");

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menus.forEach((m) => {
      if (m !== menu) m.classList.remove("active");
    });
    menu.classList.toggle("active");
  });
});
