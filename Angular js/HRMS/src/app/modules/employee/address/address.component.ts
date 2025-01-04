import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../employee-service/employee-service.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
  validationForm!: FormGroup;
  showForm: boolean = false;
  // toggleForm(event: Event) {
  //   this.showForm = (event.target as HTMLInputElement).checked;
  // }

  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      PresentAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),
      PresentAddress2: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),
      PresentCity: new FormControl(null, { validators: [Validators.required, Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      PresentPostalcode: new FormControl(null, { validators: [Validators.required, Validators.maxLength(6)], updateOn: 'change' }),
      PresentCountry: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      PresentState: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      PermanentAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),
      PermanentAddress2: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }), 
      PermanentCity: new FormControl(null, { validators: [Validators.required, Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      PermanentPostalcode: new FormControl(null, { validators: [Validators.required, Validators.maxLength(6)], updateOn: 'change' }),
      PermanentCountry: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      PermanentState: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
   }

   get PresentAddress(): AbstractControl {
    return this.validationForm.get('PresentAddress')!;
  }
  get PresentAddress2(): AbstractControl {
    return this.validationForm.get('PresentAddress2')!;
  }
   get PresentCity(): AbstractControl {
    return this.validationForm.get('PresentCity')!;
  } 
  get PresentPostalcode(): AbstractControl {
    return this.validationForm.get('PresentPostalcode')!;
  } 
  get PresentCountry(): AbstractControl {
    return this.validationForm.get('PresentCountry')!;
  } 
  get PresentState(): AbstractControl {
    return this.validationForm.get('PresentState')!;
  } 
  get PermanentAddress(): AbstractControl {
    return this.validationForm.get('PermanentAddress')!;
  } 
  get PermanentAddress2(): AbstractControl {
    return this.validationForm.get('PermanentAddress2')!;
  } 
  get PermanentCity(): AbstractControl {
    return this.validationForm.get('PermanentCity')!;
  } 
  get PermanentPostalcode(): AbstractControl {
    return this.validationForm.get('PermanentPostalcode')!;
  } 
  get PermanentCountry(): AbstractControl {
    return this.validationForm.get('PermanentCountry')!;
  }
  get PermanentState(): AbstractControl {
    return this.validationForm.get('PermanentState')!;
  }


  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value);
  
    if (validationForm.valid) {
      this.saveaddressdata();
    } else {
      // Display specific error messages for each field
      if (validationForm.get('PresentAddress')?.errors?.['required']) {
        this.toastr.error('Present Address is required.');
      } else if (validationForm.get('PresentAddress')?.errors?.['minlength']) {
        this.toastr.error('Present Address must be at least 4 characters long.');
      } else if (validationForm.get('PresentAddress')?.errors?.['maxlength']) {
        this.toastr.error('Present Address cannot exceed 50 characters.');
      }
  
      if (validationForm.get('PresentAddress2')?.errors?.['required']) {
        this.toastr.error('Present Address 2 is required.');
      } else if (validationForm.get('PresentAddress2')?.errors?.['minlength']) {
        this.toastr.error('Present Address 2 must be at least 4 characters long.');
      } else if (validationForm.get('PresentAddress2')?.errors?.['maxlength']) {
        this.toastr.error('Present Address 2 cannot exceed 50 characters.');
      }
  
      if (validationForm.get('PresentCity')?.errors?.['required']) {
        this.toastr.error('Present City is required.');
      } else if (validationForm.get('PresentCity')?.errors?.['maxlength']) {
        this.toastr.error('Present City cannot exceed 30 characters.');
      } else if (validationForm.get('PresentCity')?.errors?.['pattern']) {
        this.toastr.error('Present City must contain only letters and spaces.');
      }
  
      if (validationForm.get('PresentPostalcode')?.errors?.['required']) {
        this.toastr.error('Present Postal Code is required.');
      } else if (validationForm.get('PresentPostalcode')?.errors?.['maxlength']) {
        this.toastr.error('Present Postal Code cannot exceed 6 characters.');
      }
  
      if (validationForm.get('PresentCountry')?.errors?.['required']) {
        this.toastr.error('Present Country is required.');
      }
  
      if (validationForm.get('PresentState')?.errors?.['required']) {
        this.toastr.error('Present State is required.');
      }
  
      // Repeat the above pattern for other form controls
      // ...
  
      // Permanent Address
      if (validationForm.get('PermanentAddress')?.errors?.['required']) {
        this.toastr.error('Permanent Address is required.');
      } else if (validationForm.get('PermanentAddress')?.errors?.['minlength']) {
        this.toastr.error('Permanent Address must be at least 4 characters long.');
      } else if (validationForm.get('PermanentAddress')?.errors?.['maxlength']) {
        this.toastr.error('Permanent Address cannot exceed 50 characters.');
      }
  
      if (validationForm.get('PermanentAddress2')?.errors?.['required']) {
        this.toastr.error('Permanent Address 2 is required.');
      } else if (validationForm.get('PermanentAddress2')?.errors?.['minlength']) {
        this.toastr.error('Permanent Address 2 must be at least 4 characters long.');
      } else if (validationForm.get('PermanentAddress2')?.errors?.['maxlength']) {
        this.toastr.error('Permanent Address 2 cannot exceed 50 characters.');
      }
  
      if (validationForm.get('PermanentCity')?.errors?.['required']) {
        this.toastr.error('Permanent City is required.');
      } else if (validationForm.get('PermanentCity')?.errors?.['maxlength']) {
        this.toastr.error('Permanent City cannot exceed 30 characters.');
      } else if (validationForm.get('PermanentCity')?.errors?.['pattern']) {
        this.toastr.error('Permanent City must contain only letters and spaces.');
      }
  
      if (validationForm.get('PermanentPostalcode')?.errors?.['required']) {
        this.toastr.error('Permanent Postal Code is required.');
      } else if (validationForm.get('PermanentPostalcode')?.errors?.['maxlength']) {
        this.toastr.error('Permanent Postal Code cannot exceed 6 characters.');
      }
  
      if (validationForm.get('PermanentCountry')?.errors?.['required']) {
        this.toastr.error('Permanent Country is required.');
      }
  
      if (validationForm.get('PermanentState')?.errors?.['required']) {
        this.toastr.error('Permanent State is required.');
      }
  
      // You can also display a generic error message if needed
        this.toastr.error('Fill all values first!');    }
  }
  

  ngOnInit(): void {
  }


  saveaddressdata() {
    const addressDetails = {
      presentAddress: this.validationForm.value.PresentAddress.trim(),
      presentAddress2: this.validationForm.value.PresentAddress2.trim(),
      presentCity: this.validationForm.value.PresentCity.trim(),
      presentPostalcode: this.validationForm.value.PresentPostalcode.trim(),
      presentCountry: this.validationForm.value.PresentCountry.trim(),
      presentState: this.validationForm.value.PresentState.trim(),
      permanentAddress: this.validationForm.value.PermanentAddress.trim(),
      permanentAddress2: this.validationForm.value.PermanentAddress2.trim(),
      permanentCity: this.validationForm.value.PermanentCity.trim(),
      permanentPostalcode: this.validationForm.value.PermanentPostalcode.trim(),
      permanentCountry: this.validationForm.value.PermanentCountry.trim(),
      permanentState: this.validationForm.value.PermanentState.trim(),
    };
  
    this.employeeService.saveEmpAddressDetail(addressDetails).subscribe(
    () => {
      this.toastr.success('Address added');
      this.validationForm.reset()
      
    },
    (error) => {
      console.error(error);
      this.toastr.error('Something went wrong while saving the Address details');
    }
  );
}
toggleForm(event: any) {
  if (event.target.checked) {
    // If toggle is checked, copy present address details to permanent address
    this.validationForm.patchValue({
      PermanentAddress: this.validationForm.value.PresentAddress,
      PermanentAddress2: this.validationForm.value.PresentAddress2,
      PermanentCity: this.validationForm.value.PresentCity,
      PermanentPostalcode: this.validationForm.value.PresentPostalcode,
      PermanentCountry: this.validationForm.value.PresentCountry,
      PermanentState: this.validationForm.value.PresentState
    });
  } else {
    // If toggle is unchecked, reset permanent address details
    this.validationForm.patchValue({
      PermanentAddress: null,
      PermanentAddress2: null,
      PermanentCity: null,
      PermanentPostalcode: null,
      PermanentCountry: null,
      PermanentState: null
});
}
}
}