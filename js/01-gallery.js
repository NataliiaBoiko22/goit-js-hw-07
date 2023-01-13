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
function onclick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.src}" class="${evt.target.class}"">`,
    {
      onShow: () => {
        window.addEventListener("keydown", escape);
      },
      onClose: () => {
        window.removeEventListener("keydown", escape);
      },
    }
  );

  instance.show();

  function escape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
galleryBlock.addEventListener("click", onclick);
