

   
    const formdata=document.querySelector('form')
          formdata.addEventListener('submit',extractingdata )

          
          let array=JSON.parse(localStorage.getItem('array'))||[];
             
        //    extracting data from field and store in local storage;
          function extractingdata(e){
            e.preventDefault()
            let dataobject={
              question:"",
              Option:[]
             };
                 const inputvalue=document.querySelectorAll('.inputvalue')
                 for(let i=0;i<=inputvalue.length-1;i++){

                    if(i==0){
                     dataobject.question= inputvalue[i].value
                      }
                      else{
                          dataobject.Option.push(inputvalue[i].value)
                      }

                 }
                    array.push(dataobject)
                    localStorage.setItem('array', JSON.stringify(array));
                    inputvalue.forEach(input => input.value = '');
                     
                  
                }

           
        //   rendering data


         function render(arr){
            let ul=document.createElement('ul')
            ul.innerHTML=""
            arr.forEach((item,index)=>{
                const li= document.createElement('li')
                li.innerHTML=`<h3>Question: ${item.question}</h3>`
                const ol= document.createElement('ol')
                item.Option.forEach((opt)=>{
                    const optli=document.createElement('li')
                    optli.textContent=opt
                    ol.appendChild(optli)
                })
                li.appendChild(ol)
                 
            })
            ul.appendChild(li)
         }


             render(array)

    //   
   
            


                
          

          
           
          




   
        


    
  

 
 