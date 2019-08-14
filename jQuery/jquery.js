function fieldRequired(id1)
{
  $(id1).next().remove();
  if(id1.value =="")
    {
       $(id1).after("<div class=error> please enter required details</div>");
       return false;
    }
else
    {         
       $(id1).next().remove(".error");
       return true;
    }
}

function validate()
            {
                  fullName();
                  emailvalidate();
                  contactvalidate();
                  address1validate();
                  address2validate();
                  dateofBvalidate();
                  gendervalidation();
                  cityvalidate();
                  countryvalidate();
                  statevalidate()
            }
//function for  fullname validation
              function fullName()
                   {
                      var fname= document.getElementById("Fname");
                       fieldRequired(fname) ;
                            $(fname).next().remove();
                            var x = /^[a-zA-Z\s]+$/;
                             if(fieldRequired(fname) && !x.test(fname.value) )
                               {
                                $(fname).after("<div class=error > please enter in apbhabets</div>");
                                return false
                               } 
                            else
                                {
                                  $(fname).next().remove("error");
                                  return true;
                                }                                             
                    }
//mail validation    
            function emailvalidate()
                   {
                        var emailId= document.getElementById("mail");                                 
                    fieldRequired(emailId)
                    $(emailId).next().remove()
                    var x = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@+ [A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
                     if(fieldRequired(emailId) && !x.test(emailId.value)  )
                       {
                        $(emailId).after("<div class=error > please enter valid email address</div>");
                        return false
                       } 
                    else
                        {
                          $(emailId).next().remove("error");
                          return true;
                        }          
                                      
                  }
           
  //validation on contact no.
    function contactvalidate()
        {
          var contNumber= document.getElementById("cont");
          fieldRequired(contNumber); 
                  $(contNumber).next().remove("error");            
                  
                              if(fieldRequired(contNumber) && isNaN(contNumber.value))
                              {
                                $(contNumber).after("<div class = error>please enter digits</div>");
                          
                              }
                              else
                            $(contNumber).next().remove("error");            
        }
//validation for address1   
function address1validate()
    {
       var addss1= document.getElementById("adds1");
            fieldRequired(addss1)  ;       
     }

//validation for address2
function address2validate()
    {
            var addss2= document.getElementById("adds2");
             fieldRequired(addss2);                              
    }

//date of birth validation
     function dateofBvalidate()
        {
                var dateOB= document.getElementById("Dob");
                fieldRequired(dateOB);
                                                    
        }
//gender validation
      function gendervalidation()
      {
              genV=document.getElementById("gen");
              genL=document.getElementById("genspan");
              
              if($('input[type=radio][name=Gender]:checked').length == 0)
                      {
                       
                        $(genL).text("please select your gender");
                       return false;
                      }
               else
               $(genL).text("");
                 return true;
                  
                       
      }
//cityvalidation
   function cityvalidate()
        {
                    var cityV=document.getElementById("seccity") ;
                    $(cityV).next().remove(".error");
                        if(cityV.value == "Select")
                        {
                          $(cityV).after("<div class=error >please select your city</div>");
                          return false;
                        }        
                    else
                        $(cityV).next().remove(".error");
                        return true;
          }
//validation of state
 function statevalidate()
      {
                var stateV=document.getElementById("secstate") ;
                $(stateV).next().remove(".error");
                      if(stateV.value == "Select")
                      {
                            $(stateV).after("<div class=error >please select your city</div>");
                            return false;
                      }        
                      else
                            $(stateV).next().remove(".error");
                            return true;

    }
    //validation of country
 function countryvalidate()
        {
                var countryV=document.getElementById("seccountry") ;
                $(countryV).next().remove(".error");
                      if(countryV.value == "Select")
                      {
                              $(countryV).after("<div class=error >please select your city</div>");
                              return false;
                      }        
                      else
                              $(countryV).next().remove(".error");
                              return true;
         }

   function restto()
   {
    $(':input').next().remove(".error");
   }