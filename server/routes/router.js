const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/add-item', services.add_item)
route.get('/update-item', services.update_item)
route.get('/export', services.export)

// API
route.post('/api/items', controller.create);
route.get('/api/items', controller.find);
route.put('/api/items/:id', controller.update);
route.delete('/api/items/:id', controller.delete);


module.exports = route