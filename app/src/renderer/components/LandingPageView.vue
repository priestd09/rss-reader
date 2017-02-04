<template>
	<div>
		<el-row>
			<el-col :span="4" class="sidenav-container">
				<el-menu class="side-verticalmenu" theme="dark">
					<el-menu-item index="1"><i class="el-icon-menu"></i>All</el-menu-item>
					<el-menu-item index="1"><i class="el-icon-plus"></i>Subscribe</el-menu-item>
					<el-menu-item index="2"><i class="el-icon-star-off"></i>Favourites</el-menu-item>
					<el-menu-item index="3"><i class="el-icon-setting"></i>Manage Subscription</el-menu-item>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-message"></i>Tags</template>
						<el-menu-item index="5">
							Techcrunch
							<el-button type="text" class="delete-button"><i class="el-icon-circle-cross"></i></el-button>
						</el-menu-item>
						<el-menu-item index="6">
							Techcrunch
							<el-button type="text" class="delete-button"><i class="el-icon-circle-cross"></i></el-button>
						</el-menu-item>
					</el-submenu>
					<el-menu-item-group title="Subscriptions">
						<el-menu-item index="7">
							<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
							Techcrunch
							<el-button type="text" class="delete-button"><i class="el-icon-circle-cross"></i></el-button>
						</el-menu-item>
						<el-menu-item index="8">
							<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
							Techcrunch
							<el-button type="text" class="delete-button"><i class="el-icon-circle-cross"></i></el-button>
						</el-menu-item>
      		</el-menu-item-group>
				</el-menu>
			</el-col>
			<el-col :span="8" :offset="4" class="articles-container">
				<el-row type="flex" justify="center" class="search-container">
					<el-col :span="22">
						<el-input
							placeholder="Search"
							icon="search"
							v-model="input2"
							:on-icon-click="handleIconClick">
						</el-input>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="12" :offset="12" class="articles-container">
				<el-row class="articlemenu-container">
					<el-row type="flex" class="row-bg" justify="space-between">
						  <el-col :span="6">
								<div class="feed-name">
									<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
									TechCrunch
								</div>
							</el-col>
						  <el-col :span="6"></el-col>
						  <el-col :span="6"><div class="grid-content bg-purple">sample 3</div></el-col>
					</el-row>
				</el-row>
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

<style>
.side-verticalmenu{
	padding-bottom:10px;
}
.articles-container {
	background:#f6f6f7;
	border-right:1px solid #d3d3d3;
	min-height:100vh;
	height:100%;
	overflow-x:hidden;
	position:absolute;
	top:0px;
  bottom:0;
  left:0;
}
.sidenav-container {
	background-color: #324157;
	min-height:100vh;
	height:100%;
	overflow-x:hidden;
	position:absolute;
	top:0px;
  bottom:0;
  left:0;
}
.el-menu {
	border-radius:0px;
}
.el-menu-item {
	height: 40px;
	line-height: 40px;
	font-weight: 400;
}
.el-menu-item.is-active {
	background-color:#48576a;
	color: white;
}
.el-menu-item .favicon {
	margin-right: 8px;
	position: relative;
	vertical-align: middle;
}
.el-menu-item-group__title {
	padding-bottom: 15px;
	font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;
}
.el-submenu__title {
	height:40px;
	line-height: 40px;
}
.el-menu-item .delete-button {
	position: absolute;
	top: 5px;
	right: 0.5em;
	vertical-align: middle;
}
.search-container {
	padding-top: 10px;
	padding-bottom: 10px;
	background: white;
	border-bottom: 1px solid #d3d3d3;
}
.articlemenu-container {
	height: 57px;
	background: white;
	border-bottom: 1px solid #d3d3d3;
}
.feed-name {
	padding-left:10px;
	min-height:100%;
	height:57px;
	line-height: 57px;
	font-size: 14px;
	font-family: 'Lato',sans-serif;
	color:black;
}
.feed-name .favicon {
	vertical-align: middle;
	margin-right:6px;
}
</style>
