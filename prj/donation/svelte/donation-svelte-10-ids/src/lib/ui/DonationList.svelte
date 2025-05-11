<script lang="ts">
  import { currentDonations } from "$lib/runes.svelte";
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Amount</th>
      <th>Method</th>
      <th>Candidate</th>
      <th>Donor</th>
    </tr>
  </thead>
  <tbody>
    {#each currentDonations.donations as donation}
      <tr>
        <td>
          {donation.amount}
        </td>
        <td>
          {donation.method}
        </td>
        <td>
          {#if typeof donation.candidate !== "string"}
            <a href={`/candidate/${donation.candidate._id}`}>{donation.candidate.lastName}, {donation.candidate.firstName}</a>
          {/if}
        </td>
        <td>
          {#if typeof donation.donor !== "string"}
            {donation.donor.lastName}, {donation.donor.firstName}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
