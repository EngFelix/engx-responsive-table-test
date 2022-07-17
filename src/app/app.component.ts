import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Responsive Table Test';

  dummyData = [
    {
      prop1: 'Property 1',
      prop2: 'Property 2',
      prop3: 'Property 3',
      prop4: 'Property 4',
      prop5: 'Property 5',
      prop6: 'Property 6',
      prop7: 'Property 7',
      prop8: 'Property 8'
    },
    {
      prop1: 'Property 9',
      prop2: 'Property 10',
      prop3: 'Property 11',
      prop4: 'Property 12',
      prop5: 'Property 13',
      prop6: 'Property 14',
      prop7: 'Property 15',
      prop8: 'Property 16'
    },
    {
      prop1: 'Property 17',
      prop2: 'Property 18',
      prop3: 'Property 19',
      prop4: 'Property 20',
      prop5: 'Property 21',
      prop6: 'Property 22',
      prop7: 'Property 23',
      prop8: 'Property 24'
    },
    {
      prop1: 'Property 25',
      prop2: 'Property 26',
      prop3: 'Property 27',
      prop4: 'Property 28',
      prop5: 'Property 29',
      prop6: 'Property 30',
      prop7: 'Property 31',
      prop8: 'Property 32'
    },
  ];

  constructor(private cd: ChangeDetectorRef) {
  }

  alert(msg: string) {
    alert(msg);
  }

  changeTableData() {
    this.dummyData.splice(0, 1);
    this.dummyData = [...this.dummyData]
    this.cd.markForCheck();
  }
}
