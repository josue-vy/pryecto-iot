import { Usuarios } from 'src/usuarios/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'usuariorol' })
export class UsuarioRol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioRol: string;

  @ManyToOne(() => Usuarios, (usuario) => usuario.roles)
  usuario: Usuarios;
}
