<script lang="ts">
  // import { onDestroy } from "svelte";
  import { fade, scale } from "svelte/transition"

  import FeedbackItem from "./FeedbackItem.svelte";
 
  import { FeedbackStore } from "../stores/feedbacksStore";

  // import type { IFeedback } from "../interfaces";

  // let feedbacks: IFeedback[] = []

  // const unsubscribe = FeedbackStore.subscribe((data) => feedbacks = data)

  // onDestroy(() => {
  //   unsubscribe();
  // })

</script>

{#each $FeedbackStore.feedbacks as feedback (feedback.id)}
 <div in:scale out:fade="{{ duration: 200 }}">
   <FeedbackItem {feedback} />
 </div>
{/each}