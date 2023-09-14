import styles from './App.module.css';
import Title from './component/Title/Title'; 
import Background from './component/Background/Background'; 
import Grid from './component/Grid/Grid'; 
import Rocket from './component/Rocket/Rocket'; 
import Smoke from './component/Rocket/Smoke'; 


function App() {
  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
