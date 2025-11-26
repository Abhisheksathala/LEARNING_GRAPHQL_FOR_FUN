import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Member'], default: 'Member' },
    // blogs: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Blog',
    //   },
    // ],
}, { timestamps: true });
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
