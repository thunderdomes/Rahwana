$(function(){ // document ready

		  if (!!$('.sidebar-wrap').offset()) { // make sure ".sticky" element exists

		    var stickyTop = $('.sidebar-wrap').offset().top; // returns number 

		    $(window).scroll(function(){ // scroll event

		      var windowTop = $(window).scrollTop(); // returns number 

		      if (stickyTop < windowTop){
		        $('.sidebar-wrap').css({
		        	position: 'fixed',
		        	top: 0,
		        	margin-right:0
		        });
		      }
		      else {
		        $('.sidebar-wrap').css('position','static');
		      }

		    });

		  }

		});