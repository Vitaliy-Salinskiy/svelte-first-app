<script lang="ts">
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  
  import { FeedbackStore } from "../stores/feedbacksStore";

  import type { IFeedback, IFeedbackStore } from "../interfaces";

  let text: string = "";
  let btnDisabled: boolean = true;
  let rating: number = 10;
  let min: number = 10;
  let message: string | null = null;

  const handleInput = () => {
    if(text.trim().length  <= min){
      message = `Text must be at least ${min} characters long`;
      btnDisabled = true;
    } else {
      message = null
      btnDisabled = false;
    }
  }

  const handleSelect = (event: CustomEvent<number>) => rating = event.detail;

  const handleSubmit = () => {
    if(text.trim().length >= min){
      const newFeedback: IFeedback = { 
        id: parseInt(`${new Date().getTime()}${(Math.random() * 10000).toFixed()}`),
        text, 
        rating
      };

      FeedbackStore.update((currentFeedbacks: IFeedbackStore) => {
        return { feedbacks: [...currentFeedbacks.feedbacks, newFeedback] };
      });

      text = "";
      rating = 10;
    } 
  }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect selected={rating} on:rating-select={handleSelect}/>
        <div class="input-group">
          <input type="text" bind:value={text} on:input={handleInput} placeholder="Tell us something that keeps you coming back">
          <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
          <div class="message">
           {message}
          </div>
        {/if}
    </form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
  
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
  
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
  
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
  
    input:focus {
      outline: none;
    }
  
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>