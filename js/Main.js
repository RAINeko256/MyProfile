
function ShowNowYear(){
	var now = new Date();
	var year = now.getFullYear();
	document.write(year);
}

function header_padding(){
	var header_y = $('header').outerHeight()*0.4;
	$("div.header_box").css({
		"padding-top":"header_y"+"px"
	});
};