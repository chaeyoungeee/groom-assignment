export default function getCheckBoxSvgEl() {
    const squareCheckSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    squareCheckSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    squareCheckSvgEl.setAttribute('class', 'icon icon-tabler icon-tabler-square-check');
    squareCheckSvgEl.setAttribute('width', '22');
    squareCheckSvgEl.setAttribute('height', '22');
    squareCheckSvgEl.setAttribute('viewBox', '0 0 24 24');
    squareCheckSvgEl.setAttribute('stroke-width', '2.5');
    squareCheckSvgEl.setAttribute('stroke', '#2c3e50');
    squareCheckSvgEl.setAttribute('fill', 'none');
    squareCheckSvgEl.setAttribute('stroke-linecap', 'round');
    squareCheckSvgEl.setAttribute('stroke-linejoin', 'round');

    const pathEl1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl1.setAttribute('stroke', 'none');
    pathEl1.setAttribute('d', 'M0 0h24v24H0z');
    pathEl1.setAttribute('fill', 'none');

    const pathEl2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl2.setAttribute('d', 'M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z');

    const pathEl3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl3.setAttribute('d', 'M9 12l2 2l4 -4');

    squareCheckSvgEl.appendChild(pathEl1);
    squareCheckSvgEl.appendChild(pathEl2);
    squareCheckSvgEl.appendChild(pathEl3);

    return squareCheckSvgEl;
}


