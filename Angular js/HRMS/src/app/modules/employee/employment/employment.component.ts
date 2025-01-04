import { Component } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { departmentList } from 'src/app/shared/models/employeelist';
import { designationList } from 'src/app/shared/models/employeelist';
import { roleList } from 'src/app/shared/models/employeelist';
import { workShiftList } from 'src/app/shared/models/employeelist';
import { workTypeList } from 'src/app/shared/models/employeelist';
import { officeList } from 'src/app/shared/models/employeelist';
import { Subject } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityServiceService } from 'src/app/shared/service/Utility/utility-service.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})


export class EmploymentComponent {
  addEmployeeForm: FormGroup;
  // addLoginDetailsForm: FormGroup;
  loginForm:FormGroup;

  date = new Date()
  showForm: boolean = false;
  enableEmployeeID: boolean = false;
  departmentList: Array<departmentList> = []
  roleList: Array<roleList> = []
  workShiftList: Array<workShiftList> = []
  workTypeList: Array<workTypeList> = []
  officeList: Array<officeList> = []
  designationList: Array<designationList> = []
  dtTrigger: Subject<any> = new Subject<any>();

  deptInputVal: String | null = null;

  constructor(private employeeApiService: EmployeeServiceService,private utilityService : UtilityServiceService, private toastr: ToastrService) {

    this.loginForm = new FormGroup({
      userName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      workShift: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      password: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      confirmPassword: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      superVisor: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      role: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
     
    });
    this.addEmployeeForm = new FormGroup({
      officeLocation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeeStatus: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      probEndDate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      dateOfPermanency: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      department: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      designation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      supervisor: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeeId: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      role: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      workShift: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      workType: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });

    // this.addLoginDetailsForm = new FormGroup({
    //   username: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    //   password: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    //   confirmPassword: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    //   essRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    //   supRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    //   adminRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    // })


  }

  ngOnInit() {
    this.getDepartmentList()
    this.getRoleList()
    this.getWorkShiftList()
    this.getOfficeList()
    this.getWorkTypeList()
  }

  toggleForm(event: Event) {
    this.showForm = (event.target as HTMLInputElement).checked;
  }

  validateConfirmPassword(addLoginDetailsForm: FormGroup) {
    if (addLoginDetailsForm.value.password !== addLoginDetailsForm.value.confirmPassword || addLoginDetailsForm.value.confirmPassword === '') {
      addLoginDetailsForm.controls['confirmPassword'].setErrors({ mustMatch: true, require: true });
      return;
    } else {
      addLoginDetailsForm.controls['confirmPassword'].setErrors(null);
    }
  }

  //#region Add Employee Form Getters
  get officeLocation(): AbstractControl {
    return this.addEmployeeForm.get('officeLocation')!;
  }
  get employeeStatus(): AbstractControl {
    return this.addEmployeeForm.get('employeeStatus')!;
  }
  get probEndDate(): AbstractControl {
    return this.addEmployeeForm.get('probEndDate')!;
  }
  get dateOfPermanency(): AbstractControl {
    return this.addEmployeeForm.get('dateOfPermanency')!;
  }
  get department(): AbstractControl {
    return this.addEmployeeForm.get('department')!;
  }
  get designation(): AbstractControl {
    return this.addEmployeeForm.get('designation')!;
  }
  get supervisor(): AbstractControl {
    return this.addEmployeeForm.get('supervisor')!;
  }
  get employeeId(): AbstractControl {
    return this.addEmployeeForm.get('employeeId')!;
  }
  get role(): AbstractControl {
    return this.addEmployeeForm.get('role')!;
  }
  get workShift(): AbstractControl {
    return this.addEmployeeForm.get('workShift')!;
  }
  get workType(): AbstractControl {
    return this.addEmployeeForm.get('workType')!;
  }
  //#endregion



  get userName(): AbstractControl {
    return this.loginForm.get('userName')!;
  }
  // get workShift(): AbstractControl {
  //   return this.loginForm.get('workShift')!;
  // }
  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }
  get confirmPassword(): AbstractControl {
    return this.loginForm.get('confirmPassword')!;
  }
  get superVisor(): AbstractControl {
    return this.loginForm.get('superVisor')!;
  }
   get roles(): AbstractControl {
    return this.loginForm.get('role')!;
   }
    isChecked : boolean =false;
   showTabs3: boolean = false;
   toggleTabs3() {
    this.showTabs3 = !this.showTabs3;
    this.isChecked = !this.isChecked; 
  }
   handleFormSubmission(loginForm: FormGroup){
    console.log("hello")
    loginForm.markAllAsTouched()
    if(loginForm.valid){
      let formObj = {
        "isActive": true,
        "createdBy": "string",
        "createdOn": "2024-03-17T11:17:14.984Z",
        "updatedBy": "string",
        "updatedOn": "2024-03-17T11:17:14.984Z",
        "userId": 0,
        "userName": loginForm.value.userName,
        "email":loginForm.value.userName,
        "phoneNumber":loginForm.value.userName,
        "userType":3,
        // "workShift": loginForm.value.workShift,
        "password": loginForm.value.password,
        "fullName": loginForm.value.userName,
        // "confirmPassword": loginForm.value.confirmPassword,
        "securityStamp": loginForm.value.superVisor,
        "roleId": loginForm.value.role
        
      }
  
      console.log(formObj)
  
      this.employeeApiService.createEmployeeLogin(formObj).subscribe((res)=>{
        if(res.statusCode == 403){
          alert(res.message)
        }
      else if(res.statusCode == 200){
        console.log(res);
        this.toastr.success('Form submitted successfully');
      }
      else{
        this.toastr.error('Something went wrong');
      }
      
      })
    }
    else{
      this.toastr.error('Please fill all values');
    }
  }
  




  //#region Add Login Detail Getters
  // get username(): AbstractControl {
  //   return this.addLoginDetailsForm.get('username')!;
  // }
  // get password(): AbstractControl {
  //   return this.addLoginDetailsForm.get('password')!;
  // }
  // get confirmPassword(): AbstractControl {
  //   return this.addLoginDetailsForm.get('confirmPassword')!;
  // }
  // get essRole(): AbstractControl {
  //   return this.addLoginDetailsForm.get('essRole')!;
  // }
  // get supRole(): AbstractControl {
  //   return this.addLoginDetailsForm.get('supRole')!;
  // }
  // get adminRole(): AbstractControl {
  //   return this.addLoginDetailsForm.get('adminRole')!;
  // }


  //#endregion

  //#region GET ALL DEPARTMENTS : added by Vaibhav : 04/03/2024
  getDepartmentList() {
    this.employeeApiService.getAllDepartments('Department')
      .subscribe(res => {
        this.departmentList = res
        this.dtTrigger.next(null);
        // console.log(this.departmentList);
      })
  }
  //#endregion

  //#region GET ALL ROLES : added by Vaibhav : 11/03/2024
  getRoleList() {
    this.employeeApiService.getAllRoles('Role')
      .subscribe(res => {
        this.roleList = res
        this.dtTrigger.next(null);
      })
  }
  //#endregion

  //#region GET ALL WorkShifts : added by Vaibhav : 19/04/2024
  getWorkShiftList() {
    this.employeeApiService.getAllWorkShifts('WorkShift')
      .subscribe(res => {
        this.workShiftList = res
        this.dtTrigger.next(null);
      })
  }
  //#endregion

  //#region GET ALL WorkTypes : added by Vaibhav : 19/04/2024
  getWorkTypeList() {
    this.employeeApiService.getAllWorkType('WorkType')
      .subscribe(res => {
        this.workTypeList = res
        this.dtTrigger.next(null);
      })
  }
  //#endregion


  preventClose(event: MouseEvent) {
    event.stopPropagation(); 
}

  //#region GET ALL DESIGNATIONS BY DEPARTMENT ID
  getDesignationList(deptId: any) {
    this.employeeApiService.getAllDesig('Designation')
      .subscribe(res => {
        this.designationList = res.filter((desig) => this.filterDesig(desig, parseInt(deptId)))
        this.dtTrigger.next(null);
        // console.log(res.filter((desig) => this.filterDesig(desig, deptId)));
      })
  }

  //#region GET ALL OFFICES
  getOfficeList() {
    this.employeeApiService.getAllOffices('Office')
      .subscribe(res => {
        this.officeList = res
        this.dtTrigger.next(null);
        // console.log(this.officeList);
      })
  }

  // FUNCTION TO FILTER DESIGNATIONS
  filterDesig(desig: any, deptId: any) {
    console.log(desig.deptId == deptId)
    return desig.deptId == deptId
  }

  // FUNCTION TO GET DEPT ID WHEN DEPARTMENT IS SELECTED
  handleDeptInput(event: any) {
    const deptId = event.target.value;
    this.deptInputVal = deptId
    this.getDesignationList(deptId)
  }
  //#endregion

  //#region HANDLE SAVE BUTTON CLICK
  handleSaveBtn(addEmployeeForm: FormGroup) {
    addEmployeeForm.markAllAsTouched()
    if (addEmployeeForm.valid) {
      const form: any = {
        createdBy: "",
        updatedBy: "",
        officeLocation: addEmployeeForm.value.officeLocation,
        probationEndDate: addEmployeeForm.value.probEndDate,
        dateofPermanecy: addEmployeeForm.value.dateOfPermanency,
        department: addEmployeeForm.value.department,
        designation: addEmployeeForm.value.designation,
        supervisor: addEmployeeForm.value.supervisor,
        employeeId: addEmployeeForm.value.employeeId,
        role: addEmployeeForm.value.role,
        workShift: addEmployeeForm.value.workShift,
        workType: addEmployeeForm.value.workType
      };
      console.log({
        formObj: form
      })
      this.employeeApiService.saveAddEmployeeForm(form).subscribe((res) => {
        this.toastr.success('Form submitted successfully');
        this.addEmployeeForm.reset()

      })
    } else {
      // Display specific error messages for each field

      // Office Location
      if (addEmployeeForm.get('officeLocation')?.errors?.['required']) {
        this.toastr.error('Office Location is required.');
      }

      // Probation End Date
      if (addEmployeeForm.get('probEndDate')?.errors?.['required']) {
        this.toastr.error('Probation End Date is required.');
      }

      // Date of Permanency
      if (addEmployeeForm.get('dateOfPermanency')?.errors?.['required']) {
        this.toastr.error('Date of Permanency is required.');
      }

      // Department
      if (addEmployeeForm.get('department')?.errors?.['required']) {
        this.toastr.error('Department is required.');
      }

      // Designation
      if (addEmployeeForm.get('designation')?.errors?.['required']) {
        this.toastr.error('Designation is required.');
      }

      // Supervisor
      if (addEmployeeForm.get('supervisor')?.errors?.['required']) {
        this.toastr.error('Supervisor is required.');
      }

      // Employee ID
      if (addEmployeeForm.get('employeeId')?.errors?.['required']) {
        this.toastr.error('Employee ID is required.');
      }

      // Role
      if (addEmployeeForm.get('role')?.errors?.['required']) {
        this.toastr.error('Role is required.');
      }

      // Work Shift
      if (addEmployeeForm.get('workShift')?.errors?.['required']) {
        this.toastr.error('Work Shift is required.');
      }

      // Work Type
      if (addEmployeeForm.get('workType')?.errors?.['required']) {
        this.toastr.error('Work Type is required.');
      }

      // You can also display a generic error message if needed
      this.toastr.error('Fill all values first!');
    }
  }

}
//#endregion