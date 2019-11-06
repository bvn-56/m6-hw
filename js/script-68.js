let pr = 0

function butn1() {
	if (pr < 100) {
		pr = pr + 1;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};

function butn2() {
	if (pr < 100) {
		pr = pr + 3;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};

function butn3() {
	if (pr < 100) {
		pr = pr + 7;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};


$("#button1").click(butn1);
$("#button2").click(butn2);
$("#button3").click(butn3);


$(document).ready(init);