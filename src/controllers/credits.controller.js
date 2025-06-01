import prisma from '../config/prismaClient.js';

export const getAllCredits = async (req, res) => {
  try {
    const credits = await prisma.credit.findMany({
      include: {
        sale: true,
        changes: true
      }
    });
    res.status(200).json(credits);
  } catch (error) {
    console.error('Error fetching credits:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCreditById = async (req, res) => {
  try {
    const { id } = req.params;
    const credit = await prisma.credit.findUnique({
      where: { id },
      include: {
        sale: true,
        changes: true
      }
    });
    if (!credit) {
      return res.status(404).json({ error: 'Credit not found' });
    }
    res.status(200).json(credit);
  } catch (error) {
    console.error('Error fetching credit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createCredit = async (req, res) => {
  try {
    const { saleId, amount, status } = req.body;
    const newCredit = await prisma.credit.create({
      data: {
        saleId,
        amount,
        status
      }
    });
    res.status(201).json(newCredit);
  } catch (error) {
    console.error('Error creating credit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCreditById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCredit = await prisma.credit.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedCredit);
  } catch (error) {
    console.error('Error updating credit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCreditById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCredit = await prisma.credit.delete({
      where: { id }
    });
    res.status(200).json(deletedCredit);
  } catch (error) {
    console.error('Error deleting credit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
