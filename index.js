// ======================================
// creating a portfolio tabbed component
// ======================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add(".p-btn-active");

  // to find the number in data attr

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

//--------------------------------------------counter-------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Function to update counter
  function updateCounter(counterElement) {
    const target = parseInt(counterElement.getAttribute("data-target"));
    let count = 0;

    const interval = setInterval(() => {
      if (count < target) {
        count += Math.ceil(target / 200); // Increment step, adjust as needed
        if (count > target) count = target; // Ensure count does not exceed target
        counterElement.textContent = `${count}+`; // Update text with + sign
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust interval for speed
  }

  // Get all counter elements and start counting
  const counters = document.querySelectorAll(".counter-numbers");
  counters.forEach((counter) => updateCounter(counter));
});
