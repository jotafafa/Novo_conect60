const express = require('express');
const router = express.Router();

const {
  idosoCadastroSchema,
  profissionalCadastroSchema,
  loginSchema,
  redefinirSenhaSchema
} = require('./schemas/validationSchemas');

const validate = require('./middlewares/validate');
const controllers = require('./controllers/apiControllers');

// Rotas Públicas
router.post('/api/idosos', validate(idosoCadastroSchema), controllers.cadastrarIdoso);
router.post('/api/profissionais', validate(profissionalCadastroSchema), controllers.cadastrarProfissional);
router.post('/api/auth/login', validate(loginSchema), controllers.login);
router.put('/api/auth/redefinir-senha', validate(redefinirSenhaSchema), controllers.redefinirSenha);

// Rotas Privadas (Mocks)
router.get('/api/categorias', controllers.listarCategorias);
router.get('/api/idosos', controllers.obterPerfilIdoso);

module.exports = router;