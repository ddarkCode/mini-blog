import Joi from 'joi';
import debug from 'debug';

const log = debug('app:blogValidator');

const blogValidatorObject = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().required(),
});

export const blogValidator = async (req, res, next) => {
  try {
    const value = await blogValidatorObject.validateAsync(req.body);
    log(value);
    next();
  } catch (err) {
    log(err.message);
    return res.status(500).json(err.message);
  }
};
