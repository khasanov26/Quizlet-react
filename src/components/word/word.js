import { Component } from 'react';

import './word.scss';

import starIcon from './star.svg';

import deleteIcon from './delete12.svg';

class Word extends Component {
  render() {
    const { word, translate, study, onToggleStudy, deleteWord } = this.props;
    let star = 'star';
    if (study) {
      star += ' star-check';
    }
    console.log(word);
    return (
      <li className="word">
        <div className="word__words">
          <span>{translate}</span>
          <span>{word}</span>
        </div>
        <div className="word__icons">
          <button>
            <svg
              alt="add study word button"
              className={star}
              onClick={onToggleStudy}
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.73597 0.391817L7.73597 0.391831L9.65679 4.1981L9.65683 4.19817C9.76914 4.42052 9.98442 4.57187 10.2303 4.60694L10.2305 4.60696L14.5258 5.21735L14.5258 5.21735C14.7471 5.24879 14.8192 5.50304 14.6723 5.6431C14.6723 5.6431 14.6723 5.6431 14.6723 5.64311L11.5641 8.60574L11.5641 8.60578C11.3838 8.77769 11.2999 9.02719 11.3431 9.27321L12.0767 13.4566L12.0767 13.4567C12.1106 13.6497 11.8977 13.8236 11.6943 13.719L7.85273 11.744C7.8527 11.744 7.85267 11.744 7.85264 11.7439C7.63173 11.6303 7.36827 11.6303 7.14736 11.7439C7.14733 11.744 7.1473 11.744 7.14727 11.744L3.30556 13.719L3.41519 13.9323L3.30555 13.719C3.10216 13.8236 2.88921 13.6497 2.9231 13.4567L2.92311 13.4566L3.65677 9.27321C3.69992 9.02719 3.616 8.77769 3.43573 8.60578L3.4357 8.60575L0.327719 5.64294L0.170948 5.8074L0.327718 5.64294C0.180791 5.50288 0.252908 5.24862 0.474206 5.21719L0.474224 5.21719L4.76942 4.60681C4.76945 4.60681 4.76949 4.6068 4.76953 4.6068C5.01576 4.57188 5.23096 4.42018 5.34317 4.19801L5.34321 4.19794L7.26402 0.391835L7.26403 0.391817C7.35944 0.202728 7.64056 0.202728 7.73597 0.391817Z"
                stroke="white"
                strokeWidth="0.8"
              />
            </svg>
          </button>
          <button>
            <img
              src={deleteIcon}
              className="deleteIcon"
              alt="delete word button"
              onClick={deleteWord}
            />
          </button>
        </div>
      </li>
    );
  }
}

export default Word;
