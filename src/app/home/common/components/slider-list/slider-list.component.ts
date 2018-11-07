import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { DomHandler } from '../../../../utils/domhandler';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css'],
  providers: [DomHandler]
})
export class SliderListComponent implements OnInit, AfterViewChecked {

  @Input() list: Array<any>;
  @Input() label: string;
  @Input() isInitClick = false;
  @Input() sliderClass: string;
  @Output() leftSlideEvt: EventEmitter<any> = new EventEmitter();
  @Output() rightSlideEvt: EventEmitter<any> = new EventEmitter();
  @Output() itemClickEvt: EventEmitter<any> = new EventEmitter();

  public sliderPos = 0;
  public sliderDom: any;
  public itemDomWidth: any;
  public showLeftSlide = false;
  public showRightSlide = false;

  constructor(
    public domHandler: DomHandler,
    public el: ElementRef,
    public render: Renderer2) { }

  ngOnInit() { }

  ngAfterViewChecked() {
    setTimeout(() => {
      if (this.list.length > 0) {
        this.sliderDom = this.el.nativeElement.querySelectorAll('ul')[0];
        this.itemDomWidth = this.domHandler.getOuterWidth(this.el.nativeElement.querySelectorAll('li')[0]);
        this.viewChecked();
      }
    });
  }

  /**
   * label值处理(对象数组必须传label)
   * @param value
   */
  public labelValue(value) {
    return this.label ? value[this.label] : value;
  }

  public itemClick(event, item) {
    this.domHandler.siblings(event.target).forEach(element => {
      this.domHandler.removeClass(element, 'active');
    });
    this.domHandler.addClass(event.target, 'active');
    this.itemClickEvt.emit(item);
  }

  public leftSlide(event) {
    this.sliderHandle(this.itemDomWidth);
  }

  public rightSlide(event) {
    this.sliderHandle(-this.itemDomWidth);
  }

  public reset() {
    this.sliderPos = 0;
    this.el.nativeElement.querySelectorAll('li').forEach(element => {
      this.domHandler.removeClass(element, 'active');
    });
    if (this.sliderDom) {
      this.sliderDom.style.left = this.sliderPos + 'px';
    }
  }

  private viewChecked() {
    let itemDomWidth = this.domHandler.getOuterWidth(this.el.nativeElement.querySelectorAll('li')[0]),
      itemListWidth = itemDomWidth * this.list.length,
      viewWindowWidth = this.domHandler.getOuterWidth(this.el.nativeElement.querySelector('.slider-view'));
    // 当列表总宽度小于视口宽度时不显示移动箭头
    if (itemListWidth < viewWindowWidth) {
      this.showLeftSlide = this.showRightSlide = false;
    } else {
      this.showLeftSlide = this.showRightSlide = true;
    }
  }

  private sliderHandle(incrementWidth) {
    this.sliderPos += incrementWidth;
    this.sliderDom.style.left = this.sliderPos + 'px';
    // 当sliderPos的位置为0时，隐藏/显示左箭头
    if (this.sliderPos >= 0) {
      this.showLeftSlide = false;
    } else {
      this.showLeftSlide = true;
    }

    // 当sliderPos的位置为-(list.length - 1)*this.itemDomWidth时,隐藏/显示右箭头
    if (this.sliderPos <= -(this.list.length - 1) * this.itemDomWidth) {
      this.showRightSlide = false;
    } else {
      this.showRightSlide = true;
    }
  }

}
