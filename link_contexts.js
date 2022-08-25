let pet = {"name":"Диксон","breed":"Немецкая овчарка"};

function getDescription() {
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed)
}

const getDescriptions = getDescription.bind(pet);

getDescriptions();