// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Le {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
