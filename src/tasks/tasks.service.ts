import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid';

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
  };

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid.v1(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    return task;
  }
}
