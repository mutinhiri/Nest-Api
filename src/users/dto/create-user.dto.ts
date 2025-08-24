import { IsEmail, IsEnum, IsString } from "class-validator";
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], { message: 'Role must be ADMIN, INTERN or ENGINEER' })
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}
