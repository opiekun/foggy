import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Friend } from '../models/friend.model';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {
  windowService = inject(WindowService);
  
  friends: Friend[] = [
    {
      name: 'LinkedIn',
      status: 'Online',
      link: 'https://linkedin.com/in/matheusmmedeiros',
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
    },
    {
      name: 'Dev.to',
      status: 'Online',
      link: 'https://dev.to/opiekun',
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg'
    },
    {
      name: 'GitHub',
      status: 'Online',
      link: 'https://github.com/opiekun',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
    },
    {
      name: 'Email',
      status: 'Snoozing',
      link: 'mailto:opiekun.matheus@gmail.com',
      icon: 'https://img.icons8.com/color/48/000000/gmail-new.png'
    }
  ];

  x = window.innerWidth - 300; // Right side (approx 260px width + 40px margin)
  y = window.innerHeight / 2 - 150; // Middle height
  private isDragging = false;
  private offset = { x: 0, y: 0 };

  close() {
    this.windowService.toggleFriends();
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.offset = {
      x: event.clientX - this.x,
      y: event.clientY - this.y
    };
    
    const moveListener = (e: MouseEvent) => this.onDrag(e);
    const stopListener = () => {
      this.isDragging = false;
      window.removeEventListener('mousemove', moveListener);
      window.removeEventListener('mouseup', stopListener);
    };

    window.addEventListener('mousemove', moveListener);
    window.addEventListener('mouseup', stopListener);
  }

  onDrag(event: MouseEvent) {
    if (this.isDragging) {
      this.x = event.clientX - this.offset.x;
      this.y = event.clientY - this.offset.y;
    }
  }
}
