import { animate, state, style, transition, trigger } from '@angular/animations';


export const highlightedTrigger = trigger('highlightedState', [
    state('default', style({
      border: '2px solid #B2B6FF',
})),
state('highlighted', style({
  border: '4px solid #B2B6FF',
  filter: 'brightness(92%)'
})),
 transition('default => highlighted', [
  animate('200ms ease-out',  style({
    transform: 'scale(1.02)'
  })),
  animate(200)
 ])
  ])