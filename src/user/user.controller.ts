import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('users') // Define a rota base como "/users"
export class UserController {
  constructor(private readonly userService: UserService) {} // Injeta o serviço UserService

  // Endpoint para criar um novo usuário
  @Post()
  async create(@Body() data: Prisma.UserCreateInput) {
    return this.userService.create(data); // Chama o método de criação
  }

  // Endpoint para listar todos os usuários
  @Get()
  async findAll() {
    return this.userService.findAll(); // Chama o método de listagem
  }

  // Endpoint para buscar um único usuário pelo ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id); // Converte o ID para número e busca o usuário
  }

  // Endpoint para atualizar um usuário pelo ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.userService.update(+id, data); // Atualiza o usuário com os novos dados
  }

  // Endpoint para excluir um usuário pelo ID
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(+id); // Exclui o usuário pelo ID
  }
}
