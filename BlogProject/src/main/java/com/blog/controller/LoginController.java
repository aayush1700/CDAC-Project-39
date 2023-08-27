package com.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.payloads.ApiResponse;
import com.blog.payloads.LoginRequestDto;
import com.blog.services.LoginService;

@RestController
@RequestMapping("/api/")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login (@RequestBody LoginRequestDto loginRequestDto){
		ApiResponse apiResponse = loginService.login(loginRequestDto);
		if (apiResponse.isSuccess()) {
	        return ResponseEntity.ok(apiResponse); // Successful login, return 200 OK
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiResponse); // Unsuccessful login, return 401 Unauthorized
	    }
	}
}
