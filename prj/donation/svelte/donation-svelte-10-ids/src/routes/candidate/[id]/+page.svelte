<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import CandidateDonations from "$lib/ui/CandidateDonations.svelte";
  import { subTitle } from "$lib/runes.svelte";

  let { data }: any = $props();
  subTitle.text = `Donation to Date for ${data.candidate.firstName} ${data.candidate.lastName}`;
</script>

<Card title="Donations">
  <CandidateDonations donations={data.donations} />
</Card>
