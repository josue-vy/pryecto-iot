import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './usuario.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsuarioRol } from 'src/usuarioRol/usuarioRol.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuarios) private userRepository: Repository<Usuarios>,
    @InjectRepository(UsuarioRol)
    private userRolRepository: Repository<UsuarioRol>,
  ) {}
  async createUser(userData: CreateUserDto) {
    const { nombre, apellido, correo, contrasena, usuarioRol } = userData;

    const user = new Usuarios();
    user.nombre = nombre;
    user.apellido = apellido;
    user.correo = correo;
    user.contrasena = contrasena;

    const savedUser = await this.userRepository.save(user);

    const userRol = new UsuarioRol();
    userRol.usuarioRol = usuarioRol;
    userRol.usuario = savedUser;

    await this.userRolRepository.save(userRol);

    return savedUser;
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
    const usuario = await this.userRepository.findOne({
      where: { correo },
      relations: ['roles'],
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (usuario.contrasena !== contrasena) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return usuario;
  }
}
