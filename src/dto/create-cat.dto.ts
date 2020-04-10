import * as Joi from '@hapi/joi';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export const createCatSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  age: Joi.number().min(1).max(100).required(),
  breed: Joi.string().min(2).max(5).required()
});