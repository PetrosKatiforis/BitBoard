<script>
  import { boards, currentBoard } from "$lib/stores/tasks"

  $: totalTasks = $boards[$currentBoard].length

  // Formatting the date into an English string
  let date = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  })
</script>

<div class="board__header">
  <h1 class="board__name">{ $currentBoard }</h1>

  <div class="board__subtitle">
    <span>{ date }</span>
    <span class="tasks__count">
      {#if totalTasks > 0}
        { totalTasks } Ongoing Tasks

      {:else}
        All tasks are completed!
      {/if}
    </span>
  </div>
</div>

<style>
  h1 {
    font-size: 1.7rem;
  }

  .board__header {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 4em;
  }

  .board__subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7em;
    margin-top: 0.5em;
  }

  .tasks__count {
    padding: 0.5em 1em;
    background: var(--color-primary);
    color: white;

    font-size: 0.65rem;
    font-weight: bold;
    border-radius: 5px;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 1.5rem; 
    }

    .board__header {
      text-align: left;
    }

    .board__subtitle {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
