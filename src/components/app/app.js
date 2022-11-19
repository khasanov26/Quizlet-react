import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';

import Home from '../../pages/home';
import Test from '../../pages/test';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { word: 'дом', translate: 'house', know: true, write: '', study: false, id: 1 },
        { word: 'яблоко', translate: 'apple', know: true, write: '', study: false, id: 2 },
        { word: 'машина', translate: 'car', know: true, write: '', study: true, id: 3 },
        { word: 'мяч', translate: 'ball', know: true, write: '', study: true, id: 4 },
      ],
      filter: 'all',
      test: '',
      counter: 0,
    };
    this.maxId = 5;
  }

  onChange = (e) => {
    this.setState({
      test: e.target.value,
    });
  };

  onCheck = (e, id, data) => {
    this.setState((state) => ({
      counter: state.counter + 1,
      test: (state.test = ''),
    }));

    let count = id - 1;

    // console.log(this.state.data);
    console.log(data);
    console.log(count);

    if (
      this.state.test.toLowerCase().trim() ===
      data[this.state.counter].translate.toLowerCase().trim()
    ) {
      data[this.state.counter].know = true;
      data[this.state.counter].write = this.state.test;
      console.log(this.state.test);
      console.log(this.state.data[this.state.counter].write);
      console.log('Совпало');
    } else {
      data[this.state.counter].know = false;
      data[this.state.counter].write = this.state.test;
      console.log(this.state.test);

      console.log('Не совпало');
    }
  };

  onReturn = () => {
    this.setState((state) => ({
      counter: (state.counter = 0),
      test: (state.test = ''),
    }));
  };

  onToggleStudy = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, study: !item.study };
        }
        return item;
      }),
    }));
  };

  deleteWord = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      let before = data.slice(0, index);
      let after = data.slice(index + 1);
      let newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  };

  addWord = (word, translate, study) => {
    const newWord = {
      word: word,
      translate: translate,
      know: true,
      id: this.maxId++,
      write: '',
      study: study,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newWord];
      return {
        data: newArr,
      };
    });
  };

  // filterWords = (items, filter) => {
  //   switch (filter) {
  //     case 'study':
  //       return items.filter((item) => item.study);
  //     default:
  //       return items;
  //   }
  // };

  filterWords = (items, filter) => {
    switch (filter) {
      case 'study':
        return items.filter((item) => item.study);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, test, counter, filter } = this.state;
    const words = this.state.data.length;
    const wordsNoKnow = this.state.data.filter((item) => !item.know).length;

    // console.log(words);
    // console.log(wordsNoKnow);

    const visibleData = this.filterWords(data, filter);
    console.log(visibleData);
    // console.log(`${this.state.counter} Check`);
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={visibleData}
                onToggleStudy={this.onToggleStudy}
                addWord={this.addWord}
                deleteWord={this.deleteWord}
                filter={filter}
                onFilterSelect={this.onFilterSelect}
              />
            }
          />
          <Route
            path="/test"
            element={
              <Test
                data={visibleData}
                onChange={this.onChange}
                test={test}
                onCheck={this.onCheck}
                counter={counter}
                onReturn={this.onReturn}
                filter={filter}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
