$(document).ready(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {

            var target = $(this.hash);

            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }

        });
    });
    $('.loading').click(function(e) {
        e.preventDefault();
        setTimeout(function() { window.location = './selecionar.html'; }, 3000);

    });
    $('.maismenos').click(function(e) {
        e.preventDefault();
        var valor = $(this).html();
        if (valor == "Ver mais") {
            $(this).html('Ver menos');
        } else {
            $(this).html('Ver mais');
        }

    });
});

function createSeguradora() {
    var body = {
        "externalIdentifier": "11990111445",
        "sharedAccount": false,
        "creditDate": 32,
        "client": {
            "name": "COMPANY TAX ID",
            "taxIdentifier": {
                "taxId": "28358358000100",
                "country": "BRA"
            },
            "mobilePhone": {
                "country": "BRA",
                "phoneNumber": "19992400618"
            },
            "email": "COMPANY@gmail.com"
        },
        "billingAddress": {
            "logradouro": "STREET NAME",
            "numero": "100",
            "complemento": "ADDITIONAL INFO",
            "bairro": "NEIGHBORHOOD",
            "cidade": "CITY NAME OF THE COMPANY",
            "estado": "MT",
            "cep": "99999999",
            "pais": "BRA"
        },
        "clientType": "CORPORATE",
        "accountType": "ORDINARY",
        "additionalDetailsCorporate": {
            "companyName": "COMPANY NAME",
            "representatives": [{
                "name": "LEGAL REPRESENTATIVE NAME FROM COMPANY",
                "taxIdentifier": {
                    "taxId": "39421894375",
                    "country": "BRA"
                },
                "mobilePhone": {
                    "country": "BRA",
                    "phoneNumber": "19992400618"
                },
                "email": "legal.representativ@gmail.com"
            }]
        }
    };
    $.ajax({
        headers: {
            'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Transaction-Hash': '82903841c0409fb9039f6e0542fa8aba2b2ebfea96b523d0ac933ea867cebb0b',
            'Postman-Token': 'e35ebe05-bf78-411d-af61-028308796ae7',
            'SecretKey': '899DCD1F-8A4B-487F-966A-6C9D1DC900F6'
        },
        type: "POST",
        url: "https://varcom-mp-api-01.matera.com/v1/accounts",
        data: body,
        success: function(response) {}
    });
    response = jQuery.parseJSON('{"data": {"accountHolderId": "68FA283D-9510-D83E-5E6A-ED87512468C6","account": {"accountId": "6CA41D3D-8432-90BF-F2D5-DC9216653BE0","mobilePhone": {"phoneNumber": "11990111414","country": "BRA"}},"accountStatus": "CREATING"}}');
    return response;
}


function consultaSaldo() {
    var infoAccount = createSeguradora();
    var idAccount = infoAccount["data"]["account"]["accountId"];
    $.ajax({
        headers: {
            'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Transaction-Hash': '82903841c0409fb9039f6e0542fa8aba2b2ebfea96b523d0ac933ea867cebb0b',
            'Postman-Token': 'e35ebe05-bf78-411d-af61-028308796ae7'
        },
        type: "GET",
        url: "https://varcom-mp-api-01.matera.com/v1/accounts/" + idAccount + "/balance",
        dataType: "json",
        success: function(response) {}
    });
    response = jQuery.parseJSON('{"data": {"balances": [{"balanceType": "REAL","date": "2019-12-13","amount": 30,"accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"},{"balanceType": "AVAILABLE","date": "2019-12-13","amount": 60,"accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"},{"balanceType": "FUTURE","date": "2019-12-13","accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"},{"balanceType": "OVERDRAFT","date": "2019-12-13","amount": 0,"accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"},{"balanceType": "BLOCKED","date": "2019-12-13","amount": 0,"accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"},{"balanceType": "AUTO_INVEST","date": "2019-12-13","amount": 571.3,"accountId": "09BB3B3D-4FB6-5216-FC80-51851CD4A319"}],"accountStatus": "REGULAR"}}');
    return response;
}

function insereMoneyBalance() {
    var money = consultaSaldo();
    var valuemoney = money["data"]["balances"][0]["amount"];
    $('.money-balance').html(valuemoney);

}

function consultaClinicas() {
    $.ajax({
        type: "POST",
        url: "https://gateway.gr1d.io/sandbox/solutionsone/petstandard/v1",
        data: "",
        dataType: "json",
        success: function(response) {}
    });

    data = jQuery.parseJSON([{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Status": "Active", "ExpirationDate": "2019-12-15T12:40:27.943Z", "Size": 0, "Prizes": [{ "CurrencyCode": "string", "Value": 0 }], "InUse": 0 }]);
    return data;


}