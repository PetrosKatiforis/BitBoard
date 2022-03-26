<script>
  import FaGithub from "svelte-icons/fa/FaGithub.svelte"
  import MdMenu from "svelte-icons/md/MdMenu.svelte"

  import BoardSelect from "$lib/components/BoardSelect.svelte"
  import BoardsModal from "$lib/components/Modals/Boards.svelte"

  // BoardsModal state
  let isOpen = false

  function setIsOpen(value) {
    isOpen = value
  }
</script>

<header>
  <div class="group">
    <button
      on:click={() => setIsOpen(true)}
    >
      <MdMenu />
    </button>

    <a
      class="btn"
      target="_blank"
      href="https://github.com/Petros-K/BitBoard"
    >
      <FaGithub />
    </a>
  </div>

  <BoardSelect />
</header>

<BoardsModal {isOpen} {setIsOpen} />

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 1em 0;
    gap: 1em;
  }

  .group {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  :global(header svg) {
    color: black;
  }

  button, .btn {
    width: 40px;
    height: 40px;

    padding: 0.6em;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-gray);
    border-radius: 50%;
    border: none;
  }
</style>
