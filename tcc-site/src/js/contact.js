var name = "";
var email = "";
var phone = "";
var message = "";

$.ajax({
    url: "/rest/contact/",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message
    }),
    cache: false,
    success: function (response) {
        if (response.errorMessage) {
            this.error(response.errorMessage);
            return;
        }
        // process success message
    },
    error: function () {
        // process errors
    }
});
