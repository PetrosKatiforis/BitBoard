<script>
  import { boards, currentBoard } from "$lib/stores/tasks"
  import { scale } from "svelte/transition"

  export let task

  // Delete the current task
  function deleteTask() {
    let newTasks = $boards[$currentBoard]
      .filter(item => item.title !== task.title)

    boards.update(data => ({
      ...data,
      [$currentBoard]: newTasks
    }))
  }
</script>

<div 
  on:click={deleteTask}

  in:scale={{ delay: 500 }}
  out:scale={{ duration: 500 }}
>
  <h2>{ task.title }</h2>
  <p>{ task.details }</p>
</div>

<style>
  div {
    background: white;
    padding: 1em;

    border-radius: 8px;
    cursor: pointer;

    transition: transform 200ms;
  }

  div:hover {
    transform: scale(103%);
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 0.6em;
  }

  p {
    font-size: 0.9rem;
  }
</style>
