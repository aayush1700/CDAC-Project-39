package com.blog.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.entities.User;
import com.blog.payloads.ApiResponse;
import com.blog.payloads.LoginRequestDto;
import com.blog.repositories.UserRepo;
import com.blog.services.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public ApiResponse login(LoginRequestDto loginRequestDto) {
		 ApiResponse apiResponse = new ApiResponse();
		 
		 User user= userRepo.findByEmailAndPassword(loginRequestDto.getEmail(), loginRequestDto.getPassword());
		 
		 if(user == null) {
			 apiResponse.setMessage("User login failed");
			 apiResponse.setSuccess(false);
			 
		 }
		 else {
			 apiResponse.setMessage("User logged in");
			 apiResponse.setSuccess(true);
		 }
		return apiResponse;
	}
}
