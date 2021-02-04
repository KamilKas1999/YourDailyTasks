import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date) {
    let date = new Date(value);
    let today = new Date(Date.now());
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate()-1)
    if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()){
      return "Dzisiaj"
    }
    else if (date.getDate() == yesterday.getDate() && date.getMonth() == yesterday.getMonth() && date.getFullYear() == yesterday.getFullYear()){
      return "Wczoraj"
    }
    return moment(value).format("DD MMMM");
  }

}
