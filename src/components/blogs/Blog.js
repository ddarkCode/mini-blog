import React from 'react';

const styles = {
  blog: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  body: {
    padding: 20,
  },
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();

function Blog({ blog }) {
  const { title, createdAt, body, _id, authorId, img_url } = blog;
  return (
    <div style={styles.blog}>
      <div style={styles.title}>{title}</div>
      <div style={styles.date}>{dateDisplay(createdAt)}</div>
      <div style={styles.author}>
        {/* <a href={author.website}>
          {author.firstName} {author.lastName}
        </a> */}
      </div>
      <div style={styles.body}>{body}</div>
    </div>
  );
}

export default Blog;
