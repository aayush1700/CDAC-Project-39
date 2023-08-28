package com.blog.payloads;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class PostDto {

	private Integer postId;
	
	@NotBlank
	@Size(min=3, message = "Title Should Contains at Least 3 Characters")
	private String title;
	
	@NotBlank
	@Size(min=3, message = "Content Should Contains at Least 3 Characters")
	private String content;

	private String imageName;
	
	private Date addedDate;
	
	private CategoryDto category;
	
	private UserDto user;
	private Set<CommentDto> comments = new HashSet<>(); 
}
