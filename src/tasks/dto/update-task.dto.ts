import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Optional } from '@nestjs/common';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    
    user_id?: number;
    @Optional()
    title:string;
    @Optional()
    description?: string;
    @Optional()
    status:boolean;
}
