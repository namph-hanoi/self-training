import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with the id of ${id} is not found`);
    }
    return found;
  };

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  };

  async deleteTaskById(id: number): Promise<any> {
    await this.getTaskById(id);
    return this.taskRepository.delete(id)
  };

  async updateTaskById(id: number, status: TaskStatus): Promise<any> {
    const found = await this.getTaskById(id);
    found.status = status;
    return found.save();
  };

  async getTasksFilter(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {
    debugger;
    return this.taskRepository.getTasksFilter(getTasksFilterDto);
  }
}
