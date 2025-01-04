import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prosonal-details',
  templateUrl: './prosonal-details.component.html',
  styleUrls: ['./prosonal-details.component.scss']
})
export class ProsonalDetailsComponent implements OnInit {
  validationForm!: FormGroup;
  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) { 
    this.validationForm = new FormGroup({
      fullname: new FormControl(null, { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(35), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
      Dob: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Gender: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Bloodgroup: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Religion: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Fatherhusbandname: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(35), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
      Maritalstatus: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Domarriage: new FormControl({ value: null, disabled: true }, Validators.required),
      Mobilenumber: new FormControl(null, { validators: [Validators.required, Validators.pattern("^\\+?[0-9]{10,12}$")], updateOn: 'change' }),
      Emailid: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
    });

    this.validationForm.get('Maritalstatus')?.valueChanges.subscribe(value => {
      const dateOfMarriageControl = this.validationForm.get('Domarriage');
      if (value === 'Married') { 
        dateOfMarriageControl?.enable();
      } else {
        dateOfMarriageControl?.disable();
        dateOfMarriageControl?.setValue(null);
      }
    });
  }

  get fullname(): AbstractControl {
    return this.validationForm.get('fullname')!;
  }
  get Dob(): AbstractControl {
    return this.validationForm.get('Dob')!;
  }
  get Gender(): AbstractControl {
    return this.validationForm.get('Gender')!;
  } 
  get Bloodgroup(): AbstractControl {
    return this.validationForm.get('Bloodgroup')!;
  } 
  get Religion(): AbstractControl {
    return this.validationForm.get('Religion')!;
  } 
  get Fatherhusbandname(): AbstractControl {
    return this.validationForm.get('Fatherhusbandname')!;
  } 
  get Maritalstatus(): AbstractControl {
    return this.validationForm.get('Maritalstatus')!;
  } 
  get Domarriage(): AbstractControl {
    return this.validationForm.get('Domarriage')!;
  } 
  get Mobilenumber(): AbstractControl {
    return this.validationForm.get('Mobilenumber')!;
  } 
  get Emailid(): AbstractControl {
    return this.validationForm.get('Emailid')!;
  }

  
  // onSubmit(validationForm: FormGroup): void {
  //   this.validationForm.markAllAsTouched();
  //   console.log(validationForm.value)
    
  //   if (validationForm.valid) {
  //     this.saveproductdata();     
  //   } else {
  //     // Display specific error messages for each field
  //     if (validationForm.get('fullname')?.errors?.['required']) {
  //       this.toastr.error('Full Name is required.');
  //     } else if (validationForm.get('fullname')?.errors?.['minlength']) {
  //       this.toastr.error('Full Name must be at least 3 characters long.');
  //     } else if (validationForm.get('fullname')?.errors?.['maxlength']) {
  //       this.toastr.error('Full Name cannot exceed 35 characters.');
  //     } else if (validationForm.get('fullname')?.errors?.['pattern']) {
  //       this.toastr.error('Full Name must contain only letters and spaces.');
  //     }
  
  //     if (validationForm.get('Mobilenumber')?.errors?.['required']) {
  //       this.toastr.error('Mobile Number is required.');
  //     } else if (validationForm.get('Mobilenumber')?.errors?.['pattern']) {
  //       this.toastr.error('Mobile Number must be a 10 or 12-digit number and may start with a "+" sign.');
  //     }
  
  //     if (validationForm.get('Fatherhusbandname')?.errors?.['required']) {
  //       this.toastr.error('Father/Husband Name is required.');
  //     } else if (validationForm.get('Fatherhusbandname')?.errors?.['minlength']) {
  //       this.toastr.error('Father/Husband Name must be at least 4 characters long.');
  //     } else if (validationForm.get('Fatherhusbandname')?.errors?.['maxlength']) {
  //       this.toastr.error('Father/Husband Name cannot exceed 35 characters.');
  //     } else if (validationForm.get('Fatherhusbandname')?.errors?.['pattern']) {
  //       this.toastr.error('Father/Husband Name must contain only letters and spaces.');
  //     }
  
  //     if (validationForm.get('Emailid')?.errors?.['required']) {
  //       this.toastr.error('Email Address is required.');
  //     } else if (validationForm.get('Emailid')?.errors?.['email']) {
  //       this.toastr.error('Invalid Email Address.');
  //     }

  //     // You can also display a generic error message if needed
  //     this.toastr.error('Please fill all details');
  //   }
  // }


  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value)
    
    if (validationForm.valid) {
      this.saveproductdata();     
    } else {
      // Display specific error messages for each field
  
      // Full Name
      if (validationForm.get('fullname')?.errors?.['required']) {
        this.toastr.error('Full Name is required.');
      } else if (validationForm.get('fullname')?.errors?.['minlength']) {
        this.toastr.error('Full Name must be at least 2 characters long.');
      } else if (validationForm.get('fullname')?.errors?.['maxlength']) {
        this.toastr.error('Full Name cannot exceed 35 characters.');
      } else if (validationForm.get('fullname')?.errors?.['pattern']) {
        this.toastr.error('Full Name must contain only letters, dots, and spaces.');
      }
  
      // Date of Birth
      if (validationForm.get('Dob')?.errors?.['required']) {
        this.toastr.error('Date of Birth is required.');
      }
  
      // Gender
      if (validationForm.get('Gender')?.errors?.['required']) {
        this.toastr.error('Gender is required.');
      }
  
      // Blood Group
      if (validationForm.get('Bloodgroup')?.errors?.['required']) {
        this.toastr.error('Blood Group is required.');
      }
  
      // Religion
      if (validationForm.get('Religion')?.errors?.['required']) {
        this.toastr.error('Religion is required.');
      }
  
      // Father/Husband Name
      if (validationForm.get('Fatherhusbandname')?.errors?.['required']) {
        this.toastr.error('Father/Husband Name is required.');
      } else if (validationForm.get('Fatherhusbandname')?.errors?.['minlength']) {
        this.toastr.error('Father/Husband Name must be at least 4 characters long.');
      } else if (validationForm.get('Fatherhusbandname')?.errors?.['maxlength']) {
        this.toastr.error('Father/Husband Name cannot exceed 35 characters.');
      } else if (validationForm.get('Fatherhusbandname')?.errors?.['pattern']) {
        this.toastr.error('Father/Husband Name must contain only letters, dots, and spaces.');
      }
  
      // Marital Status
      if (validationForm.get('Maritalstatus')?.errors?.['required']) {
        this.toastr.error('Marital Status is required.');
      }
  
      // Date of Marriage
      if (validationForm.get('Domarriage')?.errors?.['required']) {
        this.toastr.error('Date of Marriage is required.');
      }
  
      // Mobile Number
      if (validationForm.get('Mobilenumber')?.errors?.['required']) {
        this.toastr.error('Mobile Number is required.');
      } else if (validationForm.get('Mobilenumber')?.errors?.['pattern']) {
        this.toastr.error('Mobile Number must be a 10 or 12-digit number and may start with a "+" sign.');
      }
  
      // Email Address
      if (validationForm.get('Emailid')?.errors?.['required']) {
        this.toastr.error('Email Address is required.');
      } else if (validationForm.get('Emailid')?.errors?.['email']) {
        this.toastr.error('Invalid Email Address.');
      }
  
      // You can also display a generic error message if needed
      this.toastr.error('Fill all values first!');
    }
  }
  
  
  

  ngOnInit(): void {
  }

  saveproductdata() {
    
    debugger
    const empDetails = {
      createdBy: "",
      updatedBy: "",
      fullName: this.validationForm.value.fullname.trim(),
      dob: this.validationForm.value.Dob,
      gender: this.validationForm.value.Gender.trim(),
      bloodGroup: this.validationForm.value.Bloodgroup.trim(),
      reliegion: this.validationForm.value.Religion.trim(),
      fatherorHusbandName: this.validationForm.value.Fatherhusbandname.trim(),
      maritalStatus: this.validationForm.value.Maritalstatus.trim(),
      dateofMarriage: this.validationForm.value.Domarriage ? this.validationForm.value.Domarriage.trim() : null,
      mobileNo: this.validationForm.value.Mobilenumber.trim(),
      email: this.validationForm.value.Emailid.trim()
    };

    this.employeeService.saveEmpPersonalDetail(empDetails).subscribe(
      () => {
        this.toastr.success('Employee added');
        this.validationForm.reset()
        this.validationForm.get('Dob')?.setValue('')
        this.validationForm.get('Domarriage')?.setValue('')
      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the employee details');
 }
);
}

}