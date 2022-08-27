import { Schema, model } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    authorId: {
      type: String,
    },
    img_url: {
      type: String,
      default: '',
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model('Blog', blogSchema);
