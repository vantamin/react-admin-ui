import React from 'react';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
  CardHeader,
} from 'components/atoms';

export interface CardProps extends Omit<MuiCardProps, 'title'> {
  /**
   * The action to display in the card header.
   */
  action?: React.ReactNode;
  /**
   * The Avatar element to display.
   */
  avatar?: React.ReactNode;
  /**
   * The content of the component.
   */
  subheader?: React.ReactNode;
  /**
   * The content of the component.
   */
  title?: React.ReactNode;
}

const Card = ({
  children,
  action,
  avatar,
  subheader,
  title,
  ...other
}: CardProps) => {
  return (
    <MuiCard {...other}>
      {title && (
        <CardHeader
          action={action}
          avatar={avatar}
          subheader={subheader}
          title={title}
        />
      )}
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
