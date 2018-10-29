import { Message } from 'primeng/primeng';
import { GrowlType } from '../enum/growl-type.enum';

interface GrowlArgs {
  type?: string | GrowlType;     // 语义样式类型，success/info/warn/error，默认：info
  title?: string | number;  // 标题，默认：消息
  message?: string;         // 消息内容
  sticky?: boolean;         // 是否永久显示，默认：false
  life?: number;            // 显示时间，默认：3000ms
  style?: string;           // 自定义内联样式
  styleClass?: string;      // 自定义
}

export class Growl {
  // 单例模式，构造函数设置为private
  public static readonly Instance: Growl = new Growl();

  msgs: Message[];  // Growl messages
  sticky: boolean;
  life: number;
  style: string;
  styleClass: string;

  private readonly types = ['success', 'info', 'warn', 'error'];

  private constructor() {
    this.msgs = [];
    this.sticky = false;
    this.life = 3000;
  }

  show(args?: GrowlArgs): void {
    this.msgs = [];

    if (!args) {
        args = new Object();
    }
    args.type = args.type ? ((typeof args.type === 'number') ? this.types[args.type] : args.type) : 'success';

    this.sticky = args.sticky || this.sticky;
    this.life = args.life || this.life;
    this.style = args.style;
    this.styleClass = args.styleClass;
    switch (args.type) {
      case 'error':
        args.title = args.title || '错误';
        break;
      case 'warn':
        args.title = args.title || '警告';
        break;
      case 'success':
        args.title = args.title || '成功';
        break;
      default:
        args.title = args.title || '消息';
        break;
    }

    this.msgs.push({severity: args.type, summary: args.title.toString(), detail: args.message});
  }

  hide(): void {
    this.msgs = [];
  }

}
