const User = require('./model')

exports.createUser = async (req, res, next) => {
    if(!req.body?.name || !req.body?.email || !req.body?.password){
        res
            .status(400)
            .json({message: `Name, email or password required`});
    }
    const createUser = await User.create({ ...req.body });
    res
        .status(201)
        .json({message: `New user is created.`, data: createUser});
};

exports.getUser = async (req, res, next) => {
    // if(req.body.name == test.users.name) {
    //     res
    //         .status(201)
    //         .json({message: `Successfully logged in`})
    // }
}