import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { dateValidator } from '../../shared/validators';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  dateForm = new FormGroup({
    d: new FormControl<number>(new Date().getDate()),
    m: new FormControl<number>(new Date().getMonth() + 1, [
      Validators.min(1),
      Validators.max(12)
    ]),
    y: new FormControl<number>(new Date().getFullYear())
  })

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.dateForm.addValidators(dateValidator())
  }

  addReminder() {
    const day = this.day!.value!
    const month = this.month!.value!
    const year = this.year!.value!
    const reminder = {
      date: new Date(year, month - 1, day)
    }
    this.calendarService.addReminder(reminder).subscribe({
      next: (reminder) => {
        console.log(reminder)
      }
    })
  }

  get day() {
    return this.dateForm.get('d')
  }

  get month() {
    return this.dateForm.get('m')
  }

  get year() {
    return this.dateForm.get('y')
  }
}
