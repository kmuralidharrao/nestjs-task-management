import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class updateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
