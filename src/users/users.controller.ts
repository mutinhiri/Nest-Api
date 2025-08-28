import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('users')
export class UsersController {\
    @Get() //Get users
    findAll() {
        return [];
    }

    @Get(':id') //Get user by id
    findOne(@Param('id') id: string) {
        return {};
    }

    @Get('interns') //Get interns
    findInterns() {
        return [];
    }

}
