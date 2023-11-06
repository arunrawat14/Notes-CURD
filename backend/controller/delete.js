const Todo = require('../models/dataBaseModel')

exports.deleteById = async(req,res)=> {
    try {

        const id = req.params.id;
        
        // create a new data in the database 
        const response = await Todo.findByIdAndDelete({_id: id})
        // send the json response with a sucess flag
        res.status(200).json(
            {
                sucess: true,
                data: response,
                message: "data save ho gya sucessfully"
            }
        );
    }
    catch(err){
        console.log(err);
        res.status(500).json(
            {
                sucess: false,
                data: "interner server error",
                message: err.message
            }
        );
    }
}
