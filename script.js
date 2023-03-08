const toSwitch = document.querySelector(".quickswitch-item");
const switchTo = [
  "Revamp Your Workflow",
  "Streamline Your Workspace",
  "Customize Your Experience",
];

let i = 0;
setInterval(() => {
  toSwitch.textContent = switchTo[i];
  i++;
  if (i === switchTo.length) {
    i = 0;
  }
}, 3000);

const tocElems = document.querySelectorAll(".toc a");

tocElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    tocElems.forEach((elem) => {
      elem.classList.remove("active");
    });
    elem.classList.add("active");
  });
});

const renderElems = document.querySelectorAll(".content .render");

renderElems.forEach((elem) => {
  elem.classList.add("hidden");
});

tocElems.forEach((tocElem) => {
  tocElem.addEventListener("click", (e) => {
    if (tocElem.classList.contains("active")) {
      renderElems.forEach((renderElem) => {
        renderElem.classList.add("hidden");
      });
      const id = e.target.getAttribute("href");
      const renderElem = document.querySelector(id);
      renderElem.classList.remove("hidden");
    }
  });
});

// show 1st element by default
tocElems[0].classList.add("active");
renderElems[0].classList.remove("hidden");

const installElems = document.querySelectorAll(".install-buttons a");

installElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    installElems.forEach((elem) => {
      elem.classList.remove("active-alt");
    });
    elem.classList.add("active-alt");
  });
});

const installRenderElems = document.querySelectorAll(".install-render");

installRenderElems.forEach((elem) => {
  elem.classList.add("hidden");
});

installElems.forEach((installElem) => {
  installElem.addEventListener("click", (e) => {
    if (installElem.classList.contains("active-alt")) {
      installRenderElems.forEach((installRenderElem) => {
        installRenderElem.classList.add("hidden");
      });
      const id = e.target.getAttribute("href");
      const installRenderElem = document.querySelector(id);
      installRenderElem.classList.remove("hidden");
    }
  });
});

//showcase
const catppuccinElem = document.querySelector(".theme-catppuccin");
const catppuccinPopupElem = document.querySelector(".popup-catppuccin");
const closeCatppuccinPopup = document.querySelector(".popup-close-catppuccin");
const sectionShowcase = document.getElementById("section-showcase");

catppuccinElem.addEventListener("click", (e) => {
  catppuccinPopupElem.classList.toggle("hidden");
  catppuccinPopupElem.classList.toggle("popup");
  sectionShowcase.classList.add("hidden");
});

closeCatppuccinPopup.addEventListener("click", (e) => {
  catppuccinPopupElem.classList.toggle("hidden");
  catppuccinPopupElem.classList.toggle("popup");
  sectionShowcase.classList.remove("hidden");
});

const kanagawaElem = document.querySelector(".theme-kanagawa");
const kanagawaPopupElem = document.querySelector(".popup-kanagawa");
const closeKanagawaPopup = document.querySelector(".popup-close-kanagawa");

kanagawaElem.addEventListener("click", (e) => {
  kanagawaPopupElem.classList.toggle("hidden");
  kanagawaPopupElem.classList.toggle("popup");
  sectionShowcase.classList.add("hidden");
});

closeKanagawaPopup.addEventListener("click", (e) => {
  kanagawaPopupElem.classList.toggle("hidden");
  kanagawaPopupElem.classList.toggle("popup");
  sectionShowcase.classList.remove("hidden");
});
