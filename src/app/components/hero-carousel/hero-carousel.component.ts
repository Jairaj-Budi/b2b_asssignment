import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-hero-carousel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero-carousel.component.html",
  styleUrls: ["./hero-carousel.component.scss"],
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
  ];

  currentIndex = 0;
  private carouselSubscription?: Subscription;

  ngOnInit(): void {
    // Automatically change images every 5 seconds
    this.carouselSubscription = interval(5000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setImage(index: number): void {
    this.currentIndex = index;
  }

  ngOnDestroy(): void {
    this.carouselSubscription?.unsubscribe();
  }
}
