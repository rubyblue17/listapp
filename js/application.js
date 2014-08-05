$(document).ready(function() {
    $("#add_item").submit(handleAddItem);

//add list items
function handleAddItem() {

		var itemtext = ($("#enter-item").val());
		event.preventDefault();

			$('<li class="list-item" class="edit-item"></li>').appendTo('#list').html('<div class="item-container"><span class="display">' + itemtext + '</span><input type="text" class="edit"/><div class="line-menu"><div class="delete">&times;</div><div class="editbox"></div><div class="mark"></div></div></div>');
		($("#enter-item").val(''));
	}


//edit list items
$('#list').on('click', '.editbox', function(e){
	event.preventDefault(); 
	$(this).parent().siblings(".display").hide();
	$(this).parent().siblings(".edit").show().val($(this).parent().siblings(".display").text()).focus();
	});

$(".edit").focusout(function(){
	event.preventDefault();
	$(this).hide();  
	$(this).siblings(".display").show().text($(this).val());
});

$('.edit').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$(this).hide();  $(this).siblings(".display").show().text($(this).val());

		};
	});	



//change theme to a
	$('.theme-bar').on('click', '.theme-select-a', function(){
		$("#theme-class").attr("href", "css/main.css");});

	$('.theme-bar').on('click', '.theme-mobile-a', function(){
		$("#theme-class").attr("href", "css/main.css");});

//change theme to b
	$('.theme-bar').on('click', '.theme-select-b', function(){
		$("#theme-class").attr("href", "css/themeb.css");});

	$('.theme-bar').on('click', '.theme-mobile-b', function(){
		$("#theme-class").attr("href", "css/themeb.css");});

//show menu
	$('#menu-btn-container').on('click', '#menu-btn', function(){
		$('#menu').toggleClass('hide'); });

//toggle instructions
	$('#bottom').on('click', '.instructions', function(){
		$('#instructions').toggleClass('hide'); 
		$('#list').toggleClass('hide');
		});

//close instructions with close button
	$('#instructions').on('click', '.close-btn', function(){
		$('#instructions').toggleClass('hide'); 
		$('#list').toggleClass('hide');
	});

//toggle legend icons
	$('#bottom').on('click', '.legend', function(){
		$('#legend-icons').toggleClass('hide'); 
		});	

//delete list items
	$('#list').on('click', '.delete', 
		function(e){e.preventDefault(); 
			$(this).parentsUntil('#list').remove()});

//mark list items complete
	$('#list').on('click', '.mark', 
		function(){
			$(this).parentsUntil('#list').toggleClass('complete'); 
			});

//sortable list items
	$('#list').sortable({ axis: "y" });
	
//show line item menu on mouse hover
	$('#list').on('mouseenter', 'li', function(){
		$(this).find('.line-menu').toggleClass('show');});
	$('#list').on('mouseleave', 'li', function(){
		$(this).find('.line-menu').toggleClass('show');});	


});