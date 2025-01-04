import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit{
  validationForm!: FormGroup;

constructor(private employeeService: EmployeeServiceService , private toastr: ToastrService) {
  this.validationForm = new FormGroup({
    AadhaarNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(12),Validators.maxLength(12), Validators.pattern("^[0-9]*$")], updateOn: 'change' }),
    NameAsAadhaar: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
    DobAsAadhaar: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    AadhaarAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PanNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(6),Validators.minLength(6)], updateOn: 'change' }),
    NameAsPan: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z\\. ]*$")], updateOn: 'change' }),
    DobAsPan: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PanAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),   
    PassportNo: new FormControl(null, { validators: [Validators.required,Validators.minLength(12),Validators.maxLength(12)], updateOn: 'change' }),
    PassportType: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PassportVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PassportAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DlNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(16), Validators.maxLength(16)], updateOn: 'change' }),      
    DlVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DobAsDL: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DlAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }), 
  });
 }

 get AadhaarNo(): AbstractControl {
  return this.validationForm.get('AadhaarNo')!;
}
get NameAsAadhaar(): AbstractControl {
  return this.validationForm.get('NameAsAadhaar')!;
}
 get DobAsAadhaar(): AbstractControl {
  return this.validationForm.get('DobAsAadhaar')!;
} 
get AadhaarAttach(): AbstractControl {
  return this.validationForm.get('AadhaarAttach')!;
} 
get PanNo(): AbstractControl {
  return this.validationForm.get('PanNo')!;
} 
get NameAsPan(): AbstractControl {
  return this.validationForm.get('NameAsPan')!;
} 
get DobAsPan(): AbstractControl {
  return this.validationForm.get('DobAsPan')!;
} 
get PanAttach(): AbstractControl {
  return this.validationForm.get('PanAttach')!;
} 
get PassportNo(): AbstractControl {
  return this.validationForm.get('PassportNo')!;
} 
get PassportType(): AbstractControl {
  return this.validationForm.get('PassportType')!;
} 
get PassportVaildTill(): AbstractControl {
  return this.validationForm.get('PassportVaildTill')!;
}
get PassportAttach(): AbstractControl {
  return this.validationForm.get('PassportAttach')!;
}
get DlNo(): AbstractControl {
  return this.validationForm.get('DlNo')!;
}
get DlVaildTill(): AbstractControl {
  return this.validationForm.get('DlVaildTill')!;
}
get DobAsDL(): AbstractControl {
  return this.validationForm.get('DobAsDL')!;
}
get DlAttach(): AbstractControl {
  return this.validationForm.get('DlAttach')!;
}
selectedFile: File | null = null; // Property to store the selected file


/////////Upload Image/////////
 
// onFileSelected(event: any) {
//   this.selectedFile = event.target.files[0] as File;
// }

// getObjectURL(file: File): string {
//   if (file) {
//     return URL.createObjectURL(file);
//   }
// return'';
// }

// onFileSelected(event: any, controlName: string): void {
//   const file = event.target.files[0] as File;
//   if (file) {
//     this.validationForm.get(controlName)?.setValue(file);
//     // Optionally, you can update the image preview here
//       this.selectedFile = event.target.files[0] as File;

//     // this.updateImagePreview(file);
//   }
// }

// updateImagePreview(file: File): void {
//   // Code to update the image preview
//   // For example:
//   const objectURL = this.getObjectURL(file);
//   // Update the image preview using the objectURL
// }



// // Modify the onFileSelected method to handle individual file attachments
// onFileSelected(event: any, controlName: string): void {
//   const file = event.target.files[0] as File;
//   if (file) {
//     this.validationForm.get(controlName)?.setValue(file);
//     this.updateImagePreview(file, controlName);
//   }
// }
imageUrl1: string | ArrayBuffer | null = null;
onFileSelected1(file: any) {
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl1 = reader.result;
      console.log("the image url",this.imageUrl1);


    };
    reader.readAsDataURL(file);
  }
}
imageUrl2: string | ArrayBuffer | null = null;
onFileSelected2(file: any) {
  console.log("file two function is runing ")
  console.log(file)
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl2 = reader.result;

    };
    console.log(this.imageUrl2);
    reader.readAsDataURL(file);
  }
}

imageUrl3: string | ArrayBuffer | null = null;
onFileSelected3(file: any) {
  console.log("file two function is runing ")
  console.log(file)
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl3 = reader.result;

    };
    console.log(this.imageUrl3);
    reader.readAsDataURL(file);
  }
}

imageUrl4: string | ArrayBuffer | null = null;
onFileSelected4(file: any) {
  console.log("file two function is runing ")
  console.log(file)
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl4 = reader.result;

    };
    console.log(this.imageUrl4);
    reader.readAsDataURL(file);
  }
}

onFileSelected(event: any, controlName: string): void {
 console.log(controlName)

  const file = event.target.files[0]as File;

    if (file) {
      if(controlName==='AadhaarAttach')
        {
          this.onFileSelected1(file);

        }else if(controlName==='PanAttach')
        {
            this.onFileSelected2(file);
        }else if(controlName==='PassportAttach')
        {
              this.onFileSelected3(file);
        }else if(controlName==='DlAttach')
        {
                this.onFileSelected4(file);
        }


        
  // this.selectedFile = file;
  this.validationForm.get(controlName)?.setValue(file);
    this.updateImagePreview(file, controlName);

}
}

// // Method to update the image preview for a specific control
// updateImagePreview(file: File, controlName: string): void {
//   const control = this.validationForm.get(controlName);
//   if (control) {
//     const objectURL = this.getObjectURL(file);
//     control['previewURL'] = objectURL; // Store the preview URL in the control object
//   }
// }

updateImagePreview(file: File, controlName: string): void {
  const control = this.validationForm.get(controlName);
  if (control) {
    const objectURL = this.getObjectURL(file);
    control['previewURL'] = objectURL; // Store the preview URL in the control object
    this.selectedFile = file; // Set the selected file property
  }
}



// getObjectURL(file: File): string {
//   if (file) {
//     return URL.createObjectURL(file);
//   }
//   return '';
// }

// getObjectURL(file: File): string {
//   return URL.createObjectURL(file);
// }

getObjectURL(file: File): string {
  return URL.createObjectURL(file);
}
 

onSubmit(validationForm: FormGroup): void {
  this.validationForm.markAllAsTouched();
  if (validationForm.valid) {
    this.saveIdentitydata();
  } else {
    // Display specific error messages for each field

    // Aadhaar No
    if (validationForm.get('AadhaarNo')?.errors?.['required']) {
      this.toastr.error('Aadhaar Number is required.');
    } else if (validationForm.get('AadhaarNo')?.errors?.['maxlength']) {
      this.toastr.error('Aadhaar Number cannot exceed 12 characters.');
    } else if (validationForm.get('AadhaarNo')?.errors?.['pattern']) {
      this.toastr.error('Aadhaar Number must contain only numbers.');
    }

    // Name As Aadhaar
    if (validationForm.get('NameAsAadhaar')?.errors?.['required']) {
      this.toastr.error('Name as per Aadhaar is required.');
    } else if (validationForm.get('NameAsAadhaar')?.errors?.['minlength']) {
      this.toastr.error('Name as per Aadhaar must be at least 4 characters long.');
    } else if (validationForm.get('NameAsAadhaar')?.errors?.['maxlength']) {
      this.toastr.error('Name as per Aadhaar cannot exceed 25 characters.');
    } else if (validationForm.get('NameAsAadhaar')?.errors?.['pattern']) {
      this.toastr.error('Name as per Aadhaar must contain only alphabets and spaces.');
    }

    // Date of Birth As Aadhaar
    if (validationForm.get('DobAsAadhaar')?.errors?.['required']) {
      this.toastr.error('Date of Birth as per Aadhaar is required.');
    }

    // Aadhaar Attachment
    if (validationForm.get('AadhaarAttach')?.errors?.['required']) {
      this.toastr.error('Aadhaar Attachment is required.');
    }

    // Pan No
    if (validationForm.get('PanNo')?.errors?.['required']) {
      this.toastr.error('PAN Number is required.');
    } else if (validationForm.get('PanNo')?.errors?.['maxlength']) {
      this.toastr.error('PAN Number cannot exceed 10 characters.');
    }

    // Name As Pan
    if (validationForm.get('NameAsPan')?.errors?.['required']) {
      this.toastr.error('Name as per PAN is required.');
    } else if (validationForm.get('NameAsPan')?.errors?.['minlength']) {
      this.toastr.error('Name as per PAN must be at least 4 characters long.');
    } else if (validationForm.get('NameAsPan')?.errors?.['maxlength']) {
      this.toastr.error('Name as per PAN cannot exceed 25 characters.');
    } else if (validationForm.get('NameAsPan')?.errors?.['pattern']) {
      this.toastr.error('Name as per PAN must contain only alphabets and spaces.');
    }

    // Date of Birth As Pan
    if (validationForm.get('DobAsPan')?.errors?.['required']) {
      this.toastr.error('Date of Birth as per PAN is required.');
    }

    // Pan Attachment
    if (validationForm.get('PanAttach')?.errors?.['required']) {
      this.toastr.error('PAN Attachment is required.');
    }

    // Passport No
    if (validationForm.get('PassportNo')?.errors?.['required']) {
      this.toastr.error('Passport Number is required.');
    } else if (validationForm.get('PassportNo')?.errors?.['maxlength']) {
      this.toastr.error('Passport Number cannot exceed 12 characters.');
    }

    // Passport Type
    if (validationForm.get('PassportType')?.errors?.['required']) {
      this.toastr.error('Passport Type is required.');
    }

    // Passport Valid Till
    if (validationForm.get('PassportVaildTill')?.errors?.['required']) {
      this.toastr.error('Passport Valid Till date is required.');
    }

    // Passport Attachment
    if (validationForm.get('PassportAttach')?.errors?.['required']) {
      this.toastr.error('Passport Attachment is required.');
    }

    // DL No
    if (validationForm.get('DlNo')?.errors?.['required']) {
      this.toastr.error('Driving License Number is required.');
    } else if (validationForm.get('DlNo')?.errors?.['maxlength']) {
      this.toastr.error('Driving License Number cannot exceed 16 characters.');
    }

    // DL Valid Till
    if (validationForm.get('DlVaildTill')?.errors?.['required']) {
      this.toastr.error('Driving License Valid Till date is required.');
    }

    // Date of Birth As DL
    if (validationForm.get('DobAsDL')?.errors?.['required']) {
      this.toastr.error('Date of Birth as per DL is required.');
    }

    // DL Attachment
    if (validationForm.get('DlAttach')?.errors?.['required']) {
      this.toastr.error('Driving License Attachment is required.');
    }
  }
}


ngOnInit(): void {
}

saveIdentitydata() {
 
  const identityDetails = {
    createdBy: "1",
    // updatedBy: "1",
    aadhaarNo: this.validationForm.value.AadhaarNo,
    nameAsAadhaar: this.validationForm.value.NameAsAadhaar,
    dobAsAadhaar: this.validationForm.value.DobAsAadhaar,
    aadhaarAttach: this.validationForm.value.AadhaarAttach,
    panNo: this.validationForm.value.PanNo,
    nameAsPan: this.validationForm.value.NameAsPan,
    dobAsPan: this.validationForm.value.DobAsPan,
    panAttach: this.validationForm.value.PanAttach,
    passportNo: this.validationForm.value.PassportNo,
    passportType: this.validationForm.value.PassportType,
    passportVaildTill: this.validationForm.value.PassportVaildTill,
    passportAttach: this.validationForm.value.PassportAttach,      
    dlNo: this.validationForm.value.DlNo,      
    dlVaildTill: this.validationForm.value.DlVaildTill,      
    dobAsDL: this.validationForm.value.DobAsDL,      
    dlAttach: this.validationForm.value.DlAttach,      
  };  

  this.employeeService.saveEmpIdentityDetail(identityDetails).subscribe(
  () => {
    this.toastr.success('Identity added');
    this.validationForm.reset()
    this.validationForm.get('DobAsAadhaar')?.setValue('')
    this.validationForm.get('DobAsPan')?.setValue('')
    this.validationForm.get('PassportVaildTill')?.setValue('')
    this.validationForm.get('DlVaildTill')?.setValue('')
    this.validationForm.get('DobAsDL')?.setValue('')


  },
  (error) => {
    console.error(error);
    this.toastr.error('Something went wrong while saving the Identity details');

}
);
}
}