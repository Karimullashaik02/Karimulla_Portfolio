import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karimullaPortfolio';
  form: FormGroup = this.fb.group({
    from_name:'',
    to_name:'Karimulla Shaik',
    from_email:'', 
    subject:'',
    moblieno:'',
    message:'',

  });
  valform!: FormGroup;
  

  constructor( private fb: FormBuilder){

  }

  ngOnInit(){
    this.valform = this.fb.group({
      from_name:['',Validators.required],
      from_email:['',[Validators.required,Validators.email]],
      subject:['',Validators.required],
    })
  }

  async send(){
    emailjs.init('uPTRxGpBQldezFsPS');
    let response = await emailjs.send("service_lkfxaed","template_isu5i0i",{
      from_name: this.form.value.from_name,
      to_name:this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      moblieno: this.form.value.moblieno,
      message: this.form.value.message,
  });
  alert("Mail has been sent. Thank You for your mail."
  );
  this.form.reset();


  }
}
