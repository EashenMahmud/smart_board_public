import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;
  isDropdown2Open = false;
  isDropdown3Open = false;
  isDropdown4Open = false;

  showDropdown(): void {
    this.isDropdownOpen = true;
  }

  hideDropdown(): void {
    this.isDropdownOpen = false;
  }

  showDropdown2(): void {
    this.isDropdown2Open = true;
  }

  hideDropdown2(): void {
    this.isDropdown2Open = false;
  }

  showDropdown3(): void {
    this.isDropdown3Open = true;
  }

  hideDropdown3(): void {
    this.isDropdown3Open = false;
  }
  showDropdown4(): void {
    this.isDropdown4Open = true;
  }

  hideDropdown4(): void {
    this.isDropdown4Open = false;
  }

}
