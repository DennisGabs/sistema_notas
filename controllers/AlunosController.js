import Aluno from "../models/Aluno.js";

class AlunosController {
    index = async (req, res) => {
        const alunos = await Aluno.findAll();
        res.render('aluno/index', { alunos: alunos })
    }

    cadastrar = (req, res) => {
        res.render('aluno/cadastrar')
    }

    criar = (req, res) => {
        const aluno = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            nota: req.body.nota,
            situacao:  req.body.nota >= 7 ? "Aprovado" : "Reprovado"
        }

        Aluno.create(aluno)
        res.redirect('/')
    }


}


export default new AlunosController();