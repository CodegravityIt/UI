import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {IncentiveComponent} from './incentive/incentive.component';
import {MarketingComponent} from './marketing/marketing.component';
import {PlacementComponent} from './placement/placement.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { AddEditConsulComponent } from './consultant/add-edit-consul/add-edit-consul.component';
import { AddEditMarketComponent } from './marketing/add-edit-market/add-edit-market.component';
import { AddEditPlacementComponent } from './placement/add-edit-placement/add-edit-placement.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AddEditSubmissionComponent } from './submissions/add-edit-submission/add-edit-submission.component';
import { ShowsubmissionsComponent } from './submissions/showsubmissions/showsubmissions.component';
import {SubmissiondetailsComponent} from './submissions/submissiondetails/submissiondetails.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {TestgridComponent} from './testgrid/testgrid.component'
import {MatPaginator} from '@angular/material/paginator';
import { ShowIncentiveComponent } from './incentive/show-incentive/show-incentive.component';
import { AddEditIncentiveComponent } from './incentive/add-edit-incentive/add-edit-incentive.component';
import { IncentivereportComponent } from './incentive/incentivereport/incentivereport.component';



const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'consultant',component:ConsultantComponent},
  {path:'incentive',component:ShowIncentiveComponent},
  {path:'market',component:MarketingComponent},
  {path:'placement',component:PlacementComponent},
  {path:'addemployee',component:AddEditEmpComponent},
  {path:'addconsult',component:AddEditConsulComponent},
  {path:'addMarketing',component:AddEditMarketComponent},
  {path:'addplacement',component:AddEditPlacementComponent},
  {path:'submission',component:ShowsubmissionsComponent},
  {path:'addsubmission',component:AddEditSubmissionComponent},
  {path:'submissiondet',component:SubmissiondetailsComponent},
  {path:'test',component:TestgridComponent},
  {path:'newincentive',component:AddEditIncentiveComponent},
  {path:'incentivereport',component:IncentivereportComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
