import prisma from '../config/prismaClient.js';

export const getAllSalesPromotions = async (req, res) => {
  try {
    const salesPromotions = await prisma.salesPromotions.findMany({
      include: {
        sale: true,
        promotion: true
      }
    });
    res.status(200).json(salesPromotions);
  } catch (error) {
    console.error('Error fetching sales promotions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createSalesPromotion = async (req, res) => {
  try {
    const { saleId, promotionId } = req.body;
    const newRelation = await prisma.salesPromotions.create({
      data: {
        saleId,
        promotionId
      },
      include: {
        sale: true,
        promotion: true
      }
    });
    res.status(201).json(newRelation);
  } catch (error) {
    console.error('Error creating sales-promotion relation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSalesPromotionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSalesPromotion = await prisma.salesPromotions.delete({
      where: { id }
    });
    res.status(200).json(deletedSalesPromotion);
  } catch (error) {
    console.error('Error deleting sales promotion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
