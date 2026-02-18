// year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

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
