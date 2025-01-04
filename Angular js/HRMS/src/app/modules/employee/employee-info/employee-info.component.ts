import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { SkillModalComponent } from '../skill-modal/skill-modal.component';
// import { LangModalComponent } from '../lang-modal/lang-modal.component';
//import { WorkexpModalComponent } from '../workexp-modal/workexp-modal.component';
// import { CertModalComponent } from '../cert-modal/cert-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EmployeeServiceService } from '../../employee/employee-service/employee-service.service';
import { Subject } from 'rxjs';


//#region LISTING INTERFACE IMPORTS
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { LanguageComponent } from '../language/language.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';

// DYNAMIC POPUP MODEL IMPORT
import educationInterface, { certApiInterface, certInterface, langInterface, skillInterface, workExpApiInterface, workExpInterface, educationApiInterface } from 'src/app/shared/models/employeelist';

// API LIST MODEL IMPORT
import { languageApiInterface } from 'src/app/shared/models/employeelist';
//#endregion


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent {
  dtTrigger: Subject<any> = new Subject<any>()

  isMainDropdownActive: boolean = false;

  skillModalRef: MdbModalRef<SkillsComponent> | null = null;
  langModalRef: MdbModalRef<LanguageComponent> | null = null;
  workExpModalRef: MdbModalRef<WorkExperienceComponent> | null = null;
  certModalRef: MdbModalRef<CertificationsComponent> | null = null;
  educationModalRef: MdbModalRef<EducationComponent> | null = null;

  skillsArr: skillInterface[] = []
  workExpArr: workExpInterface[] = []
  langArr: langInterface[] = []
  certArr: certInterface[] = []
  educationArr: educationInterface[] = []

  //#region POPUP API LISTS
  langList: Array<languageApiInterface> = []
  certList: Array<certApiInterface> = []
  workExpList: Array<workExpApiInterface> = []
  educationList: Array<educationApiInterface> = []
  //#endregion




  isSkillSelectAll: boolean = false
  isWorkExpSelectAll: boolean = false
  isLangSelectAll: boolean = false
  isCertSelectAll: boolean = false
  isEducationSelectAll: boolean = false


  constructor(private fb: FormBuilder, private modalService: MdbModalService, private employeeApiService: EmployeeServiceService) {
    //#region ASSIGNING VALUES TO LISTS
    this.skillsArr = [
      { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
      { skill: 'Angular', exp: '9', isSelected: false, isDropDownOpen: false },
      { skill: 'MySQL', exp: '9', isSelected: false, isDropDownOpen: false },
      { skill: '.NET', exp: '9', isSelected: false, isDropDownOpen: false },
      { skill: '.NET', exp: '9', isSelected: false, isDropDownOpen: false },
      { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    ]

    // this.workExpArr = [
    //   {
    //     company: 'Google',
    //     jobTitle: 'SDE-1',
    //     fromDate: '2019-07-10',
    //     toDate: '2021-10-22',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     company: 'Google',
    //     jobTitle: 'SDE-1',
    //     fromDate: '2019-07-10',
    //     toDate: '2021-10-22',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     company: 'Google',
    //     jobTitle: 'SDE-1',
    //     fromDate: '2019-07-10',
    //     toDate: '2021-10-22',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     company: 'Google',
    //     jobTitle: 'SDE-1',
    //     fromDate: '2019-07-10',
    //     toDate: '2021-10-22',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     company: 'Google',
    //     jobTitle: 'SDE-1',
    //     fromDate: '2019-07-10',
    //     toDate: '2021-10-22',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    // ]

    // this.langArr = [
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     lang: 'English',
    //     skill: 'Technical writing',
    //     fluency: 'Speaking',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    // ]

    // this.certArr = [
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    //   { skill: 'Communication', exp: '9', isSelected: false, isDropDownOpen: false },
    // ]

    // this.educationArr = [
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    //   {
    //     level: 'Graduation',
    //     institute: 'NSUT',
    //     major: 'Bachelor of Technology',
    //     year: '2010',
    //     score: '8.3',
    //     startDate: '2006-07-01',
    //     endDate: '2010-07-01',
    //     isSelected: false,
    //     isDropDownOpen: false
    //   },
    // ]
    //#endregion

  }
  ngOnInit() {
    this.getAllLang()
    this.getAllCertifications()
    this.getAllWorkExp()
    this.getAllEducation()
  }

  onMainDropBtnBlur() {
    setTimeout(() => {
      this.isMainDropdownActive = false;
    }, 150)
  }

  onTableDropBtnBlur(ind, arr) {
    setTimeout(() => {
      arr[ind].isDropDownOpen = false;
    }, 150)
  }

  //#region MODAL METHODS
  openSkillModal() {
    this.skillModalRef = this.modalService.open(SkillsComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: false
      }
    })
  }

  openLangModal() {
    this.langModalRef = this.modalService.open(LanguageComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: false,
        langList: this.langList
      }
    })
  }

  openWorkExpModal() {
    this.workExpModalRef = this.modalService.open(WorkExperienceComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: false
      }
    })
  }

  openCertModal() {
    this.certModalRef = this.modalService.open(CertificationsComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: false
      }
    })
  }

  openEducationModal() {
    this.educationModalRef = this.modalService.open(EducationComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: false
      }
    })
  }

  //#region EDIT MODAL SECTION
  openEditSkillModal(ind: any) {
    this.skillModalRef = this.modalService.open(SkillsComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: true,
        formValues: this.skillsArr[ind]
      }
    })
  }

  openEditLangModal(ind: any) {
    this.langModalRef = this.modalService.open(LanguageComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: true,
        formValues: this.langArr[ind]
      }
    })
  }

  openEditWorkExpModal(ind: any) {
    this.workExpModalRef = this.modalService.open(WorkExperienceComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: true,
        formValues: this.workExpArr[ind]
      }
    })
  }

  openEditCertModal(ind: any) {
    this.certModalRef = this.modalService.open(CertificationsComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: true,
        formValues: this.certArr[ind]
      }
    })
  }

  openEditEducationModal(ind: any) {
    this.educationModalRef = this.modalService.open(EducationComponent, {
      modalClass: 'modal-dialog-centered modal-lg',
      data: {
        isEdit: true,
        formValues: this.educationArr[ind]
      }
    })
  }
  //#endregion

  //#endregion

  //#region API LIST RETRIEVAL METHODS : added by Vaibhav 30/04/2024
  getAllLang() {
    this.employeeApiService.getAllDepartments('Language')
      .subscribe(res => {
        this.langList = res
        this.dtTrigger.next(null);
        console.log(this.langList);
        this.langList.forEach(language => {
          this.langArr.push({
            isDropDownOpen: false,
            isSelected: false,
            lang: language.languageName,
            fluency: language.fluencyLevel,
            skill: "string"
          })
        })
      })
  }

  getAllCertifications() {
    this.employeeApiService.getAllDepartments('Certification')
      .subscribe(res => {
        this.certList = res
        this.dtTrigger.next(null);
        console.log(this.langList);
        this.certList.forEach(certificate => {
          this.certArr.push({
            isDropDownOpen: false,
            isSelected: false,
            skill: certificate.skill,
            exp: certificate.yearOfExperience
          })
        })
      })
  }

  getAllWorkExp() {
    this.employeeApiService.getAllDepartments('EmpWorkExperience')
      .subscribe(res => {
        this.workExpList = res
        this.dtTrigger.next(null);
        console.log(this.workExpList);
        this.workExpList.forEach(workExp => {
          this.workExpArr.push({
            isDropDownOpen: false,
            isSelected: false,
            company: workExp.company,
            jobTitle: workExp.jobTitle,
            fromDate: workExp.fromDate,
            toDate: workExp.toDate
          })
        })
      })
  }

  getAllEducation() {
    this.employeeApiService.getAllDepartments('EmpEducation')
      .subscribe(res => {
        this.educationList = res
        this.dtTrigger.next(null);
        console.log(this.educationList);
        this.educationList.forEach(education => {
          this.educationArr.push({
            isDropDownOpen: false,
            isSelected: false,
            level: education.level,
            institute: education.institute,
            major: education.specialization,
            year: education.year,
            score: education.score,
            startDate: education.startDate,
            endDate: education.endDate,
          })
        })
        console.log
      })
  }
  //#endregion

  //#region LIST SELECT ALL METHODS
  selectAllSkills() {
    this.isSkillSelectAll = !this.isSkillSelectAll

    this.skillsArr.forEach(skill => {
      skill.isSelected = this.isSkillSelectAll
    })
  }

  selectAllLang() {
    this.isLangSelectAll = !this.isLangSelectAll

    this.langArr.forEach(lang => {
      lang.isSelected = this.isLangSelectAll
    })
  }

  selectAllWorkExp() {
    this.isWorkExpSelectAll = !this.isWorkExpSelectAll

    this.workExpArr.forEach(workExp => {
      workExp.isSelected = this.isWorkExpSelectAll
    })
  }

  selectAllCert() {
    this.isCertSelectAll = !this.isCertSelectAll

    this.certArr.forEach(cert => {
      cert.isSelected = this.isCertSelectAll
    })
  }

  selectAllEducation() {
    this.isEducationSelectAll = !this.isEducationSelectAll

    this.educationArr.forEach(education => {
      education.isSelected = this.isEducationSelectAll
    })
  }
  //#endregion

  

  mainDropdownClick() {
    if (this.isMainDropdownActive) {
      this.isMainDropdownActive = false
    }
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
 }

}