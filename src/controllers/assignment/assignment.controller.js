
import { Assignment, User, submitted_assignment } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const createAssignemts = async (req, res) => {
  try {
     let assignemnt = await Assignment.create({
      name: req.body.name,
      description: req.body.description,
      due_date: req.body.due_date,
      instructor_id: req.user.id,
     })
     
     if (assignemnt) {
      const allStudents = await User.findAll({
        where: {
          role: "student",
        },
      });

      for (const student of allStudents) {
        const data = await submitted_assignment.create({
          assignment_id: assignemnt.dataValues.id,
          instructor_id: req.user.id,
          student_id: student.dataValues.id, // Access 'id' from 'dataValues'
        });
      }

     return  res.status(200).json({
        statusCode: 200,
        msg: "assignment created and assigned successfully",
      });
    }
    return successResponse(req, res, { assignemnts });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
 
export const updateAssignment = async (req, res) => {
  try {
    const body = {
      name: req.body.name,
      description: req.body.description,
    };
  
   let updated =await Assignment.update(
      body,
      { where: { id: req.query.id } }
    )
    return successResponse(req, res, { updated });    
  } catch (error) {
    return errorResponse(req, res, error.message);
  }

};

export const getTeacherAssignmets = async (req, res) => {
  try {
    let teacherAssignmets = await   User.findAll({
      where: { role: "teacher", id: req.user.id },
      include: [
        {
          model: Assignment,
          as: "assignemnt",
        },
      ],
    })
    return successResponse(req, res, { teacherAssignmets });    
  } catch (error) {
    return errorResponse(req, res, error.message);
  }

};

export const getSubmissionDetails = async (req, res) => {
  try {
    let submissionDetails = await submitted_assignment
    .findAll({
      where: {
        instructor_id: req.user.id,
        assignment_id: req.query.assignment_id,
      }, // Assuming 'student' is the role for students
      include: [
        {
          model: Assignment,
          as: "assignments",
        },
        {
          model: User,
          as: "submitted_assignments",
        },
      ],
    })
    return successResponse(req, res, { submissionDetails });    
  } catch (error) {
    return errorResponse(req, res, error);
  }

};

export const GetAssignemntById = async (req, res) => {
  try {
    let assignmentById = await submitted_assignment
    .findOne({
      where: { assignment_id: req.query.assignment_id }, 
      include: [
        {
          model: Assignment,
          as: "assignments",
        },
      ],
    })
    return successResponse(req, res, { assignmentById });    
  } catch (error) {
    return errorResponse(req, res, error);
  }

};






