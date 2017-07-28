	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Constitutions should consist only of general provisions; the reason is that they must necessarily be permanent, and that they cannot calculate for the possible change of things.",
			name:"Alexander Hamilton"
	    },
	    {
	    	quote:"The passions of a revolution are apt to hurry even good men into excesses.",
	    	name:"Alexander Hamilton"
	    },
	    {
	    	quote:"I have thought it my duty to exhibit things as they are, not as they ought to be.",
	    	name:"Alexander Hamilton"
	    },
	    {
	    	quote:"Men are rather reasoning than reasonable animals, for the most part governed by the impulse of passion.",
	    	name:"Alexander Hamilton"
	    },
        {
	    	quote:"Why has government been instituted at all? Because the passions of men will not conform to the dictates of reason and justice, without constraint.",
	    	name:"Alexander Hamilton"
	    },
        {
	    	quote:"To cherish and stimulate the activity of the human mind, by multiplying the objects of enterprise, is not among the least considerable of the expedients, by which the wealth of a nation may be promoted.",
	    	name:"Alexander Hamilton"
	    },
        {
	    	quote:"When the sword is once drawn, the passions of men observe no bounds of moderation.",
	    	name:"Alexander Hamilton"
	    },
        {
	    	quote:"The fabric of American Empire ought to rest on the solid basis of the consent of the people. The streams of National power ought to flow immediately from that pure original fountain of all legitimate authority.",
	    	name:"Alexander Hamilton"
	    },
        {
	    	quote:"Let us recollect that peace or war will not always be left to our option; that however moderate or unambitious we may be, we cannot count upon the moderation, or hope to extinguish the ambition of others.",
	    	name:"Alexander Hamilton"
	    },
	    {
	    	quote:"There is a certain enthusiasm in liberty, that makes human nature rise above itself in acts of bravery and heroism.",
	    	name:"Alexander Hamilton"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready
