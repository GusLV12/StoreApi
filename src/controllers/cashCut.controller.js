import prisma from '../config/prismaClient.js';

export const getAllCashCuts = async (req, res) => {
  try {
    const cashCuts = await prisma.cashCut.findMany({
      include: { seller: true }
    });
    res.status(200).json(cashCuts);
  } catch (error) {
    console.error('Error fetching cash cuts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCashCutById = async (req, res) => {
  try {
    const { id } = req.params;
    const cashCut = await prisma.cashCut.findUnique({
      where: { id },
      include: { seller: true }
    });
    if (!cashCut) return res.status(404).json({ error: 'CashCut not found' });
    res.status(200).json(cashCut);
  } catch (error) {
    console.error('Error fetching cash cut:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createCashCut = async (req, res) => {
  try {
    const { sellerId, cash, credit } = req.body;
    const newCashCut = await prisma.cashCut.create({
      data: {
        sellerId,
        cash,
        credit
      },
      include: { seller: true }
    });
    res.status(201).json(newCashCut);
  } catch (error) {
    console.error('Error creating cash cut:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCashCutById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.cashCut.delete({
      where: { id }
    });
    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting cash cut:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
