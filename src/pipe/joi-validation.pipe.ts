
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema, ValidationOptions } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
  
    const { error } = this.schema.validate(value, {abortEarly: false} );
    let msg = [];
    if (error) {
      for (const err of error.details) {
        msg.push(err.message.replace(/\"/gi,''));
      }
      throw new BadRequestException(msg.slice());
    }
    return value;
  }
}
