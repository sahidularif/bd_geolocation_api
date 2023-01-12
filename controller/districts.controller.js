const Districts = require('../Models/Districts');

const districtController = {};

districtController.districts = async (req, res, next) => {
    try {
        const districts = await Districts.find({});
        res.status(200).send(districts)
    } catch (err) {
        res.status(500).send(err)
    }
}
districtController.singleDistricts = async (req, res, next) => {
    try {
        const districts = await Districts.find({division_id: req.params.division_id})
        res.status(200).send(districts)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = districtController;