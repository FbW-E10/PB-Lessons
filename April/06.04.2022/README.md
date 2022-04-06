# Advanced Test - Programming Basics

## Test Instructions
* Work from the `index.js` file provided in this repository.
* There are also [German Instructions](./README%20(de).md) available.
* Follow all of the instructions below to complete the test.
* **Important**: Make sure that the names of your variables/functions/classes match the names in the instructions below.
* You can check whether your answers pass the unit tests provided. However, do not spend too much time trying to fix your issues to make them pass the tests - move on and try to attempt all questions.
* Most tasks require to write a function. Make sure your fuction returns the expected results as a value
* call your functions to test them, and print the return values to the console.
* Make sure to commit and push your test.
* Good luck!

## Data Structure

### A - Objects 
#### A-1. Key Value Pairs (5 Points)
* Create an object `profileData`. 
* Add 4 key value pairs to the object: `name`,  `surname`, `age` and `city`.

### A-2. Object to Array (5 Points)
* Write a function `convertObjectToArray` 
* It should take an object as an argument.
* It should return a nested array of key value pairs.
* See the example below.

    **Given Object**
    ```javascript
    example = {
        "1": 10, 
        "2": 20, 
        "3": 30
    }
    ```

    **Expected Output**: 
    ```javascript
    > console.log(convertObjectToArray(example));
    [ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]
    ```

### B - Arrays 

#### B-1. Data Manipulation (10 Points)
* Create a function `convertArrayData`.
* It should take an array as an argument.
* Use array methods to manipulate the data the array below. 
* The first two items in the array should switch positions.
* The third item should be replaced by an item containing "milk".
* Return the changed array.

    **Original Array**
    ```javascript
    let beverages = ["coffee", "tea", "juice"];
    ```
    Call your function to test it, and print the result to the console.

    **Expected output**
    ```javascript
    > console.log(convertArrayData(beverages));
    [ 'tea', 'coffee', 'milk' ]
    ```

#### B-2. Data Conversion (15 Points)
* Create a function `convertArraysToObject`. 
* It should take two arrays as arguments.
* first array `cities` should contain city names.
* second array `areas` should contain strings with the cities areas in square kilometres 
* convert given arrays into object, with key value pairs using the Array method `reduce`
* return the object as the result of your function.

    **Original Arrays**
    ```javascript
    let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];
    
    let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];
    ```

    Call your function and log the result to the console.

    **Expected output**
    ```javascript
    > console.log(convertArraysToObject(cities, areas));
    {
    Berlin: '891.68 km2',
    Hamburg: '755.3 km2',
    Munich: '310.7 km2',
    Stuttgart: '207.35 km2',
    Duesseldorf: '217.41 km2'
    }
    ```
#### B-3. Create Grid (10 Points)
* Create a function `createGrid`
* It should return a nested array representing a 2D grid, filled with a char.
* It should accept two arguments: 
    * `size` (which determines the number of nested arrays and the number of elements in each nested array) and 
    * `char` (which determines the characters in each nested array). 

    Call your function and print the return value to the console. 

    **Example and expected output:**
    ```javascript
    console.log(createGrid(3, "*"));
    [ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]
    ```

#### B-4. Word Converter (10 Points)
* Create a function `wordConverter`.
* It should take an array of words as an argument and a string as a word suffix.
* Use an array method, to add the suffix to the end of all words. 
* **Important**: Do **not** use a loop to complete this task.
* Look at the expected output below. 

    **Example**
    ```javascript
    let adjectives = ["smart", "kind", "sweet", "small", "clear"];
    ```
    Call your function and print the returned value to the console.

    **Expected output**
    ```javascript
    > console.log(wordConverter(adjectives, "er"));
    [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
    ```
#### B-5. Hour Calculation (10 Points)
* Create a function `calculateHours`
* It should expect an array of objects as an argument (see example below)
* it should calculate how many hours (total) this person worked in the week based on items in the given array
* **Note**: Assume, that start is always morning time, end is always afternoon. (No overnight shifts to be expected) 

    **Example array of Working Hours**
    ```javascript
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];
    ```
    Call your function and print the return value to the console.

    **Expected Output**
    ```javascript
    > console.log(calculateHours(hourTracking));
    36
    ```

### C - Classes (10 Points)
* Create a blueprint for a course at DCI - using the `class` syntax in javascript. 
* Write a class named `Course` 
* Add a constructor to initialize the properties in the given order.
* Class' properties: 
    * the `teacher` as a string, 
    * the `type` of course, whether the group is learning "marketing" or "web development"
    * the `number` of students taking the course.
* Class' methods:
    * `spaceNeeded` that calculates how big a classroom should be depending on the number of students taking the course: 1 student =  2m². 
        * E.g. If a course has 10 students, then return: "The classroom should be 20m²."
    * `details` to return all the information of the course: "This is a web development course taught by John Smith. There are 10 students taking the course." 
        * fill in the `teacher`, `type` and `number` from your class' properties.
    * **Note**: Please use the exact phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc. 

* Create an instance of your class, and call your methods. Printing their result values to the console.

    **Example (for an instance with teacher John, type web development and a number of 22 students)**
    ```javascript
    > console.log(course.spaceNeeded());
    The classroom should be 44m².

    > console.log(course.details());
    This is a web development course taught by John. There are 22 students taking the course.
    ```

### D - Problem Solving 

#### D-1. Format your string (10 Points)

* Write function `capitalizeFirstLetter` 
* It should accepts a string as an argument.
* If the argument is no string (e.g. 123 or true) convert it to a string first.
* The function should convert the first character of each word to uppercase. 
* **Example** _the quick brown fox_ → _The Quick Brown Fox_. 
* return the changed string.
* Call your function and print the return value to the console.

    **Example call**
    ```javascript
    > console.log(capitalizeFirstLetter("hey there")); 
    Hey There
    
    > console.log(capitalizeFirstLetter(true));
    True
    ```
#### D-2. Validation (15 Points)
* A PIN is a **P**ersonal **I**dentification **N**umber (as you are used with bank cards and unlocking your mobile phone)
* Create the function `validPin`
    * **Note:** by convention new words in function names (also acronyms) begin with uppercase letters, but continue with lowercase. Write the function as given.
* Look at the unit tests (see file `testing/test.js` search the comment `/* PIN check */` ) for validating a pin.
* The function should fulfill the requirements of the unit tests.

    **Requirements**:
    * The pin code must consist of only numerical digits.
    * The pin code must be 4 digits long. 
    * The pin should have at least **two** different digits.
    * The pin code's last digit should be even (0, 2, 4, 6, 8).
    * The sum of the pin codes digits should add up to at least 5. 

* The function should print `true` if the pin meets all the requirements and `false` if it does not. 

* Call your function with some examples, and print the return values to the console.

    **Examples**
    ```javascript
    > console.log(validPin("1234"));
    true
    > console.log(validPin("1235"));// last number should be even
    false 
    > console.log(validPin("wwww"));// should only consist of numbers
    false 
    > console.log(validPin("12345"));// should be 4 digits, not 5
    false 
    > console.log(validPin("2222"));// not at least 2 different digits
    false 
    > console.log(validPin("1000"));// sum of digits is less 5
    false 
    > console.log(validPin("2224"));
    true 
    ```

## **Testing with Jest**
* Jest is a node package to provide simple unit tests.

* The `test.js` file and `package.json` file have been provided for you.

* Firstly, run the following command in the appropriate folder to install and save jest as a dependency.
    ```
    npm install --save-dev jest
    ```
* Run the following command in order to run the test. The script has already been added to the `package.json` file.
    ```
    npm run test
    ```
* For more information, you can refer to Jest's [documentation](https://jestjs.io/docs/en/getting-started). If interested read this in detail **after taking the test**.