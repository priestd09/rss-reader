<template>
	<div>
		<el-row class="articlemenu-container">
			<el-col :span="6">
				<div class="feed-name">
					<img class="favicon" src="https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.ico" height="20">
					TechCrunch
				</div>
			</el-col>
			<el-col :span="6">
				<div class="option-controls">
					<el-button type="text"><i class="el-icon-check"></i></el-button>
					<el-button type="text"><i class="el-icon-star-off"></i></el-button>
					<el-button type="text"><i class="el-icon-share"></i></el-button>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<div class="article-content">
				<h2 class="title">{{ title }}</h2>
				<p class="author">by {{ author }}<span class="separator">|</span>{{ published_date }}</p>
				<div v-html="content"></div>
			</div>
		</el-row>
	</div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      title: null,
      author: null,
      published_date: null,
      content: null,
    };
  },
  created() {
    this.getDummyContent();
  },
  methods: {
    getDummyContent() {
      const self = this;
      this.$http.get('https://mercury.postlight.com/parser?url=https://techcrunch.com/2017/02/03/fcc-performs-midnight-revocations-of-previous-leaderships-midnight-regulations/', { headers: {
        'x-api-key': 'PUkR05Ctwaf1q4QGgflluDjMjMGZve1zChtTrjYQ',
      } }).then((res) => {
        self.title = res.data.title;
        self.author = res.data.author;
        self.published_date = moment(res.data.published_date).format('LL');
        self.content = res.data.content;
      });
    },
  },
};
</script>
<style lang="scss">
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
	.favicon {
		vertical-align: middle;
		margin-right:6px;
	}
}

.option-controls {
	min-height:100%;
	height:57px;
	line-height:57px;
	text-align: right;
	padding-right: 15px;
}

.option-controls > button {
	margin-right:8px;
	font-size:16px;
	color:black;
}

.article-content {
	padding:20px 30px;
	margin-top:57px;
	.title {
		font-family: 'Lato',sans-serif;
		font-size: 1.8rem;
		margin: 15px 0 16px 0;
	}
	.author {
		font-family: 'Lato',sans-serif;
		font-size: 14px;
	}
	.separator {
		color: #cbcbcb;
		margin-right: .5rem;
		margin-left: .5rem;
	}
	img {
		display:block;
		max-width:100%;
		width: 100%;
		height:auto;
		vertical-align: middle;
		border: 0;
		margin: 0 0 10px 0;
	}
	p {
		font-family: 'Cardo',serif;
		margin-top: 1em;
		margin-bottom: 1em;
		line-height:1.5;
		font-size: 1rem;
	}
	blockquote {
		border-left: 3px solid #e1e1e1;
		padding-left: 37px;
		font-style:italic;
		color: inherit;
		font-size: inherit;
	}
	a {
		color: #1D8CE0;
		text-decoration:none;
		padding-bottom:0.5px;
		border-bottom: 1px solid #1D8CE0;
		transition: 150ms ease-out border-bottom-color, 200ms ease-out color;
	}
	a:hover {
		color: #20A0FF;
	}
}
</style>
