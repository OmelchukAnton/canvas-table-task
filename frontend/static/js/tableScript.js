const init = () => {
    let table = document.querySelector('table');
    let btnAdd = document.querySelector('button');
    let nameInput = document.querySelector('#name');
    let phoneInput = document.querySelector('#phone');
    // initial users
    let users = [
        {name: 'Anton', phone: '+375-29-1112233'},
        {name: 'John', phone: '1112233'},
        {name: 'James', phone: '292921232311'},
        {name: 'Nik', phone: '725-77-11'},
        {name: 'Mike', phone: '+775291772233'}
    ];
    let htmlUsers = users.map(user => {
        return `
            <tr>
                <td style="padding: 10px">${user.name}</td>
                <td style="padding: 10px">${user.phone}</td>
                <td><i class="fa fa-edit" style="font-size:24px"></i></td>
                <td><i class="fa fa-trash" style="font-size:24px"></i></td>
            </tr>`;
    });
    // append rows to table with users
    table.insertAdjacentHTML('beforeend', htmlUsers.join(""));
    // insert new user with validation
    btnAdd.addEventListener('click', () => {
        let name = nameInput.value;
        let phone = phoneInput.value;

        if(name.trim() === '') {
            document.getElementById('notice').innerHTML = 'Name field should not be empty';
            document.getElementById('notice').style.color = 'red';
            return;
        } else {
            document.getElementById('notice').innerHTML = '';
        }

        if(!/^[+]?[-\s\./0-9]*$/g.test(phone) || phone.trim() === '') {
            document.getElementById('notice').innerHTML = 'Invalid phone number, allowed values:  + and numbers with dash';
            document.getElementById('notice').style.color = 'red';
            return ;
        } else {
            document.getElementById('notice').innerHTML = '';
        }
        // clear inputs
        nameInput.value = '';
        phoneInput.value='';
        
        let template = `
            <tr>
                <td style="padding: 10px">${name}</td>
                <td style="padding: 10px">${phone}</td>
                <td><i class="fa fa-edit" style="font-size:24px"></i></td>
                <td><i class="fa fa-trash" style="font-size:24px"></i></td>
            </tr>`;
        table.innerHTML += template;
        
        // save to localStorage current data table
    });
    // edit row
    let editRows = document.querySelectorAll('.fa-edit');
    for (let i = 0; i < editRows.length; i++) {    
        editRows[i].addEventListener('click', ((j) => {    	 
            return function() {
                table.rows[j + 1].cells[0].setAttribute("contentEditable", "true");
                table.rows[j + 1].cells[1].setAttribute("contentEditable", "true");
                table.rows[j + 1].cells[2].innerHTML = '<i class="fa fa-save" style="font-size:24px"></i>';
                let saveRow = document.querySelector('.fa-save');
                // save row
                saveRow.addEventListener('click', () => {
                    table.rows[j + 1].cells[0].setAttribute("contentEditable", "false");
                    table.rows[j + 1].cells[1].setAttribute("contentEditable", "false");
                    table.rows[j + 1].cells[2].innerHTML = '<i class="fa fa-edit" style="font-size:24px"></i>';
                })
            }
        })(i));
    }
    // delete Row
    let rows = document.querySelectorAll('.fa-trash');
    for (let i = 0; i < rows.length; i++) {    
        rows[i].addEventListener('click', ((j) => {    	  
            return function() {
                table.deleteRow(j + 1);
            }
        })(i))
    }
}

document.addEventListener('DOMContentLoaded', init);
