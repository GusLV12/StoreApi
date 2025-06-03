import prisma from '../../config/prismaClient.js';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/config.js';
import { comparePasswords, hashPassword } from '../../service/hashPassword.js';

export const register = async (req, res) => {
  const { username, email, phone, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) return res.status(400).json({ error: 'Correo en uso.' });

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: { username, email, phone, password: hashedPassword, role }
    });

    res.status(201).json({ message: 'Usuario regitrado correctamente.', user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Credenciales inválidas' });

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      SECRET_KEY,
      { expiresIn: '1d' }
    );

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
