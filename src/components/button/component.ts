import register from 'preact-custom-element';

import { ButtonComponent } from './component.preact';

register(ButtonComponent, 'material-button', [
  'disabled',
  'text',
  'onClick',
  'leadingIcon',
  'trailingIcon',
  'outlined',
  'raised',
  'unelevated',
  'type',
  'list',
]);

// ([a-z]+)\??: [^;]+; -> "$1",
