import express from 'express';
import validate from 'express-validation';
import apiAuth from '../middleware/apiAuth'

import * as assignemntController from '../controllers/assignment/assignment.controller';
import * as assignemntValidator from '../controllers/assignment/assignment.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================

router.post(
  '/createassignment',
  apiAuth,
  validate(assignemntValidator.createAssignemt),
  assignemntController.createAssignemts,
);

router.put(
    '/updateassignment',
    apiAuth,
    validate(assignemntValidator.updateAssignemt),
    assignemntController.updateAssignment,
  );

  router.get(
    '/getteacherassignments',
    apiAuth,
    assignemntController.getTeacherAssignmets,
  );

  router.get(
    '/getsubmissions',
    apiAuth,
    assignemntController.getSubmissionDetails,
  );

  router.get(
    '/getAssignemntById',
    apiAuth,
    assignemntController.GetAssignemntById,
  );

module.exports = router;
