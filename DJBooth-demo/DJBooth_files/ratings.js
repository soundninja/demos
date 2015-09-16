// Ratings JS created by Solspace to load ratings after the rest of the page finishes loading.

(function($){

    $(document).ready(function(){
    
        // Rating Modal JavaScript
    
        // In event of modal closing, body can now move again.
        $(".modal_close").click(function()
        {
            $('body').css('position', '');
        });

        $('.when_not_loading').hide();
        $('.when_loading').show();
        
        $.ajax(
        {
            url: $('#ratings_div').data('url'),
            type: 'POST',
            data: $('#ratings_div').data(),
            dataType: 'html',
            error : function (jqXHR, textStatus, errorThrown)
            {
                $('#ratings_div').html('<p align="center">There was an error loading ratings</p>');
                //console.log(jqXHR);
                
                $('.when_not_loading').show();
                $('.when_loading').hide();
            },
            success: function(data)
            {
                data = $('<div>'+data+'</div>'); // required for DOM parsing.
                $('#expressionengine_template_debug', data).remove();
                
                $('#ratings_div').html(data);
                
                $('.when_not_loading').show();
                $('.when_loading').hide();
            }
        });
        
    });
    
})(jQuery);
