// POST /api/idosos
const cadastrarIdoso = (req, res) => {
  const { nome_completo, telefone } = req.body;
  return res.status(201).json({
    id: 1,
    nome_completo,
    telefone
  });
};

// POST /api/profissionais
const cadastrarProfissional = (req, res) => {
  const { nome_completo, email, telefone, numero_crefito } = req.body;
  return res.status(201).json({
    id: 1,
    nome_completo,
    email,
    telefone,
    numero_crefito
  });
};

// POST /api/auth/login
const login = (req, res) => {
  return res.status(200).json({
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInBlcmZpbCI6Imlkb3NvIiwiaWF0IjoxNzE2ODkwMDAwfQ.mock_signature",
    usuario: {
      id: 1,
      nome_completo: "Usuário Teste CONECT60+",
      perfil: "idoso"
    }
  });
};

// PUT /api/auth/redefinir-senha
const redefinirSenha = (req, res) => {
  return res.status(200).json({
    mensagem: "Senha alterada com sucesso"
  });
};

// GET /api/categorias
const listarCategorias = (req, res) => {
  return res.status(200).json([
    { id: 1, nome: "Lombar", icone: "lombar.png" },
    { id: 2, nome: "Quadris", icone: "quadris.png" },
    { id: 3, nome: "Ombros", icone: "ombros.png" },
    { id: 4, "nome": "Cervical", icone: "cervical.png" },
    { id: 5, "nome": "Postura", icone: "postura.png" }
  ]);
};

// GET /api/idosos
const obterPerfilIdoso = (req, res) => {
  return res.status(200).json({
    id: 1,
    nome_completo: "Maria Silva",
    telefone: "71999887766"
  });
};

module.exports = {
  cadastrarIdoso,
  cadastrarProfissional,
  login,
  redefinirSenha,
  listarCategorias,
  obterPerfilIdoso
};