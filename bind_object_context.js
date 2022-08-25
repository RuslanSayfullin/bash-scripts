let input = {"id":1,"value":"Добрый вечер","firstName":"Григорий","lastName":"Стрельников"};


function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

const heroSay = sayHi.bind(input);

heroSay();