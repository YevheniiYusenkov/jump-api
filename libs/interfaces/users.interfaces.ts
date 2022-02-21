import { IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

import { Match } from '@jump/decorators';
import { User } from '@jump/entities';

export class CreateUserDTO {
  @IsString()
  fullName: string;
  
  @IsString()
  @IsPhoneNumber('UA')
  phoneNumber: string;
  
  @IsNumber()
  plan: number;
  
  @IsString()
  locality: string;
  
  @IsString()
  street: string;
  
  @IsString()
  suite: string;
  
  @IsString()
  @IsOptional()
  apartment?: string;
  
  @IsString()
  username: string;
  
  @IsString()
  password: string;
  
  @IsString()
  @Match('password')
  confirmPassword: string;
}

export class CreateAbillsUserPayload {
  @IsString()
  login: string;
  
  @IsString()
  password: string;
  
  @IsString()
  createBill?: number;
}

export interface AbillsUser {
  id: number,
}

export interface GetUserPayload {
  id?: string,
  username?: string,
}

export interface GetUserRequest {
  user: User,
}
