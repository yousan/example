( function ($) {
<<<<<<< HEAD
    var body = $('body'),
        _window = $(window);

    /**
     * Adds a top margin to the footer if the sidebar widget area is higher
     * than the rest of the page, to help the footer always visually clear
     * the sidebar.
     */
    $(function () {
        if (body.is('.sidebar')) {
            var sidebar = $('#secondary .widget-area'),
                secondary = ( 0 == sidebar.length ) ? -40 : sidebar.height(),
                margin = $('#tertiary .widget-area').height() - $('#conte\
nt').height() - secondary;

            if (margin > 0 && _window.innerWidth() > 999)
                $('#colophon').css('margin-top', margin + 'px');
        }
    });
=======
	var body = $('body'),
		_window = $(window);

	/**
	 * Adds a top margin to the footer if the sidebar widget area is higher
	 * than the rest of the page, to help the footer always visually clear
	 * the sidebar.
	 */
	$(function () {
		if (body.is('.sidebar')) {
			var sidebar = $('#secondary .widget-area'),
				secondary = ( 0 == sidebar.length ) ? -40 : sidebar.height(),
				margin = $('#tertiary .widget-area').height() - $('#conte\
nt').height() - secondary;

			if (margin > 0 && _window.innerWidth() > 999)
				$('#colophon').css('margin-top', margin + 'px');
		}
	});
>>>>>>> master
}