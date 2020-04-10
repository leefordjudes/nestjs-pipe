import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  createCat(createCatDto) {
    return {name: createCatDto.name, age: createCatDto.age, breed: createCatDto.breed};
  }

  createDog(createDogDto) {
    return {name: createDogDto.name, age: createDogDto.age, breed: createDogDto.breed};
  }

  getDog(dog: {id:number, name:string, breed:string}) {
    return {id: dog.id, name: dog.name+'-appservice', breed: dog.breed+'-appservice'};
  }
}
