import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';


interface product{
  id:number,
  productName:string,
  productPrice:number,
  description:string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p:any;
productDetails : product [] = [];
prdForm !: FormGroup;
btnStatus : boolean = true;
prdFormObject !: product;
currentUpdateId :number = 0;
  

constructor(private apiService:HttpService , private fb:FormBuilder) { }

ngOnInit(): void {

this.initializeForm(); 
this.getProductDetails();

}

initializeForm()
{
   this.prdForm = this.fb.group({
    id : [''],    
    productName:['', Validators.required],
    productPrice:[''],
    description:['']
   })
}



get id() { return this.prdForm.get('id') as FormControl }  
get productName() { return this.prdForm.get('productName') as FormControl }  
get productPrice() { return this.prdForm.get('productPrice') as FormGroup }  
get description() { return this.prdForm.get('description') as FormControl }


//get Product Details:
getProductDetails(){
  this.apiService.getData().subscribe((res:any)=>{
   this.productDetails = res;
  },(err)=>console.log(err))
}


//delete Product:
deleteProduct(id:any){
  if(window.confirm("do you want to delete Product:"+id +" ?"))
  {  
  this.apiService.deleteData(id).subscribe((res)=>{
    if(res)
        {
          alert("product get deleted.! ")
          this.getProductDetails();
        }
      },(error)=> {alert("Error while deleting data."+error)
    })
  }
}

//submit Form:
submitForm(){

  if(this.prdForm.valid)
  {
    this.prdFormObject = this.prdForm.value;
    
    this.apiService.postData(this.prdFormObject).subscribe((res) => {
      if(res instanceof Object)
      {            
        alert("data saved successfully!");
        this.getProductDetails();
        this.prdForm.reset();
      }
    },
    (error)=> {
      alert("Error while submiting nestedRF:"+ JSON.stringify(error));
    })      
  }

}

//patch values:
pathFormValues(prod:any)
{
  if(prod != null)
    {
      this.btnStatus =false;
      this.prdForm.patchValue(prod);
      this.currentUpdateId = prod.id;
    }
}

//update Form:
UpdateForm(){
  if(this.prdForm.valid)
  {
     this.prdFormObject = this.prdForm.value;

    // const params = new HttpParams()
    //               .set('id', this.currentUpdateId)    
    
    this.apiService.putData(this.currentUpdateId, this.prdFormObject).subscribe((res) => {
      if(res instanceof Object)
      {            
        alert("data Updated successfully!");
        this.getProductDetails();
        this.prdForm.reset();
        this.btnStatus = true;
      }
    },
    (error)=> {
      alert("Error while submiting nestedRF:"+ JSON.stringify(error));
    })      
  }

 }


}
