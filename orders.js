const logout = () => {
    localStorage.clear();
    window.location.href = './login.html';
}  
    
$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
    location.assign('./login.html')
}

    var responseArr;
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            responseArr = data;
            data.map((item, pos) => {
                createRows(item)
                $('#count').html(data.length);
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr class="table-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.customerName}</td>
            <td class="primary-text">${data.orderDate}<br><span class="secondary-text">${data.orderTime}</span></td>
            <td class="secondary-text">$${data.amount}</td>
            <td class="primary-text">${data.orderStatus}</td>
        </tr>`)
        $('#table-body').append(tr);
    }


    var new_Check = document.getElementById('new_Check');
    new_Check.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('table-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'New'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
        console.log(tablebody.getElementsByTagName('tr').length)
    })

    var packed_Check = document.getElementById('packed_Check');
    packed_Check.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('table-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Packed'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })

    var intransit_Check = document.getElementById('intransit_Check');
    intransit_Check.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('table-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'InTransit'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })

    var delivered_Check = document.getElementById('delivered_Check');
    delivered_Check.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('table-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Delivered'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    

});