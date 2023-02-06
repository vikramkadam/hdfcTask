import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myOff'
})
export class MyOffPipe implements PipeTransform {

  transform(value: any) {
    let res = (value*10/100);
    return res;
  }

}
