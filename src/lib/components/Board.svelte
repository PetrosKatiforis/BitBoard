<script>
  import Tasks from "$lib/components/Tasks.svelte"
  import BoardHeader from "$lib/components/BoardHeader.svelte"
</script>

<div class="board">
  <BoardHeader />
  <Tasks />
</div>

<style>
  .board {
    max-width: 1000px;
    margin: 0 auto;

    margin-bottom: 2em;
  }

  @media (max-width: 650px) {
    .board {
      max-width: 300px;
    }
  }
</style>
