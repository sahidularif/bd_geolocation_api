const Divisions = require('../Models/Divisions');

const divisionsController = {};

divisionsController.divisions = async (req, res, next) => {
    try {
        const divisions = await Divisions.find({})
        res.status(200).send(divisions)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

divisionsController.singleDivision = async (req, res, next) => {
    try {
        const divisions = await Divisions.findOne({id: req.params.division_id})
        res.status(200).send(divisions)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = divisionsController;