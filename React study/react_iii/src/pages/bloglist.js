import { Link } from 'react-router-dom';

const Bloglist = ({ blogs }) => {
  return (
    <div className="Bloglist">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id} style={{ backgroundColor: "lightblue" }}>
          <Link to={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
            <h1>{blog.Author}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
