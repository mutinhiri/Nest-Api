import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() //Get users
    findAll() {
        return [];
    }

    @Get('interns') //Get interns
    findInterns() {
        return [];
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
