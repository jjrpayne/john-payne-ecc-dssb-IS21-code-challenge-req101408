const fs = require('fs');
const fileName = __dirname + '/../data.json';
const products = require(fileName);

module.exports = {
    getAllProducts : async (req, res) => {
        try {
            return res.status(200).send(products);
        } catch (err) {
            const error = { message: err.message, stack: err.stack };
            return res.status(500).send(error);
        }
    },

    addNewProduct : async (req, res) => {
        const b = req.body;

        // create a new product id
        const ids = products.map(product => product.productId);
        const newId = Math.max(...ids) +1;

        // add new product to memory
        const newProduct = {
            productId: newId,
            productName: b.productName,
            scrumMasterName: b.scrumMasterName,
            productOwnerName: b.productOwnerName,
            Developers: b.Developers,
            startDate: b.startDate,
            methodology: b.methodology,
            location: b.location
        };
        products.push(newProduct);

        // write new product to json file
        fs.writeFile(fileName, JSON.stringify(products, null, 2), function writeJSON(err) {
            if (err){
                const error = { message: err.message, stack: err.stack };
                return res.status(500).send(error);
            }
            console.log("writing to data.json");
            console.log(newProduct);
        })
        return res.status(200).send({product: newProduct, message: "success!"});
    },

    editProduct : async (req, res) => {
        const findproductId = 1*req.params.id
        const b = req.body;

        // find product by id
        const equalsProductId = (x) => x.productId === findproductId;

        const oldProductIndex = products.findIndex(equalsProductId); 

        console.log(oldProductIndex);

        if(typeof products[oldProductIndex] === 'undefined'){
            return res.status(404).send("No product can be found with requested ID.");
        }

        var editsMade = {};

        Object.keys(b).forEach(key => {
            if(key in products[oldProductIndex]){
                products[oldProductIndex][key] = b[key];
                editsMade[key] = b[key];
            }
        })

        // write new product to json file
        fs.writeFile(fileName, JSON.stringify(products, null, 2), function writeJSON(err) {
            if (err){
                const error = { message: err.message, stack: err.stack };
                return res.status(500).send(error);
            }
            console.log("writing to data.json");
        })
        return res.status(200).send({
            message: "product successfully updated.",
            productId: findproductId,
            edits: editsMade
        });
    }
}