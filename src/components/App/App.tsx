import styles from './App.module.scss';

export function App() {
  const myConst = 'myConst';
  if (true) {
    console.log(myConst);
  }
  return (
    <div className={styles.App}>
      <p>Hey hey</p>
    </div>
  );
}
