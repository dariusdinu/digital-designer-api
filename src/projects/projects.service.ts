import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './projects.schema';
import { DigitalOceanService } from 'src/digitalocean/digitalocean.service';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    private digitalOceanService: DigitalOceanService,
  ) {}

  async findAll() {
    return this.projectModel.find().exec();
  }

  async findOne(id: string) {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return project;
  }

  async create(createProjectDto: CreateProjectDto) {
    const newProject = new this.projectModel(createProjectDto);
    return newProject.save();
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const updatedProject = await this.projectModel
      .findByIdAndUpdate(id, updateProjectDto, { new: true })
      .exec();
    if (!updatedProject) {
      throw new NotFoundException('Project not found');
    }
    return updatedProject;
  }

  async delete(id: string) {
    const deletedProject = await this.projectModel.findByIdAndDelete(id).exec();
    if (!deletedProject) {
      throw new NotFoundException('Project not found');
    }
    return deletedProject;
  }

  async addProjectImages(
    projectId: string,
    files: Express.Multer.File[],
  ): Promise<Project> {
    const project = await this.projectModel.findById(projectId);
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    const uploadPromises = files.map((file) =>
      this.digitalOceanService.uploadFile(
        file.buffer,
        `projects/${projectId}/${file.originalname}`,
      ),
    );
    const imageUrls = await Promise.all(uploadPromises);
    project.images = project.images.concat(imageUrls);
    return project.save();
  }
}
