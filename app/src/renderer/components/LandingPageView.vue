<template>
  <div>
		<el-row>
			<el-col :span="4">
				<el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
		      <el-submenu index="1">
		        <template slot="title">Navigator One</template>
		        <el-menu-item-group title="Group One">
		          <el-menu-item index="1-1">item one</el-menu-item>
		          <el-menu-item index="1-2">item two</el-menu-item>
		        </el-menu-item-group>
		        <el-menu-item-group title="Group Two">
		          <el-menu-item index="1-3">item three</el-menu-item>
		        </el-menu-item-group>
		        <el-submenu index="1-4">
		          <template slot="title">item four</template>
		          <el-menu-item index="1-4-1">item one</el-menu-item>
		        </el-submenu>
		      </el-submenu>
		      <el-menu-item index="2">Navigator Two</el-menu-item>
		      <el-menu-item index="3">Navigator Three</el-menu-item>
		    </el-menu>
			</el-col>
		</el-row>
  </div>
</template>

<script>
import SideNav from './LandingPageView/SideNav';
export default {
  components: {
    SideNav,
  },
  name: 'landing-page',
};
</script>

<style scoped>
.el-menu {
	border-radius:0px;
  min-height: 100vh;
}
</style>
