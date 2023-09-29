let boldElements = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for(let i = 0;i<boldElements.length;i++)
		{
			boldElements[i].style.color  = "green";
		}
}


function return_normal() {
    //Write your code here
		for(let i = 0;i<boldElements.length;i++)
		{
			boldElements[i].style.color  = "black";
		}

    
}
