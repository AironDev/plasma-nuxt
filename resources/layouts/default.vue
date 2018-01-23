<template>
  <div class="layout-default">
    <Row class="layout-row" type="flex">
      <i-col :span="3" class="sidebar">
        <div class="sidebar-header"></div>
        <div class="sidebar-content">
          <div class="layout-logo-left">
            <div class="logo-sidebar"></div>
          </div>
          <Menu active-name="1" theme="dark" width="auto">
            <MenuItem name="1">
              <nuxt-link :to="{ name: 'index' }">
                <Icon type="android-globe" :size="16"></Icon>
                <span class="layout-text">Home</span>
              </nuxt-link>
            </MenuItem>
            <MenuItem name="2">
              <nuxt-link :to="{ name: 'posts' }">
                <Icon type="android-globe" :size="16"></Icon>
                <span class="layout-text">Posts</span>
              </nuxt-link>
            </MenuItem>
            <MenuItem name="3">
              <nuxt-link :to="{ name: 'about' }">
                <Icon type="android-globe" :size="16"></Icon>
                <span class="layout-text">Rendering</span>
              </nuxt-link>
            </MenuItem>
          </Menu>
        </div>
      </i-col>
      <i-col :span="21" class="topbar">
        <div class="topbar-header">
          <div class="topbar-right">
            <div class="username" v-if="$store.state.auth">
              <div>Username: {{ $store.state.auth.user.username }}</div>
            </div>
            <div class="user-box">
              <Icon type="search" size="28"></Icon>
              <Icon type="eye" size="28"></Icon>
              <Icon type="ios-bell" size="28"></Icon>
              <Dropdown placement="bottom-end" class="avatar" v-if="$store.state.auth">
                <a href="javascript:void(0)">
                  <Avatar shape="square" icon="person"/>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>Messages</DropdownItem>
                  <DropdownItem>
                    <nuxt-link :to="{ name: 'account-logout' }">Logout</nuxt-link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <nuxt-link :to="{ name: 'account-login' }" v-else>
                <Icon type="person" size="28"></Icon>
              </nuxt-link>
            </div>
          </div>
          <div class="topbar-bottom">
            <div class="topbar-leftcorner"></div>
          </div>
        </div>
        <div class="main-content">
          <div class="main-content-inner">
            <!-- Content will be placed here -->
            <nuxt/>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'default-layout',
  };
</script>
