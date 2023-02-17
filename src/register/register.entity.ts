import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('register')
export class Register {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  username: string;
  @Column()
  email: string;
  @Column({ type: 'date' })
  dob: Date;
  @Column()
  mobile: number;
  @Column()
  password: string;
}
