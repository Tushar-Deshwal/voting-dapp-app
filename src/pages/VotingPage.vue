<template>
  <q-page class="q-py-xl q-px-xl">
    <!--  TABLE FOR DISPLAYING CANDIDATES  -->
    

    <q-markup-table :separator="separator">
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>MANIFESTO</th>
          <th>VOTES</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="candidate in data" :key="candidate.id">
          <td>
            {{ candidate.id }}
          </td>
          <td>
            <q-avatar>
              <img :src="candidate.image" alt="">
            </q-avatar>

          </td>
          <td>
            {{ candidate.candidate }}
          </td>
          <td v-html="candidate.manifesto"></td>
          <td>
            {{ candidate.votes }}
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <!-- VOTING BALLOT -->
    <div class="row q-pa-md">
      <div class="col-auto">
        <h5>Select Your Preferred Candidate:</h5>
      </div>
      <div class="col">
        <div class="q-pa-md">
          <q-btn-dropdown
            color="orange"
            label="Cast Your Vote"
            class="q-mt-md q-pa-md"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick('1')">
                <q-item-section>
                  <q-item-label>Apaar Seth</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick('2')">
                <q-item-section>
                  <q-item-label>Tushar Deshwal</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <!-- PIE CHART OF PREVIOUS VOTES -->
    <div style="margin-top: 140px; margin-left: 60px; font-weight: bold">
      <h5>LIVE RESULTS:</h5>
    </div>
    <div style="margin-top: -45px">
      <HighChartsPieChart :data="chartdata" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import HighChartsPieChart from "components/HighChartsPieChart.vue";

const separator = "vertical";

const pagination = {
  page: 1,
  rowsPerPage: 2,
};

const columns = [
  {
    style: "max-width:200px",
  },
  { name: "id", label: "ID", field: "id", align: "center" },
  {
    name: "candidate",
    label: "Candidate",
    field: "candidate",
    align: "center",
  },
  {
    name: "manifesto",
    label: "Manifesto",
    field: "manifesto",
    align: "center",
  },
  { name: "votes", label: "Votes", field: "votes", align: "center" },
];

const data = [
  {
    id: "1",
    image: "https://picsum.photos/seed/1/64/64",
    candidate: "Apaar Seth",
    manifesto: "1.Field Trips To IT Offices <br> 2.Workshops Dedicated To Placement",
    votes: "2",
  },
  {
    id: "2",
    image: "https://picsum.photos/seed/2/64/64",
    candidate: "Tushar Deshwal",
    manifesto: "1. Better Co-ordination With Placement Office <br> 2. Deadline Extensions",
    votes: "1",
  },
];

export default defineComponent({
  name: "VotingPage",
  components: {
    HighChartsPieChart,
  },

  setup() {
    const selectedCandidate = ref(null);

    // const onItemClick = function () {
    //   console.log(selectedCandidate.value);
    // };

    const onItemClick = function (id) {
      console.log(id)
    };

    let chartdata = [
      {
        name: "Tushar Deshwal",
        y: 1,
        sliced: true,
        selected: true,
      },
      {
        name: "Apaar Seth",
        y: 2,
      },
    ];

    return {
      columns,
      data,
      pagination,
      separator,
      onItemClick,
      selectedCandidate,
      chartdata,
    };
  },
});
</script>
