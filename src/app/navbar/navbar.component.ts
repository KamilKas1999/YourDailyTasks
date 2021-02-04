import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router : Router, private data: DataStorageService) {}

  isLogin = false;

  ngOnInit(): void {
    this.authService.user.subscribe((data) => {
      this.isLogin = !!data;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onNavigate(){
    if (this.isLogin){
      this.router.navigate(['/panel'])
    }
    else {
      this.router.navigate(['/'])
    }

  }

  onAdd() {
    //this.data.add({ description: 'tets', color : this.data.randomColor() });
    this.data.startAdding();
  }
}
