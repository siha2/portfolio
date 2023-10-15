// variables
let tabsElements = document.querySelectorAll("nav .container ul li a");
let sections = document.querySelectorAll(".sec");

let about = document.querySelector("#about");
let skillsSection = document.querySelector("#skills");
let imgNav = document.querySelector("nav .container ul img");
let liText = document.querySelector("nav .container ul.middle li");
let spans = document.querySelectorAll(".progress span");

let menu = document.querySelector("nav div i");
let ulr = document.querySelector("nav .container ul.right");
let ull = document.querySelector("nav .container ul.left");

let filters = document.querySelectorAll(".portfolio .filters li");
let projects = document.querySelectorAll(".portfolio .projects .all");

let activeIndex = 0;

// menu hidden and show
menu.addEventListener("click", toogleList);

// img hidden and show
window.addEventListener("scroll", toggleImage);

// skills progress
window.addEventListener("scroll", skillsProgress);

// tabs
window.addEventListener("scroll", tabs);

// filters
filters.forEach((filter) => {
  filter.addEventListener("click",projectFilter);
});

function toogleList() {
  ull.classList.toggle("show");
  ulr.classList.toggle("show");
  menu.classList.toggle("shd");
}

function toggleImage() {
  if (window.scrollY >= about.offsetTop - 100) {
    imgNav.style.opacity = "0";
    imgNav.style.top = "-10px";
    liText.style.top = "0";
    liText.style.opacity = "1";
  } else {
    imgNav.style.opacity = "1";
    imgNav.style.top = "50%";
    liText.style.top = "20px";
    liText.style.opacity = "0";
  }
}

function skillsProgress() {
  if (window.scrollY >= (skillsSection.offsetTop + skillsSection.offsetHeight - window.innerHeight)) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}

function tabs() {
  let currentIndex = -1;

  sections.forEach((section, index) => {
    if (scrollY >= (section.offsetTop - 10) && scrollY < (section.offsetTop + section.offsetHeight -10)) {
      currentIndex = index;
    }
  });

  if (currentIndex !== -1 && currentIndex !== activeIndex) {
    tabsElements[activeIndex].classList.remove("active");
    tabsElements[currentIndex].classList.add("active");
    activeIndex = currentIndex;
  }
};

function projectFilter() {
  filters.forEach((filter) => {
    filter.classList.remove("active");
  });
  this.classList.add("active");
  projects.forEach((project) => {
    project.style.display = "none";
  });
  document.querySelectorAll(`.${this.dataset.cat}`).forEach((el) => {
    el.style.display = "block";
  });
};