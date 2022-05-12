import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

type ExploreTabParamList = {
  ExploreStack: NavigatorScreenParams<ExploreStackParamList>;
  PortfolioStack: NavigatorScreenParams<PortfolioStackParamList>;
  AccountStack: NavigatorScreenParams<AccountStackParamList>;
};

type ExploreTabScreenProps<T extends keyof ExploreTabParamList> =
  BottomTabScreenProps<ExploreTabParamList, T>;

type ExploreStackParamList = {
  Explore: undefined;
};

type ExploreStackScreenProps<T extends keyof ExploreStackParamList> =
  StackScreenProps<ExploreStackParamList, T>;

type PortfolioStackParamList = {
  Portfolio: undefined;
};

type PortfolioStackScreenProps<T extends keyof PortfolioStackParamList> =
  StackScreenProps<PortfolioStackParamList, T>;

type AccountStackParamList = {
  Account: undefined;
};

type AccountStackScreenProps<T extends keyof AccountStackParamList> =
  StackScreenProps<AccountStackParamList, T>;

export type {
  ExploreTabParamList,
  ExploreTabScreenProps,
  ExploreStackParamList,
  ExploreStackScreenProps,
  PortfolioStackParamList,
  PortfolioStackScreenProps,
  AccountStackParamList,
  AccountStackScreenProps,
};
