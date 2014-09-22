$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getreports.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, product) {
			$('#reportList').append('<li><a href="productdetails.html?id=' + product.id + '">' +
					'<h4>' + product.firstName + ' ' + product.lastName + '</h4>' +
					'<p>' + product.title + '</p>' +
					'<span class="ui-li-count">' + product.reportCount + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
