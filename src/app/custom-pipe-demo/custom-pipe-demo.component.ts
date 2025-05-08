import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.scss']
})
export class CustomPipeDemoComponent {
  // Pure Pipe Example
  public name: string = '';
  public type: string = '';
  public filterType: string = '';
  public arrayData: { name: string, type: string }[] = [];

  // Sort Pipe Example
  public sortProperty: string = 'name';
  public newItem: { name: string, type: string } = { name: '', type: '' };
  public items: { name: string, type: string }[] = [];

  // Separate Pipe Example
  public textToSeparate: string = '';
  public separator: string = '-';

  ngOnInit(): void {
    // Initialize data for pure pipe example
    this.arrayData = [
      { name: 'Name', type: 'string' },
      { name: 'Age', type: 'number' },
      { name: 'SubjectList', type: 'array' },
      { name: 'MarksList', type: 'array' },
      { name: 'ContactNo', type: 'number' },
      { name: 'Address', type: 'string' },
    ];

    // Initialize data for sort pipe example
    this.items = [
      { name: 'Zebra', type: 'Animal' },
      { name: 'Apple', type: 'Fruit' },
      { name: 'Banana', type: 'Fruit' },
      { name: 'Cat', type: 'Animal' },
      { name: 'Dog', type: 'Animal' },
    ];

    // Initialize data for separate pipe example
    this.textToSeparate = 'Hello World';
  }

  // Pure Pipe Methods
  public onAddData(): void {
    this.arrayData.push({ name: this.name, type: this.type });
    this.name = '';
    this.type = '';
  }

  // Sort Pipe Methods
  public addItem(): void {
    this.items.push({ ...this.newItem });
    this.newItem = { name: '', type: '' };
  }

  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
