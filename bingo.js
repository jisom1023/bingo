 // This jQuery function verifies that the HTML document has loaded
 $(document).ready(function()
 {  
   // TODO Create a var called usedArray of type Array with declared size 76 for the used bingo 
   //      numbers when generating the card
   var usedArray = new Array(76);
     for (var i = 0; i < usedArray.length; i++) {
        usedArray[i] = false;
    }
 var usedGen = new Array(76);
     for (var i = 0; i < usedGen.length; i++) {
        usedGen[i] = false;
    }
   
     
     
   /* The baseArray provides the base multiplier value for each column based on
		B = 1 - 15
		I = 16 - 30
		N = 31 - 45
		G = 46 - 60
		O = 61 - 75
   */
   var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);

   
     
     
     
     
   // TODO Create a global var called number and initialize it to 0

     var number = 0;
   
     
     
     
     
     
   // TODO Create a global var called base and initialize it to 0
        
     var base = 0;
     
     
     
          
   // TODO call function init()
    init();
     
    
     
     
     
	// TODO Declare function init()
	// it is the main function of the JavaScript and jQuery that manages
	// the bingo card creation and updating during play
	
	function init(){
		 // TODO Write a for loop that loops 24 times and calls function fillCard() 
		 //      passing the counter var as an argument
            for(var i = 0; i < 24; i++)
            {
                 fillCard(i);
            }

	}
 
     
	// TODO Declare function fillCard(i), it receives with one parameter
	//      This function fills the bingo card

	function fillCard(i){
		 // TODO update global variable base and set it equal to the element in
		 //      array baseArray using the passed in parameter i as the index multiplied
		 //      by the value 15
        
         base = (baseArray[i] * 15);

		 
		 // TODO update global variable number and set it equal to the value of 
		 //      global variable base added to a randomly selected number in the 
		 //      range of 1 - 15
	
		 number = base + Math.floor(Math.random() * (15 - 1 + 1) + 1);
		// TODO Write an if condition that checks if the randomly generated number 
		//      has not been used  
    
        if(usedArray[number] != true)
		{
			// the jQuery updates the HTML tag element with id "cell#"
			// where the # is the random number!
			$('#cell' + i).html(number);
			
			// TODO update the used number array setting the location in the array
			//      to true to indicate that the value has been used
			usedArray[number] = true;
			
			// set the background and text color for new game
			var id = "cell" + i;
			document.getElementById(id).style.backgroundColor = "";
			document.getElementById(id).style.color = "";			
		}
		// TODO Write the else leg of the above if condition 
        else
		{
			// TODO using recursion call this function again
			fillCard(i);
		}
	 }
	 
     function checkGen(){
         var ran = Math.floor(Math.random() * 76);
         
         if (checker != false){
             document.getElementById("demo").innerHTML = "no more numbers";
         }
         if(usedGen[ran] != true){
             usedGen[ran] = true;
             document.getElementById("demo").innerHTML = ran;
         }
         
         else{
             checkGen();
         }
     }
     
     function checker(arr){
         let findOut = arr => arr.every(Boolean);
         return findOut;
     }
     
     
     
	// TODO Declare function resetUsedNumbersArray()
	//      This function resets the used number array for a new card

	function resetUsedNumbersArray(usedArray){
		 // TODO Write a for loop that loops for the length of the array of used 
		 //      numbers and set the value of each array element to false  
                for(var i = 0;  i < usedArray.length; i++)
                    {
                        usedArray[i] = false;
                    }
		
    }
     
    function resetUsedGenArray(usedGen){
		 // TODO Write a for loop that loops for the length of the array of used 
		 //      numbers and set the value of each array element to false  
                for(var i = 0;  i < usedGen.length; i++)
                    {
                        usedGen[i] = false;
                    }
        document.getElementById("demo").innerHTML = "";
		
    }
	 
     
     

     
 
     
//     function myFunction(max,min){
//document.getElementById("demo").innerHTML =
//Math.floor(Math.random() * 72);
//
//    
//}
     
	 // This jQuery function responds to an HTML tag element with id = newCard being clicked
    $('#newCard').click(function() {
        

        // Call the resetUsedNumbersArray() function
        resetUsedNumbersArray(usedArray);
        
         resetUsedGenArray(usedGen);

        // Call the init() function to generate a new bingo card
        init();
        
        
    });
     
     	 $('#binGo').click(function(){
         
      alert( "You got Bingo! Congraulations!!! Press 'Generate a new Bingo Card' to play again!");
         
         
	 });
     
      $('#click').click(function(){

         checkGen();
       
	 });
	 
     
     
     
     
     
     
     
	 // This jQuery function toggles the backgroundColor and text color 
	 // based on what is it currently set to
	 $('td').click(function()
	 {
		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	 });
 });