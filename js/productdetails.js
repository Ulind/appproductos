$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getproduct.php?id='+id, displayProduct);
});

function displayProduct(data) {
	var product = data.item;
	console.log(product);
	$('#productPic').attr('src', 'pics/' + product.Imagen);
	$('#productName').text(product.NombreProducto);
	$('#productDesc').text(product.Descripcion);
	$('#actionList').listview('refresh');

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
