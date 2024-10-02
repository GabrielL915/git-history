import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryFeaturePresentationComponent } from './history-feature-presentation.component';

describe('HistoryFeaturePresentationComponent', () => {
  let component: HistoryFeaturePresentationComponent;
  let fixture: ComponentFixture<HistoryFeaturePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryFeaturePresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryFeaturePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
