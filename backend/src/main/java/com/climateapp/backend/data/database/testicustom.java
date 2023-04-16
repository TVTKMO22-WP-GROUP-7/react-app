package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "testicustom")
public class testicustom {

 @Id
 @Column (name = "id")
 public Integer id;

 @Column (name = "userID")
 public String userID;


 @Column (name= "textv1")
 public String textv1;

 @Column (name= "textv2")
 public String textv2;

 @Column (name= "textv3")
 public String textv3;

 @Column (name= "textv4")
 public String textv4;

 @Column (name= "textv5")
 public String textv5;

 @Column (name= "visu1")
 public boolean visu1;

 @Column (name= "visu2")
 public boolean visu2;

 @Column (name= "visu3")
 public boolean visu3;

 @Column (name= "visu4")
 public boolean visu4;

 @Column (name= "visu5")
 public boolean visu5;


 public testicustom(){

 }

 public testicustom(Integer id, String userID, String textv1, String textv2, String textv3, String textv4, String textv5, boolean visu1,boolean visu2, boolean visu3, boolean visu4, boolean visu5){
    this.id = id;
    this.userID = userID;
    this.textv1 = textv1;
    this.textv2 = textv2;
    this.textv3 = textv3;
    this.textv4 = textv4;
    this.textv5 = textv5;
    this.visu1 = visu1;
    this.visu2 = visu2;
    this.visu3 = visu3;
    this.visu4 = visu4;
    this.visu5 = visu5;
 }

    
}
