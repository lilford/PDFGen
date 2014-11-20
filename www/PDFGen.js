var PDFGen = (function(){
	return{
		generatePDF : function(fileToOpen, pdfArgArray)
		{
			cordova.exec(
            function success() {
                me.sftProgress.hide();
            },
            function fail(err) {
                console.log('PDF Generation failed');
            },
            'PDFGen',
            'genPDF', [fileToOpen, pdfArgArray]);
		}
	}
})();
