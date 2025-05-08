import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate',
  standalone: true
})
export class SeparatePipe implements PipeTransform {

  transform(value: string, separator: string = '-'): string {
    if (!value) return '';
    return value.split('').join(separator);
  }

}
