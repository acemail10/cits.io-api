import { sign, verify } from 'jsonwebtoken';


export const generateToken = async (email, id, adminStatus) => {
  const token = {};
  const payload = {
    expiresIn: '6h',
    email,
    id,
    adminStatus,
  }
  token.accessToken = sign(payload, process.env.TOKEN_SECERET_KEY)

  return token;
}

export const verifyToken = async (?) => {
  
}

base64