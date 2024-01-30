import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
    @Input() slides: Array<string> = [];

    currentIndex: number = 0;

    getCurrentSlideUrl() {
        return `url('${this.slides[this.currentIndex]}')`;
    }

    goToPrevious(): void {
        const isFirstSlide = this.currentIndex === 0;
        const newIndex = isFirstSlide
            ? this.slides.length - 1
            : this.currentIndex - 1;

        this.currentIndex = newIndex;
    }

    goToNext(): void {
        const isLastSlide = this.currentIndex === this.slides.length - 1;
        const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

        this.currentIndex = newIndex;
    }

    goToSlide(slideIndex: number): void {
        this.currentIndex = slideIndex;
    }
}
