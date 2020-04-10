import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';
import { CreateDogDto } from './dto/create-dog-dto';
import { ParseIntPipe } from './pipe/parse-int.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/cat')
  //@UsePipes(new JoiValidationPipe(createCatSchema))
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.appService.createCat(createCatDto);
  }

  @Post('/dog')
  //@UsePipes(ValidationPipe)
  async createDog(@Body() createDogDto: CreateDogDto) {
    return this.appService.createDog(createDogDto);
  }

  @Get('/dog/:id')
  async getDog(@Param('id', ParseIntPipe) dog) {
    return this.appService.getDog(dog);
  }


}
