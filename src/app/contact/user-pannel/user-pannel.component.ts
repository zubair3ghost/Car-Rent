
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-pannel',
  templateUrl: './user-pannel.component.html',
  styleUrls: ['./user-pannel.component.scss']
})
export class UserPannelComponent implements OnInit {

  profileImage: string = '';
  frontImage: string = '';
  backImage: string = '';

  constructor(
    private http: HttpService,
    public userService: UserService
  ) { }

  // This method is called when the first file input changes
  onFileSelected2(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.frontImage = e.target.result;
        const formData = new FormData();
        formData.append('image', file);
    this.http.singleUpload(formData).subscribe((res:any)=>{
      const { data } = res;
          if(data) this.frontImage = data;

      
    })

      };
      reader.readAsDataURL(file);
    }
  }

  // This method is called when the second file input changes
  onFileSelected3(event: any): void {
    const file = event.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.backImage = e.target.result;
        const formData = new FormData();
        formData.append('image', file);
    this.http.singleUpload(formData).subscribe((res:any)=>{
      const { data } = res;
      if(data) this.backImage = data;
      
    })

      };
      reader.readAsDataURL(file);
    }
  }

  // This method is called when the third file input changes
  profileImageUrl: string = '';

handleUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const formData = new FormData();
            formData.append('image', file);
        this.http.singleUpload(formData).subscribe((res:any)=>{
          const { data } = res;
          if(data) this.profileImage = data;        
        })
            
           
        };
        reader.readAsDataURL(file);
    }
}


  // This method is called when the form is submitted
  pannelform(val: any){
    console.log("pennel form is working", val);

    // Add the file data to the form data object
    val.frontImage = this.frontImage;
    val.backImage = this.backImage;
    val.profileImage = this.profileImage;
    console.log(val);
    
    // Send the data to the createProfile method of HttpService
    this.http.createProfile(val).subscribe((res) => {
      console.log(res, "here is the response of the profile image api");
    });
  }

  ngOnInit(): void {
   
  }




}




// pannelform(val: any): void {
//   console.log("pennel form is working", val);

//   // Add the file data to the form data object
//   val.frontImage = this.frontImage;
//   val.backImage = this.backImage;
//   val.profileImage = this.profileImage;
//   console.log(val);
  
//   // Send the data to the createProfile method of HttpService
//   this.http.createProfile(val).subscribe((res) => {
//     console.log(res, "here is the response of the profile image api");
//   });
// }