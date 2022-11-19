import './filter-word.scss';

const WordsFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все слова' },
    { name: 'study', label: 'Изучать' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });
  return <div className="button-group-filter">{buttons}</div>;
};

export default WordsFilter;
