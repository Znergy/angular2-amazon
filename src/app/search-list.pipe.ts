import {Pipe, PipeTransform} from '@angular/core';
import {Product} from './product.model';

@Pipe({
  name: "searchList",
  pure: true
})


export class SearchListPipe implements PipeTransform {
  transform(input: any, filter: string): any {
    if(filter === 'all') {
      return input;
    } else if(filter === 'expensive') {
      return input.filter(product => product.price > 20);
    } else if (filter === 'cheap') {
      return input.filter(product => product.price < 20);
    }
  }
}
