import styles from './index.less';

type Props = {
  title?: string;
};
const App: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <>
      <div className={styles.panelTitle}>
        <div className={styles.title}>{title}</div>
        <div>
          <i className={`iconfont icon-guanbi`} />
          <i className={`iconfont icon-guanbi`} />
        </div>
      </div>
    </>
  );
};
export default App;
