import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';

interface RegDetail {
  id?: number;
  username?: string;
  email?: string;
  dob?: Date;
  mobile?: number;
  password?: string;
}

type LoginDTO = {
  email: string;
  password: string;
};

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() post: RegDetail): Observable<RegDetail> {
    return this.registerService.createDB(post);
  }

  @Get()
  getAll() {
    return this.registerService.getPost();
  }

  @Get('login')
  async findByLogin(@Body() { email, password }: LoginDTO) {
    const user = await this.registerService.findByLogin(email);
    const userpassword = await this.registerService.findByLoginPass(password);

    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    if (!userpassword) {
      throw new NotFoundException(`Invalid password`);
    }
    return { message: 'Checking', data: user, email, password };
  }
}
