import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {\
    @Get() //Get users
    findAll() {
        return 'This action returns all users';
    }

}
