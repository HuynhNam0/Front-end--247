var Validator = function(options){
  if(document.querySelector(options.form)){
    let valuesForm = {};
     let listRulesElement = {};
     let form = document.querySelector(options.form);
      options.rules.forEach(rule => {
      
          if(!Array.isArray(listRulesElement[rule.element])){
              listRulesElement[rule.element] = [rule.test]
          }
          else{
              listRulesElement[rule.element].push(rule.test);
          }
      });
  for(var el  in listRulesElement){
      inputElement = form.querySelector(el)
      inputElement.onblur =function(e){
          var mess = undefined;
          listRulesElement["#"+this.id].forEach(test => {
              if(mess === undefined){
                  mess = test(this.value);
              }

          });
          
         if (mess!==undefined){
          this.parentElement.nextElementSibling.innerHTML = mess
         }
         else{
          this.parentElement.nextElementSibling.innerHTML = '';
         }
          
      }
  }
  
  if(document.querySelector(options.download)){
          download = document.querySelector(options.download);
          download.onclick =function(e){
              e.preventDefault()
              var check = true;
              var mess= undefined;
          for(var el  in listRulesElement){
            
              inputElement = form.querySelector(el);
              valuesForm[inputElement.id] = form.querySelector(el).value;
              listRulesElement[el].forEach(test => {
                      if(mess === undefined){    
      
                          mess = test(valuesForm[inputElement.id]);                  
                      }
                  }); 
                 if(mess !== undefined){
               
                  inputElement.parentElement.nextElementSibling.innerHTML = mess;
                  check = false;
                  
                   }  
          }
              if(check===true){
                  console.log(valuesForm);

              }
  
          }  
              
      }  
      
  }
}


Validator.isRequired =function(element){
  return {
      element:element,
      test: function(value){
          return value.trim() =="" ? "this field is required": undefined;

      }
  }
}
Validator.isEmail = function(element){
  return {
      element: element,
      test: function(value){
          patternEmail =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
          return patternEmail.test(value) ? undefined: "This field is Email!";
      }    
  }
}
Validator.isPassword =function(element){
  return{
      element: element,
      test: function(value){
          patternPassword= /.{8,}/;
          return patternPassword.test(value)? undefined: "Password containing at least 8 characters!";
      }
  }
}
