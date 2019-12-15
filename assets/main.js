$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://varcom-mp-api-01.matera.com/v1/accounts",
            headers: {
                'Transaction-Hash': 'f1cb40acb0c3863f74f9f4fb41558dd1847beece9695a827cf7a0d99d8c8ed97',
                'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895x',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            type: "POST",
            data: "data",
            dataType: "json",
            success: function(response) {
                console.log(response);
            }
        });

    });
});