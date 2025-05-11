<script lang="ts">
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import { loggedInUser } from "$lib/runes.svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  export let data: any;
  if (data.session) {
    loggedInUser.email = data.session.email;
    loggedInUser.name = data.session.name;
    loggedInUser.token = data.session.token;
    loggedInUser._id = data.session._id;
    if (browser) goto("/donate");
  } else {
    loggedInUser.email = "";
    loggedInUser.name = "";
    loggedInUser.token = "";
    loggedInUser._id = "";
  }
</script>

<div class="container">
  {#if loggedInUser.token}
    <Menu />
    <Heading />
  {/if}
  <slot />
</div>
