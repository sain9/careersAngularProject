import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any[] = [];
  
    if (!value || filterString === '' || propName === '') {
      return value;
    }
  
    value.forEach((item: any) => {
      let propValue = this.getPropertyValue(item, propName);
  
      if (propValue && propValue.trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(item);
      }
    });
  
    return result;
  }
  
  private getPropertyValue(obj: any, propName: string): any {
    const propNames = propName.split('.'); // Split nested property names
    let propValue = obj;
  
    for (const nestedProp of propNames) {
      if (propValue[nestedProp]) {
        propValue = propValue[nestedProp];
      } else {
        propValue = null;
        break;
      }
    }
  
    return propValue;
  }
  

}
