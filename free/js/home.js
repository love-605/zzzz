$(document).ready(function(){
	let strategylis=$('.strategy .circle li');
	let strategyimgs=$('.strategy .img li');
	strategylis.click(function(){
		let num=$(this).index();
		strategylis.removeClass('active').eq(num).addClass('active');
		strategyimgs.removeClass('active').eq(num).addClass('active');
	})
	strategyimgs.click(function(){
		location.href='zjl-guide.html';
	})
	
	let destinationlglis=$('.destination .lgcircle li');
	let destinationxslis=$('.destination .xscircle li');
	let destinationimgs=$('.destination .img >li');
	let destinationleft=$('.destination .left');
	let destinationright=$('.destination .right')
	destinationlglis.click(function(){
		let num=$(this).index();
		destinationlglis.removeClass('active').eq(num).addClass('active');
		destinationimgs.removeClass('active').eq(num).addClass('active');
	})
	destinationxslis.click(function(){
		let num=$(this).index();
		destinationxslis.removeClass('active').eq(num).addClass('active');
		destinationimgs.removeClass('active').eq(num).addClass('active');
	})
	destinationimgs.click(function(){
		location.href='zwmdd.html';
	})
	destinationleft.click(function(){
		let now=$('.destination .img >li.active').index();
		let next=now-1;
		if(next<0){
			next=0;
		}
		destinationxslis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationlglis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationimgs.eq(now).removeClass('active').end().eq(next).addClass('active');
	})
	destinationright.click(function(){
		let now=$('.destination .img >li.active').index();
		let next=now+1;
		if(next>=11){
			next=10;
		}
		destinationxslis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationlglis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationimgs.eq(now).removeClass('active').end().eq(next).addClass('active');
	})
	let contentimgs,tiaos;
	destinationimgs.mouseenter(function(){
		contentimgs=$('.destination .img >li.active .content li');
		tiaos=$('.destination .img >li.active .circle li');
		contentimgs.mouseenter(function(){
			let num=$(this).index();
			contentimgs.removeClass('active').eq(num).addClass('active');
			tiaos.removeClass('active').eq(num).addClass('active');
		})
		tiaos.click(function(){
			let num=$(this).index();
			contentimgs.removeClass('active').eq(num).addClass('active');
			tiaos.removeClass('active').eq(num).addClass('active');
		})
	})
	
	let merchantlis=$('.merchant .circle > li');
	let merchantimgs=$('.merchant .img > li');
	merchantlis.click(function(){
		let num=$(this).index();
		merchantlis.removeClass('active').eq(num).addClass('active');
		merchantimgs.removeClass('active').eq(num).addClass('active');
	})
	$('.zn_zi1 p:nth-child(2)').click(function(){
		location.href='merchant.html';
	})
	$('.zn_zi2 p:nth-child(2)').click(function(){
		location.href='merchant.html';
	})
	$('.community .container li.active img ').click(function(){
		location.href='nearby.html';
	})
	$('.travel .row li > div').click(function(){
		location.href='zwsyyj.html';
	})
	let communityleft=$('.community .left');
	let communityright=$('.community .right');
	
	
	
	
})
