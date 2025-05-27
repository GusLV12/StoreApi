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

export const createDepartment = async (req, res) => {
  try {
    const newDepartment = await prisma.department.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(newDepartment);
  } catch (error) {
    console.error('Error creating department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await prisma.department.findUnique({
      where: { id }
    });
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    console.error('Error fetching department by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedDepartment);
  } catch (error) {
    console.error('Error updating department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDepartment = await prisma.department.delete({
      where: { id: parseInt(id, 10) }
    });
    res.status(200).json(deletedDepartment);
  } catch (error) {
    console.error('Error deleting department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
