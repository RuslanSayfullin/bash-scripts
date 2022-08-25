let props = {
    name:'Анатолий',
    age:29,
    sayHi:()=>'привет'
};

function getValue() {
    console.log("Значения свойств объекта props (name: " + this.name + ", age: " + this.age + ")")
}

getValue = getValue.bind(props);
getValue();

//2 вариант
let s = 'Значения свойств объекта props ';
    function getValue(){
  if (Object.keys(props).length === 0) {
    s = s + '()';}
  for (let key in props) {
    if ((typeof props[key]) != "function") {
      if (s == 'Значения свойств объекта props '){
      s = s + `(${key}:`;
      s = s + ' ' + `${props[key]},`+ ' ';
      }
      else {
      s = s + `${key}:`;
      s = s + ' ' + `${props[key]}`+ ')';
      }
        }

    else if (s == 'Значения свойств объекта props ()') {
      s = s;
    }
    else if (s == 'Значения свойств объекта props '){s = s + '()';}


  }
  console.log(s);
}
getValue = getValue.call(props);

