import * as Yup from 'yup';
import Client from '../models/Client';
import Clients from '../models/Client';

class ClientController {
    
    async listAllClients(req, res) {
        try {
            const clients = await Clients.findAll();
            return res.status(200).json(clients);
        } catch (error) {
            console.log(error);            
            return res.status(500).json({ message: "Something went wrong"})
        }
    };

    async getClientById(req,res) {
        try {
            const { id } = req.params;
            const foundClient = await Clients.findByPk(id);
            if(!foundClient) {
                return res.status(404).json({ message: "Tool not found"});
            }
            return res.status(200).json(foundClient);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Something went wrong"});
        }
    };

    async customerRegistration(req, res) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                telephone: Yup.number().required().min(11),
                cpf: Yup.number().required().min(11),
                birth_date:Yup.date().required(),
                mother_name:Yup.string().required(),
                father_name:Yup.string().required(),
                cep:Yup.number().required().min(8),
                address:Yup.string().required(),
                number:Yup.number().required(1),
                district:Yup.string().required(),
                city:Yup.string().required(),
                state:Yup.string().required()
            });

            if(!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails'})
            };
             
            const clientEmailExists = await Clients.findOne({ where: {email: req.body.email}});

            if(clientEmailExists){
                return res.status(400).json({ error: 'Client already exists.'});
            }

            const clientCPFExists = await Clients.findOne({where: {cpf: req.body.cpf}});

            if(clientCPFExists){
                return res.status(400).json({ error: 'CPF already exists.'});
            }
            const { name, email, telephone, cpf, birth_date, mother_name, father_name, cep, address, number, district, city, state } = 
            await Client.create(req.body);

            return res.status(201).json({                
                name,
                email,
                telephone,
                cpf,
                birth_date,
                mother_name,
                father_name,
                cep,
                address,
                number,
                district,
                city,
                state
            })
        } catch (error) {
            console.log(error)
           return res.status(500).json({ message: 'Something went wrong'}) 
        }
    }

    async updateClient (req,res){
        try {
            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string(),
                telephone: Yup.number().min(11),
                cpf: Yup.number().min(11),
                birth_date:Yup.date(),
                mother_name:Yup.string(),
                father_name:Yup.string(),
                cep:Yup.number().min(8),
                address:Yup.string(),
                number:Yup.number().min(1),
                district:Yup.string(),
                city:Yup.string(),
                state:Yup.string()
            });

            if(!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails'});
            };
            const { id } = req.params;
            const client = await Client.findByPk(id);
            if(!client){
                return(404).json({ error: 'Client dont exists'});
            }

            if (email && email != client.email){
                const clientExists = await Client.findOne({ where: {email, cpf}});

                if(clientExists) {
                    return res.status(400).json({ error: 'Client already exists.'})
                }
            }

            const {name, email, telephone, cpf, birth_date, mother_name, father_name, cep, address, number, district, city, state} = 
            await client.update(req.body);
            
            return res.status(201).json ({
                id,
                name,
                email,
                telephone,
                cpf,
                birth_date,
                mother_name,
                father_name,
                cep,
                address,
                number,
                district,
                city,
                state
            });

        } catch (error) {
            return res.status(500).json({ message: 'Something went wrong'})
        }
    }

    async deleteClient(req,res){
        try {
            const { id } = req.params;
            const client = await Client.findByPk(id);
            if(!client){
                return(404).json({error: 'Client does not exists'});
            }
            await client.destroy();
            return res.status(200).json({ message: 'Client destroyed'})

        } catch (error) {
            res.status(500).json({ error: 'Something went wrong'})
        }
    }

    
}

export default new ClientController();