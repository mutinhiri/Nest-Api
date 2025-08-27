import { Body, Controller, Delete, Get, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
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
        return this.usersService.findOne(+id);
    }

    @Post() //Create user
    create(@Body() user: {name: string, email: string, role: 'ADMIN' | 'INTERN' | "ENGINEER" }) {
        return this.usersService.create(user);
    }

    @Patch(':id') //Update user
    update(@Param('id') id: string, @Body() userUpdate: {name: string, email: string, role: 'ADMIN' | 'INTERN' | "ENGINEER" }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id') //Delete user
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }

}
