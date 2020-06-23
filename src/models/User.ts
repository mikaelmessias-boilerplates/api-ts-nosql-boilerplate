import mongoose, { Schema, Document } from 'mongoose';

export interface iUser extends Document{
  name: string,
  email: string,
  password: string,
}

const UserSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<iUser>('User', UserSchema, 'users');
