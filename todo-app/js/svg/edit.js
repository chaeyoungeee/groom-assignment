export default function getEditSvgEl() {
    const editSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    editSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    editSvgEl.setAttribute('class', 'icon icon-tabler icon-tabler-pencil');
    editSvgEl.setAttribute('width', '22');
    editSvgEl.setAttribute('height', '22');
    editSvgEl.setAttribute('viewBox', '0 0 24 24');
    editSvgEl.setAttribute('stroke-width', '2.5');
    editSvgEl.setAttribute('stroke', '#2c3e50');
    editSvgEl.setAttribute('fill', 'none');
    editSvgEl.setAttribute('stroke-linecap', 'round');
    editSvgEl.setAttribute('stroke-linejoin', 'round');

    const pathEl1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl1.setAttribute('stroke', 'none');
    pathEl1.setAttribute('d', 'M0 0h24v24H0z');
    pathEl1.setAttribute('fill', 'none');

    const pathEl2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl2.setAttribute('d', 'M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4');

    const pathEl3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl3.setAttribute('d', 'M13.5 6.5l4 4');

    editSvgEl.appendChild(pathEl1);
    editSvgEl.appendChild(pathEl2);
    editSvgEl.appendChild(pathEl3);

    return editSvgEl;
}
