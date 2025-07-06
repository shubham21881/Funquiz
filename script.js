  // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });
  
  
  
  
  
  
  
    const container = document.querySelector('#display1') // your display div
          container.style.display='none'
 const startbtn=document.querySelector('#start')
 const quizbox=document.querySelector('.quiz-box')
 startbtn.addEventListener('click',(e)=>{
   quizbox.style.display='none'
          container.style.display='block'

 })
   
   
    const formdata=document.querySelector('form')
          formdata.addEventListener('submit',extractingdata )

          
          let array=JSON.parse(localStorage.getItem('array'))||[];
             
        //    extracting data from field and store in local storage;
          function extractingdata(e){

            e.preventDefault()
            let dataobject={
              question:"",
              Option:[],
              correctanswer:''
             };

                 let radiobtn=document.querySelectorAll('.radio')
                 
                 const inputvalue=document.querySelectorAll('.inputvalue')
                 for(let i=0;i<=inputvalue.length-1;i++){

                    if(i==0){
                     dataobject.question= inputvalue[i].value
                      }
                      else{
                          dataobject.Option.push(inputvalue[i].value)
                      }

                 }

                   for(let i=0;i<radiobtn.length;i++){
                    if(radiobtn[i].checked){
                           dataobject.correctanswer=inputvalue[i+1].value.trim()
                           break
                    } 


                   }



                    array.push(dataobject)
                    localStorage.setItem('array', JSON.stringify(array));
                    render(array)
                    inputvalue.forEach(input => input.value = '');
                     
                  
                }

           
        //   rendering data


        //  function render(arr){
        //     let ul=document.createElement('ul')
        //     ul.innerHTML=""
        //     arr.forEach((item,index)=>{
        //         const li= document.createElement('li')
        //         li.innerHTML=`<h3>Question: ${item.question}</h3>`
        //         const ol= document.createElement('ol')
        //         item.Option.forEach((opt)=>{
        //             const optli=document.createElement('li')
        //             optli.textContent=opt
        //             ol.appendChild(optli)
        //         })
        //         li.appendChild(ol)
                 
        //     })
        //     ul.appendChild(li)
        //  }



function render(arr){
  
    const container = document.querySelector('#display1') // your display div
    container.innerHTML = ""  // Clear previous content

    const ul = document.createElement('ul')

    arr.forEach((item) => {
        const li = document.createElement('li')
        li.innerHTML = `<h3>Question: ${item.question}</h3>`

        const ol = document.createElement('ol')
        item.Option.forEach((opt) => {
            const optli = document.createElement('li')
            
            optli.textContent = opt
             
              ol.addEventListener('click',(e)=>{
                
                if(opt===item.correctanswer){
                  optli.style.backgroundColor="#c7f9cc"
                  optli.style.fontWeight='bold'
                    
                }else{
                optli.style.color="#ffccd5"
                optli.style.fontWeight='bold'
            }
              })

            


            ol.appendChild(optli)
        })

        li.appendChild(ol)
        ul.appendChild(li)
    })

    container.appendChild(ul)
  const completed=document.createElement('button')
     completed.textContent='completed';
     container.append(completed)
    
     
}

    render(array)

// console.log(array);


 const countdata=document.querySelectorAll('ol li')
  countdata.forEach((li)=>{
    li.addEventListener('click',(e)=>{
      // if(e.target.textContent===)
      console.log("shubham");
      
    })
  })
 
   















            
    //   
   
            


                
          

          
           
          




   
        


    
  

 
 