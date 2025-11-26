import mongoose, { Document, Schema, Model, Types } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'Member';
  // blogs: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
  {
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
  },
  { timestamps: true },
);

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
