import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  transform(value: string, activate: boolean = false): string {
    return (activate) ? '*'.repeat(value.length) : value;
  }

}
