const Joi = require('joi');


export const createAssignemt = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.date().required(),

  },
};

export const updateAssignemt = {
    body: {
      name: Joi.string().required(),
      description: Joi.string().required(),  
    },
  };

