import React from 'react';
import { Template } from '../../types';

export interface Props {
  value: string;
}

const template: Template<Props> = {
  render: (props: Props) => {
    const { value } = props;
    return (
      <div>{value}</div>
    );
  }
};

const Page: React.FC<Props> = (props: Props) => {
  return template.render(props);
}


export default Page;
