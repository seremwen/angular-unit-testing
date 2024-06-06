import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  title = 'Calculator';

  constructor(private calculatorService: CalculatorService) { }

  add(a: number, b: number): number {
    return this.calculatorService.add(a, b);
  }

  subtract(a: number, b: number): number {
    return this.calculatorService.subtract(a, b);
  }

  multiply(a: number, b: number): number {
    return this.calculatorService.multiply(a, b);
  }

  divide(a: number, b: number): number {
    return this.calculatorService.divide(a, b);
  }
}