import classNames from 'classnames';
import { Component, createRef, h, RefObject } from 'preact';

import { MDCRipple } from '@material/ripple';
import { AnyControl } from '../../models/any-control';
import { JSX } from 'preact';

interface Props {
  disabled?: boolean;
  text: string;
  onClick: Function;
  leadingIcon?: RefObject<any>;
  trailingIcon?: RefObject<any>;
  outlined?: boolean;
  raised?: boolean;
  unelevated?: boolean;
  type?: string;
  list?: AnyControl;
}

export class ButtonComponent extends Component<Props> {
  private ref = createRef();

  public componentDidMount() {
    const element: any = new MDCRipple(this.ref.current);
    element.listen('MDCRipple:input', () => console.log(`Value input to ${element.value}`));
    element.listen('MDCRipple:change', () => console.log(`Value changed to ${element.value}`));
  }

  public render(props: Props): JSX.Element {
    return (
      <div style="border: 1px dashed; margin: 1em">
        <button
          className={classNames(
            'mdc-button',
            { 'mdc-button--outlined ': props.outlined !== undefined },
            { 'mdc-button--raised': props.raised !== undefined },
            { 'mdc-button--unelevated': props.unelevated !== undefined }
          )}
          onClick={props.onClick}
          ref={this.ref}
          disabled={props.disabled !== undefined}
          type={props.type}
        >
          {props.leadingIcon}
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">{props.text}</span>
          {props.trailingIcon}
        </button>
        <pre>{JSON.stringify(props.list)}</pre>
      </div>
    );
  }
}
