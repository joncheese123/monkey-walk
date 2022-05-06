var images = [
    "Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",
    ];
    
    //initialize the variable i to 0
    var i ;
    function nextslide() { 
     
       if(i == 9)
         {
           i=0;
         }
        //add images[i] to add new image link to image component.
        document.getElementById("album").src = images[i];
      i++;
     
    }
    
    
    