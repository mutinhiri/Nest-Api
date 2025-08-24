import { IsEmail, IsEnum } from "class-validator";
export class CreateUserDto {
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], { message: 'Role must be ADMIN, INTERN or ENGINEER' })
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}
