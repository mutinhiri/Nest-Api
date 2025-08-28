import { IsEmail } from "class-validator";
export class CreateUserDto {
  name: string;

  @IsEmail()
  email: string;
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}
