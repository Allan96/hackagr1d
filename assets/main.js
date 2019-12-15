var DataSerialize = {
    "externalIdentifier": "11990111397",
    "sharedAccount": false,
    "creditDate": 32,
    "client": {
        "name": "Customer 11990111397",
        "taxIdentifier": {
            "taxId": "42565461542",
            "country": "BRA"
        },
        "mobilePhone": {
            "country": "BRA",
            "phoneNumber": "11990111397"
        },
        "email": "customer.11990111397@gmail.com"
    },
    "billingAddress": {
        "logradouro": "CUSTOMER STREET 11990111397",
        "numero": "999",
        "bairro": "NEIGHBORHOOD",
        "cidade": "CITY NAME",
        "estado": "SP",
        "cep": "13100000",
        "pais": "BRA"
    },
    "clientType": "PERSON",
    "accountType": "ORDINARY",
    "additionalDetailsPerson": {
        "gender": "M",
        "father": "FATHER'\''S NAME 11990111397",
        "mother": "MOTHER'\''S NAME 11990111397",
        "birthDate": "1970-01-01",
        "birthCity": "CITY NAME",
        "birthState": "SP",
        "birthCountry": "BRA",
        "rg": {
            "number": "325912840",
            "issueDate": "1980-01-01",
            "issuer": "SSP",
            "state": "SP"
        },
        "maritalStatus": "SINGLE"
    }
};
$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://varcom-mp-api-01.matera.com/v1/accounts",
            headers: {
                'Transaction-Hash': 'f1cb40acb0c3863f74f9f4fb41558dd1847beece9695a827cf7a0d99d8c8ed97',
                'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Postman-Token': '577d306c-ee1a-4047-9da6-8ca24c26de99,71074268-03c2-4618-b66b-dfff65102155',
                'client_id': '813F6952-D615-4E5C-9547-C31ABED75895',
                'client_secret': '899DCD1F-8A4B-487F-966A-6C9D1DC900F6'
            },
            async: true,
            crossDomain: true,
            type: "POST",
            data: DataSerialize,
            dataType: "json",
            success: function(response) {
                console.log(response);
            }
        });

    });
});