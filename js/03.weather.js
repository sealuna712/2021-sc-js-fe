/** 
    * appid 51e9470c85f7acfe6e70a90c0a750cc5
	* daily: https://api.openweathermap.org/data/2.5/weather
	* 5days: https://api.openweathermap.org/data/2.5/forecast
    * 테스트 : https://api.openweathermap.org/data/2.5/weather?appid=51e9470c85f7acfe6e70a90c0a750cc5&units=metric&lat=37.555275&lon=126.936924
     * 

*/
/*********** global init ************/


/********** function init ***********/
function toggleHeader(isShow) {
	if(isShow) {
		$('.header-wrapper').addClass('active');
		$('.footer-wrapper').addClass('active');
	}
	else {
		$('.header-wrapper').removeClass('active');
		$('.footer-wrapper').removeClass('active');
	}
}

/********** event callback **********/
function onHome() {
	console.log('hi')
	$('.wrapper').css('transform', 'translateX(0)');
	toggleHeader(false);
}

function onDaily() {
	$('.wrapper').css('transform', 'translateX(-50%)');
	$('.daily-wrap').css('display', 'flex');
	$('.weekly-wrap').css('display', 'none');
	toggleHeader(true);
}

function onWeekly() {
	$('.wrapper').css('transform', 'translateX(-50%)');
	$('.daily-wrap').css('display', 'none');
	$('.weekly-wrap').css('display', 'flex');
	toggleHeader(true);
}

/************ event init ************/
$('.bt-prev').click(onHome);
$('.bt-daily').click(onDaily);
$('.bt-weekly').click(onWeekly);
