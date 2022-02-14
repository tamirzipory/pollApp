import mongoose from 'mongoose';


const pollsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    options: [{option: String, votes: Number}]
    
},
{
    timestamps: true
}
    );

    const Poll = mongoose.model("polls", pollsSchema);
export default Poll;