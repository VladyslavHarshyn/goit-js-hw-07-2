import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function addElement() {
  return galleryItems
    .map(
      (items) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${items.original}">
    <img
        class="gallery__image"
        src="${items.preview}"
        data-source="${items.original}"
        alt="${items.description}"
    />
    </a>
</div>`
    )
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", addElement(galleryItems));

gallery.addEventListener("click", galleryClick);

let instantShow;

function galleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instantShow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

  instantShow.show();
}

// Закрытие модалки по нажатию на Esc

gallery.addEventListener("keydown", (e) => {
  if (e.key === "Escape") instantShow.close();
});
