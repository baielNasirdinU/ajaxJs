const request=new XMLHttpRequest()
request.addEventListener('readystatechange',()=>{
    console.log(request.readyState);
    if (request.readyState===4 && request.status===200 ) {
        const data=JSON.parse(request.responseText)
        
    }else if (request.readyState===4){
        console.log('maalymat jok');
    }
   
})


request.open('GET',"https://jsonplaceholder.typicode.com/todos/")
request.send()