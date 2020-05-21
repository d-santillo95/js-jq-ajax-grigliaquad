$(document).ready(function() {
    $('.square').click(function() {
        var square = $(this);
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function(data) {
                if (data.response < 6) {
                    square.addClass('yellow');
                } else {
                    square.addClass('green');
                }
                square.text(data.response);
            },
            error: function() {
                alert("E' avvenuto un errore. ");
            }
        })
    })
})
