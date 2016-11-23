<template>
    <div id="app">
        <!-- navigation bar -->
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" rel="home" href="#" title="Buy Sell Rent Everyting">
                        <img class="logo" src="~assets/logo.png"> 
                    </a>
                    <router-link to="/" class="navbar-brand">Vue Tweets</router-link>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/" exact>Home</router-link></li>
                        <li><router-link to="/contact" exact>Contact</router-link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="./">Login <span class="sr-only">(current)</span></a></li>
                        <li><a href="../navbar-static-top/">Register</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <router-view class="view"></router-view>
        </div>
        
        <!-- footer bar -->
        <footer>
            <div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
                <div class="container">
                    <p>Welcome in simple apps with vue.js</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'app'
}
</script>
<style type="text/css">
.navbar-brand>img {
    height: 100%;
    width: auto;
}
footer p{
   text-align: center;
   padding-top: 15px;
}
.navbar-default .navbar-nav > li > a.active, 
.navbar-default .navbar-nav > li > a:hover.active, 
.navbar-default .navbar-nav > li > a:focus.active {
    color: #555;
    background-color: #e7e7e7;
}
</style>