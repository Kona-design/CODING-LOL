<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JAVASCRIPT Basics</title>
</head>
<body>
    <header>
        <h1>JAVASCRIPT Basics</h1>
    </header>

    <main>
        <h2>Variables</h2>

        <h2>Decision Logic - if/else</h2>

        <h2>fuctions</h2>

        <h2>loops</h2>
    </main>
    <!-- when you want to use javascript code, put it between script tags-->
    <script>
        // single line comment
        /* multi line coments */

        // let's create our first varible - a varible is a piece of imformation that program stores
       // camelCase
       // var is less concerned with scope
        var firstName = "Josiah"; // this is a string variable

        // snake_case
        // let is very concerned with scope 
        let first_name = "Josiah"; // this is a string variable

        // JavaScript is a dynaically-type language
        // JavaScript tries to guess what is the data type of your variables
        let age = 25; // JavaScript will assume this is an interger (int) - A whole number

        let pi = 3.14; // JavaSvript will assume this is a float (deciaml point)
    
        let vaildInput = false; // JavaScript will assume that this a boolean - true/false

        let last_name; ""; // we will set up the variable now, and get the value later 
        // this is a vaild wat to set up a variable in javascript
        // in java script, please do not set up your variable without let or var
        middle_name = "sae-jay";

        /* ****** if/else - decision logic *******/

        // if statements tests out the condition and are either true and false; if its true the code inside the {}
        // == is equality / are the values on the both sides the same
        // = is assignment - the value on the left side of the = will become the value on the right side
        // === is where javascript will compare both the value and the data type
        if (age == 5){
            // if the age is 5 do something
            console.log("age is 5");
        }
        else if(age == 18){
            console.log("age is 18, you are an adult");

        }
        else if(age == 25){ 
         console.log("age == 25, car renting is now cheaper");
            // the else is a catch-all
        }
        else{
            console.log("age is not 5");
        }
            function addNumbers(num1, num2){
                return num1 + num2;
        
        }
        for(let i=0; i < 18; i++){
            console.log("i=" + i.toString());
        }
   
        // loop - let us run a chunk of code over and over again
        // nice for working with data, displaying information
        //for loops - a loop that runs a set number of times
        // while loops - a loop that runs an undetermined number of times 

        // for loop
        // the first section of the for lloop is a counter varibale
        // the second section of the for loop is te condition that has to be true for the loop to run
        // the third section of the loop is where we change the value of our counter varible (i)
        // most of the time we ass 1 to the counter using counter ++ which is equal to i = 1 + 1
        for (let i = 0; i < 5; i++){
            //wire the code here to have run 5 times
            console.log("i=" + i);
        }

        // while loop
        // generally speaking it is unclear how many times the wild loop will run
        // works great with user input

        // set up the variable that we want the while loop to text
        let exit = "no";
       
        // test for a condition that once it is no longer true, stop running the loop
        //while loops may run 0 times if the conftion is not true
        // while loops generally speaking run a random number of times
        // while loops can run an infinite number of times(this is bad!!!)
        while(exit != "yes"){
            console.log("test my infinite loop");

            // change the conditon that we arae testing to get out of the loop
            exit = "yes";
        }

        // do while loop
        // the loop runs at least 1 time
        do{
            // do something here
            console.log("do while loop");
        }while(exit !="yes"); // make sure you always place a ; here

        // array syntax
        
        let arrfood = ["pizza", "tacos", "burgers", 'hotdogs']

        console.log(arrfood);
        
        for (let i = 0; i < arrfood.lenth; i++){
            // print
            console.log(arrfood(i));
        }
   </script>
</body>
</html>
