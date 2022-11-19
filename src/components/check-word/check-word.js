import { Component } from 'react';

import './check-word.scss';

import trueIcon from './true.svg';
import falseIcon from './false.svg';
import resultFalse from './result-false.svg';
import resultTrue from './result-true.svg';
class CheckWord extends Component {
  render() {
    const { word, translate, write, know } = this.props;
    // console.log(know);
    if (!know) {
      return (
        <li className="item item__false">
          <span className="item__word">{word}</span>
          <div className="item__check">
            <div className="item__check_true">
              <img src={trueIcon} alt="true icon" />
              <span>{translate}</span>
            </div>
            <div className="item__check_false">
              <img src={falseIcon} alt="flase icon" />
              <span>{write ? write : 'Пропущено'}</span>
            </div>
          </div>
          <div className="item__result">
            <img src={resultFalse} alt="false icon" />
            <p>Неправильно</p>
          </div>
        </li>
      );
    } else {
      return (
        <li className="item item__false">
          <span className="item__word">{word}</span>
          <div className="item__check">
            <div className="item__check_false true">
              <img src={trueIcon} alt="true icon" />
              <span>{translate}</span>
            </div>
          </div>
          <div className="item__result item_result_true">
            <img src={resultTrue} alt="true icon" />
            <p>Правильно</p>
          </div>
        </li>
        // <li className="item item__true">
        //   <span className="item__word">{word}</span>
        //   <span>{translate}</span>
        //   <span>{write ? write : 'Пропущено'}</span>
        //   <span>Правильно</span>
        // </li>
      );
    }
  }
}

export default CheckWord;

// import { Component } from 'react';

// class CheckWord extends Component {
//   render() {
//     const { word, translate, write, know } = this.props;
//     console.log(know);
//     if(!know) {
//       return(

//       )
//     }
//     return (
//       <li>
//         <span>{word}</span>
//         <span>{translate}</span>
//         <span>{write ? write : 'Ничего не введено'}</span>
//         <span></span>
//       </li>
//     );
//   }
// }

// export default CheckWord;
