import { ReactElement, FunctionComponent } from 'react';
import BlockContainer from '../Common/StyleComponents/BlockContainer';
import { CommentType } from '@tx-group/model';
import { TEXT } from '../../constants/text';
import { DATE_FORMAT } from '../../config/settings';
import moment from 'moment';

const Comment: FunctionComponent<CommentType> = ({
  date_created,
  author,
  comment,
}: CommentType): ReactElement => {
  return (
    <BlockContainer
      flexDirection="column"
      padding="10px"
      extraClasses="comment-item"
    >
      <>
        {author && (
          <p>
            <b>{TEXT.AUTHOR} : </b>
            {author}
          </p>
        )}
        <span>{comment}</span>

        <p>
          <b>{TEXT.COMMENTED_ON} : </b>
          {moment(date_created).format(DATE_FORMAT)}
        </p>
      </>
    </BlockContainer>
  );
};

export default Comment;
