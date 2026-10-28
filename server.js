const express = require('express');
const cors = require('cors'); // <--- ADICIONAR
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // <--- ADICIONAR (liberta o acesso do Live Server para a porta 3000)
app.use(express.json());

app.post('/api/avaliacoes', async (req, res) => {
    try {
        const { atendimento_id, idoso_id, profissional_id, classificacao, nota_numerica, tag_motivo } = req.body;

        const novaAvaliacao = await prisma.avaliacao.create({
            data: {
                atendimento_id: Number(atendimento_id),
                idoso_id: Number(idoso_id),
                profissional_id: Number(profissional_id),
                classificacao,
                nota_numerica: Number(nota_numerica),
                tag_motivo: tag_motivo || null
            }
        });

        return res.status(201).json({ sucesso: true, dados: novaAvaliacao });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao guardar na base de dados' });
    }
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));