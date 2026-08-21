import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixDate',
})
export class UnixDatePipe implements PipeTransform {
  transform(timestamp: number | null | undefined): Date | null {
    if (timestamp == null) {
      return null;
    }

    return new Date(timestamp * 1000);
  }
}
