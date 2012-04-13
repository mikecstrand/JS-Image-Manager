// Manage image paths for mobile devices
var imageManager = function(){

	var isMobile = (screen.width < 750 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) ? true : false;

	function switchImages(){
				
		$('img[desktop]').each(function(){
			
			var desktopAttr = $(this).attr('desktop');
			
				if(typeof desktopAttr !== 'undefined' && desktopAttr !== false){
				
					$(this).attr('src', desktopAttr);
			
				}
				
		});
	
	}
	
	return {
		
		init:function(){
			
			if(!isMobile){
				switchImages();
			}
			
		},
		
		isMobile:function(){
		
			return isMobile;
		
		}
	
	}

}