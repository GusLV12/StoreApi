import prisma from '../config/prismaClient.js';

export const getAllSales = async (req, res) => {
  try {
    const sales = await prisma.sale.findMany({
      include: {
        productSales: true,
        user: true,
        credit: true,
        promotions: true
      }
    });
    res.status(200).json(sales);
  } catch (error) {
    console.error('Error fetching sales:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createSale = async (req, res) => {
  try {
    const {
      userId,
      total,
      subtotal,
      iva,
      paymentType,
      productSales
    } = req.body;

    const newSale = await prisma.sale.create({
      data: {
        userId,
        total,
        subtotal,
        iva,
        paymentType,
        productSales: {
          create: productSales.map(ps => ({
            productId: ps.productId,
            quantity: ps.quantity,
            price: ps.price,
            iva: ps.iva
          }))
        }
      },
      include: {
        productSales: true
      }
    });

    res.status(201).json(newSale);
  } catch (error) {
    console.error('Error creating sale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await prisma.sale.findUnique({
      where: { id },
      include: {
        productSales: true,
        user: true,
        credit: true,
        promotions: true
      }
    });
    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    console.error('Error fetching sale by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSale = await prisma.sale.update({
      where: { id },
      data: req.body,
      include: {
        productSales: true,
        user: true,
        credit: true,
        promotions: true
      }
    });
    res.status(200).json(updatedSale);
  } catch (error) {
    console.error('Error updating sale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSale = await prisma.sale.delete({
      where: { id },
      include: {
        productSales: true,
        user: true,
        credit: true,
        promotions: true
      }
    });
    res.status(200).json(deletedSale);
  } catch (error) {
    console.error('Error deleting sale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
