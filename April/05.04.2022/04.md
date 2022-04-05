## Javascript Assignments
![enter image description here](https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif)

 1. Create a function to merge two arrays.
 this function should have 2 arguments: exampe :
  ```javascript
concat([4, 8, 9], [2, 6, 8]) ➞ [4, 8, 9, 2, 6, 8]
```
 2. Create a function that accepts an array and returns the last item in the array.
  ```javascript
getLast([1, 2, 3]) ➞ 3
getLast(["cat", "rabbit", "penguin"]) ➞ "penguin"
```
 3. Create a function that takes an array and a string as arguments and return the index of the string.
  ```javascript
findIndex(["Hi", "FBW6", "DCI", "Hamburg"], "FBW6") ➞ 1
```
 4. create a function to Skip the Drinks with Too Much Sugar, this function takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
Drinks that contain too much sugar (in this challenge) are:

    Cola
   Fanta
  ```javascript
skipSugarDrinks(["fanta", "cola", "water"]) ➞ [water]
```

 5. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. **(222) 222-222**).
 Don't forget the space after the closing parenthesis.
 ```javascript
formatPhoneNumber([0, 1, 5, 7, 5, 5, 4, 4, 6, 8]) ➞ "(015) 755-4468"

```

 6. Write a function that returns the number of users in a chatroom based on the following rules:
 - If there is no one, return `"no one online"`.
 - If there is 1 person, return `"[user1] online"`.
 - If there are 2 people, return `[user 1] and [user 2] online"`.
 - If there are `n>2` people, return the first two names and add `"and n-2 more online"`.
 
 7. Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
  ```javascript
capMe(["mansour", "franco", "daniel", "sara"]) ➞ ["Mansour", "Franco", "Daniel", "Sara"];
capMe(["lana", "KOSTAS", "mara", "steven"]) ➞ ["Lana", "Kostas", "Mara", "Steven"]

```
Notice in the second example above, "KOSTAS" is returned as "Kostas".

 8. Write a function take two arguments ( object , string) that returns `true` if the object contains the specified string as a  key, and `false` otherwise. (Does the Object Contain a Given Key?)
```javascript
keyFinder({ name: 'Rania', age: 37, id: 101 }, "address") ➞ false
keyFinder({ isProgrammer: true, city: 'Paris', hasKids: true }, "city") ➞ true

```
 9. Write a function that converts an object into an array of keys and values.
```javascript
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
```
10. Create the function that takes an array with objects and returns the sum of people's budgets.
```javascript
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])
```