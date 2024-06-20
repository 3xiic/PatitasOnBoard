import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public scrollSubscription!: Subscription;
  public isScrolled: boolean = false;
  public isScrolledPink: boolean = false;
  public isScrolledPurple: boolean = false;

  constructor(private scrollService: ScrollService){}

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.getScroll().subscribe(scrollPosition => {
      this.isScrolled = scrollPosition > 0;
      this.isScrolledPink = scrollPosition > 1800; 
      if(this.isScrolledPink && scrollPosition > 3900){
        this.isScrolledPink = false;
      }
      
    });
  }

}
