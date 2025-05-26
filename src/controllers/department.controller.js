import prisma from '../config/prismaClient.js';

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany();
    res.status(200).json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
