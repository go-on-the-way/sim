import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descToLabel'
})
export class DropdownDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(Array.isArray(value)){
      value = JSON.parse(JSON.stringify(value).replace(/"desc"/g,'"label"'));
    }
    return value;
  }

}
