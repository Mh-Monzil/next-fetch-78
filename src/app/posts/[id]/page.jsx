import React from 'react';

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data;
}
// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details"
// }

export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();

    return {
        title: `${postData.title}`,
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const PostDetailsPage = async ({params}) => {
    console.log(params.id);
    const {title, body} = await getDetailsPost(params.id);
    
    return (
        <div>
            <p>Title: {title}</p>
            <p>Description: {body}</p>
        </div>
    );
};

export default PostDetailsPage;