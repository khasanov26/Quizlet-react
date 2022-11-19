import { Component } from 'react';
import CheckListWord from '../check-list-word/check-list-word';
import { Link } from 'react-router-dom';
import closeIcon from './close.svg';

import './testing.scss';
// import '../../pages/test.scss';

class Testing extends Component {
  constructor(props) {
    super(props);
  }
  // const { word, translate, id } = data[counter];
  // console.log(`${counter} testing`);
  // console.log(`${data.length} data`);

  render() {
    const { data, onChange, test, onCheck, counter, onReturn } = this.props;

    if (counter == data.length) {
      return <CheckListWord data={data} onReturn={onReturn} />;
    } else {
      const { word, translate, id } = data[counter];

      let partLine = (290 / data.length) * counter;
      // let line = partLine * counter;
      // console.log(partLine);
      // console.log(data);
      return (
        <div>
          <div className="test-page">
            <p className="test-counter">
              {counter + 1}/{data.length}
            </p>
            <Link to="/" onClick={onReturn}>
              <img src={closeIcon} alt="close icon" />
            </Link>
            <div className="test-line">
              <div style={{ width: `${partLine}px` }}></div>
            </div>
          </div>

          <li key={id} className="testing">
            <div>{word}</div>
            {/* <div>{translate}</div> */}
            <div className="testing__check">
              <input type="text" onChange={onChange} value={test} placeholder="Введите перевод" />
              <button onClick={(e) => onCheck(e, id, data)}>Отправить</button>
            </div>
            <hr />
            <p className="testing__answer">Ответ (Английский)</p>
          </li>
        </div>
      );
    }
  }
}

export default Testing;

// import { Component } from 'react';
// import CheckListWord from '../check-list-word/check-list-word';

// import './testing.scss';

// class Testing extends Component {
//   constructor(props) {
//     super(props);
//   }
//   // const { word, translate, id } = data[counter];
//   // console.log(`${counter} testing`);
//   // console.log(`${data.length} data`);
//   render() {
//     const { data, onChange, test, onCheck, counter } = this.props;

//     if (counter == data.length) {
//       return <CheckListWord data={data} />;
//     } else {
//       const { word, translate, id } = data[counter];

//       return (
//         <li key={id} className="testing">
//           <div>{word}</div>
//           {/* <div>{translate}</div> */}
//           <div className="testing__check">
//             <input type="text" onChange={onChange} value={test} placeholder="Введите перевод" />
//             <button onClick={(e) => onCheck(e, id)}>Отправить</button>
//           </div>
//           <hr />
//           <p className="testing__answer">Ответ (Английский)</p>
//         </li>
//       );
//     }
//   }
// }

// export default Testing;
