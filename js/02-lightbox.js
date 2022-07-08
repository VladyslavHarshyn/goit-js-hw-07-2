import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function addElement() {
  return galleryItems
    .map(
      (items) =>
        `<a class="gallery__item" href="${items.original}">
            <img
              class="gallery__image"
              src="${items.preview}"
              alt="${items.description}"
            />
          </a>`
    )
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", addElement(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
