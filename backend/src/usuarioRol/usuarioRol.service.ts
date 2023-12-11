import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRol } from './usuarioRol.entity';
import { CreateUserRolDto } from './dto/create-usuarioRol-dto';
import { UpdateUserRolDto } from './dto/update-usuarioRol-dto';

@Injectable()
export class UserRolService {
  constructor(
    @InjectRepository(UsuarioRol)
    private userTipoRepository: Repository<UsuarioRol>,
  ) {}

  createRolUser(user: CreateUserRolDto) {
    const newTipoUser = this.userTipoRepository.create(user);
    return this.userTipoRepository.save(newTipoUser);
  }

  getRolUsers() {
    return this.userTipoRepository.find();
  }

  deleteRolUser(id: number) {
    return this.userTipoRepository.delete({ id });
  }

  updateRolUser(id: number, user: UpdateUserRolDto) {
    return this.userTipoRepository.update({ id }, user);
  }
}
