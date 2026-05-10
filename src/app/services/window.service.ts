import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  friendsVisible = signal(true);
  newsVisible = signal(false);
  userStatus = signal<'Online' | 'Away' | 'Snoozing'>('Online');

  toggleFriends() {
    this.friendsVisible.set(!this.friendsVisible());
  }

  toggleNews() {
    this.newsVisible.set(!this.newsVisible());
  }

  setStatus(status: 'Online' | 'Away' | 'Snoozing') {
    this.userStatus.set(status);
  }
}
