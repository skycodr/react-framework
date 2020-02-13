import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState, Actions } from '../../redux';

import { Template } from '../../types';

import Page from '../page/Page';

// Define props interface
interface Props {
  hClick?: (v: string) => void;
  value: string;
}

// Define template
const template: Template<Props> = {
  render: (props: Props) => {
    const { value, hClick } = props;
    return (
      <div>
        Selected: {value}
        <button onClick={() => hClick && hClick('5')}>one</button>
        <button onClick={() => hClick && hClick('two')}>two</button>
        <Page value={value} />
      </div>
    );

  }
}


// Define logic
const App: React.FC = () => {
  const value: string = useSelector((state: ApplicationState) => state.application.currentPage);
  const dispatch: Dispatch = useDispatch();

  const hClick = (v: string): void => {
    dispatch(Actions.navigateTo(v));
  };

  const props: Props = {
    value,
    hClick,
  };

  return template.render(props);
}

export default App;
