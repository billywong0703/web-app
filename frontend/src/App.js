import LoginBox from './components/LoginBox';

const style = {
  body: {
    margin: '50vh 0',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  text: {
    padding: '20px',
    fontSize: '40px',
    fontWeight: 'bold'
  }
}

function App() {
  return (
    <div style={style.body}>
      <div style={style.content}>
        <div style={style.text}>Blog E-system</div>
        <LoginBox></LoginBox>
      </div>
    </div>
  );
}

export default App;
