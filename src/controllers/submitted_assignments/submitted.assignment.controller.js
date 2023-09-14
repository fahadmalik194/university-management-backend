import { Assignment, User, submitted_assignment } from "../../models";
import { successResponse, errorResponse } from "../../helpers";

export const getsubmittedAssignments = async (req, res) => {
    try {
     let studentAssignments = await User.findAll({
            where: { 
              id: req.user.id,
              role: 'student' 
            },
            include: [
              {
                model: submitted_assignment,
                as: 'submitted_assignments',
                include: [
                  {
                    model: Assignment,
                    as: 'assignments',
                  },
                ]
              },
            ],
          })
      return successResponse(req, res, { studentAssignments });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };

export const submitAssignment = async (req, res) => {
  try {
    const body = {
      submission_date: req.body.submission_date,
      submission_status: "submitted",
    };

    let updatedResult = await submitted_assignment.update(body, {
      where: {
        assignment_id: req.query.assignemnt_id,
        student_id: req.user.id,
      },
    });
    return successResponse(req, res, { updatedResult });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
