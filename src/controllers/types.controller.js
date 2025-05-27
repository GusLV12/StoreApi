import prisma from '../config/prismaClient.js';

export const getAllTypes = async (req, res) => {
  try {
    const types = await prisma.type.findMany();
    res.status(200).json(types);
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createType = async (req, res) => {
  try {
    const newType = await prisma.type.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(newType);
  } catch (error) {
    console.error('Error creating type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await prisma.type.findUnique({
      where: { id }
    });
    if (!type) {
      return res.status(404).json({ error: 'Type not found' });
    }
    res.status(200).json(type);
  } catch (error) {
    console.error('Error fetching type by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedType = await prisma.type.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedType);
  } catch (error) {
    console.error('Error updating type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedType = await prisma.type.delete({
      where: { id }
    });
    res.status(200).json(deletedType);
  } catch (error) {
    console.error('Error deleting type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
