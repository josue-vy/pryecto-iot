import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './usuario.service';
import { Usuarios } from './usuario.entity';
import { UsersController } from './usuario.controller';
import { UsuarioRol } from 'src/usuarioRol/usuarioRol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios, UsuarioRol])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
