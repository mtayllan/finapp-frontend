export type Account = {
  created: string;
  current_balance: number;
  icon: string;
  id: string;
  initial_balance: number;
  updated: string;
  user: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Transaction = {
  id: string;
  value: number;
  description: string;
  date: string;
  type: 'inbound' | 'outbound';
  expand: {
    account: Account;
    category: Category;
  };
};
