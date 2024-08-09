import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './projects.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  findAll() {
    this.logger.log('Fetching all projects');
    return this.projectModel.find().exec();
  }

  findOne(id: string) {
    this.logger.log(`Fetching project by id: ${id}`);
    return this.projectModel.findById(id).exec();
  }

  create(createProjectDto: CreateProjectDto) {
    this.logger.log(
      `Creating a new project: ${JSON.stringify(createProjectDto)}`,
    );
    return this.projectModel.create({ ...createProjectDto });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    this.logger.log(
      `Updating project id: ${id} with data: ${JSON.stringify(updateProjectDto)}`,
    );
    return this.projectModel
      .findByIdAndUpdate(id, updateProjectDto, { new: true })
      .exec();
  }

  delete(id: string) {
    this.logger.log(`Deleting project by id: ${id}`);
    return this.projectModel.findByIdAndDelete(id).exec();
  }
}
