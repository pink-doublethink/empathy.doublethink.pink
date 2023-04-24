import styles from "./recomendations.module.css"
import { Card } from 'antd';
import { Link } from 'react-router-dom';

interface IBlogPost {
  title: string;
  preview: string;
  date: string;
  category: string;
  image: string;
}


const BlogPost: React.FC<IBlogPost> = ({ title, preview, date, category, image }) => {
  return (
    <Card
      cover={
        <img alt={title} src={image} />
      }
      style={{ width: 300, margin: 10 }}
    >
      <Card.Meta
        title={<Link to={`/blog/${title}`}>{title}</Link>}
        description={preview}
      />
      <div style={{ marginTop: 10 }}>
        <span>{date}</span>
        <span style={{ marginLeft: 10 }}>{category}</span>
      </div>
    </Card>
  );
};

const Recomendations: React.FC = () =>  {
  const posts = [
      {
        title: 'Post 1',
        preview: 'This is the preview for post 1.',
        date: '2023-04-22',
        category: 'Category 1',
        image: './Ex2.jpg',
      },
      {
        title: 'Post 2',
        preview: 'This is the preview for post 2.',
        date: '2023-04-20',
        category: 'Category 2',
        image: './Ex3.jpg',
      },
      {
        title: 'Post 3',
        preview: 'This is the preview for post 3.',
        date: '2023-04-18',
        category: 'Category 1',
        image: './Ex3.jpg',
      },
      {
        title: 'Post 4',
        preview: 'This is the preview for post 4.',
        date: '2023-04-16',
        category: 'Category 2',
        image: './Ex2.jpg',
      },
      {
        title: 'Post 5',
        preview: 'This is the preview for post 5.',
        date: '2023-04-14',
        category: 'Category 1',
        image: './Ex3.jpg',
      },
      {
        title: 'Post 6',
        preview: 'This is the preview for post 6.',
        date: '2023-04-12',
        category: 'Category 2',
        image: './Ex3.jpg',
      },
    ];
    return (
      <div className={styles.block}>
          {/* <div className={styles.block__title}>
            <div className={styles.block__titleBox}>
              <div className={styles.block__titleConten}>
              Saara Shop
              </div>
              <div className={styles.block__subtitle}>
              All in One
              </div>
            </div>
        </div> */}
      <div className={styles.block__box}>
            {posts.map(post => (
              <BlogPost
                key={post.title}
                title={post.title}
                preview={post.preview}
                date={post.date}
                category={post.category}
                image={post.image}
              />
            ))}
          </div>

      </div>
    )
}
  
export default Recomendations