import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {
  constructor(private data: DataStorageService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const description = form.value.description;
    const dateString = form.value.date;
    const date = new Date(dateString);
    console.log(date);
    this.data.add(name, description, date);
  }

  onClose() {
    this.data.stopAdding();
  }
}
