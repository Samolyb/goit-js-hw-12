import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const listImg = document.querySelector('.list');
let lightbox;

export function clearGallery(gallery) {
    gallery.innerHTML = '';
}

export function renderImages(images, gallery) {
    const imageElements = images.map(image => {
        return `
      <li class="item-list">
        <a href="${image.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${image.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${image.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${image.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${image.downloads}</p>
            </div>
        </div>
      </li>
    `;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', imageElements);

    lightbox = new SimpleLightbox('.item-list-link', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
    });

    lightbox.refresh();
}

export function toggleLoadMoreButton(button, show) {
    button.style.display = show ? 'block' : 'none';
}

export function showLoader(loader, show) {
    loader.style.display = show ? 'block' : 'none';
}

export function showEndOfResultsMessage() {
    iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter'
    });
}

export function showToastError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topCenter'
    });
}

export function scrollPage(gallery) {
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}