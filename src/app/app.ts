import { Component, signal, computed } from '@angular/core';

import { HighDirective } from './high';
import { PasswordDirective } from './password';
import { CleanInputDirective } from './app-clean-input';
import { LengthDirective } from './app-length-validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HighDirective,
    PasswordDirective,
    CleanInputDirective,
    LengthDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 
  protected readonly title = signal('directives');

  
  items = signal([
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Strawberry',
    'Kiwi'
  ]);

  search = signal('');

  filteredItems = computed(() => {
    const term = this.search().toLowerCase();

    return this.items().filter(item =>
      item.toLowerCase().includes(term)
    );
  });

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.set(value);
  }

  
  role = signal<'admin' | 'user' | 'guest'>('guest');

  setRole(newRole: 'admin' | 'user' | 'guest') {
    this.role.set(newRole);
  }

  isVisible = signal(false);

  toggle() {
    this.isVisible.set(!this.isVisible());
  }


  selectableItems = signal(['One', 'Two', 'Three']);

  selected = signal<string | null>(null);

  select(item: string) {
    this.selected.set(item);
  }

 
  MyName: string[] = ['Nika', 'Gio'];

  addName(name: string) {
    if (!name) return;
    this.MyName.push(name);
  }
}
