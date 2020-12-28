import mongoose from 'mongoose';

const signUpTemplateSchema = new mongoose.Schema({
    fullName: {
        type: 'String',
        required: true,
    },
    username: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    date: {
        type: 'Date',
        default: Date.now,
    }
});

const blogTemplateSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true,
    },
    snippet: {
        type: 'String',
        required: true,
    },
    body: {
        type: 'String',
        required: true,
    }
   
}, {timestamps: true});

const SignupTables = mongoose.model('signuptable', signUpTemplateSchema);
const BlogTables = mongoose.model('blogTable', blogTemplateSchema);

export default {SignupTables, BlogTables};
