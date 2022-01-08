import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-component-skip-tests-and-styles-and-template',
  template: `
  <div (click) = "showLesson()"> Some Button
   <button *ngIf = "isAdded" (click)="showMassage()">
   I'm button</button>
  </div>
  `,
  styles: [`button{color:white;
  width:100px;
  height:50px;
  background-color:blue;
  margin:5px 5px;}
  `]
})
export class ComponentSkipTestsAndStylesAndTemplateComponent implements OnInit {
  public isAdded = false;
  constructor() {}

  ngOnInit(): void {}
  showMassage(): void {
    alert('button Works!')
  }
  showLesson(): void {
    this.isAdded = !this.isAdded
  }
}