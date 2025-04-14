import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeInStagger = trigger('fadeInStagger', [
  transition(':enter', [
    query('.animate-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ])
]);