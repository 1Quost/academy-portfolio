import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.items = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select and deselect items', () => {
    component.toggleSelection(component.items[0]);
    expect(component.selectedItems.length).toBe(1);
    component.toggleSelection(component.items[0]);
    expect(component.selectedItems.length).toBe(0);
  });

  it('should emit selectionChange', () => {
    let emittedItems: any;
    component.selectionChange.subscribe(items => (emittedItems = items));
    component.toggleSelection(component.items[1]);
    expect(emittedItems[0].name).toBe('Option 2');
  });
});
