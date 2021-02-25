import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avaiability'
})
export class AvaiabilityPipe implements PipeTransform {

  transform(value: number, ): string {
    if(value > 0){
      return "In Stock"
    }
    else{
      return "No Avaliable"
    }
  }

}
