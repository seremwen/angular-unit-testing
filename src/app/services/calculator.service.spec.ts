import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    expect(service.add(2, 3)).toEqual(5);
  });

  it('should subtract two numbers correctly', () => {
    expect(service.subtract(5, 3)).toEqual(2);
  });

  it('should multiply two numbers correctly', () => {
    expect(service.multiply(2, 3)).toEqual(6);
  });

  it('should divide two numbers correctly', () => {
    expect(service.divide(6, 3)).toEqual(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divide(6, 0)).toThrow(new Error('Division by zero is not allowed.'));
  });
});