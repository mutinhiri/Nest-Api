import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    @Get() //Get users list and query params
    findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | "ENGINEER" ) {
        return this.usersService.findAll(role);
    }

    @Get('interns') //Get interns
    findInterns() {
        return this.usersService.findAll('INTERN');
    }

    @Get(':id') //Get user by id
    findOne(@Param('id') id: string) {
        return {id};
    }

    @Post() //Create user
    create(@Body() user: {}) {
        return {};
    }

    @Patch(':id') //Update user
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate};
    }

    @Delete(':id') //Delete user
    remove(@Param('id') id: string) {
        return {id};
    }

}
