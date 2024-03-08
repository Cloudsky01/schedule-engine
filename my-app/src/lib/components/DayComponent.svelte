<script>
    export let day;
    export let rooms;
  </script>
  
  <div class="day">
    <p>{day.date.toDateString()}</p>
    <ul>
      {#each day.rooms as room}
        <li>{room.name}: {room.available ? 'Available' : 'Booked'}</li>
      {/each}
    </ul>
  </div>
  
  <style>
    .day {
      border: 1px solid #ccc;
      padding: 10px;
    }
  </style>
  