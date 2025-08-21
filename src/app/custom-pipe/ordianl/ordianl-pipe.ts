import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordianl',
})
export class OrdianlPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    return value + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }
}
