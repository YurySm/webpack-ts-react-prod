type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';

export type AnchorTo = `${Placement}` | `${Placement} ${Align}`;