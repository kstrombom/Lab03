
 function validate(Pass1, Pass2)
 {
     
     if(Pass1.length<8)
     {
         alert("Passwords must be at least 8 characters");
     }     
     else if(Pass1!=Pass2)
     {
         alert("Passwords don't match");
     }

 }
