 export default function getDeleteSvgEl() {
    const trashXSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    trashXSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    trashXSvgEl.setAttribute('class', 'icon icon-tabler icon-tabler-trash-x');
    trashXSvgEl.setAttribute('width', '22');
    trashXSvgEl.setAttribute('height', '22');
    trashXSvgEl.setAttribute('viewBox', '0 0 24 24');
    trashXSvgEl.setAttribute('stroke-width', '2.5');
    trashXSvgEl.setAttribute('stroke', '#2c3e50');
    trashXSvgEl.setAttribute('fill', 'none');
    trashXSvgEl.setAttribute('stroke-linecap', 'round');
    trashXSvgEl.setAttribute('stroke-linejoin', 'round');

    const pathEl1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl1.setAttribute('stroke', 'none');
    pathEl1.setAttribute('d', 'M0 0h24v24H0z');
    pathEl1.setAttribute('fill', 'none');

    const pathEl2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl2.setAttribute('d', 'M4 7h16');

    const pathEl3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl3.setAttribute('d', 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12');

    const pathEl4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl4.setAttribute('d', 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3');

    const pathEl5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl5.setAttribute('d', 'M10 12l4 4m0 -4l-4 4');

    trashXSvgEl.appendChild(pathEl1);
    trashXSvgEl.appendChild(pathEl2);
    trashXSvgEl.appendChild(pathEl3);
    trashXSvgEl.appendChild(pathEl4);
    trashXSvgEl.appendChild(pathEl5);

    return trashXSvgEl;
}
