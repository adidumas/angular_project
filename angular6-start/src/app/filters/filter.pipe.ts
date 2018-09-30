import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], originText: string, destinationText: string, companyText: string): any[] {
    if(!items) return [];
    if(!originText && !destinationText && !companyText) return items;
    if (originText) {
      originText = originText.toLowerCase();
      return items.filter( it => {
        return it.cityOrigin.toLowerCase().includes(originText);
      });
    }
    if (destinationText) {
      destinationText = destinationText.toLowerCase();
      return items.filter( it => {
        return it.cityDestination.toLowerCase().includes(destinationText);
      });
    }
    if (companyText) {
      companyText = companyText.toLowerCase();
      return items.filter( it => {
        return it.company.toLowerCase().includes(companyText);
      });
    }
  }
}