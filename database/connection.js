import mongoose from "mongoose";

const main = async () => {
    mongoose.connect('mongodb+srv://abdul:abdul123@exercisecluster.xzu59it.mongodb.net/?retryWrites=true&w=majority');
    console.log('Database successfully conected!');
}

export default main;