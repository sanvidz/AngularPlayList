import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(_url: any) {
    // if (!_url) { return ''; }
    // if (_url) {
    //   _url = _url.replace('watch?v=', 'embed/');
    // }
    return this.sanitizer.bypassSecurityTrustResourceUrl(_url);
  }
}
