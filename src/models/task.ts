import { Schema , model } from 'mongoose';

const taskSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
});

export default model('task', taskSchema);