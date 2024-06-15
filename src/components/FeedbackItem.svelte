<script lang="ts">
    import Card from "./Card.svelte";

    import { FeedbackStore } from "../stores/feedbacksStore";

    import type { IFeedback, IFeedbackStore } from "../interfaces";
    
    export let feedback: IFeedback; 

    const handleDelete = (itemId: number) => {
     FeedbackStore.update((currentFeedback: IFeedbackStore) => {
      return { feedbacks: currentFeedback.feedbacks.filter((feedback) => feedback.id !== itemId) };
     }) 
    };
</script>

<Card>
  <div class="num-display">
    {feedback.rating}
  </div>
  <button class="close" on:click={() => handleDelete(feedback.id)}>X</button>
  <p class="text-display">
    {feedback.text}
  </p>
</Card>

<style>
    .num-display {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    }
  
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>