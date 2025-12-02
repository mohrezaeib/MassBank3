import { CSSProperties, memo } from 'react';
import Typography from 'antd/es/typography';
const { Paragraph, Text } = Typography;
import List, { ListItemMetaProps } from 'antd/es/list';
import { Content } from 'antd/es/layout/layout';
import AcknowledgementNFDI4Chem from '../../../common/AcknowledgementNFDI4Chem';

const linkStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'underline',
  fontSize: 16,
};

function Acknowledgement() {
  const data: ListItemMetaProps[] = [
   


    {
      title: (
        <a
          href=""
          target="_blank"
          style={linkStyle}
        >
         
        </a>
      ),
      description: (
        <>
          <label>
           
          </label>{' '}
          <a
            href=""
            target="_blank"
            style={linkStyle}
          >
         
          </a>
        </>
      ),
    },
  ];

  return (
    <Content
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <AcknowledgementNFDI4Chem />
      <Paragraph style={{ padding: 10, marginTop: 40 }}>
        <Text
          style={{
            fontWeight: 'bolder',
            padding: 10,
          }}
        >
          
        </Text>
        <List
          style={{ padding: 10 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item.Meta title={item.title} description={item.description} />
          )}
        />
      </Paragraph>
    </Content>
  );
}

export default memo(Acknowledgement);
