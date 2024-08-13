import getCheckBoxSvgEl from './svg/checkBox.js';
import getCheckBoxBlankSvgEl from './svg/checkBoxBlank.js';
import getDeleteSvgEl from './svg/delete.js';
import getEditSvgEl from './svg/edit.js';

const DATA_PARSER = '|||||';
const DATA_KEY = 'lists_data';

const createBtn = document.getElementById("create-btn");
const listsEl = document.getElementById("lists");

let listList = [];

createBtn.addEventListener('click', addNewlist);

function addNewlist() {
    const list = createNewlist();
    listList.unshift(list);
    const listEl = createlistEl(list);
    listsEl.prepend(listEl);
    saveChange();
}

function createNewlist() {
    return {
        id: crypto.randomUUID(),
        date: new Date().getTime(),
        text: '',
        complete: false
    }
}

function createlistEl(list) {
    const listEl = document.createElement('li');
    listEl.classList.add('list');
    listEl.classList.add(list.complete ? 'complete' : 'incomplete');

    const checkBoxButtonEl = document.createElement('button');
    const checkBoxSvgEl = getCheckBoxSvgElByComplete(list.complete);
    checkBoxButtonEl.append(checkBoxSvgEl);
    checkBoxButtonEl.addEventListener('click', () => switchComplete(list, listEl, checkBoxButtonEl));

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = list.text;
    inputEl.tabIndex = -1;
    inputEl.addEventListener('mousedown', (e) => e.preventDefault());
    inputEl.addEventListener('blur', () => updateText(inputEl, list));

    const editButtonEl = document.createElement('button');
    editButtonEl.append(getEditSvgEl());
    editButtonEl.addEventListener('click', () => focusInput(inputEl));

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.append(getDeleteSvgEl());
    deleteButtonEl.addEventListener('click', () => remove(listEl, list));

    listEl.append(checkBoxButtonEl);
    listEl.append(inputEl);
    listEl.append(editButtonEl);
    listEl.append(deleteButtonEl);

    return listEl;
}

function switchComplete(list, listEl, checkBoxButtonEl) {
    list.complete = !list.complete;

    const classFrom = list.complete ? 'incomplete' : 'complete';
    const classTo = list.complete ? 'complete' : 'incomplete';
    listEl.classList.replace(classFrom, classTo);

    const prevSvgEl = Array.from(checkBoxButtonEl.children)[0];
    checkBoxButtonEl.replaceChild(getCheckBoxSvgElByComplete(list.complete), prevSvgEl);
    saveChange();
}

function getCheckBoxSvgElByComplete(complete) {
    return complete ? getCheckBoxSvgEl() : getCheckBoxBlankSvgEl()
}

function focusInput(inputEl) {
    inputEl.focus();
}

function updateText(inputEl, list) {
    list.text = inputEl.value;
    saveChange();
}

function remove(listEl, list) {
    listEl.remove();
    listList = listList.filter(i => i !== list);
    saveChange();
}

function saveChange() {
    let data = listList.map(JSON.stringify).join(DATA_PARSER);
    localStorage.setItem(DATA_KEY, data);
    console.log('saved :', data);
}

window.onload = function() {
    const data = localStorage.getItem(DATA_KEY);
    if (!data) {
        return;
    }
    const savedlistList = data.split(DATA_PARSER).map(JSON.parse);

    listList = savedlistList.sort((i1, i2) => - i1.date + i2.date);
    for (let list of savedlistList) {
        const listEl = createlistEl(list);
        listsEl.append(listEl);
    }
    console.log("loaded : ",listList)
}