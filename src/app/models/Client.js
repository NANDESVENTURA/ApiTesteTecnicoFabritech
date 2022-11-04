import { Model, Sequelize } from 'sequelize';

class Client extends Model {
    static init (sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            telephone: Sequelize.STRING,
            cpf: Sequelize.STRING,
            birth_date:Sequelize.DATE,
            mother_name:Sequelize.STRING,
            father_name:Sequelize.STRING,
            cep:Sequelize.STRING,
            address:Sequelize.STRING,
            number:Sequelize.STRING,
            district:Sequelize.STRING,
            city:Sequelize.STRING,
            state:Sequelize.STRING
        }, {
            sequelize,
        })
        return this;
    }
}

export default Client