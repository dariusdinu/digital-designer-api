import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  private readonly logger = new Logger(ProjectsController.name);
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects() {
    this.logger.log('Received request to get all projects');
    return this.projectsService.findAll();
  }

  @Get(':id')
  getProject(@Param('id') id: string) {
    this.logger.log('Received request to get all projects');
    return this.projectsService.findOne(id);
  }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto) {
    this.logger.log('Received request to get all projects');
    return this.projectsService.create(createProjectDto);
  }

  @Put(':id')
  updateProject(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
}
