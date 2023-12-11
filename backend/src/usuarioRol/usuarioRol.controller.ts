import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserRolService } from './usuarioRol.service';
import { UsuarioRol } from './usuarioRol.entity';
import { UpdateUserRolDto } from './dto/update-usuarioRol-dto';
import { CreateUserRolDto } from './dto/create-usuarioRol-dto';

@Controller('usuarioRol')
export class UserRolController {
  constructor(private userRolService: UserRolService) {}

  @Get()
  getRolUsers(): Promise<UsuarioRol[]> {
    return this.userRolService.getRolUsers();
  }
  @Post()
  createRolUser(@Body() newRolUser: CreateUserRolDto): Promise<UsuarioRol> {
    return this.userRolService.createRolUser(newRolUser);
  }
  @Delete(':id')
  deleteRolUser(@Param('id', ParseIntPipe) id: number) {
    return this.userRolService.deleteRolUser(id);
  }
  @Patch(':id')
  updateRolUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: UpdateUserRolDto,
  ) {
    return this.userRolService.updateRolUser(id, user);
  }
}
