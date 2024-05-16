import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages, toggleLoadMoreButton, showLoader, showEndOfResultsMessage, showToastError, scrollPage } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('load-more');
const loader = document.getElementById('loader');

let query = '';
let page = 1;
let totalHits = 100;

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    query = searchInput.value.trim();
    if (query === '') {
        showToastError('Please enter a search term');
        return;
    }

    page = 1;
    totalHits = 0;
    clearGallery(gallery);
    toggleLoadMoreButton(loadMoreButton, false);
    await fetchAndRenderImages();
});

loadMoreButton.addEventListener('click', async () => {
    page++;
    await fetchAndRenderImages();
});

async function fetchAndRenderImages() {
    showLoader(loader, true);
    try {
        const data = await fetchImages(query, page);
        totalHits = data.totalHits;

        if (data.hits.length === 0 && page === 1) {
            showToastError('Sorry, there are no images matching your search query. Please try again!');
            return;
        }

        renderImages(data.hits, gallery);

        if (page * 15 >= totalHits) {
            toggleLoadMoreButton(loadMoreButton, false);
            showEndOfResultsMessage();
        } else {
            toggleLoadMoreButton(loadMoreButton, true);
        }

        if (page > 1) {
            scrollPage(gallery);
        }

    } catch (error) {
        console.error('Error fetching images:', error);
        showToastError('An error occurred while fetching data. Please try again later.');
    } finally {
        showLoader(loader, false);
    }
}