const data = {

    Mark: [
    
    {
    
    title: "read more about js",
    
    completed: true,
    
    },
    
    {
    
    title: "call a friend",
    
    completed: false,
    
    },
    
    {
    
    title: "make dinner",
    
    completed: true,
    
    },
    
    {
    
    title: "watch a movie",
    
    completed: false,
    
    },
    
    {
    
    title: "go to the grocery shop",
    
    completed: true,
    
    },
    
    ],
    
    Lara : [
    
    {
    
    title: "go to the doctor",
    
    completed: false,
    
    },
    
    {
    
    title: "feed the dog",
    
    completed: true,
    
    },
    
    {
    
    title: "do some sports",
    
    completed: false,
    
    },
    
    {
    
    title: "clean my car",
    
    completed: true,
    
    },
    
    {
    
    title: "get new clothes",
    
    completed: false,
    
    },
    
    ],
    
    Michael: [
    
    {
    
    title: "sing a song",
    
    completed: false,
    
    },
    
    {
    
    title: "sleep well",
    
    completed: false,
    
    },
    
    {
    
    title: "love my self",
    
    completed: true,
    
    },
    
    {
    
    title: "go out for drinks",
    
    completed: false,
    
    },
    
    {
    
    title: "read a nice book",
    
    completed: true,
    
    },
    
    ]

    
    }
    
    function getDoneTasks(obj){
        const result = { count:0 , name:""}; // the person who completed tasks 
        let count = 0
     for(let key in obj){
        count =  obj[key].filter(item =>{
           return item.completed 
         }).length;
         if(count > result.count){
             result.count = count;
             result.name = key
         }

         console.log(count,key);
     }
    console.log(result);
    console.log(result.name,"completed ",result.count , "tasks")
    }

    getDoneTasks(data);