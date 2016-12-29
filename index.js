$(document).ready(function(){

	// var intromodal = document.getElementById("intromodal")
	var modal = document.getElementsByClassName('modal');
	var imagemodal=document.getElementById("imagemodal");
	var modalImg = document.getElementById('image01');

	// intromodal.style.display = "block";
	$("img").click(function(){
		imagemodal.style.display = "block";
		modalImg.src = this.src;
		modalImg.style.width="100%";
		modalImg.style.margin="auto";
	});
	$("span").click(function(){
		$(this).parent().css("display","none");
	});
});