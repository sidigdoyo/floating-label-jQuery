/*************************************
##									##
##	created by Sidigdoyo Pribadi	##
##									##
##	sidigdoyo@gmail.com 		 	##
##									##
*************************************/

(function($) {

	$.fn.floatingLabel = function(params) {
	    var self = this,
	    	options = params,
	    	label = null;

	    if(!self.attr('placeholder')) {
	    	options.placeholder = options.label;
	    }

	    self.attr('placeholder', options.placeholder);

	    if(!self.parent().hasClass('floating-label')) {
	    	var parent = $('<div>', {'class':'floating-label'}).insertAfter(self);
	    	self.appendTo(parent);
	    }

	    if(!self.next().is('.label')) {
	    	label = $('<div>', {'class':'label', 'text':options.label}).insertAfter(self);
	    } else {
	    	label = self.next('.label');
	    }

	    self.on('focus', function(e) {
	    	if(!self.hasClass('label-active')) {
	    		self.addClass('label-active');
	    		label.addClass('active');
	    	}
	    });

	    self.on('blur', function(e) {
	    	if(!self.val()) {
	    		self.removeClass('label-active');
	    		label.removeClass('active');
	    	}
	    });

	    return self;
	};

}(jQuery));
