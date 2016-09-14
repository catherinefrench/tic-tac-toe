 //Ensure DOM is ready first

 $(function() {
   var turn = 0; //sets turn variable to 0 within function so it's accessible throughout scope of function 

   $('.square').on('click', function() { //binds event handler to anything with class of square
     //event handler runs when any element with class of square is clicked
    //  alert("A square was clicked");
    $(this).text('X');
    //this = the DOM element on which the event occured (value always changing), the $ makes it a jQuery object
   });

 });
