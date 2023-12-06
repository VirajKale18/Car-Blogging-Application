import mongoose from "mongoose"
 const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.thyv4tm.mongodb.net/?retryWrites=true&w=majority`
    try {
        
       await mongoose.connect(URL,{ useNewUrlParser:true })
       console.log('DB Connnected Succesfully')
    } catch (error) {
        console.log('Error while Connecting with DB !',error);
    }
}

export default Connection;