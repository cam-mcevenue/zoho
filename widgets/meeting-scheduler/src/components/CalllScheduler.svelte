<script>
  import { onMount } from "svelte";

  // Props

  export let name;
  export let email;
  export let guests = [];
  export let calLink = "aimeefairweatherco";

  let theme = "light";

  onMount(() => {
    Cal("inline", {
      elementOrSelector: "#Cal", // You can also provide an element directly
      calLink, // The link that you want to embed. It would open https://cal.com/jane in embed
      config: {
        name, // Prefill Name
        email, // Prefill Email
        guests, // Prefill Guests
        theme, // "dark" or "light" theme
      },
    });
  });
</script>

<div id="Cal" />
