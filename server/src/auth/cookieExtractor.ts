export const cookieExtractor = req => {
  // tslint:disable-next-line:no-console
  console.log('got here', req.cookies);
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.ACCESS_TOKEN;
  }
  return token;
};
