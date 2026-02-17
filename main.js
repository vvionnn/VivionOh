// year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Zoom modal
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomClose = document.getElementById("zoomClose");
const zoomTitle = document.getElementById("zoomTitle");
const zoomDesc = document.getElementById("zoomDesc");

function openZoom(src, alt) {
  zoomImg.src = src;
  zoomImg.alt = alt || "Zoomed preview";

  // ✅ Parse "Title | Description" from alt text
  const raw = alt || "";
  const parts = raw.split("|").map(s => s.trim());
  const title = parts[0] || "Media";
  const desc = parts[1] || "";

  if (zoomTitle) zoomTitle.textContent = title;
  if (zoomDesc) zoomDesc.textContent = desc;

  zoomModal.classList.add("show");
  zoomModal.setAttribute("aria-hidden", "false");
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
function closeZoom() {
  zoomModal.classList.remove("show");
  zoomModal.setAttribute("aria-hidden", "true");
  zoomImg.src = "";
  if (zoomTitle) zoomTitle.textContent = "Media";
  if (zoomDesc) zoomDesc.textContent = "";
  document.body.style.overflow = "";
}
