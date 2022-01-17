const axios = require('axios');
const Json2csvParser = require('json2csv').Parser;

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

exports.export = async (req, res) =>{
    await axios.get('http://localhost:3000/api/items')
        .then(function(response){
            const csvFields = ['name', 'price','description','quantity'];
            const json2csvParser = new Json2csvParser({ csvFields });

            let csv;
            try {
                csv = json2csvParser.parse(response.data);
            } catch (err) {
                return res.status(500).json({ err });
            }

            res.setHeader('Content-disposition', 'attachment; filename=items-report.csv');
            res.set('Content-Type', 'text/csv');
            res.status(200).send(csv);
        })
        .catch(err =>{
            res.send(err);
        })
}