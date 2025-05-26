import prisma from '../config/prismaClient.js';
import { generateUUID } from '../service/uuid.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        id: generateUUID(),
        ...req.body
      }
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id, 10) }
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
  }
};

export const editProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id, 10) }
    });
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
