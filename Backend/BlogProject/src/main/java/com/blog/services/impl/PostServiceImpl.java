package com.blog.services.impl;





import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.blog.entities.Category;
import com.blog.entities.Post;
import com.blog.entities.User;
import com.blog.exceptions.ResourceNotFoundException;
import com.blog.payloads.PostDto;
import com.blog.payloads.PostResponse;
import com.blog.repositories.CategoryRepo;
import com.blog.repositories.PostRepo;
import com.blog.repositories.UserRepo;
import com.blog.services.PostServices;

@Service
public class PostServiceImpl implements PostServices{

	
	@Autowired
	private PostRepo postRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Override
	public PostDto createPost(PostDto postDto, Integer userId, Integer categoryId) {
		// TODO Auto-generated method stub
		User user = this.userRepo.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("User","UserId",userId));
		
		Category category = this.categoryRepo.findById(categoryId)
				.orElseThrow(()-> new ResourceNotFoundException("Category","CategoryId",categoryId));
		
		Post post = this.modelMapper.map(postDto, Post.class);
		
		post.setImageName("default.png");
		
		post.setAddedDate(new Date());
		
		post.setUser(user);
		
		post.setCategory(category);
		
		Post newPost = this.postRepo.save(post);
		
		return this.modelMapper.map(newPost, PostDto.class);
	}
	
	@Override
	public PostDto updatePost(PostDto postDto, Integer postId) {
		// TODO Auto-generated method stub
		Post post = this.postRepo.findById(postId)
				.orElseThrow(()-> new ResourceNotFoundException("Post","PostId",postId));
		
		post.setTitle(postDto.getTitle());
		post.setContent(postDto.getContent());
		post.setImageName(postDto.getImageName());
		
		Post updatedPost = this.postRepo.save(post);
		
		return this.modelMapper.map(updatedPost, PostDto.class);
	}

	@Override
	public void deletePost(Integer postId) {
		// TODO Auto-generated method stub
		Post post = this.postRepo.findById(postId)
				.orElseThrow(()-> new ResourceNotFoundException("Post","PostId",postId));
		this.postRepo.delete(post);
	}

	@Override
	public PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		// TODO Auto-generated method stub
				
//		Pageable p = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy));//By default ascending order sorting
		
//		Pageable p = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).descending());//descending order sorting
		
//		above both the sortings are for hard coded implementation but for dynamic changing we use below logic
		
//		http://localhost:9090/api/posts?pageNumber=0&pageSize=3&sortBy=postId&sortDir=asc ----for ascending sorting
//		http://localhost:9090/api/posts?pageNumber=0&pageSize=3&sortBy=postId&sortDir=desc ---- for descending sorting
		
		
		Sort sort = null;
		if(sortDir.equalsIgnoreCase("asc")) {
			sort = Sort.by(sortBy).ascending();
		}
		else {
			sort = Sort.by(sortBy).descending();
		}
		
//		Same operation using ternary operator
//		Sort sort = (sortDir.equalsIgnoreCase("asc"))?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
			
		Pageable p = PageRequest.of(pageNumber, pageSize, sort);
		
		Page<Post> pagePosts = this.postRepo.findAll(p);
		
		List<Post>allPosts = pagePosts.getContent();
		
		List<PostDto> postDtos = allPosts.stream().map((post)-> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		
		PostResponse postResponse = new PostResponse();
		
		postResponse.setContent(postDtos);
		
		postResponse.setPageNumber(pagePosts.getNumber());
		
		postResponse.setPageSize(pagePosts.getSize());
		
		postResponse.setTotalElements(pagePosts.getTotalElements());
		
		postResponse.setTotalPages(pagePosts.getTotalPages());
		
		postResponse.setLastPage(pagePosts.isLast());
		
		return postResponse;
	}

	@Override
	public PostDto getPostById(Integer postId) {
		// TODO Auto-generated method stub
		
		Post post = this.postRepo.findById(postId)
				.orElseThrow(()-> new ResourceNotFoundException("Post","PostId",postId));
		
		
		return this.modelMapper.map(post, PostDto.class);
	}

	@Override
	public List<PostDto> getPostByCategory(Integer categoryId) {
		// TODO Auto-generated method stub
		Category cat = this.categoryRepo.findById(categoryId)
				.orElseThrow(()-> new ResourceNotFoundException("Category","CategoryId",categoryId));
		
		List<Post> posts = this.postRepo.findByCategory(cat);
		
		List<PostDto> postDtos = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		
		return postDtos;
	}

	@Override
	public PostResponse getPostByUser(Integer userId,Integer pageNumber,Integer pageSize,String sortBy, String sortDir) {
		// TODO Auto-generated method stub
		User user = this.userRepo.findById(userId)
				.orElseThrow(()-> new ResourceNotFoundException("User","UserId",userId));
		
		Sort sort = (sortDir.equalsIgnoreCase("asc"))?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
		
//		http://localhost:9090/api/posts?pageNumber=0&pageSize=3&sortBy=postId&sortDir=asc --- for Ascending Sorting
		
		
		Pageable p = PageRequest.of(pageNumber, pageSize,sort);
		
		Page<Post> postPage = this.postRepo.findByUserId(userId, p);
		
		//List<Post> posts = this.postRepo.findByUser(user);
		List<Post> allPosts = postPage.getContent();
		
		List<PostDto> postDtos = allPosts.stream().map((post)-> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		
		PostResponse postResponse = new PostResponse();
		
		postResponse.setContent(postDtos);
		
		postResponse.setPageNumber(postPage.getNumber());
		
		postResponse.setPageSize(postPage.getSize());
		
		postResponse.setTotalPages(postPage.getTotalPages());
		
		postResponse.setTotalElements(postPage.getTotalElements());
		
		postResponse.setLastPage(postPage.isLast());
		
		return postResponse;
	}

	@Override
	public List<PostDto> searchPosts(String keyword) {
		// TODO Auto-generated method stub
		List<Post> posts = this.postRepo.findByTitleContaining(keyword);
		List<PostDto> postDtos = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		return postDtos;
		
//		http://localhost:9090/api/posts/search/post --- for searching by title
	}

	

}