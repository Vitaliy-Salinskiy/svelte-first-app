<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">
  <h1>Hello, Svelte</h1>
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>