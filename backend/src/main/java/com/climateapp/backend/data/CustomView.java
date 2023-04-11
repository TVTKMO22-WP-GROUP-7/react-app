package com.climateapp.backend.data;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity 
@Table(name = "customview")
public class CustomView {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id")
    public long id;

    @Column (name = "url")
    public String url;

    @Column (name = "parallel")
    public boolean parallel;

    @Column (name = "userID")
    public int userID;

    @Column (name = "title")
    public String title;

    @Column (name = "desc1")
    public String desc1;

    @Column (name = "desc2")
    public String desc2;

    @Column (name = "desc3")
    public String desc3;

    @Column (name = "desc4")
    public String desc4;

    @Column (name = "desc5")
    public String desc5;

    public CustomView() {
    }

    public CustomView(String url, boolean parallel, int userID, String title, String desc1, String desc2, String desc3, String desc4, String desc5) {
        this.url = url;
        this.parallel = parallel;
        this.userID = userID;
        this.title = title;
        this.desc1 = desc1;
        this.desc2 = desc2;
        this.desc3 = desc3;
        this.desc4 = desc4;
        this.desc5 = desc5;
    }
}
