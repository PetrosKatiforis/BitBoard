<script>
  import { boards, currentBoard } from "$lib/stores/tasks"
  import NewTask from "$lib/components/NewTask.svelte"
  import Task from "$lib/components/Task.svelte"
</script>

<div class="tasks__container">
  <NewTask />

  {#each $boards[$currentBoard] as task (task.title)}
    <Task {task} />
  {/each}
</div>

<style>
  .tasks__container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    
    margin: 0 auto;
  }

  :global(.tasks__container > *) {
    max-width: 300px;
  }
</style>
