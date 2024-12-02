import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Método chamado ao iniciar o módulo: conecta ao banco
  async onModuleInit() {
    await this.$connect(); // Conexão com o banco de dados
  }

  // Método chamado ao destruir o módulo: desconecta do banco
  async onModuleDestroy() {
    await this.$disconnect(); // Desconexão do banco de dados
  }
}
