const { Schema, model } = require('mongoose');
const { hash, compare } = require('bcrypt');
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password, +process.env.SALT_ROUNDS);
  next();
});

userSchema.methods.verifyPassword = async function (password) {
  return await compare(password, this.password);
};

export default model('User', userSchema);
