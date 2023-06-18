<script lang="ts">
  import type { PageData } from './$types';
  import { toMoney, formatDate } from '$lib/formatters';

  export let data: PageData;
</script>

<h1 class="text-3xl">Transactions</h1>

<table class="table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Description</th>
      <th>Value</th>
      <th>Date</th>
      <th>Account</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {#each data.transactions as transaction}
      <tr>
        <td>{transaction.expand.category.name}</td>
        <td>{transaction.description}</td>
        <td>{toMoney(transaction.value)}</td>
        <td>{formatDate(transaction.date)}</td>
        <td>{transaction.expand.account.name}</td>
        <td>{transaction.type}</td>
      </tr>
    {/each}
  </tbody>
</table>
