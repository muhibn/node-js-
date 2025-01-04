import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { employeeList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from 'src/app/modules/employee/employee-service/employee-service.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit, OnDestroy {
  categoryGroup: Array<employeeList> = [];
  showOptions: boolean[] = [];
  defaultImage: string = '/assets/img/profile.png';
  numCardsToShow: number = 20;
  cardsToLoad: number = 20;
  loading: boolean = false; // Flag to indicate loading state
  autoLoadSubscription: Subscription | undefined; // Subscription for automatic data loading
  observer: IntersectionObserver | undefined; // Intersection observer instance

  constructor(private EmployeeServiceService: EmployeeServiceService, private router: Router) { }

  ngOnInit() {
    this.getEmployeeList();

    // Initialize the Intersection Observer
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.loading) {
        this.loadMore();
      }
    }, { threshold: 0.5 });

   
    const lastCard = document.querySelector('.main5 .card:last-child');
    if (lastCard) {
      this.observer.observe(lastCard);
    }

    this.autoLoadSubscription = interval(100).subscribe(() => {
      
      const lastCardVisible = this.isLastCardVisible();
      if (lastCardVisible && !this.loading) {
        this.loadMore();
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the interval to avoid memory leaks
    if (this.autoLoadSubscription) {
      this.autoLoadSubscription.unsubscribe();
    }
    // Disconnect the observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  getEmployeeList() {
    this.EmployeeServiceService.getListEmployee().subscribe(
      (res) => {
        this.categoryGroup = res;
        this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getImageURL(imageFileName: string): string {
    if (imageFileName && typeof imageFileName !== 'string') {
      return `assets/img/${imageFileName}`;
    } else {
      return this.defaultImage;
    }
  }
  //store last click 
  lastClick:number=Infinity;
  toggleOptions(index: number) {
  if(this.lastClick!=Infinity && this.lastClick!=index){
      this.showOptions[this.lastClick]=false;
  }
    
    this.showOptions[index] = !this.showOptions[index];
    this.lastClick=index;
  }

  sendItem(item: any) {
    console.log("hello", item);
    this.router.navigate(['../main/employee/profile'], { queryParams: { empid: item }});
  }

  loadMore() {
    if (!this.loading && this.numCardsToShow < this.categoryGroup.length) {
      this.loading = true; 
      setTimeout(() => {
        this.numCardsToShow += this.cardsToLoad;
        if (this.numCardsToShow > this.categoryGroup.length) {
          this.numCardsToShow = this.categoryGroup.length;
        }
        this.loading = false; 
      }, 2000); 
    }
  }

  isLastCardVisible(): boolean {
    const lastCard = document.querySelector('.main5 .card:last-child');
    if (lastCard) {
      const rect = lastCard.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }
    return false;
 }
}