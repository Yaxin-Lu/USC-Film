import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';




@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class Carousel1Component implements OnInit {
  private statusUrl = '/api/status';
  //we will change it into placeholder img
  images = [700, 800, 807, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ids = [1,2,3,4,5];
  titles = ['unknow', 'unknow','unknow','unknow','unknow'];
  Current_play: any;
  display_text:boolean = false;
  mobile:boolean = false;
  getDetailLink(i:number){
    //console.log('/watch/'+ this.kind +'/'+ this.ids[i].toString());
    return '/watch/movie/'+ this.ids[i].toString();
  }
  constructor(private http: HttpClient ,config: NgbCarouselConfig,public breakpointObserver: BreakpointObserver) {
    //
    config.interval = 500000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
           this.mobile = true;
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
           this.mobile = false;
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
           this.mobile = false;
      }
      if (state.breakpoints[Breakpoints.Large]) {

          console.log( 'Matches Large viewport');
          this.mobile = false;
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');
         this.mobile = false;
      }
    });



    this.http.get(this.statusUrl).subscribe((result: any) => {
      this.Current_play = result.results;
      //only here we will print out the status! or we will get noting!
      console.log(result);
      console.log(this.Current_play);
      for(var i = 0; i<5; i++){
      this.images[i] =  "https://image.tmdb.org/t/p/original" + this.Current_play[i].backdrop_path;
      this.ids[i] = this.Current_play[i].id;
      this.titles[i] = this.Current_play[i].title;
      }
      console.log(this.titles);

    });
  }


}
