package com.blog.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CategoryDto {
	
	private Integer categoryId;
	
	@NotBlank
	@Size(min=3, message = "Title Should Contains at Least 3 Characters")
	private String categoryTitle;
	
	@NotBlank
	@Size(min=3, message = "Description Should Contains at Least 3 Characters")
	private String categoryDescription;
}
