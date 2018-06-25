import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  showPopup: boolean = false;
  message;
  successMessage = {
    headerText: 'message.delivery.success',
    messageText: 'message.received',
    buttonAcceptText: 'ok',
    buttonRejectText: ''
  }

  firstNameValidators = [{
    validationFn: 'required',
    validationMessageKey: 'first.name.required'
  }];
  lastNameValidators = [{
    validationFn: 'required',
    validationMessageKey: 'last.name.required'
  }];
  messageValidators = [{
    validationFn: 'required',
    validationMessageKey: 'message.required'
  }];
  emailValidators = [
    {
      validationFn: 'required',
      validationMessageKey: 'email.required'
    },
    {
      validationFn: 'email',
      validationMessageKey: 'email.invalid'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  validateAndSubmitForm(event) {
    event.stopPropagation();
    const controls = this.formGroup.controls; 
    Object.keys(controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });

    let validForm = true;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const el = controls[key];
        if (el.invalid) {
          validForm = false;
          break;
        }
      }
    }

    if (validForm) {
      // submit to backend
      this.message = this.successMessage;
      this.showPopup = true;
    } else {
      return;
    }
  }

  handlePopupReject(event) {
    this.showPopup = false;
  }

  handlePopupAccept(event) {
    this.showPopup = false;
  }

}
