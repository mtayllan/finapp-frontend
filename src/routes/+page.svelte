<script lang="ts">
  export let data;
</script>

Welcome {data?.currentUser?.email}

<form method="post" action="/logout">
  <button type="submit">logout</button>
</form>
