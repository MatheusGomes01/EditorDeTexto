function getEndPointCursor(element = document.querySelector('#fake_textarea')) {
	var startOffset = 0, endOffset = 0;

	if (typeof window.getSelection != "undefined") {

		var range = window.getSelection().getRangeAt(0);
		var preCaretRange = range.cloneRange();

		preCaretRange.selectNodeContents(element);
		preCaretRange.setEnd(range.startContainer, range.startOffset);

		startOffset = preCaretRange.toString().length;
		endOffset = startOffset + range.toString().length;

	} else if (typeof document.selection != "undefined" && document.selection.type != "Control") {
		var textRange = document.selection.createRange();
		var preCaretTextRange = document.body.createTextRange();

		preCaretTextRange.moveToElementText(element);
		preCaretTextRange.setEndPoint("EndToStart", textRange);

		startOffset = preCaretTextRange.text.length;
		endOffset = startOffset + textRange.text.length;
	}
	
	return { start: startOffset, end: endOffset };
}