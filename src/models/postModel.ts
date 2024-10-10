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
    type: Schema.Types.ObjectId ,
    required: [true, "please enter an Object Id, otherwise you just wast your time here"]
  },
  createdAt: {
    type: Date,
    required: [true, "you forgat to put a date!"]
  }
});

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, "please input a title"]
  },
  content: {
    type: String,
    required: [true, "please enter a content"]
  },
  author: {
    type: Schema.Types.ObjectId ,
    required: [true, "please enter an Object Id, otherwise you just wast your time here"]
  },
  comments: [CommentSchema]
})

export default mongoose.model<IPost>("Post", PostSchema);
