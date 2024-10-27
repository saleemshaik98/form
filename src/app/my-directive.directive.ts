import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event : KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const pattern = /^[0-9]*$/;

    if (!pattern.test(input.value)) {
      // If input doesn't match the pattern, prevent the default behavior
      event.preventDefault();
      input.value = input.value.replace(/[^0-9]/g, '');
  }
}

}
