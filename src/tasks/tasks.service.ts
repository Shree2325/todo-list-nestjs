import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TasksService {
  
  constructor(@InjectRepository(Task) private readonly taskRepository:Repository<Task>){
    
  }
  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return  await this.taskRepository.find();
   
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({where:{id}})
    
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne({where:{id}})
    if(!task) throw NotFoundError
    Object.assign(task,updateTaskDto)
    return await this.taskRepository.save(task)
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne({where:{id}})
    if(!task) throw NotFoundError
    return await this.taskRepository.remove(task)
  }
}
