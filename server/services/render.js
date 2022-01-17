const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/items')
        .then(function(response){
            res.render('index', { items : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:3000/api/items', { params : { id : req.query.id }})
        .then(function(itemData){
            res.render("update_item", { item : itemData.data})
        })
        .catch(err =>{
            res.send(err);
        })
}