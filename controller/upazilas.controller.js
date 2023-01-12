const Upazilas = require('../Models/Upazilas');

const upazilasController = {};

upazilasController.upazilas = async (req, res, next) => {
    try {
        const upazilas = await Upazilas.find({ district_id: req.params.district_id })
        res.status(200).send(upazilas)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

upazilasController.getAllUpazila = async (req, res, next) => {
    try {
        const upazilas = await Upazilas.find({})
        res.status(200).send(upazilas)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = upazilasController;