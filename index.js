const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')

const express = require('express')
const app = express()

const adminJs = new AdminJS({
  databases: [],
  rootPath: '/admin',
  dashboard: {
    component: AdminJS.bundle('./my-dashboard-component')
  },
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))