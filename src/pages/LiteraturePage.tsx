import {Header} from "../components/"
import {Helmet} from "react-helmet";
import { Card as MaterialCard, CardHeader, CardContent } from '@mui/material';
import { Avatar as AntAvatar, Input as AntInput, Button as AntButton } from 'antd';

const LiteraturePage: React.FC = () =>  {

    function MaterialProductCard({ title, description, imageSrc }) {
        return (
          <MaterialCard style={{ width: 300, margin: 20 }}>
            <CardHeader title={title} subheader={description} />
            <CardContent>
              <img src={imageSrc} alt={title} style={{ width: '100%' }} />
            </CardContent>
          </MaterialCard>
        );
      }

      const materialProducts = [
        {
          title: 'Product X',
          description: 'This is a description of Product X',
          imageSrc: 'https://example.com/product-x.jpg',
        },
        {
          title: 'Product Y',
          description: 'This is a description of Product Y',
          imageSrc: 'https://example.com/product-y.jpg',
        },
        {
          title: 'Product Z',
          description: 'This is a description of Product Z',
          imageSrc: 'https://example.com/product-z.jpg',
        },
      ];
  return (
    <>
      <Helmet>
          <title>Эмпатия</title>
          <meta
            name="description"
            content="Узнайте, что такое импатия. И почему ее важно развивать для нашей жизни."
          />
      </Helmet>
      <h1>Contact Us</h1>
      <p>We are always looking for talented writers to collaborate with us. If you are interested, please get in touch!</p>

      

      <h2>Material UI Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {materialProducts.map((product, index) => (
          <MaterialProductCard key={index} {...product} />
          ))}
          </div>
          <h2>Ant Design Products</h2>
      <AntAvatar size={64} src="https://example.com/profile.jpg" />
      <AntInput placeholder="Telegram" />
      <AntInput placeholder="LinkedIn" />
      <AntInput placeholder="Name" />
      <AntInput placeholder="Email" />
      <AntInput placeholder="Phone Number" />
      <AntInput.TextArea placeholder="Message" />
      <AntButton type="primary">Submit</AntButton>
    </>
  )
}

export default LiteraturePage