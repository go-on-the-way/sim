import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeSplit'
})
export class DatetimeSplitPipe implements PipeTransform {
  //2018-08-31 09:19:09
  private dateTimeReg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
  transform(value: any, args?: any): any {
    if(typeof value === 'string'
      && this.dateTimeReg.test(value)){
      value = value.split(' ')[0];
    }
    return value;
  }

}
