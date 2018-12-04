    /*
    Project Name:  Recipe Display Application
      
    Author: Maxwell Schwartz 
      
    Date:  12/4/2018

    Filename: index.html
    */
    
    /*global $ */
    
    
    //Displays the next element after the current target
    function display (event) {
        
        $(event.currentTarget).next().fadeIn("slow");
        
    }//end of display
    
    //Attach a listener to h3 elements to invoke display function when clicked 
    $("h3").click(display);