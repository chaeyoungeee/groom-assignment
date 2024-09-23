const size = 26;

const spreadSheetContainerEl = document.getElementById("spreadsheet-container");
const exportBtn = document.getElementById("export-btn");
const cellStatus = document.getElementById("cell-status");
const cells = [];

createSpreadSheet(spreadSheetContainerEl, cells);
exportBtn.addEventListener('click', () => exportSpreadSheet(cells));

function createSpreadSheet(containerEl, cellsArr) {

    for (let r = 0; r <= size; r++) {

        const rowEl = document.createElement('div');
        rowEl.classList.add('spreadsheet-row');
        containerEl.appendChild(rowEl);
        let row = [];

        for (let c = 0; c <= size; c++) {

            const cellEl = document.createElement('input');
            cellEl.classList.add('cell');
            rowEl.appendChild(cellEl);
            row.push(cellEl);
            
            if (r == 0 || c == 0) {
                cellEl.classList.add('uneditable');
                cellEl.disabled = true;

                if (c > 0) {
                    cellEl.value = String.fromCharCode('A'.charCodeAt() + c - 1);
                }
                if (r > 0) {
                    cellEl.value = r;
                }
                continue;
            }

            cellEl.addEventListener('focusin', () => {
                cellsArr[r][0].classList.add('selected');
                cellsArr[0][c].classList.add('selected');
                cellStatus.innerText = String.fromCharCode('A'.charCodeAt() + c - 1) + r;
            });

            cellEl.addEventListener('focusout', () => {
                cellsArr[r][0].classList.remove('selected');
                cellsArr[0][c].classList.remove('selected');
                cellStatus.innerText = '';
            });

        }

        cellsArr.push(row);

    }

}

function exportSpreadSheet(cellsArr) {

    const csvData = cellsArr.map(
        rows => rows.filter(cell => !cell.classList.contains('uneditable'))
            .map(cell => cell.value)
            .join(', '))
        .filter(rows => rows.length > 0)
        .join('\n');

    console.log(csvData);

    const blob = new Blob(["\ufeff" + csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "새 스타일 시트");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}