import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={
                selectedGood === item ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood !== item ? (
                  <button
                    onClick={() => setSelectedGood(item)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGood('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="
                    button
                    is-info
                    "
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
