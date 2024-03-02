var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["product"]=document.getElementById("product").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0]; 
    var newRow = table.insertRow(0); 
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.product
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<button onClick="onDelete(this)">Delete</button>`; 

    selectedRow = null;
}


if(confirm("Do you want to delete this record")){
        function onDelete(td){
        var row = td.parentNode.parentNode;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm()
}

function resetForm(){
    document.getElementById("product").value = "";
}