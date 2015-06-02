
(function($) {

	$.fn.floatingLabel = function(params) {
	    var self = this,
	    	options = params;

	    options.tempPlaceholder = options.placeholder;

	    if(!options.tempPlaceholder) {
	    	options.tempPlaceholder = 'Insert ' + options.label;
	    }

	    if(!self.attr('placeholder')) {
	    	options.placeholder = options.tempPlaceholder;
	    } else {
	    	options.placeholder = self.attr('placeholder');
	    }

	    self.attr('placeholder', options.placeholder);

	    if(!self.parent().hasClass('floating-label')) {
	    	var parent = $('<div>', {'class':'floating-label'}).insertAfter(self);
	    	self.appendTo(parent);
	    }

	    var label = $('<div>', {'class':'label', 'text':options.label}).insertAfter(self);

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
