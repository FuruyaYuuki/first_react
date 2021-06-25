import styled from 'styled-components';
import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import { withLoading } from "./hoc/withLoading";
import { Modal } from './components/modal';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

function App({ data }) {
  // const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang])
    setTab('list');
  }

  // const changeDescription = () =>  {
  //   setDescription('クリック後の表示です。');
  // }

  // tab条件分岐定義するなら
  // const body = tab === 'list' ? <List /> : <Form />
  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      {/* { description } */}
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
      {/* <button onClick={changeDescription}>ボタン</button> */}
    </div>
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

export default withLoading(App, getLanguages);