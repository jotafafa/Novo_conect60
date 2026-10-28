const { z } = require('zod');

// Validação para cadastro do Idoso
const idosoCadastroSchema = z.object({
  nome_completo: z.string().min(3, "Nome completo deve ter no mínimo 3 caracteres"),
  telefone: z.string().regex(/^\d{10,11}$/, "O telefone deve ter 10 ou 11 dígitos numéricos"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres")
});

// Validação para cadastro do Profissional de Saúde
const profissionalCadastroSchema = z.object({
  nome_completo: z.string().min(3, "Nome completo obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  telefone: z.string().regex(/^\d{10,11}$/, "Telefone inválido (10 ou 11 dígitos)"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  numero_crefito: z.string().min(4, "Número do CREFITO é obrigatório")
});

// Validação de Login
const loginSchema = z.object({
  telefone: z.string().regex(/^\d{10,11}$/, "Telefone inválido"),
  senha: z.string().min(1, "A senha é obrigatória")
});

// Validação de Redefinição de Senha
const redefinirSenhaSchema = z.object({
  telefone: z.string().regex(/^\d{10,11}$/, "Telefone inválido"),
  nova_senha: z.string().min(6, "A nova senha deve ter no mínimo 6 caracteres")
});

module.exports = {
  idosoCadastroSchema,
  profissionalCadastroSchema,
  loginSchema,
  redefinirSenhaSchema
};