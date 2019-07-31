const Profile = require('../../models/profile');

module.exports.getProfile = async (req, res)=>{
    try {
        let profile = await Profile.findOne({});
        return res.json({
            success: true,
            profile
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 


module.exports.updateProfile = async (req, res)=>{
    try {
        let {profileId} = req.params;
        let profile = await Expenses.findOneAndUpdate({_id: profileId}, {$set: {...req.body}}, {new : true});
        return res.json({
            success: true,
            profile
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 
