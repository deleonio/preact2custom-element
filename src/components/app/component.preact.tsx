import { h, JSX } from 'preact';

import '../button/component';
import { AnyControl } from '../../models/any-control';
import { ButtonComponent } from '../button/component.preact';

export function App(): JSX.Element {
  const list = new AnyControl();
  return (
    <div>
      <ButtonComponent text="Bitte hier klicken" list={list}></ButtonComponent>
      <material-button text="Bitte hier klicken" list={list}></material-button>
    </div>
  );
}
