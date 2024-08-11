import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './projects.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  findAll() {
    return this.projectModel.find().exec();
  }

  findOne(id: string) {
    return this.projectModel.findById(id).exec();
  }

  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create({ ...createProjectDto });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectModel
      .findByIdAndUpdate(id, updateProjectDto, { new: true })
      .exec();
  }

  delete(id: string) {
    return this.projectModel.findByIdAndDelete(id).exec();
  }
}
