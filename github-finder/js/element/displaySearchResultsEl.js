import displayResult from './DisplayResult.js';

const resultsEl = document.getElementById("searchResults");

export function displaySearchResultsEl (results) {
    clearResults();
    
    if (results.length > 0) {
        resultsEl.classList.remove('invisible');
    }

    for (const result of results) {
        resultsEl.appendChild(getResultEl(result));
    }
} 

export function clearResults () {
    resultsEl.innerHTML = "";
    resultsEl.classList.add('invisible');
} 

function getResultEl(result) {
    const resultEl = document.createElement('li');
    resultEl.addEventListener('click', () => displayResult(result.name));

    const thumbnailEl = document.createElement('img');
    thumbnailEl.classList.add("profile-thumbnail");
    thumbnailEl.setAttribute('src', result.thumbnail_url);
    resultEl.appendChild(thumbnailEl);

    const nameEl = document.createElement('p');
    nameEl.innerText = result.name;
    resultEl.appendChild(nameEl);
    
    return resultEl;
}