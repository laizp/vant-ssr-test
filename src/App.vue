<template>
  <div class="home">
    <van-tabs>
      <van-tab title="TAB1">
        tab1
      </van-tab>
      <van-tab title="TAB2">
        tab2
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

import { Tabs, Tab } from 'vant';
import 'vant/es/tabs/style';
import 'vant/es/tab/style';

export default {
  name: 'Home',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  setup() {

  }
};
</script>

<style>

</style>