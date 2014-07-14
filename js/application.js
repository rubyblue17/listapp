$(document).ready(function(){

// use enter to add list items
	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><div class="delete">&times;</div>');

		document.getElementById('item').value = '';
		};
	});

//delete list items
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//change theme to a
	$('.theme-bar').on('click', '.theme-select-a', function(){
		$("#theme-class").attr("href", "css/main.css");});


//change theme to b
	$('.theme-bar').on('click', '.theme-select-b', function(){
		$("#theme-class").attr("href", "css/themeb.css");});

//show menu
	$('#menu-btn-container').on('click', '#menu-btn', function(){
		$('#menu').toggleClass('hide'); });

//toggle instructions
	$('.theme-bar').on('click', '.instructions', function(){
		$('#instructions').toggleClass('hide'); });

//close instructions
	$('#instructions').on('click', '.close-btn', function(){
		$('#instructions').toggleClass('hide'); });

//cross off list items
	$('#list').on('click', 'li', 
		function(){$(this).toggleClass('selected'); 
		$(this).children('.box').toggleClass('Checked');});

//sortable list items
	$('#list').sortable({ axis: "y" });
	
//show delete button on mouse hover
	$('#list').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');});
	$('#list').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');});



});
    
    

