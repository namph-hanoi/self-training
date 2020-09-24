import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatusese = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ];

  private isStatusValid(input) {
    const indx = this.allowedStatusese.indexOf(input);
    return indx !== -1;
  };

  // This Class only run the function which named "transform" the abc doesn't execute
  // abc(value: any, metadata: ArgumentMetadata) {
  //   value = value.toUpperCase();
  //   if (!this.isStatusValid(value)) {
  //     throw new BadRequestException(`"${value}" is a valid status`)
  //   }
  //   return value;
  // };

  transform(value: any, metadata: ArgumentMetadata) {
      value = value.toUpperCase();
      if (!this.isStatusValid(value)) {
        throw new BadRequestException(`"${value}" is not a valid status`)
      }
      return value;
  };

}