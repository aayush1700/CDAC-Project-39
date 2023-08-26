package com.blog.services;


import java.util.List;

import com.blog.payloads.UserDto;

public interface UserService {
	
	//Create
	UserDto createUser(UserDto user);
	
	//Update
	UserDto updateUser(UserDto user, Integer userId);
	
	//GetUserById
	UserDto getUserById(Integer userId);
	
	//GetAllUsers
	List<UserDto> getAllUsers();
	
	//DeleteUser
	void deleteUser(Integer UserId);
}
