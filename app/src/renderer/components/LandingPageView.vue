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
					<el-col :span="6">
						<div class="feed-name">
							<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
							TechCrunch
						</div>
					</el-col>
					<el-col :span="7">
						<div class="option-controls">
							<el-button type="text"><i class="el-icon-check"></i> Mark as read</el-button>
							<el-button type="text"><i class="el-icon-star-off"></i></el-button>
							<el-button type="text"><i class="el-icon-share"></i></el-button>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<div class="article-content">
						<h2>Drain the swamp</h2>
						<p>December 24th, 2017</p>
						<p><img src="https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-495845075.jpg?w=738"></p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a suscipit est. Vestibulum sem quam, rutrum eget pellentesque non, viverra id tellus. Vivamus eget porta metus, et pharetra risus. Phasellus hendrerit quam eu dui pellentesque, sed placerat turpis blandit. Ut iaculis nisi a faucibus elementum. Integer dapibus nisl odio, id faucibus felis blandit quis. Etiam non mauris eu leo tincidunt gravida id sed velit. Cras lobortis metus massa, et condimentum turpis imperdiet non. Nullam laoreet, ex a tincidunt consectetur, neque urna aliquam nisi, aliquam cursus ipsum tortor nec eros. Donec in nisl nisi.</p>

<p>Mauris euismod ligula non ante dictum, id aliquam quam molestie. Mauris vel luctus tellus. Ut at odio molestie mi tristique lobortis sed ut purus. Etiam mauris augue, convallis vitae gravida sit amet, pretium aliquet nisl. In hac habitasse platea dictumst. Aenean tincidunt, est eu lobortis maximus, eros leo tristique lectus, vitae imperdiet justo dolor vitae augue. Aliquam nec felis sit amet magna blandit ultrices. Aenean varius eros a hendrerit porttitor. Sed purus ipsum, imperdiet quis sapien in, mollis rhoncus neque. Curabitur quis tincidunt nisl. Morbi laoreet nibh feugiat, aliquam neque et, laoreet augue. Fusce ac mauris convallis, ultricies diam at, gravida orci. Proin nec nibh rhoncus, tincidunt sem et, convallis odio.</p>

<p>Fusce mollis ex at urna molestie finibus. Nulla facilisi. Sed vel odio ac ex vehicula maximus. Quisque fringilla sem commodo pulvinar malesuada. Fusce placerat nulla id gravida posuere. Maecenas elementum quam a consequat fermentum. Donec vehicula sollicitudin lorem sed posuere.</p>

<p>Integer maximus lacus eu elementum cursus. Maecenas semper, neque nec bibendum interdum, augue metus dictum augue, non pretium libero tellus sed lacus. Fusce euismod mollis accumsan. Ut feugiat velit nec erat faucibus sodales. Maecenas varius nisi quis sem placerat auctor. Sed quis erat mattis diam lacinia feugiat sit amet ac ante. Donec mattis elit ut enim imperdiet tempor. Quisque porta, mi quis elementum blandit, lectus nisl sodales orci, ut tempus arcu massa ut nisi. Duis leo ante, laoreet vel ipsum et, tempus gravida dolor. Nunc aliquam condimentum justo id varius. Cras tempus ultrices facilisis. Sed lectus dolor, accumsan nec euismod eget, gravida at diam.</p>

<p>Cras dui dui, convallis quis facilisis ac, molestie non ex. Curabitur sed diam nisl. Vestibulum sem justo, scelerisque non ultricies vel, congue sit amet lacus. Sed lacinia vel urna vel ornare. Proin hendrerit lectus id nisl tempus scelerisque. Proin et est vestibulum, ornare risus sed, placerat massa. Duis eu velit placerat, finibus ex vitae, vehicula eros. In maximus placerat mauris sit amet molestie. Phasellus tristique justo nisl, in tristique justo aliquam id.</p>
					</div>
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
	width: 100%;
  position: fixed;
  z-index: 10;
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
.option-controls {
	min-height:100%;
	height:57px;
	line-height:57px;
	text-align: right;
padding-right: 15px;
}
.article-content {
	padding:20px;
	margin-top:57px;
}
.article-content h2 {
	font-family: 'Lato',sans-serif;
}
.article-content img {
	display:block;
	max-width:100%;
	height:auto;
}
.article-content p {
	font-family: 'Cardo',serif;
	margin-bottom: 10px;
}
</style>
