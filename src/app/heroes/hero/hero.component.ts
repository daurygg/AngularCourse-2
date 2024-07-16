import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;


  changeHero(): void{
    this.name = "Spiderman";
  }
  changeAge(): void{
    this.age = 18;
  }
  Method(): string{
    return `${this.name}-${this.age}`
  }
  get getHeroDescription(): string{
    return `${this.name.toUpperCase()}`
  }

}
