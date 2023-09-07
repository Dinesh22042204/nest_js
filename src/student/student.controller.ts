import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './interface/student.interface';
import { StudentDTO } from './dto/cretaestudent.dto';
import { updateStudentDTO } from './dto/updatestudent.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}
    @Get()
    async getAllStudent() : Promise<Student[]> {
        return await this.studentService.getAllStudent()
    }

    @Get(':id')
    async getStudent(@Param('id')id : string) : Promise<Student> {
        return await this.studentService.getStudent(id)
    }

    @Post()
    async createStudent(@Body() student : StudentDTO ) : Promise<Student> {
        return await this.studentService.createStudent(student)
    }

    @Put(':id')
    async updateStudent(@Param('id')id:string,@Body()student:updateStudentDTO) : Promise<Student>{
        return await this.studentService.updateStudent(id ,student)
    }

    @Delete(':id')
    async deleteStudent(@Param('id')id:string) : Promise<Student>{
        return await this.studentService.deleteStudent(id)
    }
}
