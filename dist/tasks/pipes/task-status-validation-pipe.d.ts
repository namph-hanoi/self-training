import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatusese: TaskStatus[];
    private isStatusValid;
    transform(value: any, metadata: ArgumentMetadata): any;
}
