<?php

namespace App\Http\Controllers\Api;

use App\Models\BlogPost;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class BlogPostsController extends Controller
{
   public function index()
   {
       return BlogPost::all();
   }

   public function store(Request $request)
   {
       $blogPost = BlogPost::create($request->all());

       return response()->json($blogPost, 201);
   }

   public function show(BlogPost $blogPost)
   {
       return response()->json($blogPost);
   }

   public function update(Request $request, BlogPost $blogPost)
   {
       $blogPost->update($request->all());

       return response()->json($blogPost);
   }

   public function destroy(BlogPost $blogPost)
   {
       $blogPost->delete();

       return response()->json(null, 204);
   }

}
