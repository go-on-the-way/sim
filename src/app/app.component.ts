import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {
  private globalKeyPressCallbackFn: Function;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.globalKeyPressCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'keypress', (event: any) => {
    });
    /*this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');*/
  }

  ngOnDestroy() {
    if (this.globalKeyPressCallbackFn) {
      this.globalKeyPressCallbackFn();
    }
  }
}
