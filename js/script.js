"use strict";

const body = document.getElementById("body");
const showSidebar = document.getElementById("showSidebar");
const hideSidebar = document.getElementById("hideSidebar");
const sidebar = document.querySelector(".sidebar");

/* opsætning ift. visning af sidebar */

showSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
  body.style.overflow = "hidden";
});

/* opsætning ift. at forlade visningstilstand for sidebar */

hideSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
  body.style.overflow = "auto";
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  /* visning af header klistret fast til top af siden */
  if (scrollTop <= 0) {
    header.style.top = "0";
    header.style.position = "sticky";
 
  } else {
    header.style.top = "0";
    header.style.position = "fixed";
  }
  lastScrollTop = scrollTop;
});