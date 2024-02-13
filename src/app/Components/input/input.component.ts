import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Block } from '../../classes/block';
import { NgIf, CommonModule } from '@angular/common';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, InputComponent, NgIf, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'  
})

export class InputComponent {
  inputValueA: number | undefined;
  inputValueB: number | undefined;
  areaValue: number | undefined;
  perimeterValue: number | undefined; 
  

  
  constructor(){
  }
  
  calculate() {
    const calculatedBlock: Block = new Block(this.inputValueA!, this.inputValueB!);
    
    this.areaValue = calculatedBlock.sideA * calculatedBlock.sideB;
    this.perimeterValue = (calculatedBlock.sideA * 2) + (calculatedBlock.sideB * 2);
    
  }
  
}
