const router = require('express').Router({mergeParams: true});
const profileHandler = require('../lib/contollers/profile');

router.route('/')
    .get(profileHandler.getProfile)

router.route('/:profileId')
    .put(profileHandler.updateProfile)


module.exports = router