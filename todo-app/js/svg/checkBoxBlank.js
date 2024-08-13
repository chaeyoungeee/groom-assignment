export default function getCheckBoxBlankSvgEl() {
    const squareSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    squareSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    squareSvgEl.setAttribute('class', 'icon icon-tabler icon-tabler-square');
    squareSvgEl.setAttribute('width', '22');
    squareSvgEl.setAttribute('height', '22');
    squareSvgEl.setAttribute('viewBox', '0 0 24 24');
    squareSvgEl.setAttribute('stroke-width', '2.5');
    squareSvgEl.setAttribute('stroke', '#2c3e50');
    squareSvgEl.setAttribute('fill', 'none');
    squareSvgEl.setAttribute('stroke-linecap', 'round');
    squareSvgEl.setAttribute('stroke-linejoin', 'round');

    const pathEl1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl1.setAttribute('stroke', 'none');
    pathEl1.setAttribute('d', 'M0 0h24v24H0z');
    pathEl1.setAttribute('fill', 'none');

    const pathEl2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl2.setAttribute('d', 'M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z');

    squareSvgEl.appendChild(pathEl1);
    squareSvgEl.appendChild(pathEl2);

    return squareSvgEl;
}
