import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { Register } from './register.entity';

interface RegDetail {
  id?: number;
  username?: string;
  email?: string;
  dob?: Date;
  mobile?: number;
  password?: string;
}
@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepo: Repository<Register>,
  ) {}

  createDB(postRegister: RegDetail) {
    return from(this.registerRepo.save(postRegister));
  }
  getPost() {
    return from(this.registerRepo.find());
  }

  async findByLogin(email: string) {
    const user = await this.registerRepo.findOne({
      where: { email },
    });
    return user;
  }
  async findByLoginPass(password: string) {
    const user = await this.registerRepo.findOne({
      where: { password },
    });
    return user;
  }
}
