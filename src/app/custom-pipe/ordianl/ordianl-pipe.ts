import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordianl',
})
export class OrdianlPipe implements PipeTransform {
  transform(value: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 10;
    return value + (suffixes[v] || suffixes[0]);
  }
}
