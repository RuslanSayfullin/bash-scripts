//В переменной month лежит какое-то число из интервала от 1 до 12.
//Определите в какую пору года попадает этот месяц (зима, лето, весна,
//осень). Значение в должен быть текущий месяц.
let month =8;


function average(month) {
    for (let i = 1; i <= 12; i++) {
        if (month < 3) {
            console.log("Зима")
        }
        else if (month < 6){
            console.log("Весна")
        }
        else if (month < 9){
            console.log("Лето")
        }
        else if (month < 12){
            console.log("Осень")
        }
        else {
            console.log("Зима")
        }
    }
}

average(month);

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что
//первым символом этой строки является буква 'a'. Если это так -
//выведите 'да', в противном случае выведите 'нет'.
let str = 'abcde';
if (str[0] !='a'){
    console.log("нет")
}
else {
   console.log("да")
}

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех
//цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в
//противном случае выведите 'нет'.
let arr = [1, 2, 3, 4, 5, 6]
let sum1 = arr[0]+arr[1]+arr[2];
let sum2 = arr[3]+arr[4]+arr[5];
if (sum1 != sum2){
    console.log("нет");
}
else {
   console.log("да");
}

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
//оператора if проверьте есть ли в массиве элемент со значением, равным
//4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет -
//ничего делать не надо.

let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let value of arr){
    if (value != 4){
        continue;
    }
    else {
        console.log("Есть!");
    }
}

//Составьте массив дней недели. С помощью цикла for выведите все дни
//недели, а выходные дни выведите жирным.
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let value of week){
    if (value != 'Суббота' || value != 'Воскресенье'){
        console.log(value);
    }
    else {
       console.log(bold(value));
    }
}

//Создайте простой счетчик кликов с помощью JavaScript

