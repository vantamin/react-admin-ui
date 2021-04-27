import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
  CardHeader,
  IconButton,
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
  expand?: boolean;
  /**
   * The content of the component.
   */
  subheader?: React.ReactNode;
  /**
   * The content of the component.
   */
  title?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);

const Card = ({
  children,
  action,
  avatar,
  expand,
  subheader,
  title,
  ...other
}: CardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MuiCard {...other}>
      {(action || avatar || expand || subheader || title) && (
        <CardHeader
          action={
            expand ? (
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            ) : (
              action
            )
          }
          avatar={avatar}
          subheader={subheader}
          title={title}
        />
      )}
      {expand ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{children}</CardContent>
        </Collapse>
      ) : (
        <CardContent>{children}</CardContent>
      )}
    </MuiCard>
  );
};

export default Card;
