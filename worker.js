// 301 www. and http:// to the canonical https://shadikibaraat.com, then serve static assets.
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.shadikibaraat.com' || url.protocol === 'http:') {
      url.hostname = 'shadikibaraat.com';
      url.protocol = 'https:';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
