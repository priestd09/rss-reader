<template>
	<div>
		<el-col :span="4" class="sidenav-container">
			<el-row class="feedadd">
				<el-col :span="12">
					<el-button type="text" @click="openFeedDialog"><i class="el-icon-plus"></i> Subscribe</el-button>
				</el-col>
			</el-row>
			<el-menu class="side-verticalmenu" theme="dark">
				<el-menu-item index="1"><i class="el-icon-menu"></i>All</el-menu-item>
				<el-menu-item index="2"><i class="el-icon-star-off"></i>Favourites</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>Manage Subscription</el-menu-item>
				<el-submenu index="4">
					<template slot="title"><img src="./assets/tag@3x.png">Tags</template>
					<el-menu-item index="5">
						Techcrunch
						<p class="delete-button">10</p>
					</el-menu-item>
					<el-menu-item index="6">
						Techcrunch
						<p class="delete-button">10</p>
					</el-menu-item>
				</el-submenu>
				<el-menu-item-group title="Subscriptions">
					<el-menu-item index="7">
						<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
						Techcrunch
						<p class="delete-button">10</p>
					</el-menu-item>
				</el-menu-item-group>
			</el-menu>
		</el-col>
		<el-dialog title="Subscribe to feed" v-model="addFeedDialog" size="small">
			<el-row>
			<el-col :span="22">
				<p>Type or copy/paste link to website you want to subscribe to (It could b URL to entire site, or direct link to RSS file).</p>
			</el-col>
		</el-row>
			<el-form :model="form">
					<el-form-item label="Website or Feed Url">
						<el-input placeholder="Put link here" v-model="url" auto-complete="off"></el-input>
					</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addFeedDialog = false">Cancel</el-button>
				<el-button type="primary" @click="addFeedDialog = false">Confirm</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
  data() {
    return {
      form: null,
      url: null,
      addFeedDialog: false,
      formWidth: '120px',
    };
  },
  methods: {
    openFeedDialog() {
      this.addFeedDialog = true;
    },
    addFeed() {
    },
  },
};
</script>

<style lang="scss">

.side-verticalmenu
{
	padding-bottom:10px;
}

.feedadd {
	height: 45px;
	padding-left:18px;
	padding-top:10px;
	.el-icon-plus {
		margin-right: 5px;
	}
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
.el-submenu__title img {
	vertical-align: middle;
	margin-right: 10px;
	width: 15px;
}
.el-submenu .el-menu-item {
	height:40px;
	line-height: 40px;
}
.el-menu-item .delete-button {
	position: absolute;
	top: 1px;
	right: 1em;
	font-size:12px;
	vertical-align: middle;
	color:#BFCBD8;
}
.el-menu-item .delete-button:hover {
	color:#8492A6;
}
</style>
