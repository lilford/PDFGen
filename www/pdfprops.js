function PdfProps(fontFamily, fontSize, textAlign, fontColor, fontStyle, width, height){

	//Used for fonts
	this.fontFamily = fontFamily;
	this.fontSize = fontSize;
	this.fontColor = fontColor;
	this.textAlign = textAlign;
	this.fontStyle = fontStyle;

	 //Used for images
	this.height = height;
	this.width = width;
	//this.getProps = getProps;
}

PdfProps.prototype.getProps = function()
{
	return this;
}
