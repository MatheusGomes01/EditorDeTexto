$(document).ready(function() {
	$('#jBold').click(function(event) {
		document.execCommand('bold');
	});

	$('#jItalic').click(function(event) {
		document.execCommand('italic');
	});

	$('#jUnderline').click(function(event) {
		document.execCommand('underline');
	});

	$('#jStrikethrough').click(function(event) {
		document.execCommand('strikethrough');
	});
	
	$('#jFontFamily').change(function(event) {
		document.execCommand("fontName", false, event.target.value);
	});

	$('#jFontSize').change(function(event) {
		document.execCommand("fontSize", false, event.target.value);
		var fontElements = window.getSelection().anchorNode.parentNode
		fontElements.removeAttribute("size");
		fontElements.style.fontSize = `${event.target.value}px`;
	});

	$('#jForeColor').change(function(event) {
		document.execCommand('foreColor', false, hexToRgbA(event.target.value));
	});
	
	

	$('#jJCenter').click(function(event) {
		document.execCommand('justifyCenter');
	});

	$('#jJFull').click(function(event) {
		document.execCommand('justifyFull');
	});

	$('#jJLeft').click(function(event) {
		document.execCommand('justifyLeft');
	});

	$('#jJRight').click(function(event) {
		document.execCommand('justifyRight');
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

			document.execCommand('insertHTML', false, '<div class="paragrafos">&zwnj;</div>');
			///e.preventDefault();
		}
	});

	let fontsSizes = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	fontsSizes.map((e) => {
		$('#jFontSize').append(`<option value='${e}'>${e}</option>`)
	})
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