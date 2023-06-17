<script lang="ts">
  import type { PageData } from './$types';
  import { toMoney } from '$lib/formatters';

  export let data: PageData;
</script>

<h1 class="text-3xl">Accounts</h1>

<div class="flex flex-wrap w-full mt-8 gap-4">
  {#each data.accounts as account}
    <div class="card min-w-[30%] bg-neutral shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{account.name}</h2>
        <p class="text-lg">{toMoney(account.current_balance)}</p>
        <div class="card-actions justify-end">
          <a href="accounts/{account.id}/edit" class="btn btn-primary">Edit</a>
        </div>
      </div>
    </div>
  {/each}
  <a href="accounts/create" class="btn btn-primary">Create New Account</a>
</div>
