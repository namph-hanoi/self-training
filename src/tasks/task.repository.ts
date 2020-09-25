import { Task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  async getTasksFilter(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {

    const { status, search } = getTasksFilterDto;

    const query = await this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :statusVar', { statusVar: status })
    }

    if (search) {
      // %var%
      query.andWhere(('task.title LIKE :searchVar OR task.description LIKE :searchVar'), { searchVar: `%${search}%`})
    }

    const allTasks = query.getMany();
    return allTasks;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();

    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();
    return task;
  }
}
