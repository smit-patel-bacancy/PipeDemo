import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false, // Impure pipe
})
export class SortPipe implements PipeTransform {
  transform(value: any[], property: string): any[] {
    console.warn('Impure Pipe Called');
    // console.warn('Impure Pipe Called with value :', value, 'and property :', property);
    if (!value || !property) {
      return value;
    }
    return [...value].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }

}
