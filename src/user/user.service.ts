import { Injectable, ConflictException } from '@nestjs/common'; // Importa ConflictException para erro customizado
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {} // Injeta o serviço Prisma

  // Cria um novo usuário no banco de dados
  async create(data: Prisma.UserCreateInput) {
    try {
      return await this.prisma.user.create({ data }); // Tenta criar o usuário
    } catch (error) {
      // Verifica se o erro é causado por violação de chave única no campo "email"
      if (error.code === 'P2002' && error.meta?.target.includes('email')) {
        throw new ConflictException('O email já está em uso.'); // Retorna erro customizado
      }
      throw error; // Repassa outros erros
    }
  }

  // Retorna todos os usuários cadastrados
  async findAll() {
    return this.prisma.user.findMany(); // Busca todos os usuários
  }

  // Retorna um usuário pelo ID
  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } }); // Busca um usuário pelo ID
  }

  // Atualiza um usuário pelo ID
  async update(id: number, data: Prisma.UserUpdateInput) {
    try {
      return await this.prisma.user.update({
        where: { id }, // Localiza pelo ID
        data, // Dados para atualizar
      });
    } catch (error) {
      // Verifica se o erro é causado por violação de chave única no campo "email"
      if (error.code === 'P2002' && error.meta?.target.includes('email')) {
        throw new ConflictException('O email já está em uso.'); // Retorna erro customizado
      }
      throw error; // Repassa outros erros
    }
  }

  // Exclui um usuário pelo ID
  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } }); // Deleta o usuário pelo ID
  }
}
