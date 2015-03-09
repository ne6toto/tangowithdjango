$(document).ready( function() {

    $("#likes").click( function() {
        var catid;
        catid = $(this).attr("data-catid");
        $.get('/rango/like_category/', {category_id: catid}, function(data){
                   $('#like_count').html(data);
                   $('#likes').hide();
        });
    });

    $("#suggestion").keyup( function() {
        var text;
        text = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: text}, function(data){
            $('#cats').html( data );
        });
    });

});
