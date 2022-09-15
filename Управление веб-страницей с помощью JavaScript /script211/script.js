const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];

const tags = tasks.map(t=>{
    const elem = document.createElement('p');
    elem.innerText = t;
    return elem
});

document.querySelector('#root').append(...tags);