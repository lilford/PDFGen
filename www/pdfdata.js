function PdfData()
{
	this.data = [];
}

PdfData.prototype.push = function(row)
{
	this.data.push(row);
}

PdfData.prototype.getData = function()
{
	return this.data;
}
