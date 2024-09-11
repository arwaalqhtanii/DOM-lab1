// let elment = document.getElementById("text1"); 
// console.log(elment);
// elment.innerText = "Demah"
// document.body.style.backgroundColor = "pink" ;
// document.body.style.color ="blue";
// console.log(document.getElementById("text").textContent= "Arwa");

let header = document.querySelector('.header');
header.style.backgroundColor = 'pink';
header.style.color = 'white';


let paragraph = document.getElementById('par');
paragraph.className = 'style-par';
paragraph.style.fontWeight = 'bold';

let styleParagraph = document.createElement('style');
styleParagraph.textContent = `.style-par 
        {color: white;
        background-color: lightpink;
    }
`;

document.head.appendChild(styleParagraph);
let image = document.getElementById('imag');
image.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAYHAQMFAv/EAC0QAQACAQMCAwcEAwAAAAAAAAABAgMEBREGMRJRYSFBUnGBwdETIkKRBxQX/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7gAAAAAAAAAAAAAAAAAAJ20ThvrKafV150+afBfzr5Wj1hzvm1Z9m3G+j1Exf2RfFkr2yUntaPv6xKNo4mdTi4jmfF2lonV22f7/Q+DcK0mc233j9/njtPExPpE+0GagAAAAAAAAAAAAAAAA+qVm9orWOZntwD0ensE6jcsWOtfFMzxENd3GuP/nu+47RxamktMx68x+GfdI6KMG44ct4m0xMdvmu/+RMuLZOiM2nx2mc25ZYxRz76x+6wMZCQAAAAAAAAAAAAAEjS00uSeNTmyYfWuPxQDorEzPERzKxbB09qNZmx2jHMzx4uIjvHM/hM2jS9Nae0ZM+74Ztx/Kl+Y+nC1afr3pvYdLam34MmszeWPHNK/W0+4Fi2LYdJtmLLrt08OHDjx/qXyXnitGT9d9TT1PvdtTirNNDgj9LSY57xT4p9Z7/1HucdV9Zbr1ReK6y8YdHWfFTSYvZSJ85+KfmroAAAAAAAAAAAAAAAABz7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k='; 

/*
let list = document.getElementById('list');
for (let i = 1; i <= 3; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `name `;
    listItem.style.color = 'pink';
    listItem.style.border = '1px solid black';
    listItem.style.display = 'inline-block';
    list.appendChild(listItem);
}*/


let list = document.getElementById('list');
let listItem1 = document.createElement('li');
listItem1.textContent = 'Demah';
listItem1.style.color = 'pink';
listItem1.style.border = '1px solid black';
listItem1.style.display = 'inline-block';
list.appendChild(listItem1);

let listItem2 = document.createElement('li');
listItem2.textContent = 'Arwa';
listItem2.style.color = 'pink';
listItem2.style.border = '1px solid black';
listItem2.style.display = 'inline-block';
list.appendChild(listItem2);

const listItem3 = document.createElement('li');
listItem3.textContent = 'Sarah';
listItem3.style.color = 'pink';
listItem3.style.border = '1px solid black';
listItem3.style.display = 'inline-block';
list.appendChild(listItem3);
  

//by uee for loop table
let table = document.getElementById('table');
let rows = 2;
let cols = 3;
for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
        const col = document.createElement('td');
        col.textContent = `student ${i + 1}-${j + 1}`;
        row.appendChild(col);
    }
    table.appendChild(row);
}


/*
let table = document.getElementById('table');
let row1 = document.createElement('tr');
let c1 = document.createElement('td');
c1.textContent = 'student 1';
row1.appendChild(c1);

let c2 = document.createElement('td');
c2.textContent = 'student 2';
row1.appendChild(c2);

let c3 = document.createElement('td');
c3.textContent = 'student 3';
row1.appendChild(c3);
table.appendChild(row1);


let row2 = document.createElement('tr');
let c4 = document.createElement('td');
c4.textContent = 'student 4';
row2.appendChild(c4);

let c5 = document.createElement('td');
c5.textContent = 'student 5';
row2.appendChild(c5);

const c6 = document.createElement('td');
c6.textContent = 'student 6';
row2.appendChild(c6);
table.appendChild(row2);
*/

table.className = 'styletable';



