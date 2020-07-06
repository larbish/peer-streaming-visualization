import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule, AlertModule.forRoot()],
	declarations: [LoginComponent],
	providers: [LoginService],
})
export class LoginModule {}
