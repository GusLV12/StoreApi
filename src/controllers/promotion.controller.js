import prisma from '../config/prismaClient.js';

export const getAllPromotions = async (req, res) => {
  try {
    const promotions = await prisma.promotion.findMany();
    res.status(200).json(promotions);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getPromotionById = async (req, res) => {
  try {
    const { id } = req.params;
    const promotion = await prisma.promotion.findUnique({ where: { id } });
    if (!promotion) {
      return res.status(404).json({ error: 'Promotion not found' });
    }
    res.status(200).json(promotion);
  } catch (error) {
    console.error('Error fetching promotion by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createPromotion = async (req, res) => {
  try {
    const { type, startDate, endDate } = req.body;
    const newPromotion = await prisma.promotion.create({
      data: { type, startDate: new Date(startDate), endDate: new Date(endDate) }
    });
    res.status(201).json(newPromotion);
  } catch (error) {
    console.error('Error creating promotion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updatePromotionById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPromotion = await prisma.promotion.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedPromotion);
  } catch (error) {
    console.error('Error updating promotion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deletePromotionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPromotion = await prisma.promotion.delete({ where: { id } });
    res.status(200).json(deletedPromotion);
  } catch (error) {
    console.error('Error deleting promotion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
