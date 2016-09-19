 //Ensure DOM is ready first
'use strict';

 $(function() {
   var turn = 0; //sets turn variable to 0 within function so it's accessible throughout scope of function

   function checkWin(){
     var one = $('#1').text();
     var two = $('#2').text();
     var three = $('#3').text();
     var four = $('#4').text();
     var five = $('#5').text();
     var six = $('#6').text();
     var seven = $('#7').text();
     var eight = $('#8').text();
     var nine = $('#9').text();

     if ((one === 'X' && two === 'X' && three === 'X') || (one === 'O' && two === 'O' && three === 'O')){
       alert("You Win!");
     }
     else if ((four === 'X' && five === 'X' && six === 'X') || (four === 'O' && five === 'O' && six === 'O')){
       alert("You Win!");
     }

     else if ((seven === 'X' && eight === 'X' && nine === 'X') || (seven === 'O' && eight === 'O' && nine === 'O')){
       alert("You Win!");
     }

     else if ((one === 'X' && four === 'X' && seven === 'X') || (one === 'O' && four === 'O' && seven === 'O')){
       alert("You Win!");
     }

     else if ((two === 'X' && five === 'X' && eight === 'X') || (two === 'O' && five === 'O' && eight === 'O')){
       alert("You Win!");
     }

     else if ((three === 'X' && six === 'X' && nine === 'X') || (three === 'O' && six === 'O' && nine === 'O')){
       alert("You Win!");
     }

     else if ((one === 'X' && five === 'X' && nine === 'X') || (one === 'O' && five === 'O' && nine === 'O')){
       alert("You Win!");
     }

     else if ((seven === 'X' && five === 'X' && three === 'X') || (seven === 'O' && five === 'O' && three === 'O')){
       alert("You Win!");
     }

   };


   $('.square').on("click", function()
     { //binds event handler to anything with class of square
     //event handler runs when any element with class of square is clicked
    //  alert("A square was clicked");
    var self = $(this);

    if ( self.text() === ('')) { //conditional checks whether square has a value assigned
      if (turn % 2 === 0) { // conditional to decide if X or O displayed depending on whether turn object is divisible by 2 or not
        self.text('X');
      } else {
        self.text('O');
      }
      turn++; // adds 1 per turn to counter
    }
    else {
      alert("Square already occupied! Pick another!"); //adds alert to display if square has value
    };
    //this = the DOM element on which the event occured (value always changing), the $ makes it a jQuery object

    if (turn <= 9){
          checkWin();
        }

    else {
      alert("It's a draw");
    }

   });
 });
