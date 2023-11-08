import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.scss']
})
export class RandomNumberGeneratorComponent {
  numbersArray: number[] = [];
  randomNumberArraySignal = signal(this.numbersArray);

  getRandomNumber(): number {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Scale the random number to be between 1 and 100
    return Math.floor(randomNumber * 100) + 1;
  }

  addRandomNumber() {
    this.randomNumberArraySignal.mutate(array => array.push(this.getRandomNumber()));
  }
}
