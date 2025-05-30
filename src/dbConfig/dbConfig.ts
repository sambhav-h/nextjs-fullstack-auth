
import mongoose from "mongoose";


export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;


        connection.on('connected', ()=>{
            console.log('mongodb connected successfully')
        })

        connection.on('error', (err) => {
            console.log('mongo db connection error. please make sure mongodb is running' + err);
            process.exit(1);
        })
    } catch (error) {
        console.log('something goes wrong!')
        console.log(error)
        process.exit(1)
    }
}