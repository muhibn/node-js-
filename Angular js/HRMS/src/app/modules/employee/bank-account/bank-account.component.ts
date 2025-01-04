import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { bankList, empbankList } from 'src/app/shared/models/employeelist';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  validationForm!: FormGroup;
  showForm: boolean = false;

  bankList: Array<bankList> = [];
  bankAccountId: string | null = null;

  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      BankName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      IfscCode: new FormControl(null, { validators: [Validators.required, Validators.maxLength(11), Validators.pattern("^[A-Za-z0-9]+$")], updateOn: 'change' }),
      AccountNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(17), Validators.pattern("^[0-9]+$")], updateOn: 'change' }),
      AccountHolderName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(35), Validators.pattern("^[A-Za-z. ]+$")], updateOn: 'change' }),
      BranchName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(25), Validators.pattern("^[A-Za-z ]+$")], updateOn: 'change' }),
      BankLocation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Attachment: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),

    });
  }

  get BankName(): AbstractControl {
    return this.validationForm.get('BankName')!;
  }
  get IfscCode(): AbstractControl {
    return this.validationForm.get('IfscCode')!;
  }
  get AccountNo(): AbstractControl {
    return this.validationForm.get('AccountNo')!;
  }
  get AccountHolderName(): AbstractControl {
    return this.validationForm.get('AccountHolderName')!;
  }
  get BranchName(): AbstractControl {
    return this.validationForm.get('BranchName')!;
  }
  get BankLocation(): AbstractControl {
    return this.validationForm.get('BankLocation')!;
  }
  get Attachment(): AbstractControl {
    return this.validationForm.get('Attachment')!;
  }

  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (validationForm.valid) {
      this.saveBankDetails();
    } else {
      // Display specific error messages for each field
  
      // Bank Name
      if (validationForm.get('BankName')?.errors?.['required']) {
        this.toastr.error('Bank Name is required.');
      }
  
      // IFSC Code
      if (validationForm.get('IfscCode')?.errors?.['required']) {
        this.toastr.error('IFSC Code is required.');
      } else if (validationForm.get('IfscCode')?.errors?.['maxlength']) {
        this.toastr.error('IFSC Code cannot exceed 11 characters.');
      } else if (validationForm.get('IfscCode')?.errors?.['pattern']) {
        this.toastr.error('IFSC Code must contain only alphanumeric characters.');
      }
  
      // Account No
      if (validationForm.get('AccountNo')?.errors?.['required']) {
        this.toastr.error('Account Number is required.');
      } else if (validationForm.get('AccountNo')?.errors?.['maxlength']) {
        this.toastr.error('Account Number cannot exceed 17 characters.');
      } else if (validationForm.get('AccountNo')?.errors?.['pattern']) {
        this.toastr.error('Account Number must contain only numbers.');
      }
  
      // Account Holder Name
      if (validationForm.get('AccountHolderName')?.errors?.['required']) {
        this.toastr.error('Account Holder Name is required.');
      } else if (validationForm.get('AccountHolderName')?.errors?.['maxlength']) {
        this.toastr.error('Account Holder Name cannot exceed 35 characters.');
      } else if (validationForm.get('AccountHolderName')?.errors?.['pattern']) {
        this.toastr.error('Account Holder Name must contain only alphabets and periods.');
      }
  
      // Branch Name
      if (validationForm.get('BranchName')?.errors?.['required']) {
        this.toastr.error('Branch Name is required.');
      } else if (validationForm.get('BranchName')?.errors?.['maxlength']) {
        this.toastr.error('Branch Name cannot exceed 25 characters.');
      } else if (validationForm.get('BranchName')?.errors?.['pattern']) {
        this.toastr.error('Branch Name must contain only alphabets and spaces.');
      }
  
      // Bank Location
      if (validationForm.get('BankLocation')?.errors?.['required']) {
        this.toastr.error('Bank Location is required.');
      }
  
      // Attachment
      if (validationForm.get('Attachment')?.errors?.['required']) {
        this.toastr.error('Attachment is required.');
      }

      // You can also display a generic error message if needed
      this.toastr.error('Fill all values first!');

    }
  }
  

  ngOnInit(): void {
    this.getBankList();
  }

  saveBankDetails() {
    debugger
    const bankDetails = {
      createdBy: "1",
      bankName: this.validationForm.value.BankName.trim(),
      ifscCode: this.validationForm.value.IfscCode.trim(),
      accountNo: this.validationForm.value.AccountNo.trim(),
      accountHolderName: this.validationForm.value.AccountHolderName.trim(),
      branchName: this.validationForm.value.BranchName.trim(),
      bankLocation: this.validationForm.value.BankLocation.trim(),
      attachment: this.validationForm.value.Attachment.trim(),
    };
    this.employeeService.saveEmpBankDetail(bankDetails).subscribe(
      () => {
        this.toastr.success('Bank added');
        this.validationForm.reset()

      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the Bank details');
      }
    );
  }

    //Bank Dropdown/
    getBankList() {
      this.employeeService.getAllEployeeBank()
        .subscribe(res => {
          this.bankList = res;
        })
    }
    handleBankInput(event: any) {
      const deptId = event.target.value;
      console.log(typeof (deptId))
    }
    ////////////////////////////////////////////
}