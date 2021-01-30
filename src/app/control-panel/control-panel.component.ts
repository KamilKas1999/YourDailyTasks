import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private data: DataStorageService
  ) {}

  isLogin = false;

  ngOnInit(): void {
    this.authService.user.subscribe((data) => {
      this.isLogin = !!data;
    });
  }

  onAdd() {
    this.data.add({ description: 'tets', color : this.data.randomColor() });
  }

  onConsole() {
    this.data.console();
  }
}
