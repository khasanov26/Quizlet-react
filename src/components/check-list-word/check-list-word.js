import CheckWord from '../check-word/check-word';
import { Link } from 'react-router-dom';

import './check-list-word.scss';

import closeIcon from './close.svg';

const CheckListWord = ({ data, onReturn }) => {
  const words = data.map((item) => {
    const { id, ...itemProps } = item;
    return <CheckWord key={id} {...itemProps} />;
  });

  const trueKnow = data.filter(function (item) {
    return item.know == true;
  });

  let knowTrue = data.filter(function (item) {
    return item.know == true;
  });

  let knowFalse = data.filter(function (item) {
    return item.know == false;
  });
  // console.log(data.length);
  // console.log(trueKnow.length);
  let circleTrue = (138 / data.length) * knowTrue.length;

  // let circleFalse = (100 / data.length) * knowFalse.length;

  return (
    <div className="check-list">
      <Link to="/" onClick={onReturn}>
        <img src={closeIcon} alt="close icon" />
      </Link>
      <p className="check-list__counter">
        {data.length} / {data.length}
      </p>
      <hr />
      <div>
        <p className="check-list__results-head">Ваши результаты</p>
        <div className="check-list__results">
          <div className="check-list__calculation">
            <span className="check-list__percentage">
              {Math.round(((100 * 1) / data.length) * trueKnow.length)}%
            </span>
            <div className="canvas">
              <svg className="chart" width="85" height="85" viewBox="0 0 50 50">
                <circle
                  className="unit"
                  style={{
                    strokeDasharray: `138 138`,
                    strokeDashoffset: `0`,
                  }}
                  r="22"
                  cx="50%"
                  cy="50%"></circle>
                <circle
                  className="unit"
                  style={{ strokeDasharray: `${circleTrue} 138` }}
                  r="22"
                  cx="50%"
                  cy="50%"></circle>
              </svg>
            </div>
          </div>
          <div className="check-list__count">
            <div className="check-list__true">
              <p>Правильно</p>
              <span>{knowTrue.length}</span>
            </div>
            <div className="check-list__false">
              <p>Неправильно</p>
              <span>{knowFalse.length}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="check-list__answers">Ваши ответы</p>
      {/* <div className="canvas">
        <svg className="chart" width="700" height="700" viewBox="0 0 50 50">
          <circle
            className="unit"
            style={{
              strokeDasharray: `100 100`,
              strokeDashoffset: `0`,
            }}
            r="15.9"
            cx="50%"
            cy="50%"></circle>
          <circle
            className="unit"
            style={{ strokeDasharray: `${circleTrue} 100` }}
            r="15.9"
            cx="50%"
            cy="50%"></circle>
        </svg>
      </div> */}

      <ul className="check-list_list">{words}</ul>
    </div>
  );
};

export default CheckListWord;
