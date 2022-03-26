<script>
  import { boards, currentBoard } from "$lib/stores/tasks"

  let selected

  function selectBoard() {
    currentBoard.set(selected)
  }

  currentBoard.subscribe(value => {
    selected = value
  })
</script>

<select bind:value={selected} on:change={selectBoard}>
  {#each Object.keys($boards) as board}
    <option value={board}>
      { board }
    </option>
  {/each}
</select>
