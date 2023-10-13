import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItemElement = document.createElement("li");
  galleryItemElement.classList.add("gallery__item");

  galleryItemElement.innerHTML = `<a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
   </a>`;

  galleryListElement.append(galleryItemElement);
});

const imageLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && imageLightbox.visible()) {
    imageLightbox.close();
  }
});

galleryListElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    imageLightbox.open();
  }
});
