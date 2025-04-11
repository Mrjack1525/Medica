package com.klu;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class LoginService {
	
	@Autowired
	LoginRepo repo; 
	
	 public String login(LoginRequest LR) {
		    
		  User user=repo.findByusername(LR.getUsername());
		  
		  if(user!=null && user.getPassword().equals(LR.getPassword())) {
		  
		    int role=user.getRole();
		    int requesteddrole=LR.getRole();
		    if(role==requesteddrole) {
		      if(role==1) {
		        return "welcome user";
		      }
		      else if(role==2) {
		        return "welcome admin";
		      }
		      return "Role not correct";
		      
		    }
		    return "role mismatch";
		  }
		  else 
		  {
		    return "user name/password not correct";
		  }

		}

}
