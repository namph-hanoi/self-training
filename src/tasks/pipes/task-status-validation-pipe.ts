import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("TaskStatusValidationPipe -> transform -> (value: any, metadata", value, metadata)
  };
}