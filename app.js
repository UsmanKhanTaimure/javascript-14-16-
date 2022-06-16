// Chapter 14 to 16;
// Question1;
// var qual = ["SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD"];
// document.write("Qualification"+"<br>"+qual)


// Question2
// var arr = [];
// arr.push("Usman","Khan","taimure");
// document.write(arr);


// Question3
// var city = ["Karachi","Lahore","Peshawar","Kyberpaktunka","Multan","SWAT","K2","Quetta","Kashmir"];
// var arr = [];
// arr.unshift("Usman","khan","Taimure")
// arr.push("Hamza")
// var arr = city.slice(0,5)
// city.splice(1,2,"Usman")
// var copyCity = city.slice(2,6)
// arr.shift()  1st Word remove
// arr.pop() Last Word remove
// console.log(city)
// console.log(copyCity)
            

// Question4
// var stud = ["Usman","Hassan","Hamza"];
// var scor = [200,300,450]
// var tot = [500,500,500];
// var stud1 = scor[0]/tot[0]*100;
// var stud2 = scor[1]/tot[1]*100;
// var stud3 = scor[2]/tot[2]*100;
// document.write("Score is Usman of " + scor[0] + " Percentage : " + stud1 + "<br>")
// document.write("Score is Hassan of " + scor[1] + " Percentage : " + stud2 + "<br>")
// document.write("Score is Hamza of " + scor[2] + " Percentage : " + stud3)


// Question5 
// var color = ["Red","Oranges","Brown","White","Gray","Green"];
// document.write("Orignal Color Array " + "<br>" + color);
// // Part A
// var userchoice = prompt("Enter Your Add color");
// color.unshift(userchoice);
// console.log(color);
// // Part B
// var userchoice = prompt("Enter Your End of color array");
// color.push(userchoice);
// console.log(color);
// // Part C
// color.unshift("Yellow","whiteSmoke");
// console.log(color);
// // Part D
// color.shift();
// console.log(color);
// // Part E
// color.pop();
// console.log(color);
// // Part F
// var userindex = +prompt("Enter Your Color Index Add");
// var color_names = prompt("Enter Your Add Color Name With Index");
// color.splice(userindex,0,color_names);
// console.log(color)
// // Part E
// var userindex = +prompt("Enter Your Index Number to delete");
// var userchoice = +prompt("Enter Your Items to delete");
// color.splice(userindex,userchoice)
// console.log(color)


// Question6
// var ScoreOfStudent = [320,230,480,120];
// var OrderOfScore = ScoreOfStudent.sort()
// console.log(OrderOfScore) 


// Question7
// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List : "+ "<br>" + city + "<br>");
// var Select = city.slice(2,4);
// document.write("Selected Cities List : " + "<br>" + Select)


// Question7
// var arr = ["This","Is","My","Cat"];
// document.write("Array " + "<br>" +arr + "<br>");
// var arr1 = arr.join(" ");
// document.write("Join Method " +"<br>"+ arr1);


// Question8
// var acc = [];
// acc.push("Keyboard");
// acc.push("Mouse");
// acc.push("Printer");
// acc.push("Monitor");
// document.write("Devices" + "<br>" + acc +"<br>");
// document.write("Out:" +"<br>" + acc[0] + "<br>")
// document.write("Out:" +"<br>" + acc[1] + "<br>")
// document.write("Out:" +"<br>" + acc[2] + "<br>")
// document.write("Out:" +"<br>" + acc[3] + "<br>")


// Question9
// var acc = [];
// acc.push("Keyboard");
// acc.push("Mouse");
// acc.push("Printer");
// acc.push("Monitor");
// acc.reverse()
// document.write("Devices" + "<br>" + acc +"<br>");
// document.write("Out:" +"<br>" + acc[0] + "<br>")
// document.write("Out:" +"<br>" + acc[1] + "<br>")
// document.write("Out:" +"<br>" + acc[2] + "<br>")
// document.write("Out:" +"<br>" + acc[3] + "<br>")


// Question8
// var acc = [];
// acc.push("Keyboard");
// acc.push("Mouse");
// acc.push("Printer");
// acc.push("Monitor");
// document.write("Devices" + "<br>" + acc +"<br>");
// for(var i = 0; i<=3; i++){
//     document.write("Out:" + "<br>")
//     document.write(acc[i] + "<br>")
// }


// Question9
// var acc = [];
// acc.push("Keyboard");
// acc.push("Mouse");
// acc.push("Printer");
// acc.push("Monitor");
// document.write("Devices" + "<br>" + acc +"<br>");
// for(var i = 0; i<=3; i++){
//     document.write("Out:" + "<br>")
//     document.write(acc[acc.length-1] + "<br>")
//     acc.pop()

// }


// Question10;
// var phones = ["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("<select>")
// for (var i = 0; i<=phones.length-1; i++){
//     document.write("<option>"+phones[i]+"</option>")
// }
// document.write("</select>")