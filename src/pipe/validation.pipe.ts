
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate, ValidatorOptions } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    let messages:string[]=[];
    for(let i in errors) {
      const keys = Object.values(errors[i].constraints);
      for(let j in keys) {
        messages.push(keys[j]);
      }
    }
    //if (errors.length > 0) {
    //  throw new BadRequestException('Validation failed');
    //}
    if (messages.length > 0) {
      throw new BadRequestException(messages);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}