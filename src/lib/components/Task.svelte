<script>
  import { scale } from "svelte/transition"
  import EditTask from "$lib/components/Modals/EditTask.svelte"

  export let task
  
  // Edit task modal state
  let isOpen = false

  function setIsOpen(value) {
    isOpen = value
  }
</script>

<div 
  on:click={() => setIsOpen(true)}

  in:scale={{ delay: 500 }}
  out:scale={{ duration: 500 }}
>
  <h2>{ task.title }</h2>
  <p>{ task.details }</p>
</div>

<EditTask {task} {isOpen} {setIsOpen} />

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
