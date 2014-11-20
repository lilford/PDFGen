function PdfTable(pdfOpts, pdfHeader, pdfData)
{
	this.opts = pdfOpts;
	if(pdfHeader != null)
		this.header = pdfHeader;
	this.data = pdfData;
	//this.getTable = getTable;
}
PdfTable.prototype.getTable = function()
{
	return this;
}
