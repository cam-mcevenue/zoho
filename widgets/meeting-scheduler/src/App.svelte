<script>
  import { onMount } from "svelte";
  import "./app.css";
  import Tester from "../../../shared/Tester.svelte";

  onMount(() => {
    ZOHO.embeddedApp.init();
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <script
    src="https://live.zwidgets.com/js-sdk/1.1/ZohoEmbededAppSDK.min.js"
  ></script>
</svelte:head>

<h1>Svelte + Tailwind CSS + Zoho SDK Skeleton</h1>
<Tester />
