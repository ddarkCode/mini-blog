import Joi from 'joi';
import debug from 'debug';

const log = debug('app:userValidator');

const userValidatorObject = Joi.object({
  username: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: ['com', 'net', 'org'],
    })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  fullname: Joi.string().min(3).max(100).required(),
  isAdmin: Joi.boolean(),
  img_url: Joi.string(),
});

export const userInputValidator = async (req, res, next) => {
  try {
    const value = await userValidatorObject.validateAsync(req.body);
    log('Validator value: ', value);
    next();
  } catch (err) {
    log(err);
    res.status(500).json({
      //   err,
      //   details: err.details,
      message: err.message,
    });
  }
};
