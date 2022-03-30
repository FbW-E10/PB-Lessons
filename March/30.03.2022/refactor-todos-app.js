// Refactor ToDos app - classes revision

class ToDos {
   //###### SET PROPERTIES ######
   //1- Set toDosStore prop array in the constructor method
   // toDosStore = ["Shopping", "Meet with PR department", "Pay bills"];
   constructor(store) {
     this.toDosStore = store;
   }
   //###### READ ######
   /**
    2- Create `renderToDosListTemplate` method to read todos and render in the following format:
 
     ToDo List: 
     1- Shopping 
     2- Meet with PR department 
     3- Pay bills 
    */
   renderToDosListTemplate() {
     if (this.toDosStore.length < 1) {
       return "Todos list is empty!";
     } else {
       let temp = "ToDo List:\n";
       this.toDosStore.map((item, index) => {
         temp += `${index + 1}- ${item}.\n`;
       });
       return temp;
     }
   }
 }
 
 class Actions extends ToDos {
   constructor(store) {
     super(store);
   }
   //##### CREATE ######
   //3- Create a method named `addOne` to add new item to toDosStore.
   addOne(newItem) {
     this.toDosStore.push(newItem);
   }
 
   //4- Create a method named `addMany` to add many new items to toDosStore.
   addMany(...params) {
     //console.log(params); // ["A", "B", "C"]
 
     /**
      let arr = ["A", "B", "C"]
      ...arr ==> "A", "B", "C"
      
      let obj = {name:'john', age:29}
      ...obj ==> name:'john', age:29
 
      */
 
     //1- With concat
     // this.toDosStore = this.toDosStore.concat(...params);
 
     //2- With concat
     // this.toDosStore = this.toDosStore.concat(params);
 
     //3- With push
     this.toDosStore.push(...params);
   }
 
   //##### DELETE ######
   //5- Create a method named `deleteOne` to remove any item by order number. Passing the item order number as argument.
   deleteOne(orderNumber) {
     let elementIndex = orderNumber - 1;
 
     // with filter
     /*this.toDosStore = this.toDosStore.filter(
       (item, index) => index !== elementIndex
     );*/
 
     //with splice
     this.toDosStore.splice(elementIndex, 1);
   }
 
   //6- Create a method named `deleteMany` to remove more then one item from the list by order number.
   deleteMany(...removeItems) {
     // action.deleteMany(2,6) , removeItems = [2,6]
     // !Error => we can’t use splice because splice change the order of the elements in the original array
     /* const cloneArr = [...this.toDosStore];
     removeItems.map((currentOrder) => {
       let currentIndex = currentOrder - 1;
       cloneArr.splice(currentIndex, 1);
     });
     this.toDosStore = cloneArr;*/
 
     // with filter
     let updateArr = this.toDosStore.filter((item, index) => {
       return !removeItems.includes(index + 1);
     });
     this.toDosStore = updateArr;
   }
 
   //##### EDIT ######
   //7- Create a method named `editOne` to edit any item by order number. Passing the item order number as a first argument and the new value as a second argument.
   editOne(orderNumber, newValue) {
     let elementIndex = orderNumber - 1;
     // with splice
     //this.toDosStore.splice(elementIndex, 1, newValue);
 
     // with map
     this.toDosStore = this.toDosStore.map((item, index) => {
       if (index === elementIndex) {
         return newValue;
       }
       return item;
     });
   }
 
   // 8- Create a method named editMany to edit many elements by order number (task).
   /*editMany(...updateItems) {
   //actions.editMany([2, "new item 2"], [4, "new item 4"]);
 
     updateItems.map((item) => {
       this.toDosStore[item[0] - 1] = item[1];
     });
   }*/
 
   /*editMany(orders, newValues) {
   //actions.editMany([2, 4], ["new item 2", "new item 4"]);
 
     orders.map((order, index) => {
       this.toDosStore[order - 1] = newValues[index];
     });
   }*/
 
   /* editMany(itemsObject) {
     //actions.editMany({ 2: "new item 2", 4: "new item 4" });
     
     const objectToArray = Object.entries(itemsObject);
     objectToArray.forEach((item) => {
       this.toDosStore[item[0] - 1] = item[1];
     });
   }*/
 }
 
 const actions = new Actions([
   "Shopping",
   "Meet with PR department",
   "Pay bills"
 ]);
 
 //console.log(actions.toDosStore);
 // Take actions
 // add new item
 actions.addOne("Meet Tommy");
 
 actions.addOne("Call your team leader at 10");
 
 // add many new items
 actions.addMany("A", "B", "C");
 
 // delete one item
 actions.deleteOne(3);
 
 // edit one item
 actions.editOne(5, "New value");
 
 actions.editOne(4, "New value in order 4");
 
 actions.deleteMany(2, 6);
 //actions.editMany([2, "new item 2"], [4, "new item 4"]);
 //actions.editMany([2, 4], ["new item 2", "new item 4"]);
 //actions.editMany({ 2: "new item 2", 4: "new item 4" });
 
 // In the end of the file!
 console.log(actions.renderToDosListTemplate());
 