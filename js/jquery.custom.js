/*Project: Object Oriented Project
 *Name: Tammy Fernandez
 *Winter 2016
 */

/*jquery code came from:
 * name:		jquery.custom.js
 * project:		jQuery & jQueryUI Visual Quickstart Guide
 * author:		Jay Blanchard 
 */

$(document).ready(function(){
	/* click to animate the registration div */
	$('#registration a').click(function(event){
		event.preventDefault();
		if(false == $('#registration').hasClass('open')) {
			/* open the drawer and add the class */
			$('#registration').animate({
				'top': '0px'
			}, 500, function(){
				$('#registration').addClass('open');
			});
		} else {
			/* close the drawer and remove the class */
			$('#registration').animate({
				'top': '-40px' 
			}, 500, function(){
				$('#registration').removeClass('open');
			});
		}
	});
	
	/* hover to animate the navigation div */
	$('#navigation').hover(function(){
		/* mouseover opens the drawer */
		$(this).stop().animate({
			'top': '0px'
		});
	},function(){
		/* mouseout closes the drawer*/
		$(this).stop().animate({
			'top': '-40px'
		});
	});
	
	/* count the characters */
	$('textarea[name="contactComments"]').keyup(function(){
		/* get current number of characters */
		var numCharacters = $(this).val().length;
		// update characters
		$('.textInfo span').html(numCharacters);
	});
	
	/* is the name field left blank on the Comments page? */
	$('input[name="contactName"]').focusout(function(){
		/* find the length of the value of the input box */
		if(0 == $(this).val().length) {
			/* change the span to have the error message, make it red! */
			$(this).next('span').html('&nbsp;Please do not leave name blank.').css({
				'color': '#FF0000'
			});
		} else {
			/* this takes care of resetting the message when the user corrects the error */
			$(this).next('span').html('');
		}
	});
	
	/*Is the first name field left blank on the membership form? */
$('input[name="firstName"]').focusout(function(){
	/*find the length of the value of the input box */
	if(0 == $(this).val().length) {
		/* change the span to have the error message, make it red! */
			$(this).next('span').html('&nbsp;Please include first name.').css({
				'color': '#FF0000'
			});
	}else{
		/* this takes care of resetting the message when the user corrects the error*/
			$(this).next('span').html('');
	}
});

/*Is the last name field left blank on the membership form? */
$('input[name="lastName"]').focusout(function(){
	/*find the length of the value of the input box */
	if(0 == $(this).val().length) {
		/* change the span to have the error message, make it red! */
			$(this).next('span').html('&nbsp;Please include last name.').css({
				'color': '#FF0000'
			});
	}else{
		/* this takes care of resetting the message when the user corrects the error*/
			$(this).next('span').html('');
	}
});

	
	/* is the email address a valid one? */
	$('input[name="contactEmail"]').blur(function() {
	   	/* set up some regex to test against */
	   	var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	   	var inputEmail = $(this).val();
	   	/* perform the test */
	   	var resultEmail = regexEmail.test(inputEmail);
	   	/* use the result to determine if the error message will be shown */
	   	if(!resultEmail){
	   		$(this).next('span').html('&nbsp;Please enter a valid e-mail address.').css({
				'color': '#FF0000'
			});
	   	} else {
	   		$(this).next('span').html('');
	   	}    	
	});
	
	/* did the drop down change? */
	$('select[name="subscriberStatus"]').change(function(){
		$(this).next('span').html('&nbsp;Your subscriber status has changed.').css({'color': '#FF0000'});
	});
	
	
	
	/* show/hide password */
	$('#showPassword').click(function(e) {
		e.preventDefault();
		var propertyType = $('input[name="contactPassword"]').prop('type');
		if('text' == propertyType) {
			$('input[name="contactPassword"]').prop('type', 'password');
			$(this).html('Show Password');
		} else {
			$('input[name="contactPassword"]').prop('type', 'text');
			$(this).html('Hide Password');
		}
	});
	
	/* enable/disable passwod field */
	$('select[name="subscriberStatus"]').change(function() {
		var selectValue = $(this).val();
		if('subscriber' == selectValue) {
			$('input[name="contactPassword"]').prop('disabled', false);
			$('input[name="contactPassword"]').attr('placeholder', 'password required');
		} else {
			$('input[name="contactPassword"]').prop('disabled', true);
			$('input[name="contactPassword"]').attr('placeholder', 'password not required');
		}
	});
	
	/* add/remove a custom property */
	$('input[name="contactPassword"]').prop('defaultStatus', 'non-subscriber');
	$('select[name="subscriberStatus"]').change(function() {
		var statusValue = $(this).val();
		if('subscriber' == statusValue) {
			$('input[name="contactPassword"]').removeProp('defaultStatus');
		}
	});
	
	/* set the default select value */
	$('select[name="subscriberStatus"]').val('non-subscriber');
	
	/* 
	 * check the password to make sure it has
	 * upper & lower characters
	 * numbers
	 * a special character
	 * is at least 8 characters long
	 */
	$('input[name="contactPassword"]').blur(function() {
		/* the regex */
		var regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		/* get the value of the password */
		var thisPassword = $(this).val();
		/* perform the test */
		var resultPassword = regexPassword.test(thisPassword);
		if(!resultPassword){
	   		$(this).next('span').html('&nbsp;The password must contain at least 1 upper case character, 1 lower case character, 1 number and 1 special character and must be at least 8 characters long.').css({
				'color': '#FF0000'
			});
	   	} else {
	   		$(this).next('span').html('');
	   	}
	});
	
	/*get alt tags and display them as image titles*/
	$('.imageGallery li img').each(function() {
		var thisAltTag = $(this).attr('alt');
		
		/*why is there a curly brace inside the ()?*/
		$(this).attr({'alt': thisAltTag + '<br />', 'data-topic': 'West 7th Bakery'
		});
		var newAltTag=$(this).attr('alt');
		var cameraTag=$(this).attr('data-topic');
		$(this).parent().append('<br /><div class="imageTitle">' + newAltTag + '</div>');
		
		$(this).parent().append('<br /><div class="imageCamera">' + cameraTag + '</div>');
		
		});//Close the each function
		
		/*add some class to the image captions*/
		$('.imageGallery li img').addClass('imageBoxShadow');
		$('.imageCamera').addClass('blueBoxShadow small_text');
		$('.imageCamera').hover(function(){
			$(this).removeClass('small_text');
		},function(){
			$(this).addClass('small_text');
		});
		
		if(true ==$('ul').hasClass('imageGallery')){
			console.log('ul has the imageGallery class');
		}else{
			console.log('ul does not have the imageGallery class');
		}
		
		
		$('.imageGallery li img').hover(function(){
			$(this).parent().find('.imageTitle').toggleClass('textHighlight');
		});
	
	/*Lightbox*/
		/*IMAGE LOADER - this loads all of the images in the preload array into the DOM. This allows the lightbox to measure and place each image properly and quickly when called.*/
		 
		 function preload(arrayOfImages) {
			 $(arrayOfImages).each(function(){
				 $('<img/>').attr('src',this).appendTo('body').css('display','none');
			 });
		 }
		 preload([
		 		'images/large1.jpg',
				'images/large2.jpg',
				'images/large3.jpg',
				'images/large4.jpg',
				'images/large5.jpg',
				'images/large6.jpg',
				'images/large7.jpg',
				'images/large8.jpg',
				'images/large9.jpg'
				]);
				
	/* a simple lightbox */
	$('.imageGallery li img').click(function() {
		$('body').append('<div class="shade"></div>');
		$('.shade').css('opacity', 0.7).fadeIn();
		/*get the image source information*/
		var imgSRC = $(this).attr('data-photo');
		/* create an image tag */
		var imgTAG = '<img src="'+ imgSRC + '" />';
		/* append the modal (there is CSS associated with it) give it the current image */
		$('body').append('<div class="photoModal"></div>');
		$('.photoModal').html(imgTAG);
		/* fade the modal in and set up it's text component */
			$('.photoModal')
				.fadeIn('slow')
				.append('<div><a href="#" class="closePhoto">Close X</a></div>');
		/* get the window height */
		var windowHeight = $(window).height();
		/* set the size of the photo and its text */
		$('.photoModal img').css('height', (windowHeight - 200));
		/*measure the height and width of the modal along with border */
		var modalTopMargin = ($('.photoModal').height() + 20) / 2;
		var modalLeftMargin = ($('.photoModal').width() + 20) / 2;
		/* use that height and width to center the photo modal */
		$('.photoModal').css({
				'margin-top' : -modalTopMargin,
				'margin-left' : -modalLeftMargin
		});
	});
	
	/* reset/close/eliminate the photo modal */
	$('body').on('click', '.closePhoto', function(e){
		e.preventDefault();
		$('.photoModal, .shade').fadeOut(function(){
				$(this).remove();
		});
	});
	
	
	/* helper function -  an outerHTML method */
	$.fn.outerHTML = function() {
		return $(this).clone().wrap('<div></div>').parent().html();
	};

	
	$('#content').on('click', '.mover', function(e) {
		e.preventDefault();
	    var article = $(this).parent();
	    var contentHeight = $('#content').innerHeight();
	    var articleHeight = article.height();
	    var articleTop = article.position().top;
	    var moveUp = articleTop;
	    var moveDown = articleHeight;
	    var articleID = article.attr("id");
	    var articleHTML = article.outerHTML();
	    
	    $('.article').each(function() {
	        if ($(this).attr("id") == articleID) {
	            return false;
	        }
	        $(this).animate({"top": '+=' + moveDown}, 1000);
	    });
	    
	    article.animate({"top": '-=' + moveUp}, 1000, function() {
	        article.remove();
	        var oldHTML = $('#content').html();
	        $('#content').html(articleHTML + oldHTML);
	        $('.article').attr('style', '');
	    });
	});
	
	
	/* Sidebar menu mover */
	if($('.sidebar').offset()) {
		var sidebarOffset = $('.sidebar').offset();
		var paddingTop = 10;
	  	$(window).scroll(function() {
	    	if ($(window).scrollTop() > sidebarOffset.top) {
	            $('.sidebar').stop().animate({
	                marginTop: $(window).scrollTop() - sidebarOffset.top + paddingTop
	            });
	        } else {
	            $('.sidebar').stop().animate({
	                marginTop: $(window).scrollTop()
	            });
	        }
	    });
	}
    
    /* submit e-mail address */
    $('form[name="registration"]').submit(function(e) {
    	e.preventDefault();
    	var formAction = $(this).attr('action');
    	var formData = $(this).serialize();
    	$.post(
    		formAction,
    		formData,
    		function(data){
    			if(1 == data) {
    				/* clear the form */
    				$('form[name="registration"] input').val('');
    				/* place a message in the placeholder */
    				$('input[name="userEmail"]').attr('placeholder', 'Thank you!');
    			} else {
    				/* clear the form */
    				$('form[name="registration"] input').val('');
    				/* place a message in the placeholder */
    				$('input[name="userEmail"]').attr('placeholder', 'Please resubmit!');
    			}
    		});
    });

	
	/*Add the carousel buttons (and move on click)*/
	 $(".jCarouselLite").jCarouselLite({
       btnNext: ".next",
       btnPrev: ".prev",
	   mouseWheel: true
    });
    
   
});
