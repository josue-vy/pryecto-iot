import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRol } from './usuarioRol.entity';
import { UserRolController } from './usuarioRol.controller';
import { UserRolService } from './usuarioRol.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRol])],
  controllers: [UserRolController],
  providers: [UserRolService],
})
export class UserRolModule {}
