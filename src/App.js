import { useContext, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { Header } from "./Header";
import { ThemeContext } from './contexts/ThemeContext';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
  // const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  // const changeDescription = () =>  {
  //   setDescription('クリック後の表示です。');
  // }

  // tab条件分岐定義するなら
  // const body = tab === 'list' ? <List /> : <Form />
  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab}/>
      {/* { description } */}
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
      {/* <button onClick={changeDescription}>ボタン</button> */}
    </Container>
  );
}

// import React from 'react';
// import { List } from "./List";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { description: 'クリック前の表示' }
//   }
//   changeDesciption() {
//     this.setState({
//       description: 'クリック後の表示です。'
//     })
//   }

//   render() {
//     const { description } = this.state;
//     return (
//       <div>
//         { description }
//         <List title = "取扱言語一覧" />
//         <button onClick={() =>  this.changeDesciption()}>
//           ボタン
//         </button>
//       </div>
//     )
//   };
// }
export default App;