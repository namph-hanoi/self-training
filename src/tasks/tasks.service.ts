import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['alo'];

  getAllTasks(): any[] {
    return this.tasks;
  }
}
