let article = {"title":"Загадки дачного огурца","text":"Огурец не перестает удивлять своими выходками."};
let author =  {"name":"Ричард М.В.","age":43};


let clone = Object.assign(article, author);

console.log(clone);