export const intersect = function () {
  let hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        // entry.target.classList.remove('show');
      }
    });
  });

  hiddenElements.forEach((el: any) => observer.observe(el));
};
