import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FriendsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'foggy-portfolio';
  showNews = false;

  ngOnInit() {
    setTimeout(() => {
      this.showNews = true;
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

  closeNews() {
    this.showNews = false;
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
