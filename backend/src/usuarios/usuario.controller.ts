import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './usuario.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ListUserDto } from './dto/list-user.dto';

@Controller('usuarios')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Post()
  async createUserWithRole(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.createUser(createUserDto);
      return { user, message: 'usuario creado con su rol correspondiente.' };
    } catch (error) {
      return { message: 'Error al crear usuario con su rol' };
    }
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }
  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<ListUserDto> {
    const usuario = await this.usersService.loginUser(loginUserDto);

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const userRoles = usuario.roles.map((rol) => rol.usuarioRol);
    const userDto: ListUserDto = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      roles: userRoles,
    };

    return userDto;
  }
}
