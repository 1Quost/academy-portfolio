import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- add this

export interface ICategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [CommonModule], // <-- add here
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() items: ICategory[] = [];
  @Output() selectionChange = new EventEmitter<ICategory[]>();

  selectedItems: ICategory[] = [];

  toggleSelection(item: ICategory) {
    const index = this.selectedItems.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.selectedItems.splice(index, 1); // deselect
    } else {
      this.selectedItems.push(item); // select
    }
    this.selectionChange.emit(this.selectedItems);
  }

  isSelected(item: ICategory) {
    return this.selectedItems.some(i => i.id === item.id);
  }
}
