import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {
  //Transform seconds to duration time (soundcloud style)
  transform(seconds: number | null | undefined): string {
    if (seconds == null || seconds < 0) {
      return '0:00';
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const parts: string[] = [];

    if (hours > 0) {
      parts.push(`${hours}:`);
    }

    if (minutes == 0) {
      parts.push("0:");
    } else {
      parts.push(`${minutes}:`);
    }

    parts.push(`${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`);

    return parts.join('');
  }
}
