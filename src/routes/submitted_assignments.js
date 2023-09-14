import express from 'express';
import validate from 'express-validation';
import apiAuth from '../middleware/apiAuth'

import * as submitAssignemtController from '../controllers/submitted_assignments/submitted.assignment.controller';
import * as submitAssignemtValidator from '../controllers/submitted_assignments/submitted.assignment.validator';

const router = express.Router();

router.put(
    '/submitassignment',
    apiAuth,
    validate(submitAssignemtValidator.submitAssignemt),
    submitAssignemtController.submitAssignment
  );

  router.get(
    '/getsubmittedassignments',
    apiAuth,
    submitAssignemtController.getsubmittedAssignments
  );

module.exports = router;
