const router = require('express').Router();
const { upazila, upazilas, getAllUpazila } = require('../controller/upazilas.controller');
const { division, divisions, singleDivision } = require('../controller/divisions.controller');
const { districts, singleDistricts } = require('../controller/districts.controller');


// Division routes
router.get('/divisions', divisions);
router.get('/divisions/:division_id', singleDivision);

// Districts routes
router.get('/districts', districts);
router.get('/districts/:division_id', singleDistricts);

// Districts routes
router.get('/upazilas', getAllUpazila);
router.get('/upazilas/:district_id', upazilas);

router.get('/', (req, res, next) => {
    res.status(200).json({message: 'This is api version 1.0'})
})
module.exports = {
    routes: router,
}