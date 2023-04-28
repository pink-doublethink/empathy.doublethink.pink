import {Header} from "../components/"
import {Helmet} from "react-helmet";
import { Card as AntCard, Col as AntCol, Row as AntRow, Avatar, Card } from 'antd';

const books = [
    {
      title: 'The Hobbit',
      description: 'A fantasy novel by J. R. R. Tolkien'
    },
    {
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee, set in the Deep South and revolving around the trial of a black man accused of raping a white woman'
    },
    {
      title: '1984',
      description: 'A dystopian novel by George Orwell, set in a future totalitarian society'
    },
    {
      title: 'The Catcher in the Rye',
      description: 'A novel by J. D. Salinger, about a teenage boy named Holden Caulfield who is expelled from his prep school and wanders around New York City'
    }
  ];

  const antProducts = [
    {
      title: 'Product A',
      description: 'This is a description of Product A',
      imageSrc: 'https://example.com/product-a.jpg',
    },
    {
      title: 'Product B',
      description: 'This is a description of Product B',
      imageSrc: 'https://example.com/product-b.jpg',
    },
    {
      title: 'Product C',
      description: 'This is a description of Product C',
      imageSrc: 'https://example.com/product-c.jpg',
    },
  ];



const ContactPage: React.FC = () =>  {
    const antCards = books.map((book) => (
        <AntCard key={book.title}>
          <AntCard.Meta title={book.title} description={book.description} />
        </AntCard>
      ));
  return (
    <>
      <Helmet>
          <title>Контактная информация</title>
          <meta
            name="description"
            content="Узнайте, что такое импатия. И почему ее важно развивать для нашей жизни."
          />
      </Helmet>
      <AntRow gutter={[16, 16]}>
        {antCards}
      </AntRow>

        <AntRow gutter={[16, 16]}>
            <AntCard
                hoverable
                cover={<img src='./Ex2.jpg' alt="22" />}
                style={{ width: 300, margin: 20 }}
            >
            <AntCard.Meta title="22" description="33" />
            
            </AntCard>
            <AntCard
                hoverable
                cover={<img src='./Ex1.jpg' alt="22" />}
                style={{ width: 300, margin: 20 }}
            >
            <AntCard.Meta title="22" description="33" />
            
            </AntCard>
            <AntCard
                hoverable
                cover={<img src='./Ex6.jpg' alt="22" />}
                style={{ width: 300, margin: 20 }}
            >
            <AntCard.Meta title="22" description="33" />
            
            </AntCard>
            <AntCard
                hoverable
                cover={<img src='./Ex3.jpg' alt="22" />}
                style={{ width: 300, margin: 20 }}
            >
            <AntCard.Meta title="22" description="33" />
            
            </AntCard>
            <AntCard
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <AntCard.Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </AntCard>
);
        </AntRow>
    </>
  )
}

export default ContactPage