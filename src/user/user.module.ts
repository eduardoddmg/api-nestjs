import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa o PrismaModule

@Module({
  imports: [PrismaModule], // Importa o PrismaModule para fornecer o PrismaService
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
