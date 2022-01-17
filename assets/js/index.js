
$("#add_item").submit(function(event){
    alert("Item added successfully!");
})

$("#update_item").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/items/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Item updated successfully!");
        location.href = "http://localhost:3000/";
    })

})

$("#export").submit(function(event){
    alert("CSV exported successfully!");
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Confirm deletion of this item?")){
            $.ajax(request).done(function(response){
                location.reload();
            })
        }
    })
}