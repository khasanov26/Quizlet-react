import { Component } from 'react';

import './add-word.scss';

import addIcon from './add.svg';

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ``,
      translate: ``,
      study: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word.length < 1 || this.state.translate.length < 1) return;
    this.props.addWord(this.state.word, this.state.translate, this.state.study);
    this.setState({
      word: '',
      translate: '',
      study: false,
    });
  };

  onChangeStudy = () => {
    this.setState({
      study: true,
    });
  };

  render() {
    const { word, translate, study } = this.state;
    const { filter } = this.props;
    if (filter == 'study') {
      return (
        <div className="todo-add">
          <p className="todo-add-head">Добавить новое слово</p>
          <form onSubmit={this.onSubmit} className="todo-add-form">
            <div className="todo-add-inputs">
              <div className="todo-add-input">
                <input
                  type="text"
                  placeholder="слово"
                  onChange={this.onValueChange}
                  name="translate"
                  value={translate}
                />
                <hr />
                <p>ТЕРМИН</p>
              </div>
              <div className="todo-add-input">
                <input
                  type="text"
                  placeholder="перевод"
                  onChange={this.onValueChange}
                  name="word"
                  value={word}
                />
                <hr />
                <p>ОПРЕДЕЛЕНИЕ</p>
              </div>
            </div>
            <button type="submit" className="todo-add-button" onClick={this.onChangeStudy}>
              <img src={addIcon} alt="add button" />
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="todo-add">
          <p className="todo-add-head">Добавить новое слово</p>
          <form onSubmit={this.onSubmit} className="todo-add-form">
            <div className="todo-add-inputs">
              <div className="todo-add-input">
                <input
                  type="text"
                  placeholder="слово"
                  onChange={this.onValueChange}
                  name="translate"
                  value={translate}
                />
                <hr />
                <p>ТЕРМИН</p>
              </div>
              <div className="todo-add-input">
                <input
                  type="text"
                  placeholder="перевод"
                  onChange={this.onValueChange}
                  name="word"
                  value={word}
                />
                <hr />
                <p>ОПРЕДЕЛЕНИЕ</p>
              </div>
            </div>
            <button type="submit" className="todo-add-button">
              <img src={addIcon} alt="add button" />
            </button>
          </form>
        </div>
      );
    }
  }
}

export default AddWord;
