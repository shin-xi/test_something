//数组排序
let arraySort = [4, 5, 6, 1, 10, 2, 7, 9, 8, 3];
arraySort.sort((a, b) => a - b);


let arrayObjSort = [
    { id: 23, name: 'Peter' },
    { id: 12, name: 'Tony' },
    { id: 66, name: 'Thor' }
];
arrayObjSort.sort((a, b) => a.id - b.id);


let arrayObjSortFreak = [
    { id: 33, name: 'Peter', team: { group: 1 } },
    { id: 22, name: 'Tony', team: { group: 2 } },
    { id: 11, name: 'Thor', team: { group: 3 } }
];
arrayObjSortFreak.sort((a, b) => a.team.group - b.team.group);

//dom排序
let father = document.querySelector('.father');
let newOrder = Array.from(father.children).sort((a, b) => a.innerHTML - b.innerHTML);

for (let i = 0, len = newOrder.length; i < len; i++) {
    father.appendChild(newOrder[i]);
}