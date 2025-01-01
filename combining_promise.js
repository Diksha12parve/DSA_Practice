/*
* http://dummyjson.com/products/1
* http://dummyjson.com/users/1
* http://dummyjson.com/posts/1
*/

const firstObject = fetch("http://dummyjson.com/products/1")
                         .then(response => response.json());

const secondObject =  fetch("http://dummyjson.com/users/1")  
                        .then(response => response.json());

const thirdObject = fetch("http://dummyjson.com/posts/1")   
                         .then(response => response.json());
                         
// Promise.all([firstObject, secondObject, thirdObject])
//  .then(responses => {
//     for (const response of responses){
//       console.log(response);
//     } 
//  }).catch(err => console.log(`Failed to fetch ${err}`));

 Promise.any([firstObject, secondObject, thirdObject])
         .then(response => {
            console.log(response); 
         })
         .catch(err => console.log(`Failed to fetch ${err}`));
                         
 
                        