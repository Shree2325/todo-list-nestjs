import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {

constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user =  await this.userRepository.findOne({where:{id}})
    if(!user) throw NotFoundError
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({where:{id}})
    if(!user) throw NotFoundError
    Object.assign(user,updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({where:{id}})
    if(!user) throw NotFoundError
    return await this.userRepository.remove(user);
  }
}
