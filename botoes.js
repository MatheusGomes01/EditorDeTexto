$(document).ready(function() {
	$('#jBold').click(function(event) {
		document.execCommand('bold');
	});

	$('#jItalic').click(function(event) {
		document.execCommand('italic');
	});

	$('#jJCenter').click(function(event) {
		document.execCommand('justifyCenter');
	});

	$(document).on('keydown', '#fake_textarea', function (e) {
		if (e.keyCode == 9) {
			insereTab();
			e.preventDefault()
		}

		if (e.keyCode == 13) {
			var selection = window.getSelection();
			for (var i = 0; i < 0; i += 1) {
				selection.modify('extend', 'backward', 'character');
			}

			document.execCommand('insertHTML', false, '<br />&zwnj;');
			e.preventDefault();
		}
	});
});

function insereTab() {
	if (!window.getSelection) 
		return;

	const sel = window.getSelection();

	if (!sel.rangeCount) 
		return;

	const range = sel.getRangeAt(0);
	const span = document.createElement('span');

	range.collapse(true);

	

	span.appendChild(document.createTextNode('\t'));
	span.style.whiteSpace = 'pre';
	range.insertNode(span);

	// Move o cursor imediatamente após o intervalo inserido

	range.setStartAfter(span);
	range.collapse(true);
	sel.removeAllRanges();
	sel.addRange(range);
}