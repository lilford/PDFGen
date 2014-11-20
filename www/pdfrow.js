function PdfRow()
{
	this.row = [];
}

PdfRow.prototype.push = function(col)
{
	this.row.push(col);
}

PdfRow.prototype.getRow = function()
{
	return this;
}
