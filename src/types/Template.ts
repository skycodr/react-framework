import React from 'react';

export interface Template<P extends {}> {
  render(props: P): React.ReactElement;
}