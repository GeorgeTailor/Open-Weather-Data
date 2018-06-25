import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { PopupTextObject } from './PopupTextObject';

@Component({
  selector: 'popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  @Input('popupTextObject')
  popupTextObject: PopupTextObject;

  @ViewChild('popupBody') modalBody: ElementRef;

  @Output() closePopupEvent = new EventEmitter<any>();

  @Output() acceptPopupEvent = new EventEmitter<any>();

  constructor() { }

  visible: Boolean = true;

  ngOnInit() { }

  emitAccept(event) {
    this.visible = false;
    this.acceptPopupEvent.emit(event);
  }

  emitReject(event) {
    this.visible = false;
    this.closePopupEvent.emit(event);
  }

  // the event that made this popup appear must stopPropagation of that event
  // if not, then this popup will hide immediately after showing up.
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.modalBody.nativeElement.contains(event.target)) {
      this.emitReject(event);
    }
  }

}
