<script lang="ts">
    import { createEventDispatcher, type EventDispatcher } from "svelte";
    
    interface RatingSelectEvents {
        "rating-select": number
    }

    export let selected: number;
    
    const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const dispatch: EventDispatcher<RatingSelectEvents> = createEventDispatcher();


    const onChange = (event: Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
        const { value: selectedOption } = event.target as HTMLInputElement;
        selected = parseInt(selectedOption);
        dispatch("rating-select", selected);
    };
    
</script>

<ul class="rating">
    {#each ratingOptions as option (option)}
      <li>
        <input type="radio" id='num{option}' name="rating" value="{option}" on:change={onChange} checked={selected===1}>
        <label for="num{option}">{option}</label>
      </li>
    {/each}
</ul>

<style>
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 30px 0;
    }
  
    .rating li {
      position: relative;
      background: #f4f4f4;
      width: 50px;
      height: 50px;
      padding: 10px;
      text-align: center;
      border-radius: 50%;
      font-size: 19px;
      border: 1px #eee solid;
      transition: 0.3s;
    }
  
    .rating li label {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  
    .rating li:hover {
      background: #ff6a95;
      color: #fff;
    }
  
    /* Make actual radio select invisible */
    [type='radio'] {
      opacity: 0;
    }
  
    /* Use the sibling select */
    [type='radio']:checked ~ label {
      background: #ff6a95;
      color: #fff;
    }
  </style>