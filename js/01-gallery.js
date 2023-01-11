import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBlock = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
  .join("");
galleryBlock.insertAdjacentHTML("beforeend", markup);

galleryBlock.addEventListener("click", onclick);
function onclick(evt) {
  evt.preventDefault();
  // console.log("currentTarget", evt.currentTarget);
  console.log("target", evt.target);
  const instance = basicLightbox.create(`
  <img src="${evt.target.src}" class="${evt.target.class}">
`);

  instance.show();
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
