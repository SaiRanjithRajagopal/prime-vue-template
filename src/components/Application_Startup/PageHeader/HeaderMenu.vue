<template>
  <div class="grid p-fluid">
    <div class="col-12">
      <Menubar :model="nestedMenuitems"></Menubar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nestedMenuitems: [
        {
          label: "Customers",
          icon: "pi pi-fw pi-table",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus",
              items: [
                {
                  label: "Customer",
                  icon: "pi pi-fw pi-plus",
                  to: "/",
                },
                {
                  label: "Duplicate",
                  icon: "pi pi-fw pi-copy",
                },
              ],
            },
            {
              label: "Edit",
              icon: "pi pi-fw pi-user-edit",
            },
          ],
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Settings",
              icon: "pi pi-fw pi-cog",
            },
            {
              label: "Billing",
              icon: "pi pi-fw pi-file",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    onContextRightClick(event) {
      this.$refs.contextMenu.show(event);
    },
  },
};
</script>
