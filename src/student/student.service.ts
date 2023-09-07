import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interface/student.interface';
import { StudentDTO } from './dto/cretaestudent.dto';
import { updateStudentDTO } from './dto/updatestudent.dto';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private studentModel: Model<Student>) {}
    
    async getAllStudent(): Promise<Student[]> {
        return this.studentModel.find()
    }

    async getStudent(_id:string): Promise<Student> {
        const student = await this.studentModel.findById(_id).lean()
        if(!student){
            throw new NotFoundException('This id is not exist')
        }
        return student
    }

    async createStudent(student:StudentDTO):Promise<Student> {
        const students = new this.studentModel(student)
        return await students.save()
    }

    async updateStudent(id:string,student:updateStudentDTO):Promise<Student>{
        const res = await this.studentModel.findByIdAndUpdate(id, student,{new:true})
        return res.save()
    }

    async deleteStudent(id:string):Promise<Student>{
        const res = (await this.studentModel.findByIdAndDelete(id))
        return res
    }
}
