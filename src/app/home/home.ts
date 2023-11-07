import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
  })
  
export class Home implements OnInit { 

  public items: MenuItem[] = [];

  constructor(private rout: Router) {}

  ngOnInit() {
    this.items = [
        {
            label: 'קורונה',
            items: [
                  {label: 'דשבורד הקורונה הלאומי'},
                  {label: 'מפת תחנות בדיקה'}
              ]},
          
          { label: 'פוליו',
            items: [{}]},
          { label: 'סקרי דעת קהל',
            items: [{}]},
          { label: 'התחסנות ילדים',  
            items: [{}]},
          { label: 'מדדי איכות',  
            items: [{}]}
        ];
    }
    public clickHome() {
      this.rout.navigate(['graphReport']);
    }
}