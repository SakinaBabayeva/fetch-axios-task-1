const customers=document.getElementById('customers')
const firstinp=document .getElementById('firstinp')
const secondinp=document .getElementById('secondinp')
const threeinp=document .getElementById('threeinp')
const btn=document .getElementById('btn')



//Axios Get 
// axios.get ('https://northwind.vercel.app/api/customers')
// .then(res=>{
//     console.log(res.data);
// })





//Axios Post method

// function(axiosdel){
//     axios.post ('https://northwind.vercel.app/api/customers'{
//  id: firstInput.value,
// companyName: secondInput.value,
//  contactName: threeInput.value
// })
// .then(res=>{
//     console.log('data gonderildi');

// })

// }

// btn .addEventlistener('click' ,axiosdel)



//Axios update method

// btn.addEventListener('click', function () {
//   axios.put(`https://northwind.vercel.app/api/customers/${firstinp.value}`, {
//      companyName: firstinp.value,
//      contactName: secondinp.value
// })
// .then(res => {
//  console.log(res);
//  })
//  })


 //Fetch get method 
// function(fetchget) {

//  fetch ('https://northwind.vercel.app/api/customers')
//  .then(res=>res.json())
//  .then (data=>{
//     data.forEach( item=>{
//         const p =document.createElement('p')
//         p.innerText= '${item.id},${item.companyname},${item.contactname},${item.contactTitle},${item.address},${item.street},${item.city},${item.region},${item.postalCode},${item.country},${item.phone}'
//         customers.appendChild (p)
//     })
//  })


// }

// window.onload =()=>{
//     fetchget()
// }
 
//Fetch post
// function(fetchpost){
// fetch('https://northwind.vercel.app/api/customers')
// method: 'POST'
// headers :{
//     "Content-Type":"application/json",
// },
// body:JSON.stringify({newCustomer}),
// .then(res=>res.json())
// .then((data)=>{
//     console.log(data);

// })


// }



//Fetch delete
// function(fetcdel){
// fetch('https://northwind.vercel.app/api/customers/${firstinp.value}',{
// method:"DELETE",

// }) then (res=>console.log(res));
    
// }

// btn .addEventListener('click',fetcdel)




