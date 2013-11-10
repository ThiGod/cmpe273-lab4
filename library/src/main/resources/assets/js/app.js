$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	var bookStatusId = "#bookStatus" + isbn;
	var buttonStatusId = "#" + isbn;
	
	$.ajax({
		type: 'PUT',
		url: '/library/v1/books/' + isbn + '?status=lost',
		dataYype: 'application/json',
		success: function() {	
			$(bookStatusId).text('lost');
			$(buttonStatusId).prop('disabled', true);
			alert('ISBN ' + isbn + ' has been reported');
		},
		error: function() {
			alert('Error!!!');
		}
	});
});
