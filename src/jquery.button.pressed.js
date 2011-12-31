$.fn.mousePress = function(){
	return this.each(function() {
		$(this).mousedown(function(){
			$(this).addClass('ui-state-pressed');
		}).mouseup(function(){
			$(this).removeClass('ui-state-pressed');
		}).mouseleave(function() {
			$(this).removeClass('ui-state-pressed');
		});
	});
};

var prototypeButtonCall = $.fn.button;
$.fn.button = function() {
	$(this).mousePress().bind('dragstart', function() {
		return false;
	});
	return prototypeButtonCall.call(this, arguments);
}
