import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Patient',
      icon: 'supervisor_account'
    },
    {
      label: 'Doctor',
      icon: 'perm_identity'
    },
    {
      label: 'Admin',
      icon: 'account_circle'
    },
    {
      label: 'Register',
      icon: 'account_box'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
