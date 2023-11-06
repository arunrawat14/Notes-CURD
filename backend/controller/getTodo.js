const Todo = require('../models/dataBaseModel')

exports.getTodo = async(req,res)=> {
    try {
        
        // create a new data in the database 
        const response = await Todo.find({})
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


exports.getTodoById = async(req,res)=> {
    try {

        const id = req.params.id;
        
        // create a new data in the database 
        const response = await Todo.find({_id: id})
        // send the json response with a sucess flag
        if(!response) {

            return res.status(404).json(
                {
                    success:false,
                    message:'No Data Found With The Given Id'
                }
            );

        }

        res.status(200).json({
            success: true,
            data: response,
            message: " element get ho gaya using id "
        })
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
