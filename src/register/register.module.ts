import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { Register } from './register.entity';
import { RegisterService } from './register.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Register])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
