import prisma from '../config/prismaClient.js';

export const getAllCreditChanges = async (req, res) => {
  try {
    const changes = await prisma.creditChange.findMany({
      include: { credit: true }
    });
    res.status(200).json(changes);
  } catch (error) {
    console.error('Error fetching credit changes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createCreditChange = async (req, res) => {
  try {
    const { creditId, changeAmount, date } = req.body;
    const newChange = await prisma.creditChange.create({
      data: {
        creditId,
        changeAmount,
        date: date ? new Date(date) : undefined
      }
    });
    res.status(201).json(newChange);
  } catch (error) {
    console.error('Error creating credit change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCreditChangeById = async (req, res) => {
  try {
    const { id } = req.params;
    const change = await prisma.creditChange.findUnique({
      where: { id }
    });
    if (!change) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(change);
  } catch (error) {
    console.error('Error fetching credit change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCreditChange = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await prisma.creditChange.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating credit change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCreditChange = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.creditChange.delete({
      where: { id }
    });
    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting credit change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
