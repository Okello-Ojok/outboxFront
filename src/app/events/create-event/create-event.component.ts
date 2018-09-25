import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../../events.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  paid = null;
  payment = ["Yes", "No"];
  private mode = "create";
  private postId: string;
  eventDate;
  

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventDate = new Date();
  }

  onAddEvent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    if (this.mode === "create") {
      this.eventsService.addEvent(form.value.eventname, form.value.eventDate, form.value.payment, form.value.facilitators);
    } 
    // else {
    //   this.eventsService.updateEvent(
    //     this.postId,
    //     form.value.title,
    //     form.value.content
    //   );
    // }
    form.resetForm();
  }

}
