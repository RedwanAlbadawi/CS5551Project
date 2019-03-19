import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mongos: any, term: any): any {

    if ( term === undefined) {
      return mongos;
    }
    return mongos.filter(function(mongo) {
      return mongos.toLowerCase().includes(term.toLowerCase());
    });
  }

}
