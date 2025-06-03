import prisma from '../config/prismaClient.js';
import { hashPassword } from '../service/hashPassword.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id }
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  try {
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        password: hashedPassword
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: req.body
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: { id }
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
