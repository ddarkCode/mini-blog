import { Schema, model } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    authorId: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model('Blog', blogSchema);
