import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reminder from '../models/reminder';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getReminderById(id: number) {
    return this.http.get(this.baseUrl + "/api/reminders/" + id)
  }

  addReminder(reminder: Reminder) {
    return this.http.post(this.baseUrl + "/api/reminders", reminder)
  }
}
