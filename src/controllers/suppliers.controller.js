import prisma from '../config/prismaClient.js';

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await prisma.supplier.findMany();
    res.status(200).json(suppliers);
  } catch (error) {
    console.error('Error fetching suppliers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const createSupplier = async (req, res) => {
  try {
    const newSupplier = await prisma.supplier.create({
      data: req.body
    });
    res.status(201).json(newSupplier);
  } catch (error) {
    console.error('Error creating supplier:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const getSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await prisma.supplier.findUnique({
      where: { id: parseInt(id, 10) }
    });
    if (!supplier) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(200).json(supplier);
  } catch (error) {
    console.error('Error fetching supplier by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSupplier = await prisma.supplier.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedSupplier);
  } catch (error) {
    console.error('Error updating supplier:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSupplier = await prisma.supplier.delete({
      where: { id: parseInt(id, 10) }
    });
    res.status(200).json(deletedSupplier);
  } catch (error) {
    console.error('Error deleting supplier:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
