import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Item',
      description: 'No description',
      status: TaskStatus.DONE
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
