// Based on https://dev.to/idrisrampurawala/creating-a-search-filter-in-angular-562d
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchText: string): any[] {
    if (!list) return [];

    if (!searchText) return list;

    searchText = searchText.toLowerCase();

    return list.filter(item => {
      return Object.keys(item).some(key => {
        return item[key].toString().toLowerCase().includes(searchText);
      });
    })
  }

}
