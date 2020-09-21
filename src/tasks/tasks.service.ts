import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Item',
      description: 'No description',
      status: TaskStatus.OPEN
    },
    {
      id: '2',
      title: 'First Item 2 ',
      description: 'No description 2',
      status: TaskStatus.DONE
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  };

  getTaskById(id: string): Task {
    const item = this.tasks.find(item => item.id === id);

    if (!item) {
      throw new NotFoundException(`Task with id ${id} is not found`);
    }
    return item;
  };

  getTasksByFilter(getTasksFilterDto: GetTasksFilterDto): Task[] {
    const { status, search } = getTasksFilterDto;
    let tasks = this.getAllTasks();
    
    if (status) {
      tasks = this.tasks.filter(item => item.status === status);
      if (search) {
        tasks = tasks.filter(item => item.title.includes(search) || item.description.includes(search));
      }
    }

    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid.v1(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task);
    return task;
  };

  deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter(item => item.id !== id)
    return this.tasks;
  };

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const targetItem: Task = this.getTaskById(id);
    targetItem.status = status;
    return targetItem;
  }
}
