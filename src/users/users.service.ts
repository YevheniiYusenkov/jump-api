import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDTO, GetUserPayload } from '@jump/interfaces';
import { AbillsService } from '@jump/abills';
import { User } from '@jump/entities';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    private readonly abillsService: AbillsService
  ) {}
  
  public async create(dto: CreateUserDTO): Promise<User> {
    await this.abillsService.createUser({
      login: dto.username,
      password: dto.password,
    });
    
    const user = new User();
    
    this.repo.merge(user, dto);
    await this.repo.save(user);
    
    return user;
  }
  
  public async me(): Promise<User> {
    const user = new User();
    
    this.repo.merge(user, {});
    await this.repo.save(user);
    
    return user;
  }
  
  public async user(payload: GetUserPayload): Promise<User | undefined> {
    return await this.repo.findOne(payload);
  }
}
