import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent {
  showTabs: boolean = false;
  showTabs1: boolean = false;
  showTabs3: boolean = false;

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  toggleTabs1() {
    this.showTabs1 = !this.showTabs1;
  }

  toggleTabs3() {
    this.showTabs3 = !this.showTabs3;
  }


  addDepartment() {
    this.showTabs = false;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  departmrntForm!: FormGroup



  list1 = [
    { date: '01' },
    { date: '02', },
    {
      date: '03',
    },
    {
      date: '04',
    },
    {
      date: '05',
    },
    {
      date: '06',
    },
    {
      date: '07',
    },
    {
      date: '08',
    },
    {
      date: '09',
    },
    {
      date: '10',
    },
    {
      date: '11',
    },
    {
      date: '12',
    },
    {
      date: '13',
    },
    {
      date: '14',
    },
    {
      date: '15',
    },
    {
      date: '16',
    },
    {
      date: '17',
    },
    {
      date: '18',
    },
    {
      date: '19',
    },
    {
      date: '20',
    },
    {
      date: '21',
    },
    // {
    //   date: '22',
    // },
    // {
    //   date: '23',
    // },
    // {
    //   date: '24',
    // },
    // {
    //   date: '25',
    //  },
    // {
    //   date: '26',
    // },
    // {
    //   date: '27',
    // },
    // {
    //   date: '28',
    // },
    // {
    //   date: '29',
    // },
    // {
    //   date: '30',
    // },

  ];

  listPresent = [
    {
      id: '1',
      Attendance: 'P',

    },
  ];

  listAbusent = [
    {
      id: '1',
      Attendance: 'A',

    },
  ];

  listHoliday = [
    {
      id: '1',
      Attendance: 'H',
    },
  ];

  leaveHeading = [
    {
      Total: 'Total Leaves',
      Used: 'Used Leves',
      Saved: 'Saves Leaves',
      Actions: 'Actions',
    }
  ];
  Leavelist = [
    {
      totalLeave: '25',
      usedLeave: '12',
      saveLeave: '13',
    }
  ];
}
