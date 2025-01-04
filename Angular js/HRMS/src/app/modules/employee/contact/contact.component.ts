import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  validationForm!: FormGroup;

  constructor(private employeeService: EmployeeServiceService , private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      MobileNo: new FormControl(null, { validators: [Validators.required,  Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }),
      AlternateMobile: new FormControl(null, { validators: [Validators.required,  Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }),
      PersonalEmailId: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      ProfessionalEmailId: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      HomeTelephone: new FormControl(null, { validators: [Validators.required,  Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }),
      EmergencyContactPersonName: new FormControl(null, { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
      RelationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      ContactPersonNumber: new FormControl(null, { validators: [Validators.required,  Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }), 
      ContactPersonAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),
      AlternateEmergencyContactPersonName: new FormControl(null, { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
      AlternateRelationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      AlternateContactPersonNumber: new FormControl(null, { validators: [Validators.required,  Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }),
      AlternateContactPersonAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),

      
    });
   }

   get MobileNo(): AbstractControl {
    return this.validationForm.get('MobileNo')!;
  }
  get AlternateMobile(): AbstractControl {
    return this.validationForm.get('AlternateMobile')!;
  }
   get PersonalEmailId(): AbstractControl {
    return this.validationForm.get('PersonalEmailId')!;
  } 
  get ProfessionalEmailId(): AbstractControl {
    return this.validationForm.get('ProfessionalEmailId')!;
  } 
  get HomeTelephone(): AbstractControl {
    return this.validationForm.get('HomeTelephone')!;
  } 
  get EmergencyContactPersonName(): AbstractControl {
    return this.validationForm.get('EmergencyContactPersonName')!;
  } 
  get RelationshipWithContactPerson(): AbstractControl {
    return this.validationForm.get('RelationshipWithContactPerson')!;
  } 
  get ContactPersonNumber(): AbstractControl {
    return this.validationForm.get('ContactPersonNumber')!;
  } 
  get ContactPersonAddress(): AbstractControl {
    return this.validationForm.get('ContactPersonAddress')!;
  } 
  get AlternateEmergencyContactPersonName(): AbstractControl {
    return this.validationForm.get('AlternateEmergencyContactPersonName')!;
  } 
  get AlternateRelationshipWithContactPerson(): AbstractControl {
    return this.validationForm.get('AlternateRelationshipWithContactPerson')!;
  }
  get AlternateContactPersonNumber(): AbstractControl {
    return this.validationForm.get('AlternateContactPersonNumber')!;
  }
  get AlternateContactPersonAddress(): AbstractControl {
    return this.validationForm.get('AlternateContactPersonAddress')!;
  }

  // onSubmit(validationForm:FormGroup): void {
  //   this.validationForm.markAllAsTouched();
  //   console.log(validationForm.value)
  //   if(validationForm.valid){
  //     this.savecontactdata()
      
  //   }
  //   else{
  //     this.toastr.error('Please fill all details');
  //   }
    
  // }

  onSubmit(validationForm: FormGroup): void {
  this.validationForm.markAllAsTouched();
  console.log(validationForm.value);

  if (validationForm.valid) {
    this.savecontactdata();
  } else {
    // Display specific error messages for each field
    if (validationForm.get('MobileNo')?.errors?.['required']) {
      this.toastr.error('Mobile Number is required.');
    } else if (validationForm.get('MobileNo')?.errors?.['pattern']) {
      this.toastr.error('Mobile Number must be a 10 or 12-digit number and may start with a "+" sign.');
    }

    if (validationForm.get('AlternateMobile')?.errors?.['required']) {
      this.toastr.error('Alternate Mobile Number is required.');
    } else if (validationForm.get('AlternateMobile')?.errors?.['pattern']) {
      this.toastr.error('Alternate Mobile Number must be a 10 or 12-digit number and may start with a "+" sign.');
    }

    if (validationForm.get('PersonalEmailId')?.errors?.['required']) {
      this.toastr.error('Personal Email Address is required.');
    } else if (validationForm.get('PersonalEmailId')?.errors?.['email']) {
      this.toastr.error('Invalid Personal Email Address.');
    }

    if (validationForm.get('ProfessionalEmailId')?.errors?.['required']) {
      this.toastr.error('Professional Email Address is required.');
    } else if (validationForm.get('ProfessionalEmailId')?.errors?.['email']) {
      this.toastr.error('Invalid Professional Email Address.');
    }

    if (validationForm.get('HomeTelephone')?.errors?.['required']) {
      this.toastr.error('Home Telephone is required.');
    } else if (validationForm.get('HomeTelephone')?.errors?.['pattern']) {
      this.toastr.error('Home Telephone must be a 10 or 12-digit number and may start with a "+" sign.');
    }

    if (validationForm.get('EmergencyContactPersonName')?.errors?.['required']) {
      this.toastr.error('Emergency Contact Person Name is required.');
    } else if (validationForm.get('EmergencyContactPersonName')?.errors?.['minlength']) {
      this.toastr.error('Emergency Contact Person Name must be at least 3 characters long.');
    } else if (validationForm.get('EmergencyContactPersonName')?.errors?.['maxlength']) {
      this.toastr.error('Emergency Contact Person Name cannot exceed 25 characters.');
    } else if (validationForm.get('EmergencyContactPersonName')?.errors?.['pattern']) {
      this.toastr.error('Emergency Contact Person Name must contain only letters and spaces.');
    }

    if (validationForm.get('RelationshipWithContactPerson')?.errors?.['required']) {
      this.toastr.error('Relationship With Contact Person is required.');
    }

    if (validationForm.get('ContactPersonNumber')?.errors?.['required']) {
      this.toastr.error('Contact Person Number is required.');
    } else if (validationForm.get('ContactPersonNumber')?.errors?.['pattern']) {
      this.toastr.error('Contact Person Number must be a 10 or 12-digit number and may start with a "+" sign.');
    }

    if (validationForm.get('ContactPersonAddress')?.errors?.['required']) {
      this.toastr.error('Contact Person Address is required.');
    } else if (validationForm.get('ContactPersonAddress')?.errors?.['minlength']) {
      this.toastr.error('Contact Person Address must be at least 3 characters long.');
    } else if (validationForm.get('ContactPersonAddress')?.errors?.['maxlength']) {
      this.toastr.error('Contact Person Address cannot exceed 50 characters.');
    }

    if (validationForm.get('AlternateEmergencyContactPersonName')?.errors?.['required']) {
      this.toastr.error('Alternate Emergency Contact Person Name is required.');
    } else if (validationForm.get('AlternateEmergencyContactPersonName')?.errors?.['minlength']) {
      this.toastr.error('Alternate Emergency Contact Person Name must be at least 4 characters long.');
    } else if (validationForm.get('AlternateEmergencyContactPersonName')?.errors?.['maxlength']) {
      this.toastr.error('Alternate Emergency Contact Person Name cannot exceed 25 characters.');
    } else if (validationForm.get('AlternateEmergencyContactPersonName')?.errors?.['pattern']) {
      this.toastr.error('Alternate Emergency Contact Person Name must contain only letters and spaces.');
    }

    if (validationForm.get('AlternateRelationshipWithContactPerson')?.errors?.['required']) {
      this.toastr.error('Alternate Relationship With Contact Person is required.');
    }

    if (validationForm.get('AlternateContactPersonNumber')?.errors?.['required']) {
      this.toastr.error('Alternate Contact Person Number is required.');
    } else if (validationForm.get('AlternateContactPersonNumber')?.errors?.['pattern']) {
      this.toastr.error('Alternate Contact Person Number must be a 10 or 12-digit number and may start with a "+" sign.');
    }

    if (validationForm.get('AlternateContactPersonAddress')?.errors?.['required']) {
      this.toastr.error('Alternate Contact Person Address is required.');
    } else if (validationForm.get('AlternateContactPersonAddress')?.errors?.['minlength']) {
      this.toastr.error('Alternate Contact Person Address must be at least 4 characters long.');
    } else if (validationForm.get('AlternateContactPersonAddress')?.errors?.['maxlength']) {
      this.toastr.error('Alternate Contact Person Address cannot exceed 50 characters.');
    }
    // You can also display a generic error message if needed
    this.toastr.error('Fill all values first!');
  }
}


  ngOnInit(): void {
  }


  savecontactdata() {
   
    const contactDetails = {
      createdBy: "1",
      updatedBy: "1",
      mobileNo: this.validationForm.value.MobileNo.trim(),
      alternateMobile: this.validationForm.value.AlternateMobile.trim(),
      personalEmailId: this.validationForm.value.PersonalEmailId.trim(),
      professionalEmailId: this.validationForm.value.ProfessionalEmailId.trim(),
      homeTelephone: this.validationForm.value.HomeTelephone.trim(),
      emergencyContactPersonName: this.validationForm.value.EmergencyContactPersonName.trim(),
      relationshipWithContactPerson: this.validationForm.value.RelationshipWithContactPerson.trim(),
      contactPersonNumber: this.validationForm.value.ContactPersonNumber.trim(),
      contactPersonAddress: this.validationForm.value.ContactPersonAddress.trim(),
      alternateEmergencyContactPersonName: this.validationForm.value.AlternateEmergencyContactPersonName.trim(),
      alternateRelationshipWithContactPerson: this.validationForm.value.AlternateRelationshipWithContactPerson.trim(),
      alternateContactPersonNumber: this.validationForm.value.AlternateContactPersonNumber.trim(),
      alternateContactPersonAddress: this.validationForm.value.AlternateContactPersonAddress.trim(),
      remarks: "",
      empRegId: "1"
    };  

    this.employeeService.saveEmpcontactDetail(contactDetails).subscribe(
    () => {
      this.toastr.success('Contact added');
      this.validationForm.reset()

    },
    (error) => {
      console.error(error);
      this.toastr.error('Something went wrong while saving the contact details');

}
);
}
}