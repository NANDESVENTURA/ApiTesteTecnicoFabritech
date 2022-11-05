import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

import authConfig from '../../config/auth';

import User from '../models/User';

class AuthController {
    async auth(req,res) {
        try {
            const schema = Yup.object().shape({
                email:Yup.string().required(),
                password: Yup.string().required(),
            });

            if(!(await schema.isValid(req.body))){
                return res.status(400).json({ error: 'Validation fails'});
            }

            const { email, password} = req.body;

            const user = await User.findOne({ where: { email }});

            if(!user) {
                return res.status(400).json({ error: 'User not found'});
            }

            if(!await bcrypt.compare(password, user.password_hash)) {
                return res.status(400).json({ message: 'wrong email/password combination'});
            }

            const { id, name} = user;

            return res.status(200).json({
                user:{
                    id,
                    name,
                    email,
                },
                token: jwt.sign({ id}, authConfig.secret, {
                    expiresIn: authConfig.expiresIn,
                }),
            })
        } catch (error) {
            return res.status(500).json({ message: 'Something went wrong'});
        }
    }
}

export default new AuthController();