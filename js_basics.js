//Создайте переменную с именем num и присвойте ей значение 3.
let num = 3;
alert(num);

//Создайте переменные a=10 и b=2. Выведите на экран их сумму,
//разность, произведение и частное (результат деления).
let a=10;
let b=2;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);

//Создайте переменную с именем str и присвойте ей значение 'Привет,
//Мир!'. Выведите значение этой переменной на экран.
let str = 'Привет, Мир!';
alert(str);

//Создайте переменную с именем name и присвойте ей ваше имя.
//Выведите на экран фразу 'Привет, Ваше имя'.
let name = 'Руслан';
alert('Привет, '+ name);

//Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран
let num = 5;
alert(num**2);

//Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью
//функции alert.
let arr = ['a', 'b', 'c'];
alert(arr);


//Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr = [2, 5, 3, 9];
let result = (arr[0]*arr[1])+(arr[2]*arr[3])
alert(result);

//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя
//способами: через квадратные скобки и как свойство объекта:
var obj = {a: 1, b: 2, c: 3}
alert(obj["c"]);
alert(obj.c);

//Создайте объект с днями недели. Ключами в нем должны служить
//номера дней от начала недели (понедельник - первый и т.д.).
//Выведите на экран текущий день недели.
let week = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
alert(week[5]);

//Пусть теперь номер дня недели хранится в переменной day,
//например там лежит число 3. Выведите день недели,
//соответствующий значению переменной day.
let week = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
let day =3;
alert(week[day]);

//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr[1][0]);

//Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите
//с его помощью слово 'jQuery'
let object = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(object['js'][0]);