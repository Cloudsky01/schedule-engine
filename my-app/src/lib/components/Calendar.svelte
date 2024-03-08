<script>
    import { onMount } from 'svelte';
    import DayComponent from './DayComponent.svelte';
  
    let days = [
        {
            date: new Date(),
            rooms: [
            { name: 'Room 1', available: true },
            { name: 'Room 2', available: false },
            { name: 'Room 3', available: true }
            ]
        }
    ];
    let rooms = ['Room 1', 'Room 2', 'Room 3'];
  
    // Simulate fetching or generating days for the calendar
    onMount(() => {
      const today = new Date();
      const numDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      days = Array.from({ length: numDays }, (_, i) => ({
        date: new Date(today.getFullYear(), today.getMonth(), i + 1),
        rooms: rooms.map(room => ({ name: room, available: Math.random() > 0.5 }))
      }));
    });
  </script>
  
  <div class="calendar">
    {#each days as day}
      <DayComponent {day} {rooms} />
    {/each}
  </div>
  
  <style>
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
    }
  </style>
  