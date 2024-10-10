import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";
import postModel from "./postModel";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "please enter your name or I will kill you"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "please enter a content"],
    unique: true
  },
  profile: {
    type: {
      bio: {
        type: String,
        minlength: [5, "Too short bio"],
        maxlength: [15, "Too long bio"]
      },
      socialLinks: [String]
    }
  },
  posts: [Schema.Types.ObjectId]
});

export default mongoose.model<IUser>("User", UserSchema);
