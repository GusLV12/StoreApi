import prisma from '../config/prismaClient.js';

export const getAllProductChanges = async (req, res) => {
  try {
    const changes = await prisma.productChange.findMany({
      include: { product: true }
    });
    res.status(200).json(changes);
  } catch (error) {
    console.error('Error fetching product changes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductChangeById = async (req, res) => {
  try {
    const { id } = req.params;
    const change = await prisma.productChange.findUnique({
      where: { id },
      include: { product: true }
    });
    if (!change) return res.status(404).json({ error: 'Product change not found' });
    res.status(200).json(change);
  } catch (error) {
    console.error('Error fetching product change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createProductChange = async (req, res) => {
  try {
    const { productId, changeType } = req.body;
    const newChange = await prisma.productChange.create({
      data: { productId, changeType },
      include: { product: true }
    });
    res.status(201).json(newChange);
  } catch (error) {
    console.error('Error creating product change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProductChangeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.productChange.delete({ where: { id } });
    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting product change:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
