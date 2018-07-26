import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'checkboxstatus'})
export class CheckBoxStatusPipe implements PipeTransform {
  transform(allValues: any[], checkStatusValue: any,key:string): boolean {
      debugger;
    return allValues.filter(x=>x[key]==checkStatusValue[key]).length>0||false;
  }
}