import { DataTypes } from "sequelize"
import sequelize from "../config/banco.js"

const Aluno = sequelize.sequelize.define('alunos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING(150)
    },
    telefone: {
        type: DataTypes.STRING(20)
    },
    email: {
        type: DataTypes.STRING(50)
    },
    nota: {
        type: DataTypes.FLOAT
    },
    situacao: {
        type: DataTypes.STRING(10)
    }
})

Aluno.sync()

export default Aluno