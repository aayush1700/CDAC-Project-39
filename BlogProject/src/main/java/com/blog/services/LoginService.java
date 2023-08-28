package com.blog.services;

import com.blog.payloads.ApiResponse;
import com.blog.payloads.LoginRequestDto;

public interface LoginService {

	ApiResponse login(LoginRequestDto loginRequestDto);

}
