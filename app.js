// Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// 

// var number = prompt("enter a number")

// if (number % 3 == 0) {
// console.log("Number divisible by 3")
// }else{
//     console.log("number is not divisible by 3")
// }
       
// Write a program that checks whether the given input is an even
// number or an odd number

// var number = prompt("enter a number")
// if (number % 2 == 0) {
//     console.log("Number is even")}
//     else{
//         console.log("number is not even")
//     }

// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young"


// var age = prompt("enter your age")
// if(age > 18){
//     console.log("Old Enough")
// }else{
//     console.log("Too Young")
// }
// var name = "Mukhtar"
// var greetUser = prompt("enter your name")
// if(greetUser == myName){
//     console.log("Hello, ! What a pleasant surprise!")
// }

// def check_character_type(char):
//     # Check if the character is a digit
//     if '0' <= char <= '9':
//         return "The character is a number."
//     # Check if the character is an uppercase letter
//     elif 'A' <= char <= 'Z':
//         return "The character is an uppercase letter."
//     # Check if the character is a lowercase letter
//     elif 'a' <= char <= 'z':
//         return "The character is a lowercase letter."
//     else:
//         return "The character is not a number or a letter."

// # Input from the user
// char = input("Enter a character: ")

// # Ensure only one character is processed
// if len(char) == 1:
//     result = check_character_type(char)
// else:
//     result = "Please enter a single character."

// def convert_time_24_to_12(time):
//     # Check if the input is valid
//     if not (0 <= time <= 2359):
//         return "Invalid time. Please enter a time between 0000 and 2359."

//     # Extract hours and minutes
//     hours = time // 100
//     minutes = time % 100

//     # Check for valid minutes
//     if not (0 <= minutes < 60):
//         return "Invalid minutes. Please enter a valid time."

//     # Determine AM or PM
//     if hours < 12:
//         period = "AM"
//         if hours == 0:
//             hours = 12  # Midnight case
//     else:
//         period = "PM"
//         if hours > 12:
//             hours -= 12  # Convert 13-23 hours to 1-11 PM

//     # Format the time
//     formatted_time = f"{hours}:{minutes:02d} {period}"
//     return formatted_time

// # Input from the user
// time_input = int(input("Enter time in 24-hour format (e.g., 1900): "))


// var num = 4
// var year = prompt("Enter Year")
// if(year % 4 == 0){
//     console.log("Leap year")
// }else{console.log("not leap year")}

// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }else{
//     console.log("you are not Fahad")
// }


// var hour = 13
// var hour = prompt("Ener Hour")
// if(hour < 18){
//     console.log("Good Day")
// }else{
//     console.log("Good Eevening")
// }

// var num1 = prompt("Enter your number")
// var num2 = prompt("Enter your number")

// if(num1 > num2){
//     console.log("number 1 is greater")
// }else{
//     console.log("number 2 is greater")
// }

// var num = prompt("Enter your number")

// if(num > 0){
//     console.log("Positve Integer")
// }else if (num < 0){
//     console.log("Negative Integer")
// }else{
//     console.log("Number is Zero")
// }
