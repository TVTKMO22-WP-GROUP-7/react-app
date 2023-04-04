package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

<<<<<<< HEAD
=======
//import java.util.Map;
>>>>>>> 0d28f78b5f5c3c2dddc6ed4ca6b58214d35213d2
import com.climateapp.backend.data.database.V5All;

public interface V5AllRepo extends JpaRepository<V5All, String>{
    @Query(value= "SELECT * FROM v5_all", nativeQuery = true)
    List<V5All> getAll();
<<<<<<< HEAD
    
=======

>>>>>>> 0d28f78b5f5c3c2dddc6ed4ca6b58214d35213d2
}
