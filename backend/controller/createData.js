const Todo = require('../models/dataBaseModel')
exports.createTodo = async(req,res)=> {
    try {
        // extract title and description from the request body
        const {name,email,title,department,role,image} = req.body;
        // create a new data in the database 
        const response = await Todo.create({
            title,name,email,department,role,image
        })
        // send the json response with a sucess flag
        console.log(response)
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


exports.updateTodo = async(req,res)=> {
    try {
        
        // find the id and update it with the latest update

        const id = req.params.id;

        const {name,email,title,department,role,image} = req.body;

        const response = await Todo.findByIdAndUpdate({_id: id}, 
            {name,email,title,department,role,image},
        ) ;
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