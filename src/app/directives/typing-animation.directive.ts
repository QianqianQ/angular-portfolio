import { Directive, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective implements AfterViewInit {

  @Input() text: string = '';  // Text to be typed
  @Input() typingDelay: number = 0;  // Delay before the animation starts (milliseconds)
  @Input() typingSpeed: number = 100;  // Typing speed (milliseconds)
  @Input() erasingSpeed: number = 50;  // Erasing speed (milliseconds)
  @Input() pauseDuration: number = 1000;  // Pause duration after typing/erasing (milliseconds)
  @Input() loop: boolean = true; // Whether to loop the animation

  private currentIndex = 0;
  private isTyping = true;
  private erase = false;
  private element: HTMLElement;
  private cursor!: HTMLElement;
  private interval: any;

  constructor(private el:ElementRef,
    private renderer: Renderer2
  ) {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit(): void {
    if (this.text.length > 0) {
      this.setupCursor();
      // Start the animation after the specified delay
      setTimeout(() => this.startAnimation(),
      this.typingDelay);
    }
  }

  private setupCursor() {
    // Create a blinking cursor element
    this.cursor = this.renderer.createElement('span');
    this.renderer.addClass(this.cursor, 'blinking-cursor');
    this.renderer.setProperty(this.cursor, 'textContent', '|');
    this.renderer.appendChild(this.el.nativeElement, this.cursor);

    // Add styles for cursor
    // const style = document.createElement('style');
    // style.textContent = `
    //   .blinking-cursor::after {
    //     content: "|";
    //     opacity: 1;
    //     color: var(--primary-color);
    //     animation: blink 1s infinite;
    //   }
    //   @keyframes blink {
    //     50% { opacity: 0; }
    //   }
    // `;
    // document.head.appendChild(style);
  }

  private startAnimation(): void {
    this.interval = setInterval(() => {
      if (this.isTyping) {
        // Typing phase
        if (this.currentIndex < this.text.length) {
          this.element.textContent += this.text[this.currentIndex];
          this.currentIndex++;
        } else {
          this.isTyping = false;
          clearInterval(this.interval);
          if (this.erase) {
            // Switch to erasing phase after typing is complete
            setTimeout(() => this.startAnimation(), this.pauseDuration);
          }
        }
      } else {
        // Erasing phase
        if (this.currentIndex > 0) {
          this.element.textContent = this.text.substring(0, this.currentIndex - 1);
          this.currentIndex--;
        } else {
          // Switch back to typing phase after erasing is complete
          this.isTyping = true;
          clearInterval(this.interval);
          if (this.loop) {
            setTimeout(() => this.startAnimation(), this.pauseDuration);
          } else {
            this.renderer.removeChild(this.el.nativeElement, this.cursor); // Remove cursor when done
          }
        }
      }
    }, this.isTyping ? this.typingSpeed : this.erasingSpeed);
  }
}