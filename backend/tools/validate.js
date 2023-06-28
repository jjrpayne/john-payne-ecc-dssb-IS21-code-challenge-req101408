var Joi = require("joi").extend(require('@joi/date'));

const new_product_schema = Joi.object({
    productName: Joi.string().required(),
    scrumMasterName: Joi.string().required(),
    productOwnerName: Joi.string().required(),
    Developers: Joi.array().items(Joi.string()).min(1).max(5).required(),
    startDate: Joi.date().format('YYYY/MM/DD').required(),
    methodology: Joi.string().valid('Agile', 'Waterfall').required(),
    location: Joi.string().uri().required()
});

var edit_product_schema = Joi.object({
    productName: Joi.string(),
    scrumMasterName: Joi.string(),
    productOwnerName: Joi.string(),
    Developers: Joi.array().items(Joi.string()).min(1).max(5),
    startDate: Joi.date().format('YYYY/MM/DD'),
    methodology: Joi.string().valid('Agile', 'Waterfall'),
    location: Joi.string().uri()
});

e = module.exports;

e.validateNewProduct = () => {
    return (req, res, next) => {
        prod = req.body;
        console.log(prod);
        const result = new_product_schema.validate(prod);
        if (result.error) {
            console.log(result.error);
            return res.status(401).send(result.error.details);
        }
        next();
    }

};

e.validateEditProduct = () => {
    return (req, res, next) => {
        prod = req.body;
        const result = edit_product_schema.validate(prod);
        if (result.error) {
            return res.status(401).send(result.error.details)
        }
        next();
    }

}