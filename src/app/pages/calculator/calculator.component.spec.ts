import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../../services/calculator.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: jasmine.SpyObj<CalculatorService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['add', 'subtract', 'multiply', 'divide']);

    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [
        { provide: CalculatorService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService) as jasmine.SpyObj<CalculatorService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Calculator"', () => {
    expect(component.title).toEqual('Calculator');
  });

  it('should add two numbers correctly using CalculatorService', () => {
    calculatorService.add.and.returnValue(5);
    expect(component.add(2, 3)).toEqual(5);
    expect(calculatorService.add).toHaveBeenCalledWith(2, 3);
  });

  it('should subtract two numbers correctly using CalculatorService', () => {
    calculatorService.subtract.and.returnValue(2);
    expect(component.subtract(5, 3)).toEqual(2);
    expect(calculatorService.subtract).toHaveBeenCalledWith(5, 3);
  });

  it('should multiply two numbers correctly using CalculatorService', () => {
    calculatorService.multiply.and.returnValue(6);
    expect(component.multiply(2, 3)).toEqual(6);
    expect(calculatorService.multiply).toHaveBeenCalledWith(2, 3);
  });

  it('should divide two numbers correctly using CalculatorService', () => {
    calculatorService.divide.and.returnValue(2);
    expect(component.divide(6, 3)).toEqual(2);
    expect(calculatorService.divide).toHaveBeenCalledWith(6, 3);
  });

  it('should throw an error when dividing by zero using CalculatorService', () => {
    calculatorService.divide.and.throwError('Division by zero is not allowed.');
    expect(() => component.divide(6, 0)).toThrow(new Error('Division by zero is not allowed.'));
    expect(calculatorService.divide).toHaveBeenCalledWith(6, 0);
  });
});
