import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate',
  standalone: true
})
export class SeparatePipe implements PipeTransform {

  transform(value: string, separator: string = '-', skipSpaces: boolean = false): string {
    console.warn('Separate Pipe Called');

    if (!value) return '';

    // Handle spaces first
    if (skipSpaces) {
      value = value.replace(/\s+/g, '');  // Remove all spaces
    }

    // Apply the separator between each character
    return value.split('').join(separator);
  }

}
