import { Link } from 'react-router-dom';
import Testing from '../components/testing/testing';

// import './test.scss';

// import closeIcon from './close.svg';

const Test = ({ data, onChange, test, onCheck, counter, onReturn }) => {
  return (
    <div>
      {/* <p className="test-counter">1/9</p>
      <Link to="/" onClick={onReturn}>
        <img src={closeIcon} alt="close icon" />
      </Link>
      <hr /> */}
      <Testing
        data={data}
        onChange={onChange}
        test={test}
        onCheck={onCheck}
        counter={counter}
        onReturn={onReturn}
      />
      {/* <ListWord data={data} /> */}
    </div>
  );
};

export default Test;

// import { Link } from 'react-router-dom';
// import Testing from '../components/testing/testing';

// import './test.scss';

// import closeIcon from './close.svg';

// const Test = ({ data, onChange, test, onCheck, counter, onReturn }) => {
//   // console.log(data);
//   return (
//     <div className="test-page">
//       <p className="test-counter">1/9</p>
//       <Link to="/" onClick={onReturn}>
//         <img src={closeIcon} alt="close icon" />
//       </Link>
//       <hr />
//       <Testing data={data} onChange={onChange} test={test} onCheck={onCheck} counter={counter} />
//       {/* <ListWord data={data} /> */}
//     </div>
//   );
// };

// export default Test;
