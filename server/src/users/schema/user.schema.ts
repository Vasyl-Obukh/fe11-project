import { Schema, mongo } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as roles from '../roles';

export const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: roles.USER },
});

UserSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

UserSchema.methods.getPublicFields = function() {
    const { _id, name, email, role } = this;
    return { _id, name, email, role };
};
