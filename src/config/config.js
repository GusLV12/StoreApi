import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;
const SALT_ROUND = parseInt(process.env.SALT_ROUND, 10) || 10;
const SECRET_KEY = process.env.SECRET_KEY || 'jwt-storeAPIADS';

export {
  PORT,
  SALT_ROUND,
  SECRET_KEY
};
