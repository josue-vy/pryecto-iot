import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './usuario.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuarios) private userRepository: Repository<Usuarios>,
  ) { }

  async createUser(body: CreateUserDto) {
    const user = new Usuarios();
    user.nombre = body.nombre;
    user.apellido = body.apellido;
    user.correo = body.correo;
    user.contrasena = body.contrasena;

    return await this.userRepository.save(user);
  }

  async getUsers() {
    return this.userRepository.find();
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  updateUser(id: number, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user);
  }

  async loginUser(loginUser: LoginUserDto) {
    const { correo, contrasena } = loginUser;
    const usuario = await this.userRepository.findOne({ where: { correo } });

    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (usuario.contrasena !== contrasena) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return usuario;
  }
}
