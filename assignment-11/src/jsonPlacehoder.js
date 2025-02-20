import { useEffect } from "react";
import { useState } from "react";

const JsonCall = () => {
  const [postId, setPostId] = useState();
  const [error, setError] = useState(null);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postResponse, setPostResponse] = useState(null);

  useEffect(() => {
    // alert("postId was changed");
    getPost(); //to avoid unnecessary database,setTimeout can be implemented
    setUserId("");
    setTitle("");
    setBody("");
  }, [postId]);

  const getPost = async () => {
    if (!postId) {
      return;
    }
    setLoading(true);
    setPost(null);
    setError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!res.ok) {
        throw new Error("404 not found");
      }
      const data = await res.json();
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPostResponse(null);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, title, body }),
      });

      if (!res.ok) {
        throw new Error("Failed to post data");
      }

      const data = await res.json();
      setPostResponse(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5 w-50">
        <h1 className="text-center">JsonPlacehoder App</h1>
        <h2 className="text-center">GET Method</h2>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Post_id
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            value={postId}
            onChange={(e) => {
              setPostId(e.target.value);
              setPost(null);
            }}
          />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {post && postId && (
            <div
              className="mt-3 p-3 border rounded bg-light"
            //   style={{
            //     width: "500px",
                // paddingLeft: "600px",
            //   }}
            >
              <p>ID:{post.id}</p>
              <p>TITLE:{post.title}</p>
              <p>BODY:{post.body}</p>
            </div>
          )}
        </div>
        <h2 className="text-center">Post Method</h2>
        <form onSubmit={handlePost}>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="text"
              className="form-control"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Post
          </button>
        </form>

        {postResponse && (
          <div className="mt-3 p-3 border rounded bg-light">
            <h4>Post Created Successfully!</h4>
            <p>
              <strong>ID:</strong> {postResponse.id}
            </p>
            <p>
              <strong>Title:</strong> {postResponse.title}
            </p>
            <p>
              <strong>Body:</strong> {postResponse.body}
            </p>
            <p>
              <strong>User ID:</strong> {postResponse.userId}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default JsonCall;
