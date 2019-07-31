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
        let profile = await Profile.findOneAndUpdate({}, {$set: {...req.body}}, {new : true, upsert: true});
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
