import { Button } from "@/components/ui/button";
import { getPosts } from "@/services/postAPI";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
    title: "Posts",
    description: "Posts Page"
}

const PostsPage = async () => {
  const postsData = await getPosts();
  // if(postsData){
  //   redirect('/meals')
  // }

  return (
    <div>
      <h6>All posts</h6>
      <div className="grid grid-cols-4">
        {postsData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className="border-2 p-6 border-green-700">
            <h6>Title: {post.title}</h6>
            <p>Description: {post.body}</p>
            <button className="my-4">
              <Button className="bg-rose-500" >
                <Link href={`/posts/${post.id}`}>See Details...</Link>
              </Button>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
