import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: [true, "please enter a content"]
  },
  author: {
    type: Types.ObjectId ,
    required: [true, "please enter an Object Id, otherwise you just wast your time here"]
  },
  createdAt: {
    type: Date,
    required: [true, "you forgat to created a date!"]
  }
});

const PostSchema = new Schema<IPost>({})

export default mongoose.model<IPost>("Post", PostSchema);
