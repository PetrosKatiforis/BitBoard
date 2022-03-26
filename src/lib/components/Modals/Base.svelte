<script>
  import { scale, fade } from "svelte/transition"

  export let isOpen, setIsOpen
</script>

{#if isOpen}
  <div 
    class="modal__container"

    transition:fade={{ duration: 300 }}
    on:click={() => setIsOpen(false)}
  >
    <div
      class="modal"
      transition:scale={{ duration: 500 }}
      on:click|stopPropagation
    >
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal__container {
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    height: 100vh;
    max-width: 100vw;
    width: 100vw;
    top: 0;
    left: 0;

    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: white;
    border-radius: 5px;
    width: 340px;
    padding: 0.9em;
  }

  :global(.modal p) {
    font-size: 0.9rem;
  }
</style>
