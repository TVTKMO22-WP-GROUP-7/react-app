package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "custom")
public class CustomView {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id")
   public long id;

   @Column(name = "username")
   public String username;

   @Column(name = "v1text")
   public String textv1;

   @Column(name = "v2text")
   public String textv2;

   @Column(name = "v3text")
   public String textv3;

   @Column(name = "v4text")
   public String textv4;

   @Column(name = "v5text")
   public String textv5;

   @Column(name = "visu1")
   public boolean visu1;

   @Column(name = "visu2")
   public boolean visu2;

   @Column(name = "visu3")
   public boolean visu3;

   @Column(name = "visu4")
   public boolean visu4;

   @Column(name = "visu5")
   public boolean visu5;

   @Column(name = "url")
   public String url;

   @Column(name = "parallel")
   public boolean parallel;

   public CustomView() {
   }

   public CustomView(String username, String textv1, String textv2, String textv3, String textv4,
         String textv5, boolean visu1, boolean visu2, boolean visu3, boolean visu4, boolean visu5, String url,
         boolean parallel) {
      this.username = username;
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
      this.url = url;
      this.parallel = parallel;
   }

   public CustomView(long id, String username, String textv1, String textv2, String textv3, String textv4,
         String textv5, boolean visu1, boolean visu2, boolean visu3, boolean visu4, boolean visu5, String url,
         boolean parallel) {
      this.id = id;
      this.username = username;
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
      this.url = url;
      this.parallel = parallel;
   }

public static void deleteById(Long id) {
}
   

}
