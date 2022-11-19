import Word from '../word/word';

import './list-word.scss';

const ListWord = ({ data, onToggleStudy, deleteWord }) => {
  console.log(data);
  const words = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Word
        key={id}
        {...itemProps}
        onToggleStudy={() => onToggleStudy(id)}
        deleteWord={() => deleteWord(id)}
      />
    );
  });

  return <ul className="list-word">{words}</ul>;
};

export default ListWord;
