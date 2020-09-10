import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import { JWT_KEY } from '../../config';

class UserController {
  static async register(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'please fill email and password correctly' });
    }

    const userRepository = getRepository(User);
    try {
      await userRepository.save({ email, password });
      return res.status(201).json({ message: 'register success' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'please fill email and password' });
    }

    const userRepository = getRepository(User);
    try {
      const response = await userRepository.findOne({ email, password });
      if (!response) {
        return res.status(400).json({ error: 'wrong email or password' });
      } else {
        const access_token = jwt.sign({ id: response.id, email: response.email }, JWT_KEY) 
        return res.status(200).json({ message: 'login success', access_token });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async getUser(req: Request, res: Response) {
    const { access_token } = req.headers;
    if (!access_token) {
      return res.status(400).json({ error: "please provide a valid access_token "})
    } 
    try {
      const decoded = jwt.verify(access_token as string, JWT_KEY);
      return res.status(200).json(decoded);
      // return res.status(200).json({ id: decoded.id, email: decoded.email});
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default UserController;
