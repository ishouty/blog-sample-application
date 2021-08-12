import { ReactElement } from 'react';
import axios from 'axios';
import PostItem from '../components/PostItem/PostItem';
import { BASE_API_URL } from '../config/settings';
import PageContainer from '../components/Common/StyleComponents/PageContainer';
import { BlogPost } from '@tx-group/model';
// eslint-disable-next-line @typescript-eslint/no-explicit-any

type IndexProps = {
  data: BlogPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = ({ data }: any): ReactElement => {
  return (
    <PageContainer>
      {data.map((item, index) => {
        return <PostItem key={index} {...item} type="Blogs" />;
      })}
    </PageContainer>
  );
};

export async function getStaticProps(): Promise<{ props: IndexProps }> {
  const response = await axios.get(`${BASE_API_URL}/blog`);

  return {
    props: {
      data: response.data,
    },
  };
}

export default Index;
