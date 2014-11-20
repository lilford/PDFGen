/*
colArr: content
contentType: Can be text or array
propObj: property object
*/

function formatNumber(number,decimalPlace)
{
	return parseFloat(Math.round(number * 100) / 100).toFixed(decimalPlace);
}


function buildPropArray(font, fontSize, alignArr)
{
	var propObjArr = [];
	alignArr.forEach(function(align)
	{
		propObjArr.push(new PdfProps(font, fontSize, align));
	});
	return propObjArr;
}
function buildRow(contentType, colArr, propObj)
{
//	console.log('buildRow');
	var row = new PdfRow();
	var cType, prop;
	
//	console.log('contentType : ' + typeof contentType);
//	console.log('propObj : ' + typeof propObj);

	for (var i = 0; i < colArr.length; i++) {
		cType = (typeof contentType == 'object') ? contentType[i] : contentType;
		prop = (typeof propObj == 'object') ? propObj[i] : propObj;

		row.push(buildRowProcess(cType, colArr[i], prop));
	};
	return row;
}

function buildRowProcess(contentType, col, propObj)
{
	col = new PdfColumn(contentType, col + '', propObj);
	//console.log('pdfutil - col : ' + col);
	return(col) ;
}
