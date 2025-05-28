import prisma from '../config/prismaClient.js';

export const getAllProductsSale = async (req, res) => {
  try {
    const productSales = await prisma.productSale.findMany({
      include: {
        product: true,
        sale: true
      }
    });
    res.status(200).json(productSales);
  } catch (error) {
    console.error('Error fetching productSales:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createProductSale = async (req, res) => {
  try {
    const { saleId, productId, quantity, price, iva } = req.body;

    const newProductSale = await prisma.productSale.create({
      data: {
        saleId,
        productId,
        quantity,
        price,
        iva
      },
      include: {
        product: true,
        sale: true
      }
    });

    res.status(201).json(newProductSale);
  } catch (error) {
    console.error('Error creating productSale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const productSale = await prisma.productSale.findUnique({
      where: { id },
      include: {
        product: true,
        sale: true
      }
    });

    if (!productSale) {
      return res.status(404).json({ error: 'ProductSale not found' });
    }

    res.status(200).json(productSale);
  } catch (error) {
    console.error('Error fetching productSale by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProductSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.productSale.delete({
      where: { id }
    });

    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting productSale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
