let urls = {
  demo: {
    // Get demo
    getRequestDemo: {
      url () {
        return `/getRequestDemoUrl`
      },
      regular: /\/getRequestDemoUrl/,
      method: 'get'
    },
    // Post demo
    postRequestDemo: {
      url () {
        return '/postRequestDemoUrl'
      },
      regular: /\/getRequestDemoUrl/,
      method: 'post'
    }
  }
}

export default urls
