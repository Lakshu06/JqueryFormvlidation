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
       $(id1).next().remove("error");
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
                     
                       fieldRequired(Fname) ;
                            $("#Fname").next().remove();
                            var x = /^[a-zA-Z\s]+$/;
                             if(fieldRequired(Fname) && !x.test($("#Fname").val()) )
                               {
                                $("#Fname").after("<div class=error > please enter in apbhabets</div>");
                                return false
                               } 
                            else
                                {
                                  $("#Fname").next().remove("error");
                                  return true;
                                }                                             
                    }
//mail validation    
            function emailvalidate()
                   {
                                                       
                       fieldRequired(mail);
                    $('#mail').next().remove();
                    var x =/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/;
                     if(fieldRequired(mail) &&  !x.test($('#mail').val())  )
                       {
                        $('#mail').after("<div class=error > please enter valid email address</div>");
                        return false;
                       
                       } 
                    else
                        {
                        $('#mail').next().remove("error");
                          return true;
                          
                        }         
                                      
                   }
           
  //validation on contact no.
    function contactvalidate()
        {
         
          fieldRequired(cont); 
                  $("#cont").next().remove("error");            
                  
                              if(fieldRequired(cont) && isNaN($("#cont").val()))
                              {
                                $("#cont").after("<div class = error>please enter digits</div>");
                          
                              }
                              else
                            $("#cont").next().remove("error");            
        }
//validation for address1   
function address1validate()
    {
       
            fieldRequired(adds1)  ;       
     }

//validation for address2
function address2validate()
    {
            fieldRequired(adds2);                              
    }

//date of birth validation
     function dateofBvalidate()
        {
            fieldRequired(Dob);
                                                    
        }
//gender validation
      function gendervalidation()
      {
                            
              if($('input[type=radio][name=Gender]:checked').length == 0)
                      {
                       
                        $("#genspan").text("please select your gender");
                       return false;
                      }
               else
               $("#genspan").text("");
                 return true;
                  
                       
      }
//cityvalidation
   function cityvalidate()
        {
                    
                    $("#seccity").next().remove(".error");
                        if($("#seccity").val() == "Select")
                        {
                          $("#seccity").after("<div class=error >please select your city</div>");
                          return false;
                        }        
                    else
                        $("#seccity").next().remove(".error");
                        return true;
          }
//validation of state
 function statevalidate()
      {
               
                $("#secstate").next().remove(".error");
                      if($("#secstate").val() == "Select")
                      {
                            $("#secstate").after("<div class=error >please select your city</div>");
                            return false;
                      }        
                      else
                            $("#secstate").next().remove(".error");
                            return true;

    }
    //validation of country
 function countryvalidate()
        {
                var countryV=document.getElementById("seccountry") ;
                $("#seccountry").next().remove(".error");
                      if($("#seccountry").val() == "Select")
                      {
                              $("#seccountry").after("<div class=error >please select your city</div>");
                              return false;
                      }        
                      else
                              $("#seccountry").next().remove(".error");
                              return true;
         }

   function restto()
   {
    $(':input').next().remove(".error");
   }