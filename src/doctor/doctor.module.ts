import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from './entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
