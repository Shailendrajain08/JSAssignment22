var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }

        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("paymentType").value == "" && document.getElementById("expenseName").value == "" && document.getElementById("currency").value == "" && document.getElementById("friendName").value == "" && document.getElementById("date").value == "" && document.getElementById("amount").value == "") {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

function readFormData() {
    var formData = {};
    formData["paymentType"] = document.getElementById("paymentType").value;
    formData["expenseName"] = document.getElementById("expenseName").value;
    formData["currency"] = document.getElementById("currency").value;
    formData["friendName"] = document.getElementById("friendName").value;
    formData["date"] = document.getElementById("date").value;
    formData["amount"] = document.getElementById("amount").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("expenseMan").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.date;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.friendName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.expenseName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.paymentType;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.currency;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.amount;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button class="editBtn" onClick="onEdit(this)">Edit</button>
    <button class="editBtn" onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("friendName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("expenseName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("paymentType").value = selectedRow.cells[3].innerHTML;
    document.getElementById("currency").value = selectedRow.cells[4].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.date;
    selectedRow.cells[1].innerHTML = formData.friendName;
    selectedRow.cells[2].innerHTML = formData.expenseName;
    selectedRow.cells[3].innerHTML = formData.paymentType;
    selectedRow.cells[4].innerHTML = formData.currency;
    selectedRow.cells[5].innerHTML = formData.amount;
}

function resetForm() {
    document.getElementById("date").value = "";
    document.getElementById("expenseName").value = "";
    document.getElementById("paymentType").value = "";
    document.getElementById("currency").value = "";
    document.getElementById("amount").value = "";
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("expenseMan").deleteRow(row.rowIndex);
        resetForm();
    }
}


function onFriendSubmit() {
    var ddl = document.getElementById("friendName");
    var ddl2 = document.getElementById("filterFriendName");
    var option = document.createElement("OPTION");
    var option2 = document.createElement("OPTION");
    option.innerHTML = document.getElementById("friend").value;
    option.value = document.getElementById("friend").value;
    option2.innerHTML = document.getElementById("friend").value;
    option2.value = document.getElementById("friend").value;
    ddl.options.add(option);
    ddl2.options.add(option2);
    resetFriend()
}

function resetFriend(){
    document.getElementById("friend").value = "";
}