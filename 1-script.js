var v="1";
var tw="1";
var th="1";
var fr="1";
var fi="1";
var sx="1";
var sv="1";
var eg="1";
var ni="1";
function tie()
{
   if(v!=1)
   {
      
      if(tw!=1)
      {
         
         if(th!=1)
         {
            
            if(fr!=1)
            {
               
               if(fi!=1)
               {
                  
                  if(sx!=1)
                  {
                     
                     if(sv!=1)
                     {
                        
                        if(eg!=1)
                        {
                           
                           if(ni!=1)
                           {
                              alert("TIE!!!  Try Again!!!!");
                              location.reload()
                           }
                        }
                     }
                  }
               }
            }
         }
      }

   }
}





function fini()
{
   var count=0;
   acom=document.getElementById("1").innerHTML;
   bcom=document.getElementById("2").innerHTML;
   ccom=document.getElementById("3").innerHTML;
   dcom=document.getElementById("4").innerHTML;
   ecom=document.getElementById("5").innerHTML;
   fcom=document.getElementById("6").innerHTML;
   gcom=document.getElementById("7").innerHTML;
   hcom=document.getElementById("8").innerHTML;
   icom=document.getElementById("9").innerHTML;
   
   if(acom==bcom)
   {
      if(bcom==ccom)
      {
         if(bcom=="X")
         {
            alert("VICTORY!!!");
            location.reload()

         }
         else if(bcom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   if(gcom==hcom)
   {
      if(gcom==icom)
      {
         if(gcom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(gcom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   if(acom==dcom)
   {
      if(acom==gcom)
      {
         if(acom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(acom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   
   if(acom==ecom)
   {
      if(acom==icom)
      {
         if(acom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(acom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   if(bcom==ecom)
   {
      if(bcom==hcom)
      {
         if(bcom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(bcom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   if(ccom==fcom)
   {
      if(ccom==icom)
      {
         if(ccom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(ccom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   
   if(ccom==ecom)
   {
      if(ccom==gcom)
      {
         if(ccom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(ccom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   if(ecom==dcom)
   {
      if(ecom==fcom)
      {
         if(ecom=="X")
         {
            alert("VICTORY!!!");
            location.reload()
         }
         else if(ecom=="O")
         {
            alert("Sorry you lose!");
            location.reload()
         }
      }
   }
   
}
function random (p)
   {
       
       var o = "O"
       if(p==1)
       {
        if(v==1)
        {
            v=v+1;
          document.getElementById("1").innerHTML=o;
          return v;
        }
        else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }  
       }
       else if(p==2)
       {
          if(tw==1)
          {
             tw=tw+1;
             document.getElementById("2").innerHTML=o;
             return tw;
          }
          else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
            
       }
       else if(p==3)
       {
          if(th==1)
          {
             th=th+1;
             document.getElementById("3").innerHTML=o;
             return th;
          }
          else
          {
             var p = Math.floor(Math.random()*9)+1;
            random(p)   
         }
       }
       else if(p==4)
       {
          if(fr==1)
          {
             fr=fr+1;
             document.getElementById("4").innerHTML=o;
             return fr;
          }
      else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
       }
       else if(p==5)
       {
          if(fi==1)
          {
             fi=fi+1;
             document.getElementById("5").innerHTML=o;
             return fi;
          }
          else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
       }
       else if(p==6)
       {
          if(sx==1)
          {
             sx=sx+1;
             document.getElementById("6").innerHTML=o;
             return sx;
          }
       }
       else if(p==7)
       {
          if(sv==1)
          {
             sv=sv+1;
             document.getElementById("7").innerHTML=o;
             return sv;
          }
          else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
       }
       else if(p==8)
       {
          if(eg==1)
          {
             eg=eg+1;
             document.getElementById("8").innerHTML=o;
             return eg;
          }
          else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
       }
       else if(p==9)
       {
          if(ni==1)
          {
             ni=ni+1;
             document.getElementById("9").innerHTML=o;
             return ni;
          }
          else
        {
         var p = Math.floor(Math.random()*9)+1;
         random(p)   
        }
       }
    

   }
function one()
{   var j="1";
    if(v==j)
    {    
    var xcome="X";
    var q="1";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          one()
       }
    document.getElementById("1").innerHTML=xcome;
    random(p)
    v=v+1;
    fini()
    tie()
    return v;
    }
}
function two()
{
   if(tw==1)
    {
       tw=tw+1;
       var xcome="X";
    var q="2";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          two()
       }
    document.getElementById("2").innerHTML=xcome;
    random(p)
    fini()
    tie()
       return tw;
    }
}
function three()
{
    if(th==1)
    {
       th=th+1;
       var xcome="X";
    var q="3";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          three()
       }
    document.getElementById("3").innerHTML=xcome;
    random(p)
    fini()
    tie()
      return th;
    }
}
function four()
{
    if(fr==1)
    {
       fr=fr+1;
       var xcome="X";
    var q="4";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          four()
       }
    document.getElementById("4").innerHTML=xcome;
    random(p)
    fini()
    tie()
    return fr ;
    }
}
function five()
{
    if(fi==1)
    {
       fi=fi+1;
       var xcome="X";
    var q="5";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          five()
       }
    document.getElementById("5").innerHTML=xcome;
    random(p)
    fini()
    tie()
       return fi;
    }
}
function six()
{
    if(sx==1)
    {
       sx=sx+1;
       var xcome="X";
    var q="6";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          six()
       }
    document.getElementById("6").innerHTML=xcome;
    random(p)
    fini()
    tie()
       return s;
    }
}
function seven()
{
   if(sv==1)
   {
      sv=sv+1;
      var xcome="X";
    var q="7";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          seven()
       }
    document.getElementById("7").innerHTML=xcome;
    random(p)
    fini()
    tie()
       return sv;
   }
}
function eight()
{
    if(eg==1)
    {
       eg=eg+1;
       var xcome="X";
    var q="8";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          return p;
          eight()
       }
    document.getElementById("8").innerHTML=xcome;
    random(p)
    fini()
    tie()
    return eg;
    }
}
function nine()
{
    if(ni==1)
    {
       ni=ni+1;
       var xcome="X";
    var q="9";
    var p = Math.floor(Math.random()*9)+1;
    if(p==q)
       {   
          var p = Math.floor(Math.random()*9)+1;
          nine()
       }
    document.getElementById("9").innerHTML=xcome;
    random(p)
    fini()
    tie()
       return ni;
    }
}
