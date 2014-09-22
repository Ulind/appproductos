var serviceURL = "http://www.ingesis.info/app/services";

var products;

$('#productListPage').bind('pageinit', function(event) {
	getProductsList();
});

function getProductsList() {
	$.getJSON(serviceURL + 'getproducts.php', function(data) {
		$('#productList li').remove();
		products = data.items;
		$.each(products, function(index, product) {
			$('#productList').append('<li><a href="productdetails.html?id=' + product.IDProd + '">' +
					'<img src="pics/' + product.Imagen + '"/>' +
					'<h4>' + product.NombreProducto + ': ' + product.Descripcion + '</h4>' +
					'<p> Precio por licencia:<b> $' + product.PrecioLista + '</b></p>' +
					'<span class="ui-li-count">' + product.reportCount + '</span></a></li>');
		});
		$('#productList').listview('refresh');
	});
}

