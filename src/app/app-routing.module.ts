import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddxpenseComponent } from './addxpense/addxpense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditxpenseComponent } from './editxpense/editxpense.component';
import { RegisterComponent } from './register/register.component';
import { XpenselistComponent } from './xpenselist/xpenselist.component';

const routes: Routes = [{

  path:'',
  component:RegisterComponent,

},
{
  path:'dashboard',
  component:DashboardComponent,  
  children:[
    {
      path:'',
      component:XpenselistComponent
    },
    {
      path:'addxpense',
      component:AddxpenseComponent
    },
    {
      path:'editxpense/:id',
      component:EditxpenseComponent
    }
   
   
    
  ]
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
