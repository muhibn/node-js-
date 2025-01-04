import { Component } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { certApiInterface } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from '../employee-service/employee-service.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  isEdit: boolean | null = null;
  formValues: any | null = null;
  certForm: FormGroup;

  constructor(public modalRef: MdbModalRef<CertificationsComponent>, private employeeApiService: EmployeeServiceService) {
    this.certForm = new FormGroup({
      skill: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      exp: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      remarks: new FormControl(null, { validators: Validators.required, updateOn: 'change' })
    })
  }

  ngOnInit() {}

  //#region FORM GETTERS
  get skill(): AbstractControl {
    return this.certForm.get('skill')!;
  }
  get exp(): AbstractControl {
    return this.certForm.get('exp')!;
  }
  get remarks(): AbstractControl {
    return this.certForm.get('remarks')!;
  }
  //#endregion

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  //#region SUBMIT LANGUAGE DETAILS : added by Vaibhav 30/05/2024
  saveCertForm(formObj: FormGroup) {
    if (formObj.valid) {
      formObj.markAllAsTouched()
      let data = {
        createdOn: "2024-05-04T11:01:32.672Z",
        createdBy: "string",
        updatedBy: "string",
        updatedOn: "2024-05-04T11:01:32.672Z",
        skill: formObj.value.skill,
        yearOfExperience: formObj.value.exp,
        attachment: "string",
        remarks: formObj.value.remarks,
        certificationIds: [
          0
        ]
      }

      console.log(data)

      this.employeeApiService.saveCertDetails(data).subscribe((res) => {
        if (res == true) {
          alert('Form submitted succesfully')
        }
        else {
          alert('Something went wrong')
          console.log(res)
        }
      })
    }
    else {
      alert('Please fill all details')
    }
  }
//#endregion
}