import { IsNumber, IsUppercase } from "class-validator";

export class updateStudentDTO  {
    @IsUppercase({message:'Name must be in caps'})
    readonly name : string;
    
    @IsUppercase({message:'Initial must be in caps'})
    readonly initial : string;
    
    @IsNumber()
    readonly age : number ;
    
    readonly city : string 
}