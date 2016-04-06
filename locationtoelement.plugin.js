(function($)
{
    $.fn.extend(
    {
        locationtoelement:function(src,elem)
        {
            var target = this;
            this.prepend('<img id="theImg" src="loading.gif" />')
            $.post('getcontent.php',
            {
                theAddress:src
            }, function(data)
            {
                var tempDom = $('<output>').html($.parseHTML(data));
                tempDom.find(elem).each(function()
                {
                    target.append($(this).html());
                });
                target.find('#theImg').remove();
            });
        }
    });
})(jQuery);