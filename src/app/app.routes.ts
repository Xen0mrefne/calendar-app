import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';


export const routes: Routes = [
    {path: "calendar", component: CalendarComponent},
    {path: "about", component: AboutComponent},
    {path: "", redirectTo: "/calendar", pathMatch: "full"}
];
