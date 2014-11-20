function PdfColumn(contentType, content, pdfProps)
{
	this.type = contentType;
	this.content = content;
	this.props = pdfProps;
	//this.getColumn = getColumn;
}
PdfColumn.prototype.getColumn = function()
{
	return this;
}
