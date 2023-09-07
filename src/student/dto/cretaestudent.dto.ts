import {IsNotEmpty, IsNumber, IsUppercase } from "class-validator";

export class StudentDTO {
    @IsUppercase({})
    @IsNotEmpty({message:'The student name should not be empty and it must be in caps.'})
    readonly name : String;
    
    @IsNotEmpty({message:'Please enter the initial and it must be in caps'})
    @IsUppercase({})
    readonly initial : String;

    @IsNotEmpty({message:'age is mandatory'})
    @IsNumber({})
    readonly age : Number ;

    @IsNotEmpty({})
    readonly city : String 
}