import { Component } from '@angular/core';
import { Character } from '../../Interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  }
}
