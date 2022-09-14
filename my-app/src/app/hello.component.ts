import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `<h2>Hello there</h2> 
    <h3>Your name: {{user.name}}</h3>
    <p>Your name: {{ user.age }}</p>
    <button (click)="showInfo()">Click</button>
    <input type="text" [(ngModel)]="user.name" (ngModelChange)="user.name = $event"/>
    <div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
    <ng-template #noPG13>
        <div>Bạn không thể xem nội dung PG-13</div>
    </ng-template>
    <div *ngFor="let author of authors">
      {{author.id}}-{{author.firstName}} {{author.lastName}}
    </div>
    <div *ngFor="let author of authors; index as idx; count as total">
      ({{idx}})/({{total}}):{{author.id}} - {{author.firstName}}
      {{author.lastName}}
    </div>
    
  `,
})
export class HelloComponent {
    user = {
        name : "aaaaaaaaaa",
        age:12,
    }
    showInfo(){
        alert('Inside Angular Component method');
    }
    authors = [
      {
        id: 1,
        firstName: 'Flora',
        lastName: 'Twell',
        email: 'ftwell0@phoca.cz',
        gender: 'Female',
        ipAddress: '99.180.237.33',
      },
      {
        id: 2,
        firstName: 'Priscella',
        lastName: 'Signe',
        email: 'psigne1@berkeley.edu',
        gender: 'Female',
        ipAddress: '183.243.228.65',
      },
      // more data
    ];
}
