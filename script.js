            function Amountchange()
            {
                   document.getElementById("txtAmount").value=document.getElementById("amountRange").value;
            }
            function yearchange()
            {
                   document.getElementById("txtyears").value=document.getElementById("yearRange").value;
            }
            function intrestchange()
            {
                   document.getElementById("txtInterest").value=document.getElementById("interstRange").value;
            }
            function calucalte()
            {
              var principle=parseInt(document.getElementById("amountRange").value);
              document.getElementById("principle").innerHTML="THE PRINCIPLE AMOUNT IS:"+principle;
              var years=parseInt(document.getElementById("yearRange").value);
              document.getElementById("years").innerHTML="THE TIME TAKEN :"+years+"yrs";
              var range=parseInt(document.getElementById("interstRange").value);
              document.getElementById("interest").innerHTML="INTEREST IS:"+range+"%";
              var num=parseInt(Math.pow((1+range),years))
              var den=parseInt(Math.pow((1+range),years-1))
              var emi=parseInt((principle*range)*(num/den));
              document.getElementById("emi").innerHTML="THE TOTAL AMOUNT PAY AT THAT TIME:"+emi;        
            }
        
