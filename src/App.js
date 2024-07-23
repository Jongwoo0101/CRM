import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placehold.co/64x64',
  'name': '홍길동',
  'birthday': '050503',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placehold.co/64x64',
  'name': '박지원',
  'birthday': '370305',
  'gender': '남자',
  'job': '실학자'
},
{
  'id': 3,
  'image': 'https://placehold.co/64x64',
  'name': '윤동주',
  'birthday': '171230',
  'gender': '남자',
  'job': '독립운동가'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>

    );
  }
}

export default App;
