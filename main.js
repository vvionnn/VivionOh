// year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile navbar (burger)
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");

function closeNav(){
  navPanel?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function toggleNav(){
  const isOpen = navPanel.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleNav();
});

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!navPanel) return;
  if (navPanel.classList.contains("open") && !navPanel.contains(e.target) && e.target !== navToggle) {
    closeNav();
  }
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// close after clicking a link (nice UX)
document.querySelectorAll(".navPanel .navLink, .navPanel .navCta").forEach(a => {
  a.addEventListener("click", closeNav);
});

// if resized to desktop, force open layout reset
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) closeNav();
});


// Zoom modal
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomClose = document.getElementById("zoomClose");

function openZoom(src, alt){
  zoomModal.classList.add("open");
  zoomImg.src = src;
  zoomImg.alt = alt || "Zoomed preview";
  document.body.style.overflow = "hidden";
}

function closeZoom(){
  zoomModal.classList.remove("open");
  zoomImg.src = "";
  document.body.style.overflow = "";
}

zoomClose?.addEventListener("click", closeZoom);
zoomModal?.addEventListener("click", (e) => {
  if (e.target === zoomModal) closeZoom();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeZoom();
});

document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => openZoom(img.src, img.alt));
});
