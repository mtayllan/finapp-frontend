<p class="text-3xl">Account Creation</p>
<div class="container mt-8">
  <form method="post" class="flex flex-col flex-wrap max-w-xs gap-4">
    <div class="form-control">
      <label class="label" for="name">
        <span class="label-text">Name</span>
      </label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        class="input input-bordered w-full"
        required
      />
    </div>
    <div class="form-control">
      <label class="label" for="initial_balance">
        <span class="label-text">Initial Balance</span>
      </label>
      <input
        name="initial_balance"
        id="initial_balance"
        type="number"
        placeholder="0"
        class="input input-bordered w-full"
        required
        step="0.01"
        min="0"
      />
    </div>
    <button type="submit" class="btn btn-primary w-full">Create</button>
  </form>
</div>
