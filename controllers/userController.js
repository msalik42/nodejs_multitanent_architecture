const db = require("../models/index");

const addRTO = async (req, resp) => {
    const { RTO_ID } = req.body;
    await db.initializeTanentByRTOId(RTO_ID);
    resp.json(req.body);
};
const getRTOUsers = async (req, resp)=>{
    const { RTO_ID } = req.body;
    await db.initializeTanentByRTOId(RTO_ID);
    const data = await db.User.findAll()
    resp.json(data);
}
const addRTOUser = async (req, resp)=>{
    const { RTO_ID, user } = req.body;
    await db.initializeTanentByRTOId(RTO_ID);
    await db.User.create({
        username: user.name,
        password: user.password
    });
    const data = await db.User.findAll()
    resp.json(data);
}
module.exports = { addRTO, getRTOUsers, addRTOUser };
