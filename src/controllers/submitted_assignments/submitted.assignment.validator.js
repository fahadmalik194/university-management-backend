const Joi = require('joi');

export const submitAssignemt = {
    body: {
        submission_date: Joi.date().required(),  
    },
  };

