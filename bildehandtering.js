
function changeImageFunction() {
  let current = document.querySelector(".duplicate-container.show");
  let all = Array.from(current.parentElement.children).filter(x => x.classList.contains("duplicate-container"));
  current.classList.remove("show");
  all[all.indexOf(current) + 1 == all.length ? 0 : all.indexOf(current) + 1].classList.add("show");
}

var interval;
function startInterval() {
  console.log("starting interval");
  interval = setInterval(changeImageFunction.bind(this), 10000);
  console.log("interval", interval)
}

function staggerImageInterval() {
  interval = clearInterval(interval);
  setTimeout(startInterval, 20000);
}

startInterval();

document.querySelectorAll(".category-selector").forEach(button => {
  button.onclick = function() {
    staggerImageInterval();
    document.querySelectorAll(".duplicate-container").forEach(container => {
      
      container.classList.toggle("show", button.getAttribute("data-category") == container.getAttribute("data-category"));
    })
  }
})
