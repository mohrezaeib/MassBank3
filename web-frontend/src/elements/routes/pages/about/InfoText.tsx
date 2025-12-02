import { Content } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';
import { memo } from 'react';

import massbankLogo from '../../../../assets/logo.svg';

function InfoText() {
  return (
    <Content
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={massbankLogo}
        style={{ width: 300, marginTop: 10, marginBottom: 10 }}
        key={'MycoMSBase-logo-overview'}
        alt="MycoMSBase logo " 
      />
      <Content style={{ padding: 10 }}>
        <Paragraph>
          MycoMSBase is an open-source mass spectral library for the identification of small chemical molecules of metabolomics, exposomics, and environmental relevance. It accepts all kinds of mass spectral data and offers a range of search options for browsing the database.{' '}
          
          
      
         
        </Paragraph>
      </Content>
    </Content>
  );
}

export default memo(InfoText);
