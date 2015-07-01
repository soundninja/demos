$(document).ready(function () {

    $('.update').click(
        function () {
            update();
        }
    );
    $('.enterName').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('.update').click();//Trigger search button click event
        }
    });
});

function update() {
    $('div.update-here').html($('.update-it input').val());
    SoundninjaOpts = {selector: 'div.update-here'};
    SN.scan();
}