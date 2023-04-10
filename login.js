$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orders.html')
    }
    let loginForm = window.document.getElementById('loginform');
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        let loginDetails = {
            username: this.username.value,
            password: this.password.value
        }
        if (loginDetails.username == loginDetails.password) {
           
            $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",loginDetails,
                function (data, textStatus) {
                    alert(' Login Successfully Welcome....! ')
                    window.localStorage.setItem('loginStatus',true)
                    location.replace('./orders.html')
                },
                
            );
        } else {
            alert("Please Enter Valid Values")
        }
    }
    $('.top-menuitems').click(function (e) { 
        e.preventDefault();
        $('.active').removeClass('active');
        $(e.target).addClass('active')
    });
});