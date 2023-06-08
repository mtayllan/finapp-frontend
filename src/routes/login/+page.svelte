<script lang="ts">
  export let form: { email: string; password: string; error?: string } | null;
</script>

<div class="flex items-center justify-center h-screen">
  <div class="card w-96 bg-base-200 shadow-xl">
    <div class="card-body items-center">
      <h2 class="card-title mb-8">Login</h2>
      <form method="post" class="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          class="input w-full max-w-xs"
          value={form?.email ?? ''}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          class="input w-full max-w-xs"
          value={form?.password ?? ''}
        />
        <button type="submit" class="btn btn-primary">Login</button>
        {#if form?.error}
          <p class="text-error">{form.error}</p>
        {/if}
      </form>
    </div>
  </div>
</div>
