import styles from "./footerPost.module.css";
import Like from "./Like/Like";
import Comment from "./Comment/Comment";
import Share from "./Share/Share";
import Price from "./Price/Price";
import Icon from "../../Icon/Icon";

const FooterPost = ({ price }) => {
  return (
    <>
      {price ? (
        <div className={styles.container}>
          <Icon>
            <Like />
          </Icon>
          <Icon>
            <Comment />
          </Icon>
          <Icon className={styles.user_post}>
            <Share />
          </Icon>
          <Icon className={styles.creator_post}>
            <Price price={price} />
          </Icon>
        </div>
      ) : (
        <div className={styles.container}>
          <Icon>
            <Like />
          </Icon>
          <Icon>
            <Comment />
          </Icon>
          <Icon className={styles.user_post}>
            <Share />
          </Icon>
        </div>
      )}
    </>
  );
};

export default FooterPost;
