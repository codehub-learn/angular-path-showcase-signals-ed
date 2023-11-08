import {Component, computed, effect, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.scss']
})
export class PersonViewerComponent {
  persons = [
    {
      firstname: "Ioannis",
      lastname: "Daniil",
    },
    {
      firstname: "Manos",
      lastname: "Xanos",
    },
    {
      firstname: "Mary",
      lastname: "Very",
    }
  ];

  constructor() {
    // logging
    effect(() => {
      console.log(this.currentFullnameSignal());
    });
  }

  currentIndexSignal = signal(0);

  currentFullnameSignal = computed(() => {
    return this.persons[this.currentIndexSignal()].firstname + " " + this.persons[this.currentIndexSignal()].lastname
  })

  updateCurrent(action: 'previous' | 'next') {
    if(action === 'previous' && this.currentIndexSignal() > 0){
      this.currentIndexSignal.update((index) => index - 1);
    } else if (action === 'next' && this.currentIndexSignal() < this.persons.length - 1){
      this.currentIndexSignal.update((index) => index + 1);
    }
  }
}
