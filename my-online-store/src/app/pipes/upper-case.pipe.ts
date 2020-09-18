import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.toUpperCase();
    }
    return null;
  }

}
