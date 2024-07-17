import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../Interfaces/Character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList : Character[] = [];

    onDeleteCharacter(id: string) {
    console.log(id);
    }
    emitId(id : string):void{
      this.onDeleteId.emit(id);
    }
}

