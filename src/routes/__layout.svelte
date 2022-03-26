<script>
  import Navigation from "$lib/components/Navigation.svelte"
  import "$lib/styles/globals.css"
</script>

<main>
  <Navigation />

  <slot />
</main>

<style>
  :global(main > header) {
    margin-bottom: 3.5em;
  }
</style>
