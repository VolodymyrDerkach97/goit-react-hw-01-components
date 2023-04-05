import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import { Container } from './App.styled';

import user from '../../dataFiles/user';
import data from '../../dataFiles/data';
import friends from '../../dataFiles/friends';
import transactions from '../../dataFiles/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
