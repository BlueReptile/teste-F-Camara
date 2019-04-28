if (!alertify.myAlert) {
    //define a new dialog
    alertify.dialog('myAlert', function () {
        return {
            main: function (message) {
                this.message = message;
            },
            setup: function () {
                return {
                    buttons: [{
                        text: "Enviar Email",
                        key: 27
                    }, {
                        text: "Cancelar",
                        key: 28
                    }],
                    focus: {
                        element: 0
                    },
                    options: {
                        title: 'Entregue seu feedback!'
                    }
                };
            },
            prepare: function () {
                this.setContent(this.message);
            },
            callback: function (closeEvent) {
                console.log(closeEvent)
                if (closeEvent.button.key == 27) {
                    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=julio.cezar.franco.almeida@gmail.com&tf=1", '_blank')
                }
            }
        }
    });
}

window.onscroll = function() {
    var scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;

    if(totalHeight >= scrollHeight)
    {
        alertify.myAlert("O que achou do site? <br/> Entregue seu Feedback com sua opinião e ideias!");
    }
}