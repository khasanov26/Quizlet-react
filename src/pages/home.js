import { Link } from 'react-router-dom';

import ListWord from '../components/list-word/list-word';
import AddWord from '../components/add-word/add-word';
import WordsFilter from '../components/filter-word/filter-word';

import linkIcon from './test-link.svg';

import './home.scss';

const Home = ({ data, onToggleStudy, addWord, deleteWord, filter, onFilterSelect }) => {
  let count = '';
  const getNoun = (number) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return (count = 'терминов');
    }
    n %= 10;
    if (n === 1) {
      return (count = 'термин');
    }
    if (n >= 2 && n <= 4) {
      return (count = 'термина');
    }
    return (count = 'терминов');
  };

  if (filter == 'study') {
    return (
      <div>
        <div>
          {data.length} {getNoun(data.length)}
        </div>
        <ListWord data={data} onToggleStudy={onToggleStudy} deleteWord={deleteWord} />
        <WordsFilter filter={filter} onFilterSelect={onFilterSelect} />
        <AddWord addWord={addWord} filter={filter} />
        <Link to="/test">
          <div className="test">
            <div className="test__icon">
              <img src={linkIcon} alt="icon test link" />
            </div>
            <div className="test__text">
              <p className="test__head">Тест</p>
              <p className="test__desr">Пройди пробный тест</p>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {data.length} {getNoun(data.length)}
        </div>
        <ListWord data={data} onToggleStudy={onToggleStudy} deleteWord={deleteWord} />
        <WordsFilter filter={filter} onFilterSelect={onFilterSelect} />
        <AddWord addWord={addWord} />
        <Link to="/test">
          <div className="test">
            <div className="test__icon">
              <img src={linkIcon} alt="icon test link" />
            </div>
            <div className="test__text">
              <p className="test__head">Тест</p>
              <p className="test__desr">Пройди пробный тест</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default Home;

// let data = [25, 54, 52, 25, 54, 52, 25, 54, 52, 25, 54, 52, 25, 54, 52];
// data = data.length.toString().slice(-1);
// console.log(data);
// data = data.toString().slice(-1);
// console.log(data);
// console.log(data[data.length - 1]);
