
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): any {
    const val = parseInt(value, 16);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return {id:val, name: 'dog', breed: 'breed'};
    //return val;
  }
}