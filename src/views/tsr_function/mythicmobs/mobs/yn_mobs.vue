<template>
  <div class="set">
    <mobs_basics @transfer="basics"></mobs_basics>
    <mobs_drops @transfer="drops"></mobs_drops>
  </div>
</template>

<script>
import mobs_basics from "./mobs_basics.vue";
import mobs_drops from "./mobs_drops.vue";
export default {
  data() {
    return {
      label1: "",
      label: {
        Type: undefined,
        Display: undefined,
        Health: undefined,
        Damage: undefined,
        Armor: undefined,
        Faction: undefined,
        Mount: undefined,
        drops: [],
        options: [],
        aigoalselectors: [],
        aitargetselectors: [],
      },
    };
  },
  components: {
    mobs_basics,
    mobs_drops,
  },
  methods: {
    basics(msg) {
      if (msg.label == "") {
        this.label1 = undefined;
      } else {
        this.label1 = msg.label;
      }
      if (msg.Type == "") {
        this.label.Type = undefined;
      } else {
        this.label.Type = msg.Type;
      }
      if (msg.Display == "") {
        this.label.Display = undefined;
      } else {
        this.label.Display = msg.Display;
      }
      if (msg.Health == "") {
        this.label.Health = undefined;
      } else {
        this.label.Health = msg.Health;
      }
      if (msg.Damage == "") {
        this.label.Damage = undefined;
      } else {
        this.label.Damage = msg.Damage;
      }
      if (msg.Armor == "") {
        this.label.Armor = undefined;
      } else {
        this.label.Armor = msg.Armor;
      }
      if (msg.Faction == "") {
        this.label.Faction = undefined;
      } else {
        this.label.Faction = msg.Faction;
      }
      if (msg.Mount == "") {
        this.label.Mount = undefined;
      } else {
        this.label.Mount = msg.Mount;
      }
      this.$store.commit("mobs_label", [this.label, this.label1]);
      this.$store.commit("mobs_all");
    },
  },
};
</script>

<style lang="less">

</style>