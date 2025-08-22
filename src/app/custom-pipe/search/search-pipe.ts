import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!searchText) return items;
    let filterdItems: any[] = items;
    searchText = searchText.toLowerCase();

    return items.filter((e) => {
      return (filterdItems = e.name.toLowerCase().includes(searchText));
    });
  }
}
