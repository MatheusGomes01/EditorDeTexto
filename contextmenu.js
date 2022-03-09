
$('#fake_textarea').contextmenu(function (e) {
	rightClick(e);
})

$('#fake_textarea').click(function (e) {
	hideMenu();
})


function hideMenu() {
	$("#contextMenu").css("display", "none");
}

function rightClick(e) {
	e.preventDefault();

	console.log('teste')

	if ($("#contextMenu").is(":visible"))
		hideMenu();
	else {
		var menu = $("#contextMenu")

		menu.css("display", "block");
		menu.css("left", e.pageX + "px")
		menu.css("top", e.pageY + "px");
	}
}