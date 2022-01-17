const axios = require('axios');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const path = require('path')

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
            console.log(response.data)

            const csvFields = ['name', 'price','description','quantity'];
            const json2csvParser = new Json2csvParser({ csvFields });

            let csv;
            try {
                csv = json2csvParser.parse(response.data);
            } catch (err) {
                return res.status(500).json({ err });
            }

            fs.writeFile('TEST.csv', csv, function(err) {
                if (err) throw err;
                console.log('file saved');
            });

            res.render("export")

            // const dateTime = moment().format('YYYYMMDDhhmmss');
            // const filePath = path.join(__dirname, "..", "public", "exports", "csv-" + dateTime + ".csv")
            // fs.writeFile(filePath, csv, function (err) {
            //     if (err) {
            //     return res.json(err).status(500);
            //     }
            //     else {
            //     setTimeout(function () {
            //         fs.unlinkSync(filePath); // delete this file after 30 seconds
            //     }, 30000)
            //     return res.json("/exports/csv-" + dateTime + ".csv");
            //     }
            // });

        })
        .catch(err =>{
            res.send(err);
        })
    


   
}