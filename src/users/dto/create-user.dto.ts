import { IsEmail } from "class-validator";
export class CreateUserDto {
  name: string;
  email: string;
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}
