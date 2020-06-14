//chapter 1
//Alert
//question 1
alert("Hello user!Welcome to our website!");
//question 2
alert("Error!Please enter a valid password.");
//question 3
alert("Welcome to JS Land...\nHappy Coding!");
//question 4
alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this message from creating additional additional dialogs.");
//question 5
alert("Hello..I can run JS through my web brower's console");

//chapter 2
//Variable for strings
//question 1
var username = "USER";
//question 2
var myName   =  "Kashish Fatima ";
//question 3
var message = "Hello World";
alert(message)
//question 4
var studentname = "Jhone Doe";
alert(studentname);
var studentage = "15 years old";
alert(studentage);
var studentcourse = "Certified Mobile Application Development";
alert(studentcourse);
//question 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
//question 6 
var email = "kashishfatima691@gmail.com";
var statement = "My email address is ";
alert(statement + email);
//question 7
var book = "A smarter way to learn JavaScript";
var message = "I am trying to learn from the Book ";
alert(message + book);
//question 8
//done in index.html
//question 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//Chapter 3
//Variable for numbers
var age = 18;
//question 1
alert("I am " + age + " years old");
//question 2
var num = +prompt("How many times you visited here?","Enter number")
alert("You have visited this site" + " " + num +" " + "times")
//question 3
var birthyear=2002
document.write("my birthYear is"+" "+birthyear)
document.write("Data type of my declared variable is"+ typeof(birthYear))
//question 4
var visitorname = "John Doe "
var producttitle = " T-shirt"
var quantity = 5 ;
document.write(visitorname + "ordered " + quantity + producttitle + "(s) on XYZ Clothing store")

//chapter 4
//Variable Names:Legal and Illegal
//question 1
var a = 10, b = 25, c = 30
//question 2
//legal variable names
var n = 5;
var camelCase = "Camelcase";
var $4 = "4 dollars";
var _name_ = "kashish";
var gameprompt = 123; 
//illegal variable names
var 123 = "hello";
var full name = "Kashish Fatima";
var #id = 01;
var 1name = "ALI";
var "members" = 9;
//question 3
document.write("<h1> Rules for naming JS variables </h1><br>")
document.write("Variable names can only contain letters, numbers, $ and _"+"<br>")
document.write("Variables must begin with a letter, $ or_"+"<br>")
document.write("Variable names are case sensitive"+"<br>")
document.write("Variable names should not be JS keywords")

//Chapter 5
//Math Expressions 
//question 1
var num1 = +prompt("First Number:","Enter first number");
var num2 = +prompt("Second Number:","Enter second number");
var num = num1 + num2
document.write("Sum of"+" "+num1+" and "+num2+" is "+num);
//question 2
//subtraction
var num1 = +prompt("First Number:","Enter first number");
var num2 = +prompt("Second Number:","Enter second number");
var num = num1 - num2
document.write("Difference of"+" "+num1+" and "+num2+" is "+num);
//multiplication
var num1 = +prompt("First Number:","Enter first number");
var num2 = +prompt("Second Number:","Enter second number");
var num = num1 * num2
document.write("Product of"+" "+num1+" and "+num2+" is "+num);
//division
var num1 = +prompt("First Number:","Enter first number");
var num2 = +prompt("Second Number:","Enter second number");
var num = num1 / num2
document.write("Quotient of"+" "+num1+" and "+num2+" is "+num);
//modulus
var num1 = +prompt("First Number:","Enter first number");
var num2 = +prompt("Second Number:","Enter second number");
var num = num1 % num2
document.write("Remainder of"+" "+num1+" and "+num2+" is "+num);
//question 3
var a;
document.write("Value after variable declaration is undefined" + "<br>")
a = 5;
document.write("Initial value: 5" + "<br>")
a = ++a;
document.write("Value after increment is: 6" + "<br>")
a = a + 7;
document.write("Value after addition is: 13" + "<br>")
a = --a;
document.write("Value after decrement is: 12" + "<br>")
a = a % 3;
document.write("The remainder is: 0")
//question 4
var price = 600;
var num = 5;
var total = price * num
document.write("Total cost to buy" + " " + num + " " + "tickets to a movie is " + total +"PKR")
//question 5
var num = +prompt("Number:","Enter number");
document.write("Table of" + " " + num + "<br>")
document.write(num + "x" + "1" + "=" + num*1 + "<br>")
document.write(num + "x" + "2" + "=" + num*2 + "<br>")
document.write(num + "x" + "3" + "=" + num*3 + "<br>")
document.write(num + "x" + "4" + "=" + num*4 + "<br>")
document.write(num + "x" + "5" + "=" + num*5 + "<br>")
document.write(num + "x" + "6" + "=" + num*6 + "<br>")
document.write(num + "x" + "7" + "=" + num*7 + "<br>")
document.write(num + "x" + "8" + "=" + num*8 + "<br>")
document.write(num + "x" + "9" + "=" + num*9 + "<br>")
document.write(num  + "x" + "10" + "=" + num*10)
//question 6
var celsius = +prompt("Enter the temperature in Celsius:")
var fahrenheit = (celsius * 9 / 5) + 32
document.write(celsius + "°C is " +  fahrenheit + "°F"+"<br>")
var f = +prompt("Enter the temperature in Farhenheit:")
var c =  (f - 32) * (5 / 9)
document.write(f + "°F is " + c + "°C")
//question 7
var price1 = 650;
var quan1 = 3;
var price2 = 100;
var quan2 = 7;
var shipping = 100;
item1 = price1 * quan1
item2 = price2 * quan2
var totalcost = item1 + item2 + shipping
document.write("<h1> Shopping Cart </h1><br>")
document.write("Price of item 1 is " + price1 + "<br>")
document.write("Quantity of item 1 is " + quan1 + "<br>")
document.write("Price of item 2 is " + price2 + "<br>")
document.write("Quantity of item 2 is " + quan2 + "<br>")
document.write("Shipping Charges "+shipping + "<br>")
document.write("Total cost of your order is " + totalcost)
//question 8
var totalmarks = 1100;
var marksobtained = 850;
var percentage = marksobtained/totalmarks* 100;
document.write("<h1> Marks Sheet </h1><br>")
document.write("Total Marks: " + totalmarks + "<br>")
document.write("Marks Obtained: " + marksobtained+ "<br>" )
document.write("Percentage: " + percentage + "%"+ "<br>")
//question 9
var usdollars = 10;
var saudiriyals = 25;
var pkr = (usdollars * 104.80) + (28 * saudiriyals)
document.write("<h1> Currency in PKR </h1><br>")
document.write("Total Currency in PKR: " + pkr)
//question 10
var digit = +prompt("Write digit here:")
var calculation = +( (digit+5) * (10)) / 2
alert(calculation)
//question 11
var currentYear = +prompt("Write current year:")
var birthYear = +prompt("Write your birth year:")
var age = (currentYear - birthYear)
document.write("<h1> Age Calculator </h1><br>")
document.write("Current Year: " + currentYear + " <br> ")
document.write("Birth Year: " + birthYear + " <br> ")
document.write("Your Age is: " + age + "<br>")
document.write("They are either " + age + " or " + (++age) + " years old")
//question 12
var radius = 20;
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius * radius
document.write("<h1> The Geometrizer </h1><br>")
document.write("Radius of a circle: "+radius + " <br> ")
document.write("The circumference is: "+circumference + " <br> ")
document.write("The area is: "+area)
//question 13
var favouritesnack = "chocolate chip";
var currentage = 15;
var maxage = 65;
var snackamount = 3;
var total = (maxage - currentage)*snackamount
document.write("<h1> The Lifetime Supply Calculator </h1><br>")
document.write("Favourite Snack: " + favouritesnack + " <br> ")
document.write("Current age: " + currentage + " <br> ")
document.write("Estimated Maximum Age: " + maxage + " <br> ")
document.write("Amount of snacks per day: " + snackamount + " <br> ")
document.write("You will need " + total +" " + favouritesnack +" " + "to last you until the ripe old age of " + maxage)


//Chapter 6-9
//Math Expressions
//question 1
var a = 10;
a = ++a;
a = a++;
a = --a;
a = a--;
document.write("Result:"+"<br>")
document.write("The value of a is: 10"+"<br>"+"<br>")
document.write("<hr>"+"<br>")
document.write("The value of ++a is: 11"+"<br>")
document.write("Now the value of a is: 11"+"<br>" + "<br>")
document.write("The value of a++ is: 11"+"<br>")
document.write("Now the value of a is: 12"+"<br>" +"<br>")
document.write("The value of --a is: 11"+"<br>")
document.write("Now the value of a is: 11"+"<br>" + "<br>")
document.write("The value of a-- is: 11"+"<br>")
document.write("Now the value of a is: 10")
//question 2
var a = 2,b=1;
var result = --a - --b + ++b + b--;
document.write("a is 1" + "<br>")
document.write("b is 2" + "<br>")
document.write("Result is "+ result + "<br>")
document.write("--a;1" + "<br>")
document.write("--a - --b;1" + "<br>")
document.write("--a - --b + ++b;2" + "<br>")
document.write("--a - --b + ++b + b--;3" + "<br>")
//question 3
var name = prompt("Name:","Enter your name");
alert("Hello,"+ name + "!")
//question 5
var num = +prompt("Number:","Enter number");
if (!num) {
    num = 5
}
document.write("Table of" + " " + num + "<br>")
document.write(num + "x" + "1" + "=" + num*1 + "<br>")
document.write(num + "x" + "2" + "=" + num*2 + "<br>")
document.write(num + "x" + "3" + "=" + num*3 + "<br>")
document.write(num + "x" + "4" + "=" + num*4 + "<br>")
document.write(num + "x" + "5" + "=" + num*5 + "<br>")
document.write(num + "x" + "6" + "=" + num*6 + "<br>")
document.write(num + "x" + "7" + "=" + num*7 + "<br>")
document.write(num + "x" + "8" + "=" + num*8 + "<br>")
document.write(num + "x" + "9" + "=" + num*9 + "<br>")
document.write(num  + "x" + "10" + "=" + num*10)
//question 6
var sub1 = prompt("Subject 1:","Enter first subject");
var sub2 = prompt("Subject 2:","Enter second subject");
var sub3 = prompt("Subject 3:","Enter third subject");
var marks1 = +prompt("Marks 1:","Enter first subject marks out of 100");
var marks2 = +prompt("Marks 2:","Enter second subject marks out of 100");
var marks3 = +prompt("Marks 3:","Enter third subject marks out of 100");
var total1 = 100;
var total2 = 100;
var total3 = 100;
var percentage1 = marks1/total1 * 100;
var percentage2 = marks2/total2 * 100;
var percentage3 = marks3/total3 * 100;
var total = total1 + total2 + total3;
var totalmarks = marks1 + marks2 + marks3;
var percentage = totalmarks/total * 100;
document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th>  <th>Percentage</th> </tr> <tr> <td>" + sub1 + "</td> <td>" + total1 + "</td> <td>" + marks1 + "</td>  <td>" + percentage1 + "%" + "</td> </tr> <tr> <td>" + sub2 + "</td> <td>" + total2 + "</td> <td>" + marks2 + "</td>  <td>" + percentage2 + "%" + "</td> </tr> <tr> <td>" + sub3 + "</td> <td>" + total3 + "</td> <td>" + marks3 + "</td>  <td>" + percentage3 + "%" + "</td> </tr>              <tr> <td> Total marks of all subjects </td> <td>" + 300 + "</td> <td> " + totalmarks + "</td>  <td>" + percentage + "%" + "</td> </tr> </table>")


//Chapter 9-11
//User Input & Conditional Statement
//question 1
var city = prompt("City:","Enter your city");
if(city == "Karachi"){
    alert("Welcome to city of lights")
}
//question 2
var gender = prompt("Gender:","Enter your gender");
if(gender == "Male"){
    alert("Good Morning Sir.")
}
else if(gender == "Female"){
    alert("Good Morning Ma'am.")
}
//question 3
var colour = prompt("Colour:","Enter colour");
colour = colour.toLowerCase()
if(colour == "red"){
    alert("Must Stop")
}
else if(colour == "yellow"){
    alert("Ready to move")
}
else if(colour == "green"){
    alert("Move now")
}


//question 4
var carFuel = prompt("Fuel:","Enter your remaining fuel in car in litres");
if(carFuel < 0.25){
    alert("Please refill the fuel in your car")
}
//question 5
//a
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
//output
//given condition for variable a is true
//b
var b = 82; 
if (b++ === 83){
     alert("given condition for variable b is true"); 
}
//output
//condition is not true 
//c
var c = 12;
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true");
} 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
//output
//condition 2 is true
//condition 4 is true
//d
var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}
//output
//the cost equals

//e
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
} 
//output
//True
//f
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
} 
//output
//car is smaller than cat



//question 6
var marksObtained = +prompt("Marks Obtained:","Enter marks obtained in 3 subjects");
var totalmarks = +prompt("Total Marks:","Enter your total marks");
var percentage = marksObtained/totalmarks * 100;
document.write("<h1> Marks Sheet </h1><br>")
document.write("Total marks: " + totalmarks + "<br>")
document.write("Marks obtained: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%" + "<br>")
if(percentage >= 80){
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}
else if(percentage >= 70){
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
}
else if(percentage >= 60){
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
}
else if(percentage < 60) {
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry" + "<br>")
}
//question 7
var num = 5;
var askUser = +prompt("Guess Number:","Guess the secret number");
if(askUser == 5){
    alert("Bingo! Correct answer.")
}
else if(askUser == 4){
    alert("Close enough to the correct answer.")
}

//question 8
var num = +prompt("Number:","Enter number");
if(num % 3 == 0){
    alert("The given number is divisible by 3.")
}

if(num % 3 == 0){
    alert("The given number is divisible by 3.")
}

//question 9
var num = +prompt("Number:","Enter number");
if(num % 2 == 0){
    alert("It is an even number.")
}
else if(num % 2 == 1){
    alert("It is an odd number.")
}
//question 10
var temp = +prompt("Temperature:","Enter temperature");
if(temp > 40){
    alert("It is too hot outside.")
}
else if(temp > 30){
    alert("The Weather today is normal.")
}
else if(temp > 20){
    alert("Today's Weather is cool.")
}
else if(temp > 10){
    alert("OMG! Today's Weather is so cool.")
}
//question 11
var num1 = prompt("First Number:","Enter first number");
var operator = prompt("Operator:","Enter operator");
var num2 = prompt("Second Number:","Enter second number");

alert(num1 + operator + num2)
if(operator === "+"){
    alert((+num1)+(+num2))
}
else if(operator === "-"){
    alert(num1 - num2)
}
else if(operator === "*"){
    alert(num1 * num2)
}
else if(operator === "/"){
    alert(num1 / num2)
}
else if(operator === "%"){
    alert(num1 % num2)
}


//chapter 12-13
//IF ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS
//question 1
var askUser = prompt("Number or String:","Enter number or string");
if(askUser === "A"){
    alert("A = 65 & and this is uppercase")
}
else if(askUser === "a"){
    alert("a = 97 & and this is lowercase")
}
else if(askUser === "Z"){
    alert("Z = 90 & and this is uppercase")
}
else if(askUser === "z"){
    alert("z = 122 & and this is lowercase")
}
//question 2
var num1 = +prompt("Number:","Enter first number");
var num2 = +prompt("Number:","Enter second number");
if(num1 > num2){
    alert(num1)
}
else if(num2 > num1){
    alert(num2)
}
else{
    alert("Both numbers are equal.")
}
//question 3 
var num = +prompt("Number:","Enter number");
if(num > 0){
    alert("It is a positive number.")
}
else if(num < 0){
    alert("It is a negative number.")
}
else if(num == 0){
    alert("This number is zero.")
}
//question 4
var input = prompt("Character:","Enter a string of length 1");
if (input == "a" || input == "A" || input == "e" || input == "E" || input == "i" || input == "I" || input == "o" || input == "O"  || input == "u" || input == "U" ){
   alert("True")
}
else{
    alert("False");
}
//question 5
var password = "kashish@123";
var askUser = prompt("Password:","Enter your password");
if(askUser == password){
    alert("Correct!The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}
//question 6
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
//question 7
var time= prompt("Time:","Enter time ike this 1900 = 7pm");
if(time >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!")
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night!")
}



//Chapter 14-16
//Arrays
//question 1
var studentnames = []
//question 2
var studentnames = new Array();
//question 3
var strings = ["kashish","fatima","123"]
console.log(strings)
//question 4
var numbers = [1000,256,343,890]
console.log(numbers)
//question 5
var boolean = [true,false]
console.log(boolean)
//question 6
var mixarray = ["Maria",4007,false]
console.log(mixarray)
//question 7
var education = ["SSC","HSC","BCS","BS","B.COM","MS","M.Phil.","PhD"]
document.write("<b>Qualification<b><br>")
document.write("1)"+education[0]+"<br>")
document.write("2)"+education[1]+"<br>")
document.write("3)"+education[2]+"<br>")
document.write("4)"+education[3]+"<br>")
document.write("5)"+education[4]+"<br>")
document.write("6)"+education[5]+"<br>")
document.write("7)"+education[6]+"<br>")
document.write("8)"+education[7]+"<br>")


//question 8
var student = ["Fahad","Mahrukh","Salman"]

for (i = 0;i<student.length;i++){
    var studentMarks = [354,440,230]
    for (var j=0;j<studentMarks.length;j++){
        var percentage = studentMarks[i] *100 / 500
        }
        document.write("Score of "+student[i]+"is"+ studentMarks[i]+"."+"Percentage is"+percentage+"%"+"<br>")
    
    }
//question 9
