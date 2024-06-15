<script lang="ts">
   import { FeedbackStore } from "../stores/feedbacksStore";

   $: count = $FeedbackStore.feedbacks.length;
   $: avgRating = $FeedbackStore.feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) / count || 0;
</script>

<div class="feedback-stats">
    <h2>{count} Reviews</h2>
    <h2>Rating Average: {avgRating.toFixed(1)}</h2>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>