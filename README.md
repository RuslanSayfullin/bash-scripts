# js-scripts

9.09. split_string_into_array.js - В программе объявлена переменная sentence со строковым значением. Преобразуйте эту 
строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль. Метод строки
split() использовать нельзя.

9.10. returns_the_number_of_even_elements_in_an_array.js - В программе объявлена переменная list, в которую записан 
массив из числовых значений. Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает 
количество четных элементов в массиве. Вызовите функцию count(list) и в качестве аргумента передайте ей список list.
Выведите в консоль то, что вернет функция.

9.11. calculates_the_average_of_the_array_elements.js - В программе объявлена переменная list, в которую записан массив
из числовых значений. Гарантируется, что массив не пустой. Реализуйте функцию average(list), которая принимает в
качестве аргумента массив, рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам
математики и получившееся значение возвращает. Вызовите функцию average(list) и в качестве аргумента передайте список
list. То, что функция вернет, необходимо вывести в консоль.

9.12. count_the_sum_of_numeric_values_up_to_the_first_boolean_value.js - В программе объявлена переменная list,
в которой записан массив из чисел и логических значений. Используя цикл, посчитайте сумму числовых значений до первого
логического значения. Дойдя до логического значения, остановите цикл. Результат выведите в консоль.

9.13. form_an_array_list_with_values_from_10_to_20.js - Используя цикл, сформируйте массив list со значениями 
от 10 до 20. Выведите значение переменной list в консоль.

9.14. form_the_numbers-list_array_which_contains_only_the_numbers_from_the_list_array.js - В программе объявлена 
переменная list, в которую записан массив. Используя цикл, сформируйте массив numbers_list, который содержит в себе 
только числа из массива list. Если в процессе прохода циклом по массиву list обнаружится значение false, последующие 
значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль.

9.15. the_number_of_elements_in_the_list_array_excluding_elements_with_a_value_of_default.js - В программе объявлена 
переменная list, в которой записан массив из строковых значений. Напишите программу, которая считает количество 
элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль.
Сравнение должно быть регистронезависимым.

9.16. form_a_string_from_the_first_letters_of_each_array_element.js - В программе объявлена переменная list,
в которую записан массив из строковых значений. Сформируйте строку из первых букв каждого элемента массива и выведите
ее в консоль. Гарантируется, что каждый элемент массива не нулевой длины.

Основы программирования на JavaScript II 
1.1. determine_the_presence_of_a_substring.js - В программе задана переменная message со строковым значением. 
Определите наличие подстроки привет в начале строки
переменной message. Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false.
Сравнение должно быть без учета регистра. Правильный ответ выведите в консоль. 

1.2. the_position_of_the_last_occurrence_of_the_substring.js - В программе задана переменная greetings со 
строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. 
Результат выведите в консоль. 

1.3. search_in_a_string_for_two_paired_tags.js - В программе задана переменная firstDiv со строковым значением.
Определите, встречаются ли в данной строке два парных тега <p>. 
Выведите в консоль булевое значение true, если встречается, и false — в ином случае. 

1.4. remove_the_substring_km_from_the_string.js - В программе объявлена переменная road со строковым значением,
которая задает протяженность дороги. Необходимо из строки убрать подстроку km, оставив только численное значение. 
Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. 
Помните, что 1 километр равен 0,62 мили. 

1.5. number_of_words_per_line.js - В программе задана переменная words со строковым значением. 
Напишите условный оператор, который выводит в консоль сообщение В строке больше одного слова, если строка содержит 
больше одного слова, в ином случае в консоль должна выводиться фраза В строке одно слово. 

1.6. the_first_character_is_a_digit.js - В программе объявлена переменная symbols со строковым значением. 
В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку 
Первый символ цифра, если первый символ переменной symbols является цифрой. 
В противном случае необходимо вывести строку Первый символ не цифра. 

1.7. unicode_numeric_values.js - В программе объявлена переменная symbols со строковым значением. 
Напишите условный оператор, который реализует следующую логику: Если сумма числовых значений Unicode первых двух 
символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль.
В ином случае необходимо вывести сообщение Символ обнаружить не удалось

1.8. convert_string.js - В программе задана переменная phone со строковым значением. В ней хранится номер телефона и,
помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/*/ ). 

1.9. string_to_array_conversion.js - В программе задана переменная emails со строковым значением. В ней указано
несколько значений электронной почты через пробел. Преобразуйте данное значение в массив так, чтобы каждая почта в 
строке являлась элементом массива. Результат выведите в консоль. 

1.10. ticket_selection_for.js - В программе задана переменная ticket со строковым значением. 
Напишите условный оператор, который работает по следующей логике:
Если в билете после буквенных символов и тире идут 8 цифр подряд, программа должна вывести в консоль сообщение
    Выбран билет на концерт
Если в билете после буквенных символов идут 12 цифр подряд, программа должна вывести в консоль сообщение 
    Выбран билет в театр
В противном случае выведите в консоль сообщение Билет не определен

2.1. replace_boolean_value_with_string.js - В программе задана переменная values, которая хранит массив со строковыми и
булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. 
Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов! 

2.2. create_a_new_array_based_on_the_variable.js - В программе задана переменная partNumbers, которая хранит в себе
массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе 
partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных
символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль. 

2.3. html_layouts_with_numbers.js - В программе задана переменная layout, которая хранит в себе строковое значение.
Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, 
которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. 
Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив. 

2.4. new_titles_array.js - В программе задана переменная tasks, которая содержит массив. 
Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles,
который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль. 

2.5. new_result_array.js - В программе задана переменная values, которая хранит массив со строковыми и булевыми 
значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. 
Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого 
значения в массив values. Выведите получившийся массив в консоль. 

2.6. four-digit_numbers.js - В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. 
Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. 
Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет). 

2.7. four-digit_numbers_index.js - Необходимо доработать программу из задания 2.7 - В программе задана переменная values,
которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы,
которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. 
В противном случае выведите сообщение Искомый элемент не был найден. 

2.8. meaning_more_than_one_word.js - В программе задана переменная users, которая хранит в себе массив. 
Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше
одного слова. Результат выведите в консоль разработчика. 

2.9. sort_the_array.js - В программе задана переменная array, которая хранит в себе двумерный массив. 
Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию.
Результат выведите в консоль.

2.10. sort_the_array2.js - В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут 
являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:
    В начале массива должны быть все числовые значения по возрастанию
    В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль.

2.11. number_of_palindromes.js В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает 
количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, 
где первое значение — количество палиндромов, а второе — непалиндромов. 

2.12. new_array_with_dates.js - В программе задана переменная dates, которая хранит в себе строковое значение. 
В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной 
dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат
ДД/ММ/ГГГГ.  Выведите содержимое сформированного массива в консоль. 

2.13. forms_an_object_from_a_variable.js В программе задана переменная tickets, которая хранит в себе строковое значение.
В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). 
Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе 
два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

2.14. maximum_amount_array_elements.js - В программе задана переменная numbers, которая хранит массив из чисел.
Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно 
сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль. 

2.15. the_sum_of_all_elements.js - В программе задана переменная values, которая хранит массив из строк.
Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
Результат выведите в консоль. 

2.16. values_from_two_arrays.js - В программе заданы два массива array_1 и array_2, элементы которого являются числами.
Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два
массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть
отсортирован по убыванию. 


