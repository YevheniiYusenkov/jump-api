import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({
    name: 'phone_number',
    nullable: false,
  })
  phoneNumber: string;
  
  @Column({
    name: 'full_name',
    nullable: false,
  })
  fullName: string;
  
  @Column({
    name: 'plan',
    nullable: false,
  })
  plan: number;
  
  @Column({
    name: 'locality',
    nullable: false,
  })
  locality: string;
  
  @Column({
    name: 'street',
    nullable: false,
  })
  street: string;
  
  @Column({
    name: 'suite',
    nullable: false,
  })
  suite: string;

  @Column({
    name: 'apartment',
    nullable: false,
    default: '',
  })
  apartment?: string;
  
  @Column({
    name: 'username',
    nullable: false,
  })
  username: string;
  
  @Exclude()
  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;
  
  @Exclude()
  @Column({
    name: 'is_deleted',
    nullable: false,
    default: false,
  })
  isDeleted: boolean;
  
  @Exclude()
  @Column({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
    default: null,
  })
  deletedAt: Date;
  
  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    nullable: false,
  })
  createdAt: Date;
  
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    nullable: false,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
