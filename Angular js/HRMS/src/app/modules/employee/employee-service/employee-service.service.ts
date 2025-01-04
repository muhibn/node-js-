
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigurationService } from "src/app/shared/service/http/configuration.service";
import { HttpService } from "src/app/shared/service/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  makePostReq(categoryGroupList: { createdBy: string; updatedBy: string; categoryGroupName: string; categoryGroupIcon: string; remarks: string; isActive: true; categoryGroupId: number; }) {
    throw new Error('Method not implemented.');
  }

  constructor(

    private httpService: HttpService,
    private configuration: ConfigurationService
  ) { }

  getEmpWithId(): Observable<any> {
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )
      //.makeGetReq(payLoad, this.configuration.getEmp)
      .makeGetReq(this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })

      );
  }
  getListEmployee(): Observable<any> {

    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )

      .makeGetReq(this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );

  }

  saveEmpPersonalDetail(empDetails: any): Observable<any> { 
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )

      .makePostReq(empDetails, this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );
  }
  //#region for get employee as per id
  getEmpById(id: number): Observable<any> {
    const apiUrl = `${this.configuration.getEmp}/${id}`;
    return this.httpService
      .makeGetReq(apiUrl)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      )
  }
  //#endregion



  getAddressById(id: number): Observable<any> {
    const apiUrl = `${this.configuration.getAddress}/${id}`;
    return this.httpService
      .makeGetReq(apiUrl)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }

          return res;
        })
      )
  }
  getContactById(id: number): Observable<any> {
    const apiUrl = `${this.configuration.getContact}/${id}`;
    return this.httpService
      .makeGetReq(apiUrl)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }

          return res;
        })
      )
  }

  //#region  GET ALL DEPARTMENTS : GET : /api/Department : added by Vaibhav : 04/03/2024
  getAllDepartments(department: any): Observable<any> {
    return this.httpService
      .makeGetReq(department, this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }
 //#endregion
//#region  GET ALL ROLES : GET : /api/Role : added by Vaibhav : 11/03/2024
getAllRoles(role: any): Observable<any> {
  return this.httpService
    .makeGetReq(role, this.configuration.getEmp)
    .pipe(
      map((res: any) => {
        return res;
      })
    )
}
//#endregion

//#region  GET ALL WORK SHIFTS : GET : /api/WorkShift : added by Vaibhav : 14/03/2024
getAllWorkShifts(workShift: any): Observable<any> {
  return this.httpService
    .makeGetReq(workShift, this.configuration.getEmp)
    .pipe(
      map((res: any) => {
        return res;
      })
    )
}
 //#endregion
//#region GET ALL DESIGNATIONS : GET : /api/designation : added by Vaibhav : 05/03/2024
getAllDesig(designation: any): Observable<any> {
  return this.httpService
    .makeGetReq(designation, this.configuration.getEmp)
    .pipe(map((res: any) => {
      return res
    }))
}
//#endregion

//#region GET ALL OFFICE LOCATIONS : GET : /api/designation : added by Vaibhav : 05/03/2024
getAllOffices(office: any): Observable<any> {
  return this.httpService
    .makeGetReq(office, this.configuration.getEmp)
    .pipe(map((res: any) => {
      return res
    }))
}
//#endregion
//#region SUBMIT EMPLOYMENT FORM : GET : /api/Employment : added by Vaibhav : 15/03/2024
saveAddEmployeeForm(formObj: any) {
  return this.httpService.makePostReq(formObj, this.configuration.employment).pipe(map((res: any) => {
    return res
  }))
}
//#endregion

//#region 
saveEmpcontactDetail(contactDetails: any): Observable<any> { 
  return this.httpService
   .makePostReq(contactDetails, this.configuration.getContact)
  .pipe(
      map((res: any) => {
        console.log(res)
        return res;
      })
    );

} 
//#endregion
//#region 
saveEmpAddressDetail(addressDetails: any): Observable<any> { 
  return this.httpService
   .makePostReq(addressDetails, this.configuration.getAddress)
    .pipe(
      map((res: any) => {
       return res;
      })
 );
 }
//#endregion
//#region Added by Satyam On 20 March 2024
saveEmpIdentityDetail(identityDetails: any): Observable<any> {
  return this.httpService
   .makePostReq(identityDetails, this.configuration.getIdentity)
    .pipe(
      map((res: any) => {
       return res;
      })
 );

 }
//#endregion

//#region added by saubhagya On 21 March 2024
getJobById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.getJob}/${id}`;
  // console.log(apiUrl);
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
  )
}

getDepartmentById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.getDepartment}/${id}`;
  // console.log(apiUrl);
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
  )
}
getDesignationById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.getDesignation}/${id}`;
  // console.log(apiUrl);
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
  )
}


getIdentityById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.getIdentity}/${id}`;
  // console.log(apiUrl);
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
  )
}

 
getEducationById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.getEducation}/${id}`;
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
 )
 }
//#endregion
//#region {Family Component} (Satyam sagar 21/03/2024)
saveEmpFamilyDetail(familyDetails: any): Observable<any> {
  return this.httpService
   .makePostReq(familyDetails, this.configuration.getFamily)
    .pipe(
      map((res: any) => {
       return res;
      })
    );
}
//#endregion Satyam sagar 21/03/2024

//#region {Employe login} (Saubhag 03/04/2024)
createEmployeeLogin(formObj:any){
  return this.httpService
  // .makeGetReq(this.configuration.getEmp, payLoad )
  .makePostReqUser(formObj, this.configuration.getUser)
  .pipe(
    map((res: any) => {
      const responseBody = res.body;
      if (res.status == "SUCCESS") {
        return res;
      } else {
        return res;
      }
      // return res;
   })
 );
}
//#endregion Saubhag 03/04/2024
//#region Added by Satyam On 13 APR 2024
saveEmpBankDetail(bankDetails: any): Observable<any> {
  return this.httpService
   .makePostReq(bankDetails, this.configuration.getEmpBankDetail)
    .pipe(
      map((res: any) => {
       return res;
      })
 );

}
//#endregion

getFamilyById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.Family}/${id}`;
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
    })
  )
}


getEmploymentById(id: number): Observable<any> {
  const apiUrl = `${this.configuration.Employment}/${id}`;
  return this.httpService
  .makeGetReq(apiUrl)
  .pipe(
    map((res: any) => {
      //const responseBody = res.body;
      // if (res.status == "SUCCESS") {
      //   return res;
      // } else {
      //   return res.errorCode;
      // }
      
      return res;
 })
 )
}
 
//#region emp bank (satyam sagar 19 April 2024)
getAllEployeeBank(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.getBank)
    .pipe(
      map((res: any) => {
        return res;
      })
    )
}
//#endregion

//#region emp family (satyam sagar 19 April 2024)
getAllEmpfamily(): Observable<any> {
  return this.httpService
    .makeGetReq(this.configuration.family)
    .pipe(
      map((res: any) => {
        return res;
      })
    )
}
//#endregion

//#region GET ALL WorkTypes : GET : /api/WorkType : added by Vaibhav : 19/04/2024
getAllWorkType(designation: any): Observable<any> {
  return this.httpService
    .makeGetReq(designation, this.configuration.getWorkType)
    .pipe(map((res: any) => {
      return res
    }))
}
//#endregion

//#region Emplotee Profile Added by saubhagy on 29 April 2024
updateEmployeeDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getEmp}/${id}`;

    return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
      return res
    }))
}

updateAddressDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getAddress}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
  }))
}
updatefamilyDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getFamily}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
  }))
}

updateidentityDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getIdentity}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
  }))
}

updatejobDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getJob}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
  }))
}

updateeducationDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getEducation}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
  }))
}

updateContactDetail(formObj: any,id: any) {
  const apiUrl = `${this.configuration.getContact}/${id}`;
  return this.httpService.makePutReq(formObj, apiUrl).pipe(map((res: any) => {
    return res
 }))
}

  //#region SAVE NEW WORK EXPERIENCE : Added by Vaibhav on 03/05/2024
  saveWorkExpData(workExpDetails: any): Observable<any> {
    console.log('from service')
    console.log(workExpDetails)
    return this.httpService
      .makePostReq(workExpDetails, this.configuration.addEmpWorkExperience)
      .pipe(
        map((res: any) => {
          console.log('response from saveWorkExp')
          console.log(res)
          return res;
        })
      );

  }
//#endregion

  //#region SAVE NEW LANGUAGE : Added by Vaibhav on 03/05/2024
  saveLanguageDetail(langDetails: any): Observable<any> {
    console.log('from service')
    console.log(langDetails)
    return this.httpService
      .makePostReq(langDetails, this.configuration.addLanguage)
      .pipe(
        map((res: any) => {
          console.log('response from saveLanguage')
          console.log(res)
          return res;
        })
      );

  }
  //#endregion
  
  //#region SAVE NEW CERTIFICATE : Added by Vaibhav on 03/05/2024
  saveCertDetails(certDetails: any): Observable<any> {
    console.log('from service')
    console.log(certDetails)
    return this.httpService
      .makePostReq(certDetails, this.configuration.addCertificate)
      .pipe(
        map((res: any) => {
          console.log('response from saveWorkExp')
          console.log(res)
          return res;
        })
      );

  }
  //#endregion
  //#region SAVE NEW EDUCATION   : Added by Vaibhav on 03/05/2024
  saveEducationDetails(educationDetails: any): Observable<any> {
    return this.httpService
      .makePostReq(educationDetails, this.configuration.addEducation)
      .pipe(
        map((res: any) => {
          return res;
        })
      );

  }
  //#endregion
}

