   
    const formdata=document.querySelector('form')
          formdata.addEventListener('submit',extractingdata )


      let extractingdata =   function (e){
                 e.preventDefault()
                 const inputvalue=document.querySelectorAll('.inputvalue')
                    let array=[]
                 for(let i=0;i<=inputvalue.length-1;i++){
                      array.push(String(inputvalue[i].value))
                 }
                  return array
                }
                
                console.log(extractingdata);
                localStorage.setItem('array', JSON.stringify(extractingdata));

          const question = JSON.parse(localStorage.getItem('extractingdata'));
        //   console.log(question);
          question.forEach((Question)=>{
           console.log(Question);
                 })
           
          




   
        


    
  

 
 