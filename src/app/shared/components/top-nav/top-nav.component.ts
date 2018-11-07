import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent {
  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };
  public accountName: string;

  constructor(private router: Router,
    private confirmationService: ConfirmationService, ) {
    if (sessionStorage.getItem('currentUser').length) {
      this.accountName = JSON.parse(sessionStorage.getItem('currentUser')).accountName;
    } else {
      // this.router.navigateByUrl('/login');
    }
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now > ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public doLogout() {
    this.confirmationService.confirm({
      message: '您确认要退出LOGO系统？',
      header: '退出系统',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: '确定',
      rejectLabel: '取消',
      rejectVisible: true,
      accept: () => {
        sessionStorage.setItem('currentUser', '');
        this.router.navigateByUrl('login');
      }
    });
  }
}
