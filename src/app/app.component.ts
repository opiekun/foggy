import { Component, OnInit, inject, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FriendsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public windowService = inject(WindowService);
  title = 'foggy-portfolio';
  activeMenu: 'friends' | 'view' | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.windowService.newsVisible.set(true);
      this.playHover();
    }, 1500);

    // Bind audio events globally via event delegation
    document.addEventListener('mouseenter', (e: any) => {
      if (e.target && e.target.matches && e.target.matches('button, .game-list li, .action-btn, .play-btn, .global-btn, .menu-item, .nav-tab')) {
        this.playHover();
      }
    }, true);

    document.addEventListener('click', (e: any) => {
      if (e.target && e.target.matches && e.target.matches('button, .game-list li, .action-btn, .play-btn, .global-btn, .menu-item, .nav-tab')) {
        this.playClick();
      }
    }, true);
  }

  toggleMenu(event: MouseEvent, menu: 'friends' | 'view') {
    event.stopPropagation();
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  @HostListener('document:click')
  closeMenus() {
    this.activeMenu = null;
  }

  viewFriends() {
    this.windowService.friendsVisible.set(true);
    this.activeMenu = null;
  }

  toggleNews() {
    this.windowService.toggleNews();
    this.activeMenu = null;
  }

  setStatus(status: 'Online' | 'Away' | 'Snoozing') {
    this.windowService.setStatus(status);
    this.activeMenu = null;
  }

  closeNews() {
    this.windowService.toggleNews();
  }

  playHover() {
    const audio = document.getElementById('hover-sound') as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }

  playClick() {
    const audio = document.getElementById('click-sound') as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }
}
