function PdfHeader()
{
	this.header = [];
}

PdfHeader.prototype.push = function(row)
{
	this.header.push(row);
}
PdfHeader.prototype.getHeader = function()
{
	return this.header;
}
