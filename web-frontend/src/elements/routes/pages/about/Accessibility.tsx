import { Content } from 'antd/es/layout/layout';
import { memo } from 'react';
import Typography from 'antd/es/typography';
const { Paragraph, Text } = Typography;
// import { List } from 'antd';
// import { CheckCircleOutlined } from '@ant-design/icons';

function Accessibility() {
  

  return (
    <Content
      style={{
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paragraph style={{ width: '100%', textAlign: 'left' }}>
       
        <br />
        <br />
        <Text>
         
        </Text>
      </Paragraph>
      
       
    </Content>
  );
}

export default memo(Accessibility);
