 //Ensure DOM is ready first
'use strict';

 $(function() {
   var turn = 0; //sets turn variable to 0 within function so it's accessible throughout scope of function

   $('.square').on('click', function() { //binds event handler to anything with class of square
     //event handler runs when any element with class of square is clicked
    //  alert("A square was clicked");
    var self = $(this);

    if ( self.text() === '') { //conditional checks whether square has a value assigned
      if (turn % 2 === 0) { // conditional to decide if X or O displayed depending on whether turn object is divisible by 2 or not
        self.text('X');
      } else {
        self.text('O');
      }

      turn++; // adds 1 per turn to counter
    }
    else {
      alert("Square already occupied! Pick another!") //adds alert to display if square has value
    }
    //this = the DOM element on which the event occured (value always changing), the $ makes it a jQuery object
   });
 });
