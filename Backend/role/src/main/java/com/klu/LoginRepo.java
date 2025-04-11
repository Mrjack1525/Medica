package com.klu;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface LoginRepo extends JpaRepository<User, String>{
	
	User findByusername(String username);

}
