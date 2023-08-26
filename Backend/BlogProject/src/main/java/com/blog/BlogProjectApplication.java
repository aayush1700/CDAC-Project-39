package com.blog;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class BlogProjectApplication /*implements CommandLineRunner*/{

//	@Autowired
//	private PasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(BlogProjectApplication.class, args);
	}
	@Bean
	public ModelMapper modalMapper() {
		return new ModelMapper();
	}
	/*@Override
	public void run(String... args) throws Exception {
		System.out.println(this.passwordEncoder.encode("ashu@123"));
		
	}*/
}
