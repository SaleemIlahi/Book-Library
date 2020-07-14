
var title = document.getElementById("book-title");
var id = document.getElementById("book-id");
var category = document.getElementById("category");
var submit = document.getElementById('submit');
var tbody = document.getElementById("book-list");
var num = 1;

submit.addEventListener('click',function(){
    // table row
    var row = document.createElement("tr");

    // table data column
    var listSr = document.createElement("td");
    var listTitle = document.createElement("td");
    var listId = document.createElement("td");
    var listCat = document.createElement("td");
    var listDelete = document.createElement("td");

    var listLink = document.createElement("i");

    //Append value to table data
    listSr.appendChild(document.createTextNode(num));
    listTitle.appendChild(document.createTextNode(title.value)); 
    listId.appendChild(document.createTextNode(id.value));
    listCat.appendChild(document.createTextNode(category.value));

    listDelete.appendChild(listLink).classList.add("fas" ,"fa-trash-alt");

    //Append value to table row
    row.appendChild(listSr);
    row.appendChild(listTitle);
    row.appendChild(listId);
    row.appendChild(listCat);
    row.appendChild(listDelete);

    if(title.value == "" || id.value == "" || category.value == "Select Category")
    {
        if(title.value == "")
        {
            title.style.border = "1.2px solid #c0392b";
        }
        if(id.value == "")
        {
            id.style.border = "1.2px solid #c0392b";
        }
        if(category.value == "Select Category")
        {
            category.style.border = "1.2px solid #c0392b";
        }

        title.value = "";
        id.value = "";
        category.value = "Select Category";
    }
    else
    {
        tbody.appendChild(row);

        num++;

        title.value = "";
        id.value = "";
        category.value = "Select Category";
    }

    title.addEventListener("focusin",function(){
        this.style.border = "0.5px solid #000";
    });
    id.addEventListener("focusin",function(){
        this.style.border = "0.5px solid #000";
    });
    category.addEventListener("focusin",function(){
        this.style.border = "0.5px solid #000";
    });

    row.appendChild(listDelete).addEventListener("click",function(){
        row.remove();
    });

});

