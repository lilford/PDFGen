function PdfOptions(colcount, border, widths, widthpercentage, tableTopMargin, tableBottomMargin){

	this.colCount = colcount;//Total columns in a row
	this.border = border; //Should border be visible or not
	this.widths = widths; //Widths of individual columns
	this.widthPercentage = widthpercentage; //Width percentage of the table
	this.tableTopMargin = tableTopMargin;
	this.tableBottomMargin = tableBottomMargin;
	
	//this.getOpts = getOptions;
}

PdfOptions.prototype.getOpts = function()
{
	return this;
}
